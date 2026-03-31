import type { MetadataRoute } from 'next'
import { toolRegistry } from '@/tools/registry'
import { categoryRegistry } from '@/content/categories'
import { guideRegistry } from '@/content/guides'
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
    {
      url: `${siteConfig.url}/tools`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/categories`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
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

  const guidePages = Object.values(guideRegistry).map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...toolPages, ...categoryPages, ...guidePages]
}
