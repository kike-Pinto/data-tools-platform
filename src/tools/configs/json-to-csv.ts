import type { ToolConfig } from '@/tools/types'

export const jsonToCsvTool: ToolConfig = {
  slug: 'json-to-csv',
  name: 'JSON to CSV',
  description: 'Convert JSON arrays into CSV files.',
  category: 'json',
  input: {
    kind: 'text',
    placeholder: 'Pega aquí un array JSON de objetos...',
  },
  output: {
    kind: 'download',
  },
  seo: {
    title: 'JSON to CSV Converter',
    description: 'Convert JSON to CSV instantly in your browser.',
  },
  processorKey: 'jsonToCsv',
}
