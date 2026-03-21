import type { ToolConfig } from '@/tools/types'

export const removeDuplicatesCsvTool: ToolConfig = {
  slug: 'remove-duplicates-csv',
  name: 'Remove Duplicates CSV',
  description: 'Remove duplicate rows from CSV files.',
  category: 'csv',
  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },
  output: {
    kind: 'download',
  },
  seo: {
    title: 'Remove Duplicates CSV',
    description: 'Remove duplicate rows from CSV files instantly.',
  },
  processorKey: 'removeDuplicatesCsv',
}
