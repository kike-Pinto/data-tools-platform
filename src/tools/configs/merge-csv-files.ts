import type { ToolConfig } from '@/tools/types'

export const mergeCsvFilesTool: ToolConfig = {
  slug: 'merge-csv-files',
  name: 'Merge CSV Files',
  description: 'Merge multiple CSV files into one.',
  category: 'csv',
  input: {
    kind: 'file',
    accept: '.csv,text/csv',
    multiple: true,
  },
  output: {
    kind: 'download',
  },
  seo: {
    title: 'Merge CSV Files',
    description: 'Merge multiple CSV files into one instantly.',
  },
  processorKey: 'mergeCsvFiles',
}
