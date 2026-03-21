// paso 8: ruta dinamica

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { toolRegistry } from '@/tools/registry'
import { ToolShell } from '@/components/tool/ToolShell'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = toolRegistry[slug]

  if (!tool) {
    return {
      title: 'Tool not found',
    }
  }

  return {
    title: tool.seo.title,
    description: tool.seo.description,
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = toolRegistry[slug]

  if (!tool) {
    notFound()
  }

  return <ToolShell tool={tool} />
}
