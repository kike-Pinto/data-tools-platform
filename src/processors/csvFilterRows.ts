import { fileToText } from '@/lib/file'
import { getHeaders, parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvFilterRowsProcessor: ToolProcessor = async ({ file, text }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  if (!text) {
    throw new Error('Debes escribir un filtro. Ejemplo: country=Chile')
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
    throw new Error('Formato inválido. Usa este formato: columna=valor')
  }

  const column = rawColumn.trim()
  const value = rawValueParts.join('=').trim()

  if (!column || !value) {
    throw new Error('Formato inválido. Usa este formato: columna=valor')
  }

  if (!headers.includes(column)) {
    throw new Error(`La columna "${column}" no existe en el CSV.`)
  }

  const filteredRows = rows.filter((row) => {
    const cellValue = (row[column] ?? '').trim()

    return cellValue.toLowerCase() === value.toLowerCase()
  })

  if (!filteredRows.length) {
    return {
      kind: 'text',
      title: 'No matches',
      text: 'No rows matched the filter.',
    }
  }

  const csvOutput = rowsToCsv(filteredRows)

  return {
    kind: 'download',
    title: 'Filtered CSV',
    filename: 'filtered-rows.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
