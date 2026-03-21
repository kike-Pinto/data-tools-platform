// Paso 4 UI Reutilizable

'use client'

type Props = {
  accept?: string
  onChange: (file: File | null) => void
}

export function FileInput({ accept, onChange }: Props) {
  return (
    <input
      type='file'
      accept={accept}
      onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      className='block w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm'
    />
  )
}
