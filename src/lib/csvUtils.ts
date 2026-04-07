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
 * Limpia nombre de columna
 */
export function normalizeHeader(header: unknown): string {
  if (header === null || header === undefined) return ''
  return String(header).trim()
}

/**
 * Determina si un valor está vacío
 */
export function isEmptyValue(value: unknown): boolean {
  if (value === null || value === undefined) return true
  return String(value).trim() === ''
}

/**
 * Determina si una fila completa está vacía
 */
export function isEmptyRow(row: Record<string, unknown>): boolean {
  return Object.values(row).every((value) => isEmptyValue(value))
}

/**
 * Normaliza una fila completa:
 * - trim de headers
 * - trim de valores
 */
export function normalizeRow(row: Record<string, unknown>): CsvRow {
  const normalized: CsvRow = {}

  Object.entries(row).forEach(([key, value]) => {
    const cleanKey = normalizeHeader(key)
    normalized[cleanKey] = normalizeCell(value)
  })

  return normalized
}

/**
 * Normaliza todas las filas CSV
 */
export function normalizeRows(rows: Record<string, unknown>[]): CsvRow[] {
  return rows.filter((row) => !isEmptyRow(row)).map((row) => normalizeRow(row))
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

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  return normalizeRows(parsed.data)
}

/**
 * Convierte filas nuevamente a CSV
 */
export function rowsToCsv(rows: CsvRow[]): string {
  return Papa.unparse(rows)
}
