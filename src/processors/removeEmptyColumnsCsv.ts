// Logica

// CSV
// ↓
// parseCsv()
// ↓
// rows limpias
// ↓
// detectar columnas vacías
// ↓
// eliminar columnas vacías
// ↓
// rowsToCsv()
// ↓
// descargar CSV limpio

import { fileToText } from '@/lib/file'
import { parseCsv, rowsToCsv, getHeaders, isEmptyValue } from '@/lib/csvUtils'

import type { ToolProcessor } from '@/tools/types'

export const removeEmptyColumnsCsvProcessor: ToolProcessor = async ({
  file,
}) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const rows = parseCsv(text)

  if (!rows.length) {
    return {
      kind: 'text',
      title: 'No data',
      text: 'No data found in CSV.',
    }
  }

  const headers = getHeaders(rows)

  const nonEmptyHeaders = headers.filter((header) => {
    return rows.some((row) => {
      return !isEmptyValue(row[header])
    })
  })

  if (!nonEmptyHeaders.length) {
    throw new Error('Todas las columnas están vacías.')
  }

  const cleanedRows = rows.map((row) => {
    const newRow: Record<string, string> = {}

    nonEmptyHeaders.forEach((header) => {
      newRow[header] = row[header] ?? ''
    })

    return newRow
  })

  const csvOutput = rowsToCsv(cleanedRows)

  return {
    kind: 'download',
    title: 'Remove Empty Columns',
    filename: 'remove-empty-columns.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
