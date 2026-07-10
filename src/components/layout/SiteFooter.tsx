import Link from 'next/link'

const relatedPlatforms = [
  {
    title: 'Reporting Tools Platform',
    href: 'https://reporting-tools-platform.vercel.app/',
  },
  {
    title: 'Dashboard Tools Platform',
    href: 'https://dashboard-tools-platform.vercel.app/',
  },
]

export function SiteFooter() {
  return (
    <footer className='mt-16 border-t border-neutral-200'>
      <div className='mx-auto grid w-full max-w-6xl gap-8 px-6 py-8 text-sm text-neutral-600 md:grid-cols-[1fr_auto_auto] md:items-start'>
        <div>
          <p className='font-semibold text-neutral-900'>
            © Data Tools Platform
          </p>

          <p className='mt-2 max-w-md leading-6'>
            Browser-based tools for cleaning, converting and organizing CSV,
            Excel and JSON files.
          </p>
        </div>

        <nav className='flex flex-wrap items-center gap-4 md:flex-col md:items-start'>
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

        <div>
          <p className='font-semibold text-neutral-900'>Related Platforms</p>

          <div className='mt-3 flex flex-col gap-3'>
            {relatedPlatforms.map((platform) => (
              <a
                key={platform.href}
                href={platform.href}
                target='_blank'
                rel='noopener noreferrer'
                className='transition hover:text-neutral-900'
              >
                {platform.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
