import type { ToolConfig } from '../types'

export const csvValidatorTool: ToolConfig = {
  slug: 'csv-validator',
  name: 'CSV Validator',
  description: 'Validate the structure of your CSV file.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv',
  },

  output: {
    kind: 'text',
  },

  seo: {
    title: 'Validate CSV Online',
    description: 'Upload a CSV file and validate its structure instantly.',
  },

  processorKey: 'csvValidator',
}
