import Papa from 'papaparse'
import * as XLSX from 'xlsx'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const csvToExcelProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const parsed = Papa.parse<Record<string, unknown>>(text, {
    header: true,
    skipEmptyLines: true,
  })

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  // crear worksheet
  const worksheet = XLSX.utils.json_to_sheet(parsed.data)

  // crear workbook
  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

  // generar archivo binario
  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  })

  return {
    kind: 'download',
    title: 'Excel file ready',
    filename: 'converted.xlsx',
    mimeType:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    content: excelBuffer,
  }
}
