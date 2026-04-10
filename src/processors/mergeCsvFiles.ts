// Crear processor merge

import { fileToText } from '@/lib/file'
import { parseCsv, rowsToCsv, getHeaders } from '@/lib/csvUtils'

import type { ToolProcessor } from '@/tools/types'

export const mergeCsvFilesProcessor: ToolProcessor = async ({ files }) => {
  if (!files || files.length < 2) {
    throw new Error('Debes subir al menos 2 archivos CSV.')
  }

  const allRows: Record<string, string>[] = []
  let referenceHeaders: string[] | null = null

  for (const file of files) {
    const text = await fileToText(file)

    const rows = parseCsv(text)

    if (!rows.length) {
      continue
    }

    const headers = getHeaders(rows)

    if (!referenceHeaders) {
      referenceHeaders = headers
    } else {
      const mismatch =
        headers.length !== referenceHeaders.length ||
        headers.some((h, i) => h !== referenceHeaders![i])

      if (mismatch) {
        throw new Error(`El archivo "${file.name}" tiene columnas distintas.`)
      }
    }

    allRows.push(...rows)
  }

  if (!allRows.length) {
    throw new Error('No se encontraron datos en los archivos.')
  }

  const mergedCsv = rowsToCsv(allRows)

  return {
    kind: 'download',
    title: 'Merged CSV',
    filename: 'merged.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: mergedCsv,
  }
}
