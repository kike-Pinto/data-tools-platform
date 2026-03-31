// PAso 6: Shell general

import Link from 'next/link'
import type { ToolConfig } from '@/tools/types'
import { ToolRenderer } from './ToolRenderer'
import { ToolContent } from './ToolContent'
import { toolContentRegistry } from '@/tools/toolContentRegistry'
import { getCategoriesForTool } from '@/content/categoryHelpers'
import { getGuideForTool } from '@/content/guideHelpers'

type Props = {
  tool: ToolConfig
}

export function ToolShell({ tool }: Props) {
  const content = toolContentRegistry[tool.slug]
  const relatedCategories = getCategoriesForTool(tool.slug)
  const relatedGuide = getGuideForTool(tool.slug)

  return (
    <main className='mx-auto max-w-4xl px-4 py-10'>
      <ToolRenderer tool={tool} />

      {relatedCategories.length > 0 ? (
        <section className='mt-8'>
          <p className='text-sm font-medium text-neutral-500'>
            Part of these categories
          </p>

          <div className='mt-3 flex flex-wrap gap-2'>
            {relatedCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className='rounded-full border border-neutral-200 px-3 py-1.5 text-sm transition hover:border-neutral-300 hover:bg-neutral-50'
              >
                {category.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {relatedGuide ? (
        <section className='mt-8 rounded-2xl border border-neutral-200 p-5'>
          <p className='text-sm font-medium text-neutral-500'>Related guide</p>
          <h2 className='mt-2 text-xl font-semibold'>{relatedGuide.title}</h2>
          <p className='mt-2 text-sm leading-6 text-neutral-600'>
            {relatedGuide.seoDescription}
          </p>

          <div className='mt-4'>
            <Link
              href={`/guides/${relatedGuide.slug}`}
              className='inline-flex rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white'
            >
              Read the guide
            </Link>
          </div>
        </section>
      ) : null}

      {content ? (
        <ToolContent
          what={content.what}
          howTo={content.howTo}
          exampleInput={content.exampleInput}
          exampleOutput={content.exampleOutput}
          useCases={content.useCases}
          notes={content.notes}
          faqs={content.faqs}
          relatedTools={content.relatedTools}
        />
      ) : null}
    </main>
  )
}
