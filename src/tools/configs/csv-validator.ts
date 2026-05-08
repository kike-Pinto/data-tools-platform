import type { ToolConfig } from '../types'

export const csvValidatorTool: ToolConfig = {
  slug: 'csv-validator',
  name: 'CSV Validator',
  description:
    'Validate CSV structure, detect formatting issues, and identify malformed rows before importing files into systems or databases.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv',
  },

  output: {
    kind: 'text',
  },

  seo: {
    title: 'Validate CSV Files Online',
    description:
      'Upload CSV files to validate structure, detect malformed rows, and identify formatting issues before imports or automation workflows.',
  },

  processorKey: 'csvValidator',
}
