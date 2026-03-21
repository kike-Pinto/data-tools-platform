// Paso 2

// Qué hace esta config

// Esta config define:

// URL de la tool

// nombre

// descripción

// tipo de input

// tipo de output

// processor que debe ejecutarse

import type { ToolConfig } from '@/tools/types'

export const csvToJsonTool: ToolConfig = {
  slug: 'csv-to-json',
  name: 'CSV to JSON',
  description: 'Convert CSV files into formatted JSON.',
  category: 'csv',
  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },
  output: {
    kind: 'text',
  },
  seo: {
    title: 'CSV to JSON Converter',
    description: 'Convert CSV files to JSON instantly in your browser.',
  },
  processorKey: 'csvToJson',
}
