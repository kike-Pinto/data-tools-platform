import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const removeDuplicatesCsvProcessor: ToolProcessor = async ({ file }) => {
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

  const seen = new Set<string>()

  const uniqueRows = parsed.data.filter((row) => {
    const signature = JSON.stringify(row)

    if (seen.has(signature)) {
      return false
    }

    seen.add(signature)
    return true
  })

  const csv = Papa.unparse(uniqueRows)

  return {
    kind: 'download',
    title: 'Deduplicated CSV',
    filename: 'deduplicated.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csv,
  }
}
