import type { ToolConfig } from '@/tools/types'

export const csvColumnRemoverTool: ToolConfig = {
  slug: 'csv-column-remover',
  name: 'CSV Column Remover',
  description: 'Remove the last column from a CSV file.',
  category: 'csv',
  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },
  output: {
    kind: 'download',
  },
  seo: {
    title: 'CSV Column Remover',
    description: 'Remove the last column from a CSV file instantly.',
  },
  processorKey: 'csvColumnRemover',
}
