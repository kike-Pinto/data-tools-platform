import { fileToText } from '@/lib/file'
import { getHeaders, parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvAddColumnProcessor: ToolProcessor = async ({ file, text }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  if (!text) {
    throw new Error('Debes escribir la nueva columna. Ejemplo: status=active')
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

  const [rawColumn, ...rawValueParts] = text.split('=')

  if (!rawColumn || rawValueParts.length === 0) {
    throw new Error('Formato inválido. Usa este formato: nuevaColumna=valor')
  }

  const newColumn = rawColumn.trim()
  const newValue = rawValueParts.join('=').trim()

  if (!newColumn) {
    throw new Error('Debes indicar un nombre de columna válido.')
  }

  if (headers.includes(newColumn)) {
    throw new Error(`La columna "${newColumn}" ya existe en el CSV.`)
  }

  const updatedRows = rows.map((row) => {
    return {
      ...row,
      [newColumn]: newValue,
    }
  })

  const csvOutput = rowsToCsv(updatedRows)

  return {
    kind: 'download',
    title: 'CSV with New Column',
    filename: 'csv-with-new-column.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
