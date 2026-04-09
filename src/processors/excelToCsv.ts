// Crear processor

import * as XLSX from 'xlsx'
import { fileToArrayBuffer } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const excelToCsvProcessor: ToolProcessor = async ({ file }) => {
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

  const csv = XLSX.utils.sheet_to_csv(worksheet)

  if (!csv.trim()) {
    throw new Error('La hoja Excel está vacía.')
  }

  return {
    kind: 'download',
    title: 'CSV result',
    filename: 'converted.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csv,
  }
}
