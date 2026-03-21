// Paso 4

'use client'

type Props = {
  onClick: () => void
  label?: string
}

export function DownloadButton({ onClick, label = 'Download file' }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white'
    >
      {label}
    </button>
  )
}
