import type { ToolConfig } from '@/tools/types'

export const splitCsvFileTool: ToolConfig = {
  slug: 'split-csv-file',
  name: 'Split CSV File',
  description: 'Split a CSV file into smaller parts.',
  category: 'csv',
  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },
  output: {
    kind: 'download',
  },
  seo: {
    title: 'Split CSV File',
    description: 'Split a CSV file into smaller files instantly.',
  },
  processorKey: 'splitCsvFile',
}
