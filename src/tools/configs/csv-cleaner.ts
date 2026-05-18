import type { ToolConfig } from '@/tools/types'

export const csvCleanerTool: ToolConfig = {
  slug: 'csv-cleaner',
  name: 'CSV Cleaner',
  description:
    'Clean CSV files by removing empty rows and preparing data for imports, reports, and automation workflows.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },

  output: {
    kind: 'download',
  },

  seo: {
    title: 'CSV Cleaner - Clean CSV Files Online',
    description:
      'Clean CSV files online by removing empty rows and preparing structured data for imports, reporting, analysis, and automation workflows.',
  },

  processorKey: 'csvCleaner',
}
