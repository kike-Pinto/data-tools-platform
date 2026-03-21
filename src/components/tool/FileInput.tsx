// Paso 4 UI Reutilizable

'use client'

type Props = {
  accept?: string
  multiple?: boolean
  onChange: (file: File | null, files?: File[]) => void
}

export function FileInput({ accept, multiple, onChange }: Props) {
  return (
    <div className='space-y-2'>
      <input
        type='file'
        accept={accept}
        multiple={multiple}
        onChange={(e) => {
          const selectedFiles = e.target.files ? Array.from(e.target.files) : []

          onChange(selectedFiles[0] ?? null, selectedFiles)
        }}
        className='block w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm'
      />

      {multiple ? (
        <p className='text-xs text-zinc-500'>
          Para seleccionar varios archivos en Windows, usa Ctrl + click o Shift
          + click en la misma ventana.
        </p>
      ) : null}
    </div>
  )
}
