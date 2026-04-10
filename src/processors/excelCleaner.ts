import * as XLSX from 'xlsx'
import type { ToolProcessor } from '@/tools/types'

type SheetCell = string | number | boolean | null | undefined
type SheetRow = SheetCell[]

export const excelCleanerProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo Excel.')
  }

  const buffer = await file.arrayBuffer()

  const workbook = XLSX.read(buffer, {
    type: 'array',
  })

  const firstSheetName = workbook.SheetNames[0]

  if (!firstSheetName) {
    throw new Error('El archivo Excel no contiene hojas.')
  }

  const firstSheet = workbook.Sheets[firstSheetName]

  if (!firstSheet) {
    throw new Error('No se pudo leer la primera hoja del Excel.')
  }

  const rows = XLSX.utils.sheet_to_json<SheetRow>(firstSheet, {
    header: 1,
  })

  const cleanedRows = rows
    .map((row) =>
      row.map((cell) => {
        if (typeof cell === 'string') {
          return cell.trim()
        }

        return cell
      }),
    )
    .filter((row) =>
      row.some((cell) => {
        if (cell === undefined || cell === null) return false
        if (typeof cell === 'string') return cell !== ''
        return true
      }),
    )

  if (!cleanedRows.length) {
    throw new Error(
      'La hoja Excel no contiene datos útiles después de la limpieza.',
    )
  }

  const newSheet = XLSX.utils.aoa_to_sheet(cleanedRows)

  const maxColumns = Math.max(...cleanedRows.map((row) => row.length), 0)

  newSheet['!cols'] = Array.from({ length: maxColumns }, (_, colIndex) => {
    const maxCellLength = Math.max(
      ...cleanedRows.map((row) => String(row[colIndex] ?? '').length),
      10,
    )

    return {
      wch: Math.min(maxCellLength + 2, 30),
    }
  })

  const newWorkbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Cleaned')

  const outputBuffer = XLSX.write(newWorkbook, {
    type: 'array',
    bookType: 'xlsx',
  })

  return {
    kind: 'download',
    title: 'Cleaned Excel',
    filename: 'cleaned-excel.xlsx',
    mimeType:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    content: outputBuffer,
  }
}
