// Crear Processor

import { fileToText } from '@/lib/file'
import { parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvCleanerProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)
  const rows = parseCsv(text)
  const cleanedCsv = rowsToCsv(rows)

  return {
    kind: 'download',
    title: 'Clean CSV',
    filename: 'cleaned.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: cleanedCsv,
  }
}
