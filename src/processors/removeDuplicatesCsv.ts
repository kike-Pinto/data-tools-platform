import { fileToText } from '@/lib/file'
import { parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const removeDuplicatesCsvProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)
  const rows = parseCsv(text)

  const seen = new Set<string>()

  const uniqueRows = rows.filter((row) => {
    const signature = JSON.stringify(row)

    if (seen.has(signature)) {
      return false
    }

    seen.add(signature)
    return true
  })

  const csv = rowsToCsv(uniqueRows)

  return {
    kind: 'download',
    title: 'Deduplicated CSV',
    filename: 'deduplicated.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csv,
  }
}
