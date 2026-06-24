import type { ToolConfig } from '../types'

export const csvRowCounterTool: ToolConfig = {
  slug: 'csv-row-counter',
  name: 'CSV Row Counter',
  description:
    'Count CSV rows online and quickly measure dataset size before splitting, importing, validating, or analyzing CSV files.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },

  output: {
    kind: 'text',
  },

  seo: {
    title: 'CSV Row Counter - Count CSV Rows Online',
    description:
      'Count CSV rows online for free. Measure dataset size before imports, splitting large files, validation, reporting, or data analysis.',
  },

  processorKey: 'csvRowCounter',
}
