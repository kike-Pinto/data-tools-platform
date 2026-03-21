import type { ToolConfig } from '@/tools/types'

export const excelToJsonTool: ToolConfig = {
  slug: 'excel-to-json',
  name: 'Excel to JSON',
  description: 'Convert Excel files into formatted JSON.',
  category: 'excel',
  input: {
    kind: 'file',
    accept:
      '.xlsx,.xls,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  output: {
    kind: 'text',
  },
  seo: {
    title: 'Excel to JSON Converter',
    description: 'Convert Excel files to JSON instantly.',
  },
  processorKey: 'excelToJson',
}
