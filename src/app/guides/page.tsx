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

        <div className='mt-6 flex flex-wrap gap-3'>
          <Link
            href='/tools'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            View all tools
          </Link>

          <Link
            href='/categories'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            View all categories
          </Link>
        </div>
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

      <section className='mt-16 max-w-4xl'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Step-by-step guides for CSV, Excel, JSON, and data workflows
        </h2>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          This guides page collects tutorials and workflow articles for common
          data tasks such as cleaning CSV files, validating structure, removing
          duplicates, filtering rows, sorting values, converting between CSV,
          Excel, and JSON, and preparing files for imports or automation.
        </p>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          These guides work as a practical knowledge base for users who want
          more than a single tool. Instead of only opening a converter or
          cleaner, you can follow a complete workflow, understand the order of
          operations, and move between related tasks more efficiently.
        </p>
      </section>

      <section className='mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6'>
        <h2 className='text-xl font-semibold'>How to use these guides</h2>

        <ul className='mt-4 space-y-3 text-sm leading-6 text-neutral-700'>
          <li>
            Start with a guide if you want to understand the workflow before
            using a tool.
          </li>
          <li>
            Open the linked tool pages when you are ready to complete the task.
          </li>
          <li>
            Follow related guides to continue with cleanup, validation,
            conversion, or file preparation steps.
          </li>
        </ul>

        <div className='mt-5 flex flex-wrap gap-3'>
          <Link
            href='/tools'
            className='inline-flex rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white'
          >
            Explore all tools
          </Link>

          <Link
            href='/categories'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-white'
          >
            Browse categories
          </Link>
        </div>
      </section>
    </main>
  )
}
