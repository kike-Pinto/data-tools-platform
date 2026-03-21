import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const csvColumnRemoverProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const parsed = Papa.parse<string[]>(text, {
    skipEmptyLines: true,
  })

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  const cleanedRows = parsed.data.map((row) => row.slice(0, -1))
  const csv = Papa.unparse(cleanedRows)

  return {
    kind: 'download',
    title: 'CSV without last column',
    filename: 'column-removed.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csv,
  }
}
