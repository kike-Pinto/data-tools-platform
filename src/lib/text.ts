export function safeJsonParse<T = unknown>(value: string): T {
  return JSON.parse(value) as T
}

export function ensurePrettyJson(value: unknown): string {
  return JSON.stringify(value, null, 2)
}
