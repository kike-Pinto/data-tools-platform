import type { ToolConfig } from '../types'

export const csvRowCounterTool: ToolConfig = {
  slug: 'csv-row-counter',
  name: 'CSV Row Counter',
  description: 'Count how many data rows your CSV file contains.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv',
  },

  output: {
    kind: 'text',
  },

  seo: {
    title: 'Count CSV Rows Online',
    description: 'Upload a CSV file and count its data rows instantly.',
  },

  processorKey: 'csvRowCounter',
}
