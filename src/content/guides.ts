export type GuideConfig = {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  intro: string
  steps: string[]
  toolSlug: string
  relatedCategorySlugs: string[]
  relatedGuideSlugs?: string[]
}

export const guideRegistry: Record<string, GuideConfig> = {
  'how-to-convert-csv-to-json': {
    slug: 'how-to-convert-csv-to-json',
    title: 'How to Convert CSV to JSON',
    seoTitle: 'How to Convert CSV to JSON - Simple Step-by-Step Guide',
    seoDescription:
      'Learn how to convert CSV to JSON step by step using a simple online tool.',
    intro:
      'Converting CSV to JSON is useful when you need to move spreadsheet-style data into apps, APIs, scripts, or web workflows. This guide shows the simplest way to do it.',
    steps: [
      'Prepare your CSV file and make sure the headers are correct.',
      'Open the CSV to JSON tool.',
      'Upload your CSV file.',
      'Run the conversion.',
      'Copy or download the resulting JSON output.',
      'Validate the output before using it in your project or workflow.',
    ],
    toolSlug: 'csv-to-json',
    relatedCategorySlugs: ['csv-tools', 'file-conversion-tools'],
    relatedGuideSlugs: [
      'how-to-convert-json-to-csv',
      'how-to-clean-a-csv-file',
    ],
  },

  'how-to-convert-json-to-csv': {
    slug: 'how-to-convert-json-to-csv',
    title: 'How to Convert JSON to CSV',
    seoTitle: 'How to Convert JSON to CSV - Simple Step-by-Step Guide',
    seoDescription:
      'Learn how to convert JSON to CSV step by step using a simple online tool.',
    intro:
      'Converting JSON to CSV is useful when you need to analyze structured data in spreadsheets, reports, or business tools. This guide explains the easiest way to do it.',
    steps: [
      'Make sure your JSON data is valid and consistently structured.',
      'Open the JSON to CSV tool.',
      'Paste your JSON content into the input field.',
      'Run the conversion.',
      'Download the CSV result.',
      'Open the CSV in Excel or another spreadsheet tool to review it.',
    ],
    toolSlug: 'json-to-csv',
    relatedCategorySlugs: ['csv-tools', 'file-conversion-tools'],
    relatedGuideSlugs: ['how-to-convert-csv-to-json'],
  },

  'how-to-convert-csv-to-excel': {
    slug: 'how-to-convert-csv-to-excel',
    title: 'How to Convert CSV to Excel',
    seoTitle: 'How to Convert CSV to Excel - Step-by-Step Guide',
    seoDescription:
      'Learn how to convert CSV to Excel format step by step with a simple online tool.',
    intro:
      'CSV files are useful for portability, but Excel files are often easier to share, review, and edit in business workflows. This guide shows how to convert CSV to Excel quickly.',
    steps: [
      'Prepare your CSV file and confirm the columns are structured correctly.',
      'Open the CSV to Excel tool.',
      'Upload your CSV file.',
      'Run the conversion.',
      'Download the Excel file.',
      'Open the result in Excel to review formatting and values.',
    ],
    toolSlug: 'csv-to-excel',
    relatedCategorySlugs: ['excel-tools', 'file-conversion-tools'],
    relatedGuideSlugs: ['how-to-convert-excel-to-csv'],
  },

  'how-to-convert-excel-to-csv': {
    slug: 'how-to-convert-excel-to-csv',
    title: 'How to Convert Excel to CSV',
    seoTitle: 'How to Convert Excel to CSV - Step-by-Step Guide',
    seoDescription:
      'Learn how to convert Excel to CSV step by step with a simple online tool.',
    intro:
      'Converting Excel to CSV is common when importing spreadsheet data into systems, databases, CRMs, and automation workflows. This guide explains the simplest way to do it.',
    steps: [
      'Open or prepare your Excel file.',
      'Go to the Excel to CSV tool.',
      'Upload your spreadsheet file.',
      'Run the conversion.',
      'Download the CSV file.',
      'Check the resulting file before importing it into another system.',
    ],
    toolSlug: 'excel-to-csv',
    relatedCategorySlugs: ['excel-tools', 'file-conversion-tools'],
    relatedGuideSlugs: ['how-to-convert-csv-to-excel'],
  },

  'how-to-clean-a-csv-file': {
    slug: 'how-to-clean-a-csv-file',
    title: 'How to Clean a CSV File',
    seoTitle: 'How to Clean a CSV File - Practical Step-by-Step Guide',
    seoDescription:
      'Learn how to clean a CSV file by fixing messy data, removing extra spaces, and preparing rows and columns for analysis or import.',
    intro:
      'Cleaning a CSV file is often necessary before importing data into another system, generating reports, or sharing structured files with clients or teammates.',
    steps: [
      'Review the CSV structure and identify messy rows, blank values, or inconsistent formatting.',
      'Use a CSV cleaning tool to normalize the file.',
      'Remove duplicate rows if needed.',
      'Remove empty columns or unnecessary fields.',
      'Validate the final structure.',
      'Export the cleaned version for reuse or import.',
    ],
    toolSlug: 'csv-cleaner',
    relatedCategorySlugs: ['csv-tools', 'data-cleaning-tools'],
    relatedGuideSlugs: [
      'how-to-remove-duplicates-in-csv',
      'how-to-remove-empty-columns-in-csv',
      'how-to-validate-a-csv-file',
    ],
  },

  'how-to-remove-duplicates-in-csv': {
    slug: 'how-to-remove-duplicates-in-csv',
    title: 'How to Remove Duplicates in CSV',
    seoTitle: 'How to Remove Duplicates in CSV - Step-by-Step Guide',
    seoDescription:
      'Learn how to remove duplicate rows from a CSV file quickly and prepare cleaner data for reports, imports, or analysis.',
    intro:
      'Duplicate rows can create import issues, inaccurate reporting, and messy exports. This guide shows how to remove them quickly and safely.',
    steps: [
      'Open your CSV file and confirm which rows are duplicated.',
      'Go to the Remove Duplicates CSV tool.',
      'Upload the file.',
      'Run the tool.',
      'Download the cleaned file.',
      'Validate the result before using it in another workflow.',
    ],
    toolSlug: 'remove-duplicates-csv',
    relatedCategorySlugs: ['csv-tools', 'data-cleaning-tools'],
    relatedGuideSlugs: [
      'how-to-clean-a-csv-file',
      'how-to-remove-empty-columns-in-csv',
    ],
  },

  'how-to-remove-empty-columns-in-csv': {
    slug: 'how-to-remove-empty-columns-in-csv',
    title: 'How to Remove Empty Columns in CSV',
    seoTitle: 'How to Remove Empty Columns in CSV - Step-by-Step Guide',
    seoDescription:
      'Learn how to remove empty columns from a CSV file and simplify your dataset before sharing, importing, or analyzing it.',
    intro:
      'Empty columns make CSV files harder to read and can create problems in downstream workflows. This guide shows how to remove them easily.',
    steps: [
      'Review the CSV file and identify columns that contain no useful data.',
      'Open the Remove Empty Columns CSV tool.',
      'Upload your file.',
      'Run the tool.',
      'Download the cleaned CSV.',
      'Check the result before sending or importing it elsewhere.',
    ],
    toolSlug: 'remove-empty-columns-csv',
    relatedCategorySlugs: ['csv-tools', 'data-cleaning-tools'],
    relatedGuideSlugs: [
      'how-to-clean-a-csv-file',
      'how-to-remove-duplicates-in-csv',
    ],
  },

  'how-to-sort-a-csv-file': {
    slug: 'how-to-sort-a-csv-file',
    title: 'How to Sort a CSV File',
    seoTitle: 'How to Sort a CSV File - Step-by-Step Guide',
    seoDescription:
      'Learn how to sort a CSV file by a selected column for easier review, reporting, and analysis.',
    intro:
      'Sorting a CSV file helps organize records alphabetically or numerically so the data is easier to review, clean, and share.',
    steps: [
      'Decide which column you want to sort by.',
      'Open the CSV Sorter tool.',
      'Upload your CSV file.',
      'Enter the target column name.',
      'Run the tool.',
      'Download the sorted file and verify the order.',
    ],
    toolSlug: 'csv-sorter',
    relatedCategorySlugs: ['csv-tools', 'data-cleaning-tools'],
    relatedGuideSlugs: ['how-to-filter-csv-rows', 'how-to-clean-a-csv-file'],
  },

  'how-to-filter-csv-rows': {
    slug: 'how-to-filter-csv-rows',
    title: 'How to Filter CSV Rows',
    seoTitle: 'How to Filter CSV Rows - Step-by-Step Guide',
    seoDescription:
      'Learn how to filter CSV rows by column and value to keep only the records you need.',
    intro:
      'Filtering CSV rows is useful when you need to isolate a specific group of records before analysis, export, or import into another system.',
    steps: [
      'Identify the column and value you want to filter by.',
      'Open the CSV Filter Rows tool.',
      'Upload your CSV file.',
      'Enter the filter rule in the required format.',
      'Run the tool.',
      'Download or review the filtered result.',
    ],
    toolSlug: 'csv-filter-rows',
    relatedCategorySlugs: ['csv-tools', 'data-cleaning-tools'],
    relatedGuideSlugs: ['how-to-sort-a-csv-file', 'how-to-clean-a-csv-file'],
  },

  'how-to-validate-a-csv-file': {
    slug: 'how-to-validate-a-csv-file',
    title: 'How to Validate a CSV File',
    seoTitle: 'How to Validate a CSV File - Step-by-Step Guide',
    seoDescription:
      'Learn how to validate a CSV file and detect structural issues before import, export, or automation workflows.',
    intro:
      'Validating a CSV file helps detect inconsistent column counts, missing headers, and other structural issues before they cause bigger problems.',
    steps: [
      'Prepare the CSV file you want to check.',
      'Open the CSV Validator tool.',
      'Upload the file.',
      'Run the validation.',
      'Review any detected issues.',
      'Fix the file or continue if the structure is valid.',
    ],
    toolSlug: 'csv-validator',
    relatedCategorySlugs: ['csv-tools', 'data-cleaning-tools'],
    relatedGuideSlugs: [
      'how-to-clean-a-csv-file',
      'how-to-remove-empty-columns-in-csv',
    ],
  },
}

export const allGuides = Object.values(guideRegistry)
