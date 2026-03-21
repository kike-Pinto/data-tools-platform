// Registrar processor

import type { ToolProcessor } from '@/tools/types'
import { csvToJsonProcessor } from './csvToJson'
import { jsonToCsvProcessor } from './jsonToCsv'
import { csvCleanerProcessor } from './csvCleaner'
import { removeDuplicatesCsvProcessor } from './removeDuplicatesCsv'
import { csvToExcelProcessor } from './csvToExcel'
import { excelToCsvProcessor } from './excelToCsv'

export const processorRegistry: Record<string, ToolProcessor> = {
  csvToJson: csvToJsonProcessor,
  jsonToCsv: jsonToCsvProcessor,
  csvCleaner: csvCleanerProcessor,
  removeDuplicatesCsv: removeDuplicatesCsvProcessor,
  csvToExcel: csvToExcelProcessor,
  excelToCsv: excelToCsvProcessor,
}
