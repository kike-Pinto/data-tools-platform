import type { Metadata } from 'next'
import Link from 'next/link'
import { allCategories } from '@/content/categories'

export const metadata: Metadata = {
  title: 'All Categories',
  description:
    'Browse categories of tools and guides for CSV, Excel, file conversion, and data cleaning.',
  alternates: {
    canonical: '/categories',
  },
}

export default function CategoriesIndexPage() {
  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-10'>
      <section className='max-w-3xl'>
        <p className='text-sm font-medium text-neutral-500'>Categories</p>
        <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          All categories
        </h1>
        <p className='mt-4 text-base leading-7 text-neutral-600'>
          Explore tool collections by topic, including CSV tools, Excel tools,
          file conversion tools, and data cleaning tools.
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <Link
            href='/tools'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            View all tools
          </Link>

          <Link
            href='/guides'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            View all guides
          </Link>
        </div>
      </section>

      <section className='mt-10'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {allCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className='rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
            >
              <h2 className='text-lg font-semibold'>{category.name}</h2>
              <p className='mt-2 text-sm leading-6 text-neutral-600'>
                {category.intro}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Browse tools and guides by category
        </h2>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          Categories make it easier to explore related tools and guides across
          the site. Instead of browsing every page individually, you can focus
          on CSV tools, Excel tools, file conversion workflows, or data cleaning
          tasks depending on what you need to solve.
        </p>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          This category structure also helps connect tools with guides, making
          it easier to find practical workflows for converting files, validating
          data, cleaning datasets, and preparing structured information for
          imports, reports, and automation.
        </p>
      </section>
    </main>
  )
}
