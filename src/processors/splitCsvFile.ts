// Version simple: Partir el CSV en dos mitades

import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const splitCsvFileProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const parsed = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
  })

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  const rows = parsed.data
  const midpoint = Math.ceil(rows.length / 2)
  const firstHalf = rows.slice(0, midpoint)

  const csv = Papa.unparse(firstHalf)

  return {
    kind: 'download',
    title: 'Split CSV (Part 1)',
    filename: 'split-part-1.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csv,
  }
}
