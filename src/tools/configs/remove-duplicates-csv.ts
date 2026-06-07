import type { ToolConfig } from '@/tools/types'

export const removeDuplicatesCsvTool: ToolConfig = {
  slug: 'remove-duplicates-csv',
  name: 'Remove Duplicates CSV',
  description:
    'Remove duplicate rows from CSV files online and prepare cleaner data for imports, reports, analysis, and automation workflows.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Remove Duplicates CSV Online',
    description:
      'Remove duplicate rows from CSV files online for free. Clean repeated records and prepare better data for imports, reports, analysis, and automation workflows.',
  },

  processorKey: 'removeDuplicatesCsv',
}
