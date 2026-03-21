import Papa from 'papaparse'
import { safeJsonParse } from '@/lib/text'
import type { ToolProcessor } from '@/tools/types'

export const jsonToCsvProcessor: ToolProcessor = async ({ text }) => {
  if (!text?.trim()) {
    throw new Error('Debes pegar un JSON válido.')
  }

  const json = safeJsonParse<unknown>(text)

  if (!Array.isArray(json)) {
    throw new Error('El JSON debe ser un array de objetos.')
  }

  const csv = Papa.unparse(json as Record<string, unknown>[])

  return {
    kind: 'download',
    title: 'CSV result',
    filename: 'converted.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csv,
  }
}
