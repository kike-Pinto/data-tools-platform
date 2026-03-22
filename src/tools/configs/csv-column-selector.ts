import type { ToolConfig } from '../types'

export const csvColumnSelectorTool: ToolConfig = {
  slug: 'csv-column-selector',
  name: 'CSV Column Selector',
  description:
    'Select specific columns from your CSV file and remove the rest.',
  category: 'csv',

  input: [
    {
      kind: 'file',
      accept: '.csv',
    },
    {
      kind: 'text',
      placeholder: 'Ejemplo: name,country,email',
    },
  ],

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Select Columns from CSV Online',
    description: 'Upload a CSV file and keep only the columns you need.',
  },

  processorKey: 'csvColumnSelector',
}
