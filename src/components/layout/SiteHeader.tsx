import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className='border-b border-neutral-200'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4'>
        <Link href='/' className='text-lg font-semibold tracking-tight'>
          Data Tools Platform
        </Link>

        <nav className='flex items-center gap-5 text-sm text-neutral-600'>
          <Link href='/' className='transition hover:text-neutral-900'>
            Home
          </Link>
          <Link
            href='/categories/csv-tools'
            className='transition hover:text-neutral-900'
          >
            Categories
          </Link>
          <Link
            href='/guides/how-to-convert-csv-to-json'
            className='transition hover:text-neutral-900'
          >
            Guides
          </Link>
          <Link
            href='/tools/csv-to-json'
            className='transition hover:text-neutral-900'
          >
            Tools
          </Link>
        </nav>
      </div>
    </header>
  )
}
