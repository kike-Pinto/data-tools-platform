import type { ToolConfig } from '../types'

export const csvValidatorTool: ToolConfig = {
  slug: 'csv-validator',
  name: 'CSV Validator',
  description:
    'Validate CSV files online, detect malformed rows, check structure, and find formatting issues before imports or automation workflows.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },

  output: {
    kind: 'text',
  },

  seo: {
    title: 'CSV Validator Online - Validate CSV Files',
    description:
      'Validate CSV files online for free. Detect malformed rows, inconsistent columns, missing headers, and formatting issues before imports, reports, or automation workflows.',
  },

  processorKey: 'csvValidator',
}
