import type { Metadata } from 'next'
import Link from 'next/link'
import { allGuides } from '@/content/guides'

export const metadata: Metadata = {
  title: 'All Guides',
  description:
    'Browse step-by-step guides for CSV, Excel, JSON, data cleanup, validation, and file conversion tasks.',
  alternates: {
    canonical: '/guides',
  },
}

export default function GuidesIndexPage() {
  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-10'>
      <section className='max-w-3xl'>
        <p className='text-sm font-medium text-neutral-500'>Guides</p>
        <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          All guides
        </h1>
        <p className='mt-4 text-base leading-7 text-neutral-600'>
          Read step-by-step guides to convert files, clean data, validate CSV
          structure, remove duplicates, filter rows, and work more efficiently
          with CSV, Excel, and JSON files.
        </p>
      </section>

      <section className='mt-10'>
        <div className='grid gap-4 lg:grid-cols-2'>
          {allGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className='rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
            >
              <h2 className='text-lg font-semibold'>{guide.title}</h2>
              <p className='mt-2 text-sm leading-6 text-neutral-600'>
                {guide.seoDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
