// paso 8: ruta dinamica

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { toolRegistry } from '@/tools/registry'
import { ToolShell } from '@/components/tool/ToolShell'
import { siteConfig } from '@/config/site'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(toolRegistry).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = toolRegistry[slug]

  if (!tool) {
    return {
      title: 'Tool not found',
      description: 'The requested tool could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const toolUrl = `${siteConfig.url}/tools/${tool.slug}`

  return {
    title: tool.seo.title,
    description: tool.seo.description,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      type: 'website',
      url: toolUrl,
      title: tool.seo.title,
      description: tool.seo.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.seo.title,
      description: tool.seo.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
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
