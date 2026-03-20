export async function fileToText(file: File): Promise<string> {
  return await file.text()
}

export async function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  return await file.arrayBuffer()
}
