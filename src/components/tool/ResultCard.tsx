// Paso 4

type Props = {
  title?: string
  children: React.ReactNode
}

export function ResultCard({ title, children }: Props) {
  return (
    <div className='rounded-xl border border-zinc-200 bg-white p-4 shadow-sm'>
      {title ? <h2 className='mb-3 text-lg font-semibold'>{title}</h2> : null}
      {children}
    </div>
  )
}
