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
    </main>
  )
}
