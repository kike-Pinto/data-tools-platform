import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { guideRegistry } from '@/content/guides'
import { categoryRegistry } from '@/content/categories'
import { toolRegistry } from '@/tools/registry'
import { siteConfig } from '@/config/site'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(guideRegistry).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guideRegistry[slug]

  if (!guide) {
    return {
      title: 'Guide not found',
      description: 'The requested guide could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const guideUrl = `${siteConfig.url}/guides/${guide.slug}`

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      type: 'article',
      url: guideUrl,
      title: guide.seoTitle,
      description: guide.seoDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seoTitle,
      description: guide.seoDescription,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = guideRegistry[slug]

  if (!guide) {
    notFound()
  }

  const tool = toolRegistry[guide.toolSlug]

  if (!tool) {
    notFound()
  }

  const relatedCategories = guide.relatedCategorySlugs
    .map((categorySlug) => categoryRegistry[categorySlug])
    .filter(Boolean)

  const relatedGuides = (guide.relatedGuideSlugs ?? [])
    .map((guideSlug) => guideRegistry[guideSlug])
    .filter(Boolean)

  return (
    <main className='mx-auto w-full max-w-4xl px-6 py-10'>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides' },
          { label: guide.title },
        ]}
      />

      <article className='max-w-3xl'>
        <p className='text-sm font-medium text-neutral-500'>Guide</p>

        <h1 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          {guide.title}
        </h1>

        <p className='mt-4 text-base leading-7 text-neutral-600'>
          {guide.intro}
        </p>

        <div className='mt-8 rounded-2xl border border-neutral-200 p-6'>
          <h2 className='text-xl font-semibold'>Use the tool</h2>
          <p className='mt-2 text-sm leading-6 text-neutral-600'>
            The fastest way to complete this task is to use our free{' '}
            <Link
              href={`/tools/${tool.slug}`}
              className='font-medium text-neutral-900 underline underline-offset-4'
            >
              {tool.name}
            </Link>
            .
          </p>

          <div className='mt-4'>
            <Link
              href={`/tools/${tool.slug}`}
              className='inline-flex rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white'
            >
              Open {tool.name}
            </Link>
          </div>
        </div>

        <section className='mt-10'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Step-by-step
          </h2>

          <ol className='mt-4 space-y-4'>
            {guide.steps.map((step, index) => (
              <li
                key={`${guide.slug}-step-${index}`}
                className='rounded-xl border border-neutral-200 p-4'
              >
                <p className='text-sm font-medium text-neutral-500'>
                  Step {index + 1}
                </p>
                <p className='mt-2 text-sm leading-6 text-neutral-700'>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {relatedCategories.length > 0 ? (
          <section className='mt-10'>
            <h2 className='text-2xl font-semibold tracking-tight'>
              Related categories
            </h2>

            <div className='mt-4 flex flex-wrap gap-2'>
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

        {relatedGuides.length > 0 ? (
          <section className='mt-10'>
            <h2 className='text-2xl font-semibold tracking-tight'>
              Related guides
            </h2>

            <div className='mt-4 space-y-3'>
              {relatedGuides.map((relatedGuide) => (
                <Link
                  key={relatedGuide.slug}
                  href={`/guides/${relatedGuide.slug}`}
                  className='block rounded-xl border border-neutral-200 p-4 transition hover:border-neutral-300 hover:shadow-sm'
                >
                  <h3 className='text-base font-semibold'>
                    {relatedGuide.title}
                  </h3>
                  <p className='mt-1 text-sm leading-6 text-neutral-600'>
                    {relatedGuide.seoDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  )
}
