import type { ToolConfig } from '@/tools/types'

export const excelToCsvTool: ToolConfig = {
  slug: 'excel-to-csv',
  name: 'Excel to CSV',
  description: 'Convert Excel files into CSV.',
  category: 'excel',
  input: {
    kind: 'file',
    accept:
      '.xlsx,.xls,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  output: {
    kind: 'download',
  },
  seo: {
    title: 'Excel to CSV Converter',
    description: 'Convert Excel files to CSV instantly.',
  },
  processorKey: 'excelToCsv',
}
