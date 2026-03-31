import { allCategories } from './categories'

export function getCategoriesForTool(toolSlug: string) {
  return allCategories.filter((category) =>
    category.toolSlugs.includes(toolSlug),
  )
}
