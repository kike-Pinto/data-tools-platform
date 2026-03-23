type ToolContentItem = {
  what?: string
  howTo?: string[]
  exampleInput?: string
  exampleOutput?: string
  useCases?: string[]
  notes?: string[]
  faqs?: {
    question: string
    answer: string
  }[]
  relatedTools?: string[]
}

export const toolContentRegistry: Record<string, ToolContentItem> = {
  'remove-empty-columns-csv': {
    what: 'This tool removes empty columns from your CSV file automatically. It scans each column and deletes the ones that contain no values, helping you clean your data before exporting, sharing, or importing it into another system.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to detect columns with no values.',
      'Download the cleaned CSV file.',
    ],

    exampleInput: `name,age,country,notes
Maca,30,Brasil,
Ana,25,Chile,
Jose,28,Peru,`,

    exampleOutput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    useCases: [
      'Clean exported CSV files before importing them into another platform.',
      'Remove blank fields from CRM or ERP exports.',
      'Simplify datasets before sending them to clients or teammates.',
      'Prepare cleaner files for reporting or analysis.',
    ],

    notes: [
      'A column is removed only if all rows are empty in that column.',
      'Columns with at least one value will be kept.',
      'Your original CSV file is not modified.',
    ],

    faqs: [
      {
        question: 'Does this tool delete my original file?',
        answer:
          'No. The tool only generates a cleaned copy for download. Your original file stays unchanged.',
      },
      {
        question: 'What counts as an empty column?',
        answer:
          'A column is considered empty when all its cells have no value after basic normalization.',
      },
      {
        question: 'Will columns with some values be removed?',
        answer:
          'No. If a column contains at least one non-empty value, it will remain in the output file.',
      },
    ],

    relatedTools: [
      'CSV Column Selector',
      'CSV Header Renamer',
      'CSV Remove Column',
      'CSV Validator',
    ],
  },
}
