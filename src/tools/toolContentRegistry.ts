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
  relatedTools?: {
    name: string
    slug: string
  }[]
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
      { name: 'CSV Column Selector', slug: 'csv-column-selector' },
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
      { name: 'CSV Remove Column', slug: 'csv-remove-column-selectable' },
      { name: 'CSV Validator', slug: 'csv-validator' },
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
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
      { name: 'Remove Empty Columns CSV', slug: 'remove-empty-columns-csv' },
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
      { name: 'CSV Filter Rows', slug: 'csv-filter-rows' },
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
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
      { name: 'CSV Column Selector', slug: 'csv-column-selector' },
      { name: 'CSV Add Column', slug: 'csv-add-column' },
      { name: 'CSV Validator', slug: 'csv-validator' },
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
      { name: 'CSV Column Selector', slug: 'csv-column-selector' },
      { name: 'CSV Sorter', slug: 'csv-sorter' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Remove Column', slug: 'csv-remove-column-selectable' },
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
      { name: 'CSV Filter Rows', slug: 'csv-filter-rows' },
      { name: 'CSV Column Selector', slug: 'csv-column-selector' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
    ],
  },
  'csv-column-selector': {
    what: 'This tool lets you keep only the CSV columns you need and remove the rest. It is useful when working with large exports that contain extra fields you do not want to keep.',

    howTo: [
      'Upload your CSV file.',
      'Enter the column names you want to keep, separated by commas.',
      'Click the "Run tool" button.',
      'Download the new CSV file with only the selected columns.',
    ],

    exampleInput: `name,age,country,email,phone
Maca,30,Brasil,maca@mail.com,123
Ana,25,Chile,ana@mail.com,456
Jose,28,Peru,jose@mail.com,789`,

    exampleOutput: `name,country
Maca,Brasil
Ana,Chile
Jose,Peru`,

    useCases: [
      'Remove unnecessary fields from exported reports.',
      'Prepare CSV files for clients or teammates.',
      'Simplify large datasets before analysis.',
      'Keep only the fields needed for another import process.',
    ],

    notes: [
      'Enter column names separated by commas.',
      'Column names must match the CSV headers exactly.',
      'The selected columns keep the same order you entered.',
    ],

    faqs: [
      {
        question: 'How should I enter the columns?',
        answer: 'Use commas to separate them. For example: name,country,email.',
      },
      {
        question: 'What happens if a column does not exist?',
        answer:
          'The tool will show an error message and will not generate the output file.',
      },
      {
        question: 'Can I reorder columns too?',
        answer:
          'Yes. The output follows the order in which you list the selected columns.',
      },
    ],

    relatedTools: [
      { name: 'CSV Remove Column', slug: 'csv-remove-column-selectable' },
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
      { name: 'CSV Filter Rows', slug: 'csv-filter-rows' },
      { name: 'Remove Empty Columns CSV', slug: 'remove-empty-columns-csv' },
    ],
  },
  'csv-header-renamer': {
    what: 'This tool renames one or more CSV headers using a simple mapping format. It is useful when you need to standardize column names before importing data into another tool or workflow.',

    howTo: [
      'Upload your CSV file.',
      'Enter the header changes using this format: oldName=newName.',
      'Use commas to separate multiple changes.',
      'Click the "Run tool" button and download the updated CSV.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    exampleOutput: `full_name,age,location
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    useCases: [
      'Standardize column names before import.',
      'Rename technical headers to simpler labels.',
      'Prepare CSV files for clients or reports.',
      'Adapt exported files to another system format.',
    ],

    notes: [
      'Use this format: oldName=newName.',
      'Separate multiple changes with commas.',
      'Headers that are not renamed remain unchanged.',
    ],

    faqs: [
      {
        question: 'How do I rename multiple headers?',
        answer:
          'Use commas to separate each mapping. Example: name=full_name,country=location.',
      },
      {
        question: 'Do I need to rename every column?',
        answer: 'No. You can rename only the columns you want to change.',
      },
      {
        question: 'What happens if a header does not exist?',
        answer:
          'The tool will show an error and stop until you use valid header names.',
      },
    ],

    relatedTools: [
      { name: 'CSV Column Selector', slug: 'csv-column-selector' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Column Merger', slug: 'csv-column-merger' },
      { name: 'CSV Add Column', slug: 'csv-add-column' },
    ],
  },
  'csv-add-column': {
    what: 'This tool adds a new column to your CSV file and fills it with the same value for all rows. It is useful when you need to label, tag, or standardize records before exporting or importing data.',

    howTo: [
      'Upload your CSV file.',
      'Enter the new column instruction using this format: newColumn=value.',
      'Click the "Run tool" button.',
      'Download the updated CSV file.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    exampleOutput: `name,age,country,status
Maca,30,Brasil,active
Ana,25,Chile,active
Jose,28,Peru,active`,

    useCases: [
      'Add a status field to all rows.',
      'Mark imported records with a source label.',
      'Create a constant category or tag before importing data elsewhere.',
      'Standardize exported CSV files with extra metadata.',
    ],

    notes: [
      'Use this format: newColumn=value.',
      'The new column is added at the end of the CSV.',
      'The same value is applied to all rows.',
      'The tool will show an error if the column already exists.',
    ],

    faqs: [
      {
        question: 'What format should I use?',
        answer: 'Use this format: newColumn=value. For example: status=active.',
      },
      {
        question: 'Can I use a different value for each row?',
        answer:
          'Not in this first version. The tool applies the same value to every row.',
      },
      {
        question: 'What happens if the column already exists?',
        answer:
          'The tool will stop and show an error message to avoid overwriting existing data.',
      },
    ],

    relatedTools: [
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
      { name: 'CSV Column Merger', slug: 'csv-column-merger' },
      { name: 'CSV Filter Rows', slug: 'csv-filter-rows' },
      { name: 'CSV Remove Column', slug: 'csv-remove-column-selectable' },
    ],
  },
  'csv-remove-column-selectable': {
    what: 'This tool removes a specific column from your CSV file. It is useful when you want to delete unnecessary fields before exporting, sharing, or importing data into another system.',

    howTo: [
      'Upload your CSV file.',
      'Enter the name of the column you want to remove.',
      'Click the "Run tool" button.',
      'Download the updated CSV file.',
    ],

    exampleInput: `name,age,country,email
Maca,30,Brasil,maca@mail.com
Ana,25,Chile,ana@mail.com
Jose,28,Peru,jose@mail.com`,

    exampleOutput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    useCases: [
      'Remove private or unnecessary fields from exported data.',
      'Delete columns before sending files to clients or teammates.',
      'Simplify CSV files before importing them elsewhere.',
      'Clean reports by removing irrelevant fields.',
    ],

    notes: [
      'Enter the column name exactly as it appears in the CSV header.',
      'This tool removes only one selected column at a time.',
      'The original file is not changed.',
      'You cannot remove the only remaining column in a CSV file.',
    ],

    faqs: [
      {
        question: 'How do I choose the column to remove?',
        answer: 'Type the exact header name of the column you want to delete.',
      },
      {
        question: 'Can I remove more than one column at once?',
        answer:
          'Not in this first version. The tool currently removes one column at a time.',
      },
      {
        question: 'What happens if the column does not exist?',
        answer:
          'The tool will show an error message and no file will be generated.',
      },
    ],

    relatedTools: [
      { name: 'CSV Column Selector', slug: 'csv-column-selector' },
      { name: 'Remove Empty Columns CSV', slug: 'remove-empty-columns-csv' },
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
      { name: 'CSV Validator', slug: 'csv-validator' },
    ],
  },
}
