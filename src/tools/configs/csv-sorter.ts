import type { ToolConfig } from '../types'

export const csvSorterTool: ToolConfig = {
  slug: 'csv-sorter',
  name: 'CSV Sorter',
  description: 'Sort your CSV rows by a selected column.',
  category: 'csv',

  input: [
    {
      kind: 'file',
      accept: '.csv',
    },
    {
      kind: 'text',
      placeholder: 'Ejemplo: age',
    },
  ],

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Sort CSV by Column Online',
    description: 'Upload a CSV file and sort rows by any column.',
  },

  processorKey: 'csvSorter',
}
