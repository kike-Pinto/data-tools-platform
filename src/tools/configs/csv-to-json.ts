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
  description:
    'Convert CSV files to JSON online and transform spreadsheet data into structured JSON for apps, APIs, scripts, and automation workflows.',
  category: 'csv',

  input: {
    kind: 'file',
    accept: '.csv,text/csv',
  },

  output: {
    kind: 'text',
  },

  seo: {
    title: 'CSV to JSON Converter Online',
    description:
      'Convert CSV to JSON online for free. Transform CSV files into structured JSON for apps, APIs, scripts, integrations, and automation workflows.',
  },

  processorKey: 'csvToJson',
}
