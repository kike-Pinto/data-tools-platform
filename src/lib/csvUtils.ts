import Papa from 'papaparse'

export type CsvRow = Record<string, string>

/**
 * Convierte cualquier valor en string limpio
 */
export function normalizeCell(value: unknown): string {
  if (value === null || value === undefined) return ''

  return String(value).trim()
}

/**
 * Determina si un valor está vacío
 */
export function isEmptyValue(value: unknown): boolean {
  if (value === null) return true
  if (value === undefined) return true

  const str = String(value).trim()

  return str === ''
}

/**
 * Normaliza todas las filas CSV
 */
export function normalizeRows(rows: Record<string, unknown>[]): CsvRow[] {
  return rows.map((row) => {
    const normalized: CsvRow = {}

    Object.keys(row).forEach((key) => {
      normalized[key] = normalizeCell(row[key])
    })

    return normalized
  })
}

/**
 * Obtiene headers desde filas
 */
export function getHeaders(rows: CsvRow[]): string[] {
  if (!rows.length) return []

  return Object.keys(rows[0])
}

/**
 * Convierte texto CSV a filas normalizadas
 */
export function parseCsv(text: string): CsvRow[] {
  const parsed = Papa.parse<Record<string, unknown>>(text, {
    header: true,
    skipEmptyLines: true,
  })

  return normalizeRows(parsed.data)
}

/**
 * Convierte filas nuevamente a CSV
 */
export function rowsToCsv(rows: CsvRow[]): string {
  return Papa.unparse(rows)
}
