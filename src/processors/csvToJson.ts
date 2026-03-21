// Paso 1

// Qué hace este archivo

// Este processor:

// recibe un archivo CSV

// lo convierte a texto

// usa papaparse

// transforma el CSV a objetos JSON

// devuelve el resultado listo para mostrar en pantalla

import Papa from 'papaparse'
import { fileToText } from '@/lib/file'
import { ensurePrettyJson } from '@/lib/text'
import type { ToolProcessor } from '@/tools/types'

export const csvToJsonProcessor: ToolProcessor = async ({ file }) => {
  if (!file) {
    throw new Error('Debes subir un archivo CSV.')
  }

  const text = await fileToText(file)

  const parsed = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
  })

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  return {
    kind: 'text',
    title: 'JSON result',
    text: ensurePrettyJson(parsed.data),
  }
}
