// Paso 7: Mostrar tool desde la home

import Link from 'next/link'
import { allTools } from '@/tools/registry'

export default function HomePage() {
  return (
    <main className='mx-auto max-w-5xl px-4 py-10'>
      <section className='mb-10'>
        <h1 className='text-4xl font-bold'>Data Tools Platform</h1>
        <p className='mt-3 max-w-2xl text-zinc-600'>
          Simple browser-based tools for CSV, JSON and Excel.
        </p>
      </section>

      <section className='grid gap-4 md:grid-cols-2'>
        {allTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className='rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
          >
            <h2 className='text-lg font-semibold'>{tool.name}</h2>
            <p className='mt-2 text-sm text-zinc-600'>{tool.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
