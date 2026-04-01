import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { categoryRegistry } from '@/content/categories'
import { toolRegistry } from '@/tools/registry'
import { siteConfig } from '@/config/site'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(categoryRegistry).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = categoryRegistry[slug]

  if (!category) {
    return {
      title: 'Category not found',
      description: 'The requested category could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const categoryUrl = `${siteConfig.url}/categories/${category.slug}`

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      type: 'website',
      url: categoryUrl,
      title: category.seoTitle,
      description: category.seoDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: category.seoTitle,
      description: category.seoDescription,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categoryRegistry[slug]

  if (!category) {
    notFound()
  }

  const tools = category.toolSlugs
    .map((toolSlug) => toolRegistry[toolSlug])
    .filter(Boolean)

  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-10'>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Categories', href: '/categories' },
          { label: category.name },
        ]}
      />

      <div className='max-w-3xl'>
        <p className='text-sm font-medium text-neutral-500'>Category</p>
        <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          {category.name}
        </h1>
        <p className='mt-4 text-base leading-7 text-neutral-600'>
          {category.intro}
        </p>
      </div>

      <section className='mt-10'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Tools in this category
        </h2>

        <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className='rounded-xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
            >
              <h3 className='text-lg font-semibold'>{tool.name}</h3>
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
