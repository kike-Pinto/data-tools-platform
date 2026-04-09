export async function fileToText(file: File): Promise<string> {
  const buffer = await file.arrayBuffer()
  const bytes = new Uint8Array(buffer)

  const utf8Text = new TextDecoder('utf-8', { fatal: false }).decode(bytes)

  if (!hasReplacementCharacters(utf8Text)) {
    return removeBom(utf8Text)
  }

  const win1252Text = new TextDecoder('windows-1252').decode(bytes)
  return removeBom(win1252Text)
}

export async function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  return await file.arrayBuffer()
}

function hasReplacementCharacters(text: string): boolean {
  return text.includes('�')
}

function removeBom(text: string): string {
  return text.replace(/^\uFEFF/, '')
}
