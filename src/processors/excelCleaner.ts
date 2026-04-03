import * as XLSX from 'xlsx'
import type { ToolProcessor } from '@/tools/types'

type SheetRow = Array<string | number | boolean | null | undefined>

export const excelCleanerProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('File is required')
  }

  const buffer = await file.arrayBuffer()

  const workbook = XLSX.read(buffer, {
    type: 'array',
  })

  const firstSheetName = workbook.SheetNames[0]

  if (!firstSheetName) {
    throw new Error('The Excel file does not contain any sheets')
  }

  const firstSheet = workbook.Sheets[firstSheetName]

  if (!firstSheet) {
    throw new Error('Could not read the first sheet')
  }

  const rows = XLSX.utils.sheet_to_json<SheetRow>(firstSheet, {
    header: 1,
  })

  const cleanedRows = rows.filter((row) =>
    row.some((cell) => {
      if (cell === undefined || cell === null) return false
      if (typeof cell === 'string') return cell.trim() !== ''
      return true
    }),
  )

  const newSheet = XLSX.utils.aoa_to_sheet(cleanedRows)
  const newWorkbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Cleaned')

  const outputBuffer = XLSX.write(newWorkbook, {
    type: 'array',
    bookType: 'xlsx',
  })

  return {
    kind: 'download',
    filename: 'cleaned-excel.xlsx',
    mimeType:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    content: outputBuffer,
  }
}
