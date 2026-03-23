import { fileToText } from '@/lib/file'
import { getHeaders, parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvColumnMergerProcessor: ToolProcessor = async ({
  file,
  text,
}) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  if (!text) {
    throw new Error(
      'Debes indicar el formato. Ejemplo: first_name,last_name=full_name',
    )
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

  const [leftPart, rightPart] = text.split('=')

  if (!leftPart || !rightPart) {
    throw new Error(
      'Formato inválido. Usa este formato: columna1,columna2=nuevaColumna',
    )
  }

  const columnsToMerge = leftPart
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

  const newColumn = rightPart.trim()

  if (columnsToMerge.length !== 2) {
    throw new Error('Debes indicar exactamente 2 columnas para unir.')
  }

  if (!newColumn) {
    throw new Error('Debes indicar un nombre válido para la nueva columna.')
  }

  const [firstColumn, secondColumn] = columnsToMerge

  if (!headers.includes(firstColumn)) {
    throw new Error(`La columna "${firstColumn}" no existe en el CSV.`)
  }

  if (!headers.includes(secondColumn)) {
    throw new Error(`La columna "${secondColumn}" no existe en el CSV.`)
  }

  if (headers.includes(newColumn)) {
    throw new Error(`La columna "${newColumn}" ya existe en el CSV.`)
  }

  const updatedRows = rows.map((row) => {
    const mergedValue = [row[firstColumn] ?? '', row[secondColumn] ?? '']
      .map((value) => value.trim())
      .filter(Boolean)
      .join(' ')

    const nextRow: Record<string, string> = {}

    headers.forEach((header) => {
      if (header === firstColumn) {
        nextRow[newColumn] = mergedValue
        return
      }

      if (header === secondColumn) {
        return
      }

      nextRow[header] = row[header] ?? ''
    })

    return nextRow
  })

  const csvOutput = rowsToCsv(updatedRows)

  return {
    kind: 'download',
    title: 'Merged Columns CSV',
    filename: 'merged-columns.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
