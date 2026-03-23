import { fileToText } from '@/lib/file'
import { getHeaders, parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvSorterProcessor: ToolProcessor = async ({ file, text }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  if (!text) {
    throw new Error('Debes escribir la columna por la cual ordenar.')
  }

  const fileText = await fileToText(file)
  const rows = parseCsv(fileText)

  if (!rows.length) {
    return {
      kind: 'text',
      title: 'No data',
      text: 'No data found in CSV.',
    }
  }

  const headers = getHeaders(rows)
  const sortColumn = text.trim()

  if (!headers.includes(sortColumn)) {
    throw new Error(`La columna "${sortColumn}" no existe en el CSV.`)
  }

  const sortedRows = [...rows].sort((a, b) => {
    const valueA = (a[sortColumn] ?? '').trim()
    const valueB = (b[sortColumn] ?? '').trim()

    const numberA = Number(valueA)
    const numberB = Number(valueB)

    const bothAreNumbers =
      valueA !== '' &&
      valueB !== '' &&
      !Number.isNaN(numberA) &&
      !Number.isNaN(numberB)

    if (bothAreNumbers) {
      return numberA - numberB
    }

    return valueA.localeCompare(valueB, undefined, {
      numeric: true,
      sensitivity: 'base',
    })
  })

  const csvOutput = rowsToCsv(sortedRows)

  return {
    kind: 'download',
    title: 'Sorted CSV',
    filename: 'sorted.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
