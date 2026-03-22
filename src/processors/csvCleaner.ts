// Crear Processor

import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const csvCleanerProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const parsed = Papa.parse<string[]>(text, {
    skipEmptyLines: true,
  })

  console.log(parsed.data[0])
  console.log(parsed.data)

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  const cleanedCsv = Papa.unparse(parsed.data)

  return {
    kind: 'download',
    title: 'Clean CSV',
    filename: 'cleaned.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: cleanedCsv,
  }
}
