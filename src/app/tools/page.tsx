import type { Metadata } from 'next'
import Link from 'next/link'
import { allTools } from '@/tools/registry'

export const metadata: Metadata = {
  title: 'All Tools',
  description:
    'Browse all free online tools for CSV, Excel, JSON, file conversion, and data cleanup.',
  alternates: {
    canonical: '/tools',
  },
}

export default function ToolsIndexPage() {
  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-10'>
      <section className='max-w-3xl'>
        <p className='text-sm font-medium text-neutral-500'>Tools</p>
        <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          All tools
        </h1>
        <p className='mt-4 text-base leading-7 text-neutral-600'>
          Browse all available tools for CSV, Excel, JSON, data cleanup, file
          conversion, sorting, filtering, validation, and other everyday
          workflows.
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <Link
            href='/categories/csv-tools'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            CSV tools
          </Link>

          <Link
            href='/categories/excel-tools'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            Excel tools
          </Link>

          <Link
            href='/categories/file-conversion-tools'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            File conversion tools
          </Link>

          <Link
            href='/categories/data-cleaning-tools'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            Data cleaning tools
          </Link>
        </div>
      </section>

      <section className='mt-10'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {allTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className='rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
            >
              <h2 className='text-lg font-semibold'>{tool.name}</h2>
              <p className='mt-2 text-sm leading-6 text-neutral-600'>
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className='mt-16 max-w-4xl'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Free online tools for CSV, Excel, JSON, and file conversion
        </h2>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          This tools page collects all available utilities for working with CSV,
          Excel, and JSON files online. You can clean messy datasets, remove
          duplicates, validate CSV structure, sort rows, filter records, merge
          files, split large datasets, and convert files between common data
          formats.
        </p>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          These free browser-based tools are useful for developers, analysts,
          operations workflows, admin tasks, spreadsheet cleanup, reporting, and
          preparing structured data before imports or automation tasks.
        </p>
      </section>
    </main>
  )
}
