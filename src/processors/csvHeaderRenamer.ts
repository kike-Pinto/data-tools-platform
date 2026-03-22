import { fileToText } from '@/lib/file'
import { getHeaders, parseCsv, rowsToCsv } from '@/lib/csvUtils'
import type { ToolProcessor } from '@/tools/types'

export const csvHeaderRenamerProcessor: ToolProcessor = async ({
  file,
  text,
}) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  if (!text) {
    throw new Error(
      'Debes escribir los cambios de nombre. Ejemplo: name=full_name,country=location',
    )
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

  const renamePairs = text
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

  if (!renamePairs.length) {
    throw new Error('Debes indicar al menos un cambio de nombre.')
  }

  const renameMap: Record<string, string> = {}

  renamePairs.forEach((pair) => {
    const [oldName, newName] = pair.split('=').map((item) => item.trim())

    if (!oldName || !newName) {
      throw new Error('Formato inválido. Usa este formato: oldName=newName')
    }

    renameMap[oldName] = newName
  })

  const invalidHeaders = Object.keys(renameMap).filter(
    (header) => !headers.includes(header),
  )

  if (invalidHeaders.length > 0) {
    throw new Error(`Columnas no encontradas: ${invalidHeaders.join(', ')}`)
  }

  const renamedRows = rows.map((row) => {
    const nextRow: Record<string, string> = {}

    headers.forEach((header) => {
      const finalHeader = renameMap[header] ?? header
      nextRow[finalHeader] = row[header] ?? ''
    })

    return nextRow
  })

  const csvOutput = rowsToCsv(renamedRows)

  return {
    kind: 'download',
    title: 'Renamed Headers CSV',
    filename: 'renamed-headers.csv',
    mimeType: 'text/csv;charset=utf-8;',
    content: csvOutput,
  }
}
