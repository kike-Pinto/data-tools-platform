// Version simple: Partir el CSV en dos mitades
import { fileToText } from '@/lib/file'
import { parseCsv, rowsToCsv } from '@/lib/csvUtils'

import type { ToolProcessor } from '@/tools/types'

export const splitCsvFileProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const rows = parseCsv(text)

  if (!rows.length) {
    throw new Error('El CSV no contiene datos.')
  }

  const midpoint = Math.ceil(rows.length / 2)

  const firstHalf = rows.slice(0, midpoint)
  const secondHalf = rows.slice(midpoint)

  const csv1 = rowsToCsv(firstHalf)
  const csv2 = rowsToCsv(secondHalf)

  const zipBlob = await createZip([
    { name: 'split-part-1.csv', content: csv1 },
    { name: 'split-part-2.csv', content: csv2 },
  ])

  return {
    kind: 'download',
    title: 'Split CSV',
    filename: 'split-csv.zip',
    mimeType: 'application/zip',
    content: zipBlob,
  }
}

async function createZip(
  files: { name: string; content: string }[],
): Promise<ArrayBuffer> {
  const JSZip = (await import('jszip')).default

  const zip = new JSZip()

  files.forEach((file) => {
    zip.file(file.name, file.content)
  })

  return await zip.generateAsync({
    type: 'arraybuffer',
  })
}
