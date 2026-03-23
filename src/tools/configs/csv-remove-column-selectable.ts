import type { ToolConfig } from '../types'

export const csvRemoveColumnSelectableTool: ToolConfig = {
  slug: 'csv-remove-column-selectable',
  name: 'CSV Remove Column',
  description: 'Remove a specific column from your CSV file.',
  category: 'csv',

  input: [
    {
      kind: 'file',
      accept: '.csv',
    },
    {
      kind: 'text',
      placeholder: 'Ejemplo: email',
    },
  ],

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Remove Column from CSV Online',
    description: 'Upload a CSV file and remove a selected column instantly.',
  },

  processorKey: 'csvRemoveColumnSelectable',
}
