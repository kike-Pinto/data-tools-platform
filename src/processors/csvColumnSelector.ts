import { fileToText } from '@/lib/file'
import { parseCsv, rowsToCsv, getHeaders } from '@/lib/csvUtils'

import type { ToolProcessor } from '@/tools/types'

export const csvColumnSelectorProcessor: ToolProcessor = async ({
  file,
  text,
}) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  if (!text) {
    throw new Error(
      'Debes ingresar las columnas a seleccionar (ej: name,country).',
    )
  }

  // Leer archivo
  const fileText = await fileToText(file)

  // Parse CSV
  const rows = parseCsv(fileText)

  if (!rows.length) {
    return {
      kind: 'text',
      title: 'No data',
      text: 'No data found in CSV.',
    }
  }

  const headers = getHeaders(rows)

  // Columnas solicitadas
  const selectedHeaders = text
    .split(',')
    .map((h) => h.trim())
    .filter(Boolean)

  if (!selectedHeaders.length) {
    throw new Error('Debes indicar al menos una columna.')
  }

  // Validar columnas
  const invalidHeaders = selectedHeaders.filter((h) => !headers.includes(h))

  if (invalidHeaders.length > 0) {
    throw new Error(`Columnas no encontradas: ${invalidHeaders.join(', ')}`)
  }

  // Crear nuevo CSV
  const filteredRows = rows.map((row) => {
    const newRow: Record<string, string> = {}

    selectedHeaders.forEach((header) => {
      newRow[header] = row[header] ?? ''
    })

    return newRow
  })

  const csvOutput = rowsToCsv(filteredRows)

  return {
    kind: 'download',
    title: 'Selected Columns CSV',
    filename: 'selected-columns.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
