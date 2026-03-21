import type { ToolConfig } from '@/tools/types'

export const csvCleanerTool: ToolConfig = {
  slug: 'csv-cleaner',
  name: 'CSV Cleaner',
  description: 'Remove empty rows from CSV files.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },

  output: {
    kind: 'download',
  },

  seo: {
    title: 'CSV Cleaner - Remove Empty Rows',
    description: 'Clean CSV files by removing empty rows instantly.',
  },

  processorKey: 'csvCleaner',
}
