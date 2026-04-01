import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className='mt-16 border-t border-neutral-200'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between'>
        <p>© Data Tools Platform</p>

        <nav className='flex flex-wrap items-center gap-4'>
          <Link href='/' className='transition hover:text-neutral-900'>
            Home
          </Link>
          <Link href='/tools' className='transition hover:text-neutral-900'>
            Tools
          </Link>
          <Link href='/guides' className='transition hover:text-neutral-900'>
            Guides
          </Link>
          <Link
            href='/categories'
            className='transition hover:text-neutral-900'
          >
            Categories
          </Link>
        </nav>
      </div>
    </footer>
  )
}
