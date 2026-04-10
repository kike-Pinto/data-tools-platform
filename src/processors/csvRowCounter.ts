import { fileToText } from '@/lib/file'
import { parseCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvRowCounterProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const fileText = await fileToText(file)
  const rows = parseCsv(fileText)

  if (!rows.length) {
    return {
      kind: 'text',
      title: 'CSV Row Count',
      text: 'Total rows: 0',
    }
  }

  return {
    kind: 'text',
    title: 'CSV Row Count',
    text: `Total rows: ${rows.length}`,
  }
}
