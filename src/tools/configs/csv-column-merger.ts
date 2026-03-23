import type { ToolConfig } from '../types'

export const csvColumnMergerTool: ToolConfig = {
  slug: 'csv-column-merger',
  name: 'CSV Column Merger',
  description: 'Merge two CSV columns into a new one.',
  category: 'csv',

  input: [
    {
      kind: 'file',
      accept: '.csv',
    },
    {
      kind: 'text',
      placeholder: 'Ejemplo: first_name,last_name=full_name',
    },
  ],

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Merge CSV Columns Online',
    description: 'Upload a CSV file and merge two columns into one.',
  },

  processorKey: 'csvColumnMerger',
}
