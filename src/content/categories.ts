export type CategoryConfig = {
  slug: string
  name: string
  seoTitle: string
  seoDescription: string
  intro: string
  toolSlugs: string[]
  guideSlugs?: string[]
}

export const categoryRegistry: Record<string, CategoryConfig> = {
  'csv-tools': {
    slug: 'csv-tools',
    name: 'CSV Tools',
    seoTitle: 'CSV Tools - Free Online CSV Utilities',
    seoDescription:
      'Free online CSV tools to clean, validate, sort, filter, merge, split, and convert CSV files for imports, reporting, analysis, and automation workflows.',
    intro:
      'Explore free online CSV tools to clean messy spreadsheet exports, validate file structure, remove duplicates, sort rows, filter records, merge files, split files, and prepare CSV data for imports, reporting, analysis, and automation workflows.',
    toolSlugs: [
      'csv-to-json',
      'json-to-csv',
      'csv-cleaner',
      'remove-duplicates-csv',
      'merge-csv-files',
      'split-csv-file',
      'csv-column-remover',
      'remove-empty-columns-csv',
      'csv-column-selector',
      'csv-header-renamer',
      'csv-row-counter',
      'csv-sorter',
      'csv-filter-rows',
      'csv-add-column',
      'csv-remove-column-selectable',
      'csv-column-merger',
      'csv-validator',
    ],
    guideSlugs: [
      'how-to-convert-csv-to-json',
      'how-to-clean-a-csv-file',
      'how-to-remove-duplicates-in-csv',
      'how-to-sort-a-csv-file',
      'how-to-validate-a-csv-file',
      'how-to-prepare-a-csv-file-for-import',
      'how-to-fix-invalid-csv-file',
      'how-to-clean-large-csv-files-without-errors',
    ],
  },

  'excel-tools': {
    slug: 'excel-tools',
    name: 'Excel Tools',
    seoTitle: 'Excel Tools - Free Online Excel Utilities',
    seoDescription:
      'Free online Excel tools to convert Excel files, export spreadsheet data, and work with CSV and JSON formats.',
    intro:
      'Use these free Excel tools to convert spreadsheet files into CSV or JSON formats and prepare Excel data for other workflows.',
    toolSlugs: ['csv-to-excel', 'excel-to-csv', 'excel-to-json'],
    guideSlugs: ['how-to-convert-csv-to-excel', 'how-to-convert-excel-to-csv'],
  },

  'file-conversion-tools': {
    slug: 'file-conversion-tools',
    name: 'File Conversion Tools',
    seoTitle: 'File Conversion Tools - Free Online File Converters',
    seoDescription:
      'Convert files between CSV, JSON, and Excel formats with free online file conversion tools.',
    intro:
      'Convert data files between common formats like CSV, JSON, and Excel using simple online tools.',
    toolSlugs: [
      'csv-to-json',
      'json-to-csv',
      'csv-to-excel',
      'excel-to-csv',
      'excel-to-json',
      'excel-cleaner',
    ],
    guideSlugs: [
      'how-to-convert-csv-to-json',
      'how-to-convert-json-to-csv',
      'how-to-convert-csv-to-excel',
      'how-to-convert-excel-to-csv',
      'how-to-clean-messy-excel-data',
      'how-to-convert-excel-to-json',
    ],
  },

  'data-cleaning-tools': {
    slug: 'data-cleaning-tools',
    name: 'Data Cleaning Tools',
    seoTitle: 'Data Cleaning Tools - Free Online Data Cleanup Utilities',
    seoDescription:
      'Free online data cleaning tools to clean CSV files, validate structure, remove duplicates, delete empty columns, filter rows, and prepare data for imports, reports, analysis, and automation workflows.',
    intro:
      'Clean, validate, and prepare CSV data before imports, reporting, analytics, or automation workflows. Use these tools to remove duplicates, validate CSV structure, filter rows, organize columns, delete empty fields, and fix common formatting issues.',
    toolSlugs: [
      'csv-cleaner',
      'remove-duplicates-csv',
      'remove-empty-columns-csv',
      'csv-column-selector',
      'csv-header-renamer',
      'csv-filter-rows',
      'csv-remove-column-selectable',
      'csv-validator',
      'csv-sorter',
    ],
    guideSlugs: [
      'how-to-clean-a-csv-file',
      'how-to-remove-duplicates-in-csv',
      'how-to-validate-a-csv-file',
      'how-to-fix-invalid-csv-file',
      'how-to-prepare-a-csv-file-for-import',
      'how-to-remove-empty-columns-in-csv',
      'how-to-filter-csv-rows',
    ],
  },
}

export const allCategories = Object.values(categoryRegistry)
