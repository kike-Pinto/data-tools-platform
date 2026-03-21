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

export const toolRegistry: Record<string, ToolConfig> = {
  'csv-to-json': csvToJsonTool,
  'json-to-csv': jsonToCsvTool,
}

export const allTools = Object.values(toolRegistry)
