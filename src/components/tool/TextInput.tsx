// Paso 4

'use client'

type Props = {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export function TextInput({ placeholder, value, onChange }: Props) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      rows={16}
      className='block w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm'
    />
  )
}
