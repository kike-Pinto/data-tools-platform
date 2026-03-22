import type { ToolConfig } from '../types'

export const removeEmptyColumnsCsvTool: ToolConfig = {
  slug: 'remove-empty-columns-csv',

  name: 'Remove Empty Columns CSV',

  description:
    'Remove columns that contain only empty values from your CSV file.',

  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv',
  },

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Remove Empty Columns from CSV Online',
    description: 'Upload your CSV file and remove empty columns instantly.',
  },

  processorKey: 'removeEmptyColumnsCsv',
}
