import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const csvColumnRemoverProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const parsed = Papa.parse<string[]>(text, {
    skipEmptyLines: true,
  })

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  const rows = parsed.data

  if (!rows.length) {
    return {
      kind: 'text',
      title: 'No data',
      text: 'No data found in CSV.',
    }
  }

  const headers = rows[0] ?? []

  if (headers.length === 0) {
    throw new Error('El CSV no contiene columnas.')
  }

  if (headers.length === 1) {
    throw new Error(
      'No se puede eliminar la última columna porque solo existe una columna.',
    )
  }

  const cleanedRows = rows.map((row) => row.slice(0, -1))
  const csv = Papa.unparse(cleanedRows)

  return {
    kind: 'download',
    title: 'CSV without last column',
    filename: 'column-removed.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csv,
  }
}
