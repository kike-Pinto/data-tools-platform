// Paso 1

// Qué hace este archivo

// Este processor:

// recibe un archivo CSV

// lo convierte a texto

// usa papaparse

// transforma el CSV a objetos JSON

// devuelve el resultado listo para mostrar en pantalla

import { fileToText } from '@/lib/file'
import { parseCsv } from '@/lib/csvUtils'
import { ensurePrettyJson } from '@/lib/text'
import type { ToolProcessor } from '@/tools/types'

export const csvToJsonProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const rows = parseCsv(text)

  if (!rows.length) {
    return {
      kind: 'text',
      title: 'JSON result',
      text: '[]',
    }
  }

  return {
    kind: 'text',
    title: 'JSON result',
    text: ensurePrettyJson(rows),
  }
}
