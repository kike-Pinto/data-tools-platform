// Paso 3

// Qué hace el registry

// Es el lugar donde se registran todas las tools.

// Más adelante aquí agregarás:

// json-to-csv

// csv-to-excel

// excel-to-csv

// csv-cleaner

import type { ToolConfig } from './types'
import { csvToJsonTool } from './configs/csv-to-json'
import { jsonToCsvTool } from './configs/json-to-csv'
import { csvCleanerTool } from './configs/csv-cleaner'
import { removeDuplicatesCsvTool } from './configs/remove-duplicates-csv'
import { csvToExcelTool } from './configs/csv-to-excel'
import { excelToCsvTool } from './configs/excel-to-csv'
import { excelToJsonTool } from './configs/excel-to-json'

export const toolRegistry: Record<string, ToolConfig> = {
  'csv-to-json': csvToJsonTool,
  'json-to-csv': jsonToCsvTool,
  'csv-cleaner': csvCleanerTool,
  'remove-duplicates-csv': removeDuplicatesCsvTool,
  'csv-to-excel': csvToExcelTool,
  'excel-to-csv': excelToCsvTool,
  'excel-to-json': excelToJsonTool,
}

export const allTools = Object.values(toolRegistry)
