import type { ToolProcessor } from '@/tools/types'
import { csvToJsonProcessor } from './csvToJson'

export const processorRegistry: Record<string, ToolProcessor> = {
  csvToJson: csvToJsonProcessor,
}
