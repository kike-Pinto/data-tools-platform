import * as XLSX from 'xlsx'
import { fileToArrayBuffer } from '@/lib/file'
import { ensurePrettyJson } from '@/lib/text'
import type { ToolProcessor } from '@/tools/types'

export const excelToJsonProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo Excel.')
  }

  const buffer = await fileToArrayBuffer(file)
  const workbook = XLSX.read(buffer, { type: 'array' })

  const firstSheetName = workbook.SheetNames[0]

  if (!firstSheetName) {
    throw new Error('El archivo Excel no tiene hojas.')
  }

  const worksheet = workbook.Sheets[firstSheetName]
  const json = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet)

  return {
    kind: 'text',
    title: 'JSON result',
    text: ensurePrettyJson(json),
  }
}
