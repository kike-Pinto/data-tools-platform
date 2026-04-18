// Paso 7: Mostrar tool desde la home

import type { Metadata } from 'next'
import Link from 'next/link'
import { categoryRegistry } from '@/content/categories'
import { guideRegistry } from '@/content/guides'
import {
  featuredCategorySlugs,
  featuredGuideSlugs,
  featuredToolSlugs,
} from '@/content/home'
import { siteConfig } from '@/config/site'
import { toolRegistry } from '@/tools/registry'

export const metadata: Metadata = {
  title: 'Free CSV, Excel, JSON, and Data Tools',
  description:
    'Free online tools for CSV, Excel, JSON, file conversion, data cleanup, validation, filtering, sorting, and everyday admin workflows.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Free CSV, Excel, JSON, and Data Tools',
    description:
      'Free online tools for CSV, Excel, JSON, file conversion, data cleanup, validation, filtering, sorting, and everyday admin workflows.',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free CSV, Excel, JSON, and Data Tools',
    description:
      'Free online tools for CSV, Excel, JSON, file conversion, data cleanup, validation, filtering, sorting, and everyday admin workflows.',
    images: [siteConfig.ogImage],
  },
}

export default function HomePage() {
  const featuredCategories = featuredCategorySlugs
    .map((slug) => categoryRegistry[slug])
    .filter(Boolean)

  const featuredGuides = featuredGuideSlugs
    .map((slug) => guideRegistry[slug])
    .filter(Boolean)

  const featuredTools = featuredToolSlugs
    .map((slug) => toolRegistry[slug])
    .filter(Boolean)

  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-10'>
      <section className='max-w-3xl'>
        <p className='text-sm font-medium text-neutral-500'>
          Free online tools
        </p>
        <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
          Free tools for CSV, Excel, JSON, and data cleanup
        </h1>
        <p className='mt-4 text-base leading-7 text-neutral-600'>
          Use simple online tools to convert files, clean messy data, validate
          CSV structure, filter rows, sort values, and prepare files for
          reporting, imports, and everyday workflows.
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <Link
            href='/categories/csv-tools'
            className='inline-flex rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white'
          >
            Explore CSV tools
          </Link>

          <Link
            href='/guides/how-to-convert-csv-to-json'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            Read a guide
          </Link>
        </div>
      </section>

      <section className='mt-14'>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <p className='text-sm font-medium text-neutral-500'>Categories</p>
            <h2 className='mt-1 text-2xl font-semibold tracking-tight'>
              Browse by topic
            </h2>
          </div>
        </div>

        <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className='rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
            >
              <h3 className='text-lg font-semibold'>{category.name}</h3>
              <p className='mt-2 text-sm leading-6 text-neutral-600'>
                {category.intro}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className='mt-14'>
        <div>
          <p className='text-sm font-medium text-neutral-500'>Popular tools</p>
          <h2 className='mt-1 text-2xl font-semibold tracking-tight'>
            Start with these tools
          </h2>

          <div className='mt-3'>
            <Link
              href='/tools'
              className='text-sm font-medium text-neutral-900 underline underline-offset-4'
            >
              View all tools →
            </Link>
          </div>
        </div>

        <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {featuredTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className='rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
            >
              <h3 className='text-lg font-semibold'>{tool.name}</h3>
              <p className='mt-2 text-sm leading-6 text-neutral-600'>
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className='mt-14'>
        <div>
          <p className='text-sm font-medium text-neutral-500'>Guides</p>
          <h2 className='mt-1 text-2xl font-semibold tracking-tight'>
            Learn step by step
          </h2>
          <div className='mt-3'>
            <Link
              href='/guides'
              className='text-sm font-medium text-neutral-900 underline underline-offset-4'
            >
              View all guides →
            </Link>
          </div>
        </div>

        <div className='mt-6 grid gap-4 lg:grid-cols-2'>
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className='rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
            >
              <h3 className='text-lg font-semibold'>{guide.title}</h3>
              <p className='mt-2 text-sm leading-6 text-neutral-600'>
                {guide.seoDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className='mt-16 '>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Free online CSV, Excel, and JSON tools
        </h2>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          This platform provides free online tools designed to help with CSV,
          Excel, and JSON file workflows. You can convert files between formats,
          clean messy datasets, validate CSV structure, filter rows, sort
          columns, merge files, split large datasets, and prepare data for
          imports, reporting, and automation tasks.
        </p>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          Whether you are working with spreadsheets, APIs, or data pipelines,
          these tools help reduce manual work and simplify repetitive data
          preparation tasks. All tools run directly in your browser, making them
          fast, secure, and easy to use without installation.
        </p>
      </section>
    </main>
  )
}
