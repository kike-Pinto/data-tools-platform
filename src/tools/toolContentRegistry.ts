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
  'csv-validator': {
    what: 'This tool checks whether your CSV file has a valid structure. It detects problems such as inconsistent column counts, missing headers, or duplicated column names that may cause import errors.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Review the validation result.',
      'Fix any detected issues if needed.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25
Jose,28,Peru`,

    exampleOutput: `CSV is invalid: inconsistent column count in row(s) 3.`,

    useCases: [
      'Check CSV files before importing them into another system.',
      'Detect formatting problems that cause upload failures.',
      'Validate exported reports before sharing them.',
      'Troubleshoot CSV import errors.',
    ],

    notes: [
      'All rows must contain the same number of columns.',
      'Duplicate headers are not allowed.',
      'Empty files are considered invalid.',
    ],

    faqs: [
      {
        question: 'What makes a CSV invalid?',
        answer:
          'A CSV file is invalid when rows contain different numbers of columns or when duplicate headers exist.',
      },
      {
        question: 'Does this tool fix CSV errors?',
        answer:
          'No. This tool only detects structural issues. You can fix them manually or using other tools.',
      },
      {
        question: 'Can this help with CSV import errors?',
        answer:
          'Yes. Many import failures happen due to inconsistent column counts or missing headers.',
      },
    ],

    relatedTools: [
      'CSV Cleaner',
      'Remove Empty Columns CSV',
      'CSV Header Renamer',
      'CSV Filter Rows',
    ],
  },
  'csv-column-merger': {
    what: 'This tool merges two CSV columns into a new single column. It is useful when you want to combine separate fields like first name and last name into one value before exporting or importing data.',

    howTo: [
      'Upload your CSV file.',
      'Enter the merge instruction using this format: column1,column2=newColumn.',
      'Click the "Run tool" button.',
      'Download the merged CSV file.',
    ],

    exampleInput: `first_name,last_name,age
Maca,Soto,30
Ana,Perez,25
Jose,Rojas,28`,

    exampleOutput: `full_name,age
Maca Soto,30
Ana Perez,25
Jose Rojas,28`,

    useCases: [
      'Combine first name and last name into a full name column.',
      'Prepare CSV files for systems that require a single field instead of two separate ones.',
      'Simplify exported datasets before sharing them.',
      'Standardize file structure before importing into another platform.',
    ],

    notes: [
      'This version merges exactly two columns.',
      'The two original columns are removed after merging.',
      'The new merged column is inserted where the first selected column was located.',
      'Values are joined with a space.',
    ],

    faqs: [
      {
        question: 'What format should I use?',
        answer:
          'Use this format: column1,column2=newColumn. For example: first_name,last_name=full_name.',
      },
      {
        question: 'Does the tool keep the original columns?',
        answer:
          'No. This version removes the two original columns and replaces them with the new merged column.',
      },
      {
        question: 'Can I merge more than two columns?',
        answer:
          'Not in this first version. This tool currently supports merging exactly two columns.',
      },
    ],

    relatedTools: [
      'CSV Header Renamer',
      'CSV Column Selector',
      'CSV Add Column',
      'CSV Validator',
    ],
  },
  'csv-filter-rows': {
    what: 'This tool filters CSV rows by matching a specific column and value. It helps you keep only the rows that match the condition you enter, which is useful for cleaning reports, exports, or segmented datasets.',

    howTo: [
      'Upload your CSV file.',
      'Enter the filter using this format: column=value.',
      'Click the "Run tool" button.',
      'Download the filtered CSV file or review the result.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru
Marta,25,Chile`,

    exampleOutput: `name,age,country
Ana,25,Chile
Marta,25,Chile`,

    useCases: [
      'Keep only rows from one country, category, or status.',
      'Filter exported reports before sharing them.',
      'Prepare segmented CSV files for analysis.',
      'Reduce large datasets to only the records you need.',
    ],

    notes: [
      'Use this format: column=value.',
      'This first version uses exact matching.',
      'Text matching is case-insensitive.',
      'If no rows match, the tool will show a message instead of a file.',
    ],

    faqs: [
      {
        question: 'What format should I use?',
        answer: 'Use this format: column=value. For example: country=Chile.',
      },
      {
        question: 'Does uppercase or lowercase matter?',
        answer: 'No. This version compares text without case sensitivity.',
      },
      {
        question: 'Can I use multiple filters at once?',
        answer:
          'Not in this first version. The tool currently supports one filter at a time.',
      },
    ],

    relatedTools: [
      'CSV Column Selector',
      'CSV Sorter',
      'CSV Validator',
      'CSV Remove Column',
    ],
  },
  'csv-sorter': {
    what: 'This tool sorts CSV rows by a selected column. It is useful for organizing data alphabetically or numerically before reviewing, sharing, or importing the file into another system.',

    howTo: [
      'Upload your CSV file.',
      'Enter the name of the column you want to sort by.',
      'Click the "Run tool" button.',
      'Download the sorted CSV file.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    exampleOutput: `name,age,country
Ana,25,Chile
Jose,28,Peru
Maca,30,Brasil`,

    useCases: [
      'Sort rows alphabetically by name or category.',
      'Sort numeric values such as age, price, or quantity.',
      'Prepare cleaner reports before exporting them.',
      'Organize datasets before manual review.',
    ],

    notes: [
      'This version sorts in ascending order only.',
      'Text and numbers are supported.',
      'Date columns may not sort correctly unless they use a consistent format.',
      'Empty values may appear first depending on the data.',
    ],

    faqs: [
      {
        question: 'Can I sort by numbers?',
        answer:
          'Yes. If values look numeric, the tool will try to sort them as numbers.',
      },
      {
        question: 'Can I sort in descending order?',
        answer:
          'Not in this first version. The current tool sorts in ascending order only.',
      },
      {
        question: 'Why did my date column not sort correctly?',
        answer:
          'Date values may be interpreted as text if they do not follow a consistent sortable format.',
      },
    ],

    relatedTools: [
      'CSV Filter Rows',
      'CSV Column Selector',
      'CSV Validator',
      'CSV Header Renamer',
    ],
  },
}
