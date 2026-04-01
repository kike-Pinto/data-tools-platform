import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  href?: string
}

type Props = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label='Breadcrumb' className='mb-6'>
      <ol className='flex flex-wrap items-center gap-2 text-sm text-neutral-500'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.label}-${index}`}
              className='flex items-center gap-2'
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className='transition hover:text-neutral-900'
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-neutral-900' : ''}>
                  {item.label}
                </span>
              )}

              {!isLast ? <span>/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
