import type { MetadataRoute } from 'next'
import { toolRegistry } from '@/tools/registry'
import { categoryRegistry } from '@/content/categories'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  const toolPages = Object.values(toolRegistry).map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const categoryPages = Object.values(categoryRegistry).map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...toolPages, ...categoryPages]
}
