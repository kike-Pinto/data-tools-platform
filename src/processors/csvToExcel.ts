import * as XLSX from 'xlsx'
import { fileToText } from '@/lib/file'
import { parseCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvToExcelProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const rows = parseCsv(text)

  if (!rows.length) {
    throw new Error('El CSV no contiene datos.')
  }

  const worksheet = XLSX.utils.json_to_sheet(rows)

  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

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
