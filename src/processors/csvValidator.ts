import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import type { ToolProcessor } from '@/tools/types'

export const csvValidatorProcessor: ToolProcessor = async ({ file }) => {
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
      title: 'CSV Validation Result',
      text: 'CSV is invalid: file is empty.',
    }
  }

  const headers = rows[0]

  if (!headers || headers.length === 0) {
    return {
      kind: 'text',
      title: 'CSV Validation Result',
      text: 'CSV is invalid: no headers found.',
    }
  }

  const normalizedHeaders = headers.map((header) => String(header ?? '').trim())

  const emptyHeaders = normalizedHeaders
    .map((header, index) => ({ header, index }))
    .filter(({ header }) => header === '')
    .map(({ index }) => index + 1)

  if (emptyHeaders.length > 0) {
    return {
      kind: 'text',
      title: 'CSV Validation Result',
      text: `CSV is invalid: empty header found in column(s) ${emptyHeaders.join(', ')}.`,
    }
  }

  const duplicateHeaders = normalizedHeaders.filter(
    (header, index) => normalizedHeaders.indexOf(header) !== index,
  )

  if (duplicateHeaders.length > 0) {
    return {
      kind: 'text',
      title: 'CSV Validation Result',
      text: `CSV is invalid: duplicate headers found (${[
        ...new Set(duplicateHeaders),
      ].join(', ')}).`,
    }
  }

  const expectedColumns = normalizedHeaders.length
  const invalidRows: number[] = []

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i] ?? []

    if (row.length !== expectedColumns) {
      invalidRows.push(i + 1)
    }
  }

  if (invalidRows.length > 0) {
    return {
      kind: 'text',
      title: 'CSV Validation Result',
      text: `CSV is invalid: inconsistent column count in row(s) ${invalidRows.join(', ')}.`,
    }
  }

  return {
    kind: 'text',
    title: 'CSV Validation Result',
    text: `CSV is valid. Total rows: ${rows.length - 1}. Total columns: ${expectedColumns}.`,
  }
}
