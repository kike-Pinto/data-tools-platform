// PAso 6: Shell general

import type { ToolConfig } from '@/tools/types'
import { ToolRenderer } from './ToolRenderer'
import { ToolContent } from './ToolContent'
import { toolContentRegistry } from '@/tools/toolContentRegistry'

type Props = {
  tool: ToolConfig
}

export function ToolShell({ tool }: Props) {
  const content = toolContentRegistry[tool.slug]

  return (
    <main className='mx-auto max-w-4xl px-4 py-10'>
      <ToolRenderer tool={tool} />

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
