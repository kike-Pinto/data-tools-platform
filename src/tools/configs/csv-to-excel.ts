import type { ToolConfig } from '@/tools/types'

export const csvToExcelTool: ToolConfig = {
  slug: 'csv-to-excel',
  name: 'CSV to Excel',
  description: 'Convert CSV files into Excel (.xlsx).',
  category: 'excel',

  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },

  output: {
    kind: 'download',
  },

  seo: {
    title: 'CSV to Excel Converter',
    description: 'Convert CSV files to Excel instantly.',
  },

  processorKey: 'csvToExcel',
}
