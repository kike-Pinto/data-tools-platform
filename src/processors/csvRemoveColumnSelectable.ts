import { fileToText } from '@/lib/file'
import { getHeaders, parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvRemoveColumnSelectableProcessor: ToolProcessor = async ({
  file,
  text,
}) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  if (!text) {
    throw new Error('Debes escribir la columna que quieres eliminar.')
  }

  const fileText = await fileToText(file)
  const rows = parseCsv(fileText)

  if (!rows.length) {
    return {
      kind: 'text',
      title: 'No data',
      text: 'No data found in CSV.',
    }
  }

  const headers = getHeaders(rows)
  const columnToRemove = text.trim()

  if (!columnToRemove) {
    throw new Error('Debes indicar una columna válida.')
  }

  if (!headers.includes(columnToRemove)) {
    throw new Error(`La columna "${columnToRemove}" no existe en el CSV.`)
  }

  if (headers.length === 1) {
    throw new Error('No puedes eliminar la única columna del CSV.')
  }

  const updatedRows = rows.map((row) => {
    const nextRow: Record<string, string> = {}

    headers.forEach((header) => {
      if (header !== columnToRemove) {
        nextRow[header] = row[header] ?? ''
      }
    })

    return nextRow
  })

  const csvOutput = rowsToCsv(updatedRows)

  return {
    kind: 'download',
    title: 'CSV without Selected Column',
    filename: 'csv-without-column.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
