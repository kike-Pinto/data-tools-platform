import type { ToolConfig } from '../types'

export const csvAddColumnTool: ToolConfig = {
  slug: 'csv-add-column',
  name: 'CSV Add Column',
  description: 'Add a new column with the same value to all CSV rows.',
  category: 'csv',

  input: [
    {
      kind: 'file',
      accept: '.csv',
    },
    {
      kind: 'text',
      placeholder: 'Ejemplo: status=active',
    },
  ],

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Add Column to CSV Online',
    description: 'Upload a CSV file and add a new column instantly.',
  },

  processorKey: 'csvAddColumn',
}
