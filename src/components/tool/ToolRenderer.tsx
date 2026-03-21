// Paso 5: Renderer Principal

'use client'

import { useState } from 'react'
import { downloadBlob } from '@/lib/download'
import type { ToolConfig, ToolProcessorResult } from '@/tools/types'
import { processorRegistry } from '@/processors/registry'
import { FileInput } from './FileInput'
import { TextInput } from './TextInput'
import { ResultCard } from './ResultCard'
import { DownloadButton } from './DownloadButton'

type Props = {
  tool: ToolConfig
}

export function ToolRenderer({ tool }: Props) {
  const [file, setFile] = useState<File | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [text, setText] = useState('')
  const [result, setResult] = useState<ToolProcessorResult | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleRun() {
    try {
      setLoading(true)
      setError('')
      setResult(null)

      const processor = processorRegistry[tool.processorKey]

      if (!processor) {
        throw new Error(`Processor not found: ${tool.processorKey}`)
      }

      const output = await processor({
        file: file ?? undefined,
        files: files.length > 0 ? files : undefined,
        text: text || undefined,
      })

      setResult(output)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Ha ocurrido un error.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='space-y-6'>
      <div className='rounded-xl border border-zinc-200 bg-white p-4 shadow-sm'>
        <div className='mb-4'>
          <h1 className='text-2xl font-bold'>{tool.name}</h1>
          <p className='mt-2 text-sm text-zinc-600'>{tool.description}</p>
        </div>

        <div className='space-y-4'>
          {tool.input.kind === 'file' ? (
            <>
              <FileInput
                accept={tool.input.accept}
                multiple={tool.input.multiple}
                onChange={(selectedFile, selectedFiles) => {
                  setFile(selectedFile)
                  setFiles(selectedFiles ?? [])
                }}
              />

              {tool.input.multiple ? (
                <div className='rounded-lg bg-zinc-50 p-3 text-sm'>
                  <p className='font-medium'>
                    Archivos seleccionados: {files.length}
                  </p>

                  {files.length > 0 ? (
                    <ul className='mt-2 list-disc space-y-1 pl-5 text-zinc-600'>
                      {files.map((selectedFile) => (
                        <li
                          key={`${selectedFile.name}-${selectedFile.lastModified}`}
                        >
                          {selectedFile.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='mt-1 text-zinc-500'>
                      Aún no has seleccionado archivos.
                    </p>
                  )}
                </div>
              ) : null}
            </>
          ) : (
            <TextInput
              placeholder={tool.input.placeholder}
              value={text}
              onChange={setText}
            />
          )}

          <button
            type='button'
            onClick={handleRun}
            disabled={loading}
            className='rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-60'
          >
            {loading ? 'Processing...' : 'Run tool'}
          </button>

          {error ? (
            <p className='text-sm font-medium text-red-600'>{error}</p>
          ) : null}
        </div>
      </div>

      {result?.kind === 'text' ? (
        <ResultCard title={result.title}>
          <pre className='overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100'>
            {result.text}
          </pre>
        </ResultCard>
      ) : null}

      {result?.kind === 'download' ? (
        <ResultCard title={result.title}>
          <div className='flex items-center justify-between gap-4'>
            <div>
              <p className='text-sm font-medium'>{result.filename}</p>
              <p className='text-xs text-zinc-500'>{result.mimeType}</p>
            </div>

            <DownloadButton
              onClick={() =>
                downloadBlob(result.content, result.filename, result.mimeType)
              }
            />
          </div>
        </ResultCard>
      ) : null}
    </div>
  )
}
