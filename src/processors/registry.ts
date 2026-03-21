// Registrar processor

import type { ToolProcessor } from '@/tools/types'
import { csvToJsonProcessor } from './csvToJson'
import { jsonToCsvProcessor } from './jsonToCsv'
import { csvCleanerProcessor } from './csvCleaner'

export const processorRegistry: Record<string, ToolProcessor> = {
  csvToJson: csvToJsonProcessor,
  jsonToCsv: jsonToCsvProcessor,
  csvCleaner: csvCleanerProcessor,
}
