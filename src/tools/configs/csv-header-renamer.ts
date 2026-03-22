import type { ToolConfig } from '../types'

export const csvHeaderRenamerTool: ToolConfig = {
  slug: 'csv-header-renamer',
  name: 'CSV Header Renamer',
  description: 'Rename one or more CSV headers using a simple mapping format.',
  category: 'csv',

  input: [
    {
      kind: 'file',
      accept: '.csv',
    },
    {
      kind: 'text',
      placeholder: 'Ejemplo: name=full_name,country=location',
    },
  ],

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Rename CSV Headers Online',
    description:
      'Upload a CSV file and rename headers instantly using a simple format.',
  },

  processorKey: 'csvHeaderRenamer',
}
