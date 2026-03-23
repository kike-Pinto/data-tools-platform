import type { ToolConfig } from '../types'

export const csvFilterRowsTool: ToolConfig = {
  slug: 'csv-filter-rows',
  name: 'CSV Filter Rows',
  description: 'Filter CSV rows by a column and value.',
  category: 'csv',

  input: [
    {
      kind: 'file',
      accept: '.csv',
    },
    {
      kind: 'text',
      placeholder: 'Ejemplo: country=Chile',
    },
  ],

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Filter CSV Rows Online',
    description: 'Upload a CSV file and filter rows by column value.',
  },

  processorKey: 'csvFilterRows',
}
