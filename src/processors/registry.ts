import type { ToolProcessor } from '@/tools/types'
import { csvToJsonProcessor } from './csvToJson'
import { jsonToCsvProcessor } from './jsonToCsv'

export const processorRegistry: Record<string, ToolProcessor> = {
  csvToJson: csvToJsonProcessor,
  jsonToCsv: jsonToCsvProcessor,
}
