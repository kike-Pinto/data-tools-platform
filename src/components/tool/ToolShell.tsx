// PAso 6: Shell general

import type { ToolConfig } from '@/tools/types'
import { ToolRenderer } from './ToolRenderer'
import { ToolContent } from './ToolContent'

type Props = {
  tool: ToolConfig
}

export function ToolShell({ tool }: Props) {
  return (
    <main className='mx-auto max-w-4xl px-4 py-10'>
      <ToolRenderer tool={tool} />

      <ToolContent what='Example text here' />
    </main>
  )
}
