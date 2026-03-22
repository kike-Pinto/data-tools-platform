// Registrar processor

import type { ToolProcessor } from '@/tools/types'
import { csvToJsonProcessor } from './csvToJson'
import { jsonToCsvProcessor } from './jsonToCsv'
import { csvCleanerProcessor } from './csvCleaner'
import { removeDuplicatesCsvProcessor } from './removeDuplicatesCsv'
import { csvToExcelProcessor } from './csvToExcel'
import { excelToCsvProcessor } from './excelToCsv'
import { excelToJsonProcessor } from './excelToJson'
import { mergeCsvFilesProcessor } from './mergeCsvFiles'
import { splitCsvFileProcessor } from './splitCsvFile'
import { csvColumnRemoverProcessor } from './csvColumnRemover'
import { removeEmptyColumnsCsvProcessor } from './removeEmptyColumnsCsv'
import { csvColumnSelectorProcessor } from './csvColumnSelector'
import { csvHeaderRenamerProcessor } from './csvHeaderRenamer'

export const processorRegistry: Record<string, ToolProcessor> = {
  csvToJson: csvToJsonProcessor,
  jsonToCsv: jsonToCsvProcessor,
  csvCleaner: csvCleanerProcessor,
  removeDuplicatesCsv: removeDuplicatesCsvProcessor,
  csvToExcel: csvToExcelProcessor,
  excelToCsv: excelToCsvProcessor,
  excelToJson: excelToJsonProcessor,
  mergeCsvFiles: mergeCsvFilesProcessor,
  splitCsvFile: splitCsvFileProcessor,
  csvColumnRemover: csvColumnRemoverProcessor,
  removeEmptyColumnsCsv: removeEmptyColumnsCsvProcessor,
  csvColumnSelector: csvColumnSelectorProcessor,
  csvHeaderRenamer: csvHeaderRenamerProcessor,
}
