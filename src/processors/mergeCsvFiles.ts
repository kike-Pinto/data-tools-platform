// Crear processor merge

import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const mergeCsvFilesProcessor: ToolProcessor = async ({ files }) => {
  if (!files || files.length < 2) {
    throw new Error('Debes subir al menos 2 archivos CSV.')
  }

  const allRows: Record<string, string>[] = []

  for (const file of files) {
    const text = await fileToText(file)

    const parsed = Papa.parse<Record<string, string>>(text, {
      header: true,
      skipEmptyLines: true,
    })

    if (parsed.errors.length > 0) {
      throw new Error(`${file.name}: ${parsed.errors[0].message}`)
    }

    allRows.push(...parsed.data)
  }

  const mergedCsv = Papa.unparse(allRows)

  return {
    kind: 'download',
    title: 'Merged CSV',
    filename: 'merged.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: mergedCsv,
  }
}
