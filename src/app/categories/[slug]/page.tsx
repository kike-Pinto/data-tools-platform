import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { categoryRegistry } from '@/content/categories'
import { guideRegistry } from '@/content/guides'
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

  const relatedGuides = (category.guideSlugs ?? [])
    .map((guideSlug) => guideRegistry[guideSlug])
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

      <section className='max-w-3xl'>
        <p className='text-sm font-medium text-neutral-500'>Category</p>

        <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          {category.name}
        </h1>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          {category.intro}
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <Link
            href='/tools'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            View all tools
          </Link>

          <Link
            href='/guides'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            View all guides
          </Link>

          <Link
            href='/categories'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50'
          >
            View all categories
          </Link>
        </div>
      </section>

      <section className='mt-10'>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <h2 className='text-2xl font-semibold tracking-tight'>
              Tools in this category
            </h2>
            <p className='mt-2 text-sm leading-6 text-neutral-600'>
              Browse the main tools related to {category.name.toLowerCase()} and
              open the one that best matches your workflow.
            </p>
          </div>
        </div>

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

      {relatedGuides.length > 0 ? (
        <section className='mt-14'>
          <div>
            <h2 className='text-2xl font-semibold tracking-tight'>
              Guides in this category
            </h2>
            <p className='mt-2 text-sm leading-6 text-neutral-600'>
              Read step-by-step guides connected to{' '}
              {category.name.toLowerCase()} to learn common workflows, cleanup
              steps, conversions, and validation tasks.
            </p>
          </div>

          <div className='mt-6 grid gap-4 lg:grid-cols-2'>
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className='rounded-xl border border-neutral-200 p-5 transition hover:border-neutral-300 hover:shadow-sm'
              >
                <h3 className='text-lg font-semibold'>{guide.title}</h3>
                <p className='mt-2 text-sm leading-6 text-neutral-600'>
                  {guide.seoDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className='mt-16 max-w-4xl'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Explore {category.name.toLowerCase()}
        </h2>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          This category groups together tools and guides related to{' '}
          {category.name.toLowerCase()}. It helps you find the most relevant
          workflows faster, whether you need to convert files, validate
          structure, clean datasets, organize rows and columns, or prepare data
          for analysis, reporting, imports, and automation tasks.
        </p>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          Browsing by category makes it easier to move between related tools and
          step-by-step guides, so you can solve data tasks with a more complete
          workflow instead of using isolated tools one by one. This is
          especially useful when a task involves multiple steps such as cleaning
          a file, validating it, and converting it into another format.
        </p>
      </section>

      <section className='mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6'>
        <h2 className='text-xl font-semibold'>Recommended next step</h2>

        <p className='mt-3 text-sm leading-7 text-neutral-700'>
          Start with one of the tools listed above if you already know what you
          need to do. If you want more context first, open one of the guides in
          this category and follow the workflow step by step.
        </p>

        <div className='mt-5 flex flex-wrap gap-3'>
          <Link
            href='/tools'
            className='inline-flex rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white'
          >
            Open all tools
          </Link>

          <Link
            href='/guides'
            className='inline-flex rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-white'
          >
            Browse all guides
          </Link>
        </div>
      </section>
    </main>
  )
}
