import type { ToolConfig } from '../types'

export const excelCleanerTool: ToolConfig = {
  slug: 'excel-cleaner',

  name: 'Excel Cleaner',

  description:
    'Clean Excel files by removing empty rows, fixing formatting, and preparing datasets.',

  category: 'excel',

  input: {
    kind: 'file',
    accept: '.xlsx,.xls',
  },

  output: {
    kind: 'download',
  },

  seo: {
    title: 'Excel Cleaner - Clean Messy Excel Files Online',

    description:
      'Clean messy Excel files by removing empty rows and fixing formatting before exporting or analyzing data.',
  },

  processorKey: 'excelCleaner',
}
