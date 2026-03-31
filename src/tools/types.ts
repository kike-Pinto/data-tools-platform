export type ToolInputKind = 'file' | 'text'

export type ToolOutputKind = 'text' | 'download'

export type ToolProcessorResult =
  | {
      kind: 'text'
      title?: string
      text: string
    }
  | {
      kind: 'download'
      title?: string
      filename: string
      mimeType: string
      content: BlobPart
    }

export type ToolRunPayload = {
  file?: File
  files?: File[]
  text?: string
}

export type ToolProcessor = (
  payload: ToolRunPayload,
) => Promise<ToolProcessorResult>

export type ToolCategory = 'csv' | 'json' | 'excel' | 'data'

export type ToolConfig = {
  slug: string
  name: string
  description: string
  category: ToolCategory

  input:
    | {
        kind: ToolInputKind
        accept?: string
        placeholder?: string
        multiple?: boolean
      }
    | Array<{
        kind: ToolInputKind
        accept?: string
        placeholder?: string
        multiple?: boolean
      }>

  output: {
    kind: ToolOutputKind
  }

  seo: {
    title: string
    description: string
    keywords?: string[]
  }

  featured?: boolean
  relatedGuideSlugs?: string[]

  processorKey: string
}
