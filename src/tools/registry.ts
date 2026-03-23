// Paso 3

// Qué hace el registry

// Es el lugar donde se registran todas las tools.

import type { ToolConfig } from './types'
import { csvToJsonTool } from './configs/csv-to-json'
import { jsonToCsvTool } from './configs/json-to-csv'
import { csvCleanerTool } from './configs/csv-cleaner'
import { removeDuplicatesCsvTool } from './configs/remove-duplicates-csv'
import { csvToExcelTool } from './configs/csv-to-excel'
import { excelToCsvTool } from './configs/excel-to-csv'
import { excelToJsonTool } from './configs/excel-to-json'
import { mergeCsvFilesTool } from './configs/merge-csv-files'
import { splitCsvFileTool } from './configs/split-csv-file'
import { csvColumnRemoverTool } from './configs/csv-column-remover'
import { removeEmptyColumnsCsvTool } from './configs/remove-empty-columns-csv'
import { csvColumnSelectorTool } from './configs/csv-column-selector'
import { csvHeaderRenamerTool } from './configs/csv-header-renamer'
import { csvRowCounterTool } from './configs/csv-row-counter'
import { csvSorterTool } from './configs/csv-sorter'
import { csvFilterRowsTool } from './configs/csv-filter-rows'

export const toolRegistry: Record<string, ToolConfig> = {
  'csv-to-json': csvToJsonTool,
  'json-to-csv': jsonToCsvTool,
  'csv-cleaner': csvCleanerTool,
  'remove-duplicates-csv': removeDuplicatesCsvTool,
  'csv-to-excel': csvToExcelTool,
  'excel-to-csv': excelToCsvTool,
  'excel-to-json': excelToJsonTool,
  'merge-csv-files': mergeCsvFilesTool,
  'split-csv-file': splitCsvFileTool,
  'csv-column-remover': csvColumnRemoverTool,
  'remove-empty-columns-csv': removeEmptyColumnsCsvTool,
  'csv-column-selector': csvColumnSelectorTool,
  'csv-header-renamer': csvHeaderRenamerTool,
  'csv-row-counter': csvRowCounterTool,
  'csv-sorter': csvSorterTool,
  'csv-filter-rows': csvFilterRowsTool,
}

export const allTools = Object.values(toolRegistry)
