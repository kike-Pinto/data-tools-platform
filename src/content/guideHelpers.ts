import { allGuides } from './guides'

export function getGuideForTool(toolSlug: string) {
  return allGuides.find((guide) => guide.toolSlug === toolSlug) ?? null
}
