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
    </main>
  )
}
