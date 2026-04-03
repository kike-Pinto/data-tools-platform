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
  'csv-to-json': {
    what: 'This tool converts CSV data into JSON format automatically. It is useful when you need to transform spreadsheet-style rows into structured objects for apps, APIs, scripts, or web development workflows.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to convert the rows into JSON objects.',
      'Copy the JSON output or download the result if available.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    exampleOutput: `[
  {
    "name": "Maca",
    "age": "30",
    "country": "Brasil"
  },
  {
    "name": "Ana",
    "age": "25",
    "country": "Chile"
  },
  {
    "name": "Jose",
    "age": "28",
    "country": "Peru"
  }
]`,

    useCases: [
      'Convert spreadsheet exports into JSON for apps or APIs.',
      'Prepare tabular data for scripts and automation workflows.',
      'Transform CSV files into developer-friendly structured data.',
      'Make exported rows easier to use in web projects.',
    ],

    notes: [
      'CSV headers are used as the property names in the JSON output.',
      'All values are typically converted as text unless extra parsing logic is added later.',
      'It is a good idea to clean the CSV first if the file contains messy rows or extra spaces.',
    ],

    faqs: [
      {
        question: 'Why convert CSV to JSON?',
        answer:
          'JSON is easier to use in apps, APIs, and scripts than raw CSV files.',
      },
      {
        question: 'Do column headers matter?',
        answer:
          'Yes. The CSV headers usually become the keys in the generated JSON objects.',
      },
      {
        question: 'Should I validate or clean the CSV first?',
        answer:
          'Yes. Cleaner and more consistent CSV files usually produce better JSON output.',
      },
    ],

    relatedTools: [
      { name: 'JSON to CSV', slug: 'json-to-csv' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV to Excel', slug: 'csv-to-excel' },
    ],
  },
  'json-to-csv': {
    what: 'This tool converts JSON data into CSV format automatically. It is useful when you want to turn structured objects into rows and columns that can be opened in Excel, reviewed in spreadsheets, or shared in business workflows.',

    howTo: [
      'Paste your JSON data into the text input.',
      'Click the "Run tool" button.',
      'Wait for the tool to convert the JSON into CSV format.',
      'Download the CSV file or review the output.',
    ],

    exampleInput: `[
  {
    "name": "Maca",
    "age": "30",
    "country": "Brasil"
  },
  {
    "name": "Ana",
    "age": "25",
    "country": "Chile"
  },
  {
    "name": "Jose",
    "age": "28",
    "country": "Peru"
  }
]`,

    exampleOutput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    useCases: [
      'Turn API or app data into spreadsheet-friendly files.',
      'Prepare JSON-based data for Excel or CSV imports.',
      'Share structured technical data with non-technical teammates.',
      'Convert JSON objects into a format that is easier to inspect manually.',
    ],

    notes: [
      'The JSON input should be valid before conversion.',
      'This works best when the objects follow a consistent structure.',
      'Nested JSON may require flattening or a simpler structure to produce clean columns.',
    ],

    faqs: [
      {
        question: 'Why convert JSON to CSV?',
        answer:
          'CSV is easier to review in spreadsheets and is often better for sharing and reporting workflows.',
      },
      {
        question: 'Does the JSON need to be valid?',
        answer:
          'Yes. Invalid JSON can break the conversion or produce incomplete output.',
      },
      {
        question: 'Can nested JSON be harder to convert?',
        answer:
          'Yes. Deeply nested structures may not map cleanly into simple CSV columns.',
      },
    ],

    relatedTools: [
      { name: 'CSV to JSON', slug: 'csv-to-json' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
      { name: 'Excel to CSV', slug: 'excel-to-csv' },
    ],
  },
  'csv-cleaner': {
    what: 'This tool cleans CSV data automatically so your file is easier to review, share, and import into other systems. It is useful when your CSV contains messy formatting, inconsistent spacing, or general structural noise.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to clean and normalize the data.',
      'Download the cleaned CSV file.',
    ],

    exampleInput: `name, age ,country
Maca, 30 , Brasil
 Ana ,25,Chile
Jose , 28, Peru`,

    exampleOutput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    useCases: [
      'Clean messy CSV exports before importing them into another platform.',
      'Normalize formatting before reporting or analysis.',
      'Prepare exported files for teammates or clients.',
      'Reduce manual cleanup work on administrative datasets.',
    ],

    notes: [
      'This first version focuses on general cleanup and normalization.',
      'It is still a good idea to validate the CSV after cleaning it.',
      'You may want to use related tools afterward to remove duplicates or delete empty columns.',
    ],

    faqs: [
      {
        question: 'What does this tool clean?',
        answer:
          'It helps normalize messy CSV formatting so the file is easier to use in later workflows.',
      },
      {
        question: 'Should I validate the CSV after cleaning it?',
        answer:
          'Yes. Validation is a good final check before importing or sharing the cleaned file.',
      },
      {
        question: 'Can this replace all manual CSV cleanup?',
        answer:
          'It can reduce a lot of repetitive cleanup work, but some files may still need manual review depending on the data.',
      },
    ],

    relatedTools: [
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'Remove Duplicates CSV', slug: 'remove-duplicates-csv' },
      { name: 'Remove Empty Columns CSV', slug: 'remove-empty-columns-csv' },
      { name: 'CSV Filter Rows', slug: 'csv-filter-rows' },
    ],
  },
  'remove-duplicates-csv': {
    what: 'This tool removes duplicate rows from your CSV file automatically. It is useful when exported data contains repeated records that make reports inaccurate, imports messy, or datasets harder to trust.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to detect and remove duplicate rows.',
      'Download the cleaned CSV file.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Maca,30,Brasil
Jose,28,Peru`,

    exampleOutput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    useCases: [
      'Remove repeated records from exported reports.',
      'Prepare cleaner CSV files before importing them into another tool.',
      'Improve accuracy in reporting and analysis.',
      'Reduce noise in files shared with clients or teammates.',
    ],

    notes: [
      'This version removes rows that are exactly duplicated.',
      'It is a good idea to review the output if repeated-looking rows might still be valid records.',
      'You can validate the final result after deduplication.',
    ],

    faqs: [
      {
        question: 'Why remove duplicates from a CSV file?',
        answer:
          'Duplicate rows can distort reports, create import issues, and make the dataset less reliable.',
      },
      {
        question: 'Does this remove only exact duplicates?',
        answer: 'Yes. This first version is intended for exact duplicate rows.',
      },
      {
        question: 'Should I review the result afterward?',
        answer:
          'Yes. Some datasets may contain repeated-looking rows that still need human review.',
      },
    ],

    relatedTools: [
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'Remove Empty Columns CSV', slug: 'remove-empty-columns-csv' },
      { name: 'CSV Sorter', slug: 'csv-sorter' },
    ],
  },
  'csv-to-excel': {
    what: 'This tool converts CSV files into Excel format automatically. It is useful when you need a spreadsheet file that is easier to review, share, and open in Excel-based office workflows.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to convert the file into Excel format.',
      'Download the generated Excel file.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    exampleOutput: `An Excel file containing the same rows and columns from the original CSV.`,

    useCases: [
      'Convert plain CSV exports into Excel files for easier review.',
      'Prepare files for teammates who prefer spreadsheet formats.',
      'Turn CSV data into a more familiar office workflow format.',
      'Share tabular data in a format that is easier to open and edit.',
    ],

    notes: [
      'CSV stores plain tabular data, so advanced spreadsheet styling is not preserved automatically.',
      'It is a good idea to review the resulting Excel file after conversion.',
      'This tool is useful when another person expects an Excel file instead of CSV.',
    ],

    faqs: [
      {
        question: 'Why convert CSV to Excel?',
        answer:
          'Excel files are often easier to review, edit, and share in office workflows.',
      },
      {
        question: 'Will the Excel file keep rich formatting?',
        answer:
          'Not necessarily. CSV mainly stores raw table data, not rich spreadsheet formatting.',
      },
      {
        question: 'Should I clean the CSV before converting?',
        answer:
          'Yes. A cleaner CSV usually produces a cleaner spreadsheet result.',
      },
    ],

    relatedTools: [
      { name: 'Excel to CSV', slug: 'excel-to-csv' },
      { name: 'CSV to JSON', slug: 'csv-to-json' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
      { name: 'CSV Validator', slug: 'csv-validator' },
    ],
  },
  'excel-to-csv': {
    what: 'This tool converts Excel files into CSV format automatically. It is useful when you need to prepare spreadsheet data for systems, imports, databases, or workflows that require a plain CSV file.',

    howTo: [
      'Upload your Excel file.',
      'Click the "Run tool" button.',
      'Wait for the tool to convert the spreadsheet into CSV format.',
      'Download the generated CSV file.',
    ],

    exampleInput: `An Excel file with columns such as name, age, and country.`,

    exampleOutput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    useCases: [
      'Prepare spreadsheet data for systems that only accept CSV uploads.',
      'Convert Excel reports into a lighter plain text format.',
      'Export spreadsheet content for databases or automation workflows.',
      'Make Excel-based data easier to process in tools that prefer CSV.',
    ],

    notes: [
      'CSV does not preserve formulas, cell colors, or advanced spreadsheet formatting.',
      'It is important to review the CSV result before importing it into another system.',
      'This tool is especially useful for upload and import workflows.',
    ],

    faqs: [
      {
        question: 'Why convert Excel to CSV?',
        answer:
          'Many platforms and import workflows accept CSV more easily than Excel files.',
      },
      {
        question: 'Will formulas and formatting stay in the CSV?',
        answer:
          'No. CSV is designed for plain tabular values, not formulas or rich formatting.',
      },
      {
        question: 'Should I review the CSV after conversion?',
        answer:
          'Yes. Reviewing the output helps confirm the structure is correct before import or reuse.',
      },
    ],

    relatedTools: [
      { name: 'CSV to Excel', slug: 'csv-to-excel' },
      { name: 'Excel to JSON', slug: 'excel-to-json' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
    ],
  },
  'excel-to-json': {
    what: 'This tool converts Excel files into JSON format automatically. It is useful when you need to transform spreadsheet data into structured objects for apps, APIs, scripts, or web workflows.',

    howTo: [
      'Upload your Excel file.',
      'Click the "Run tool" button.',
      'Wait for the tool to convert the spreadsheet into JSON format.',
      'Copy the JSON output or download it if available.',
    ],

    exampleInput: `An Excel file with columns such as name, age, and country.`,

    exampleOutput: `[
  {
    "name": "Maca",
    "age": "30",
    "country": "Brasil"
  },
  {
    "name": "Ana",
    "age": "25",
    "country": "Chile"
  },
  {
    "name": "Jose",
    "age": "28",
    "country": "Peru"
  }
]`,

    useCases: [
      'Convert spreadsheet data into JSON for apps or APIs.',
      'Prepare Excel-based data for scripts and automation workflows.',
      'Transform administrative spreadsheets into developer-friendly structured data.',
      'Move Excel content into a format easier to use in web projects.',
    ],

    notes: [
      'Spreadsheet column names are typically used as JSON property names.',
      'CSV and Excel cleanup before conversion can improve output quality.',
      'It is a good idea to review the resulting JSON before using it in production workflows.',
    ],

    faqs: [
      {
        question: 'Why convert Excel to JSON?',
        answer:
          'JSON is easier to use in modern apps, APIs, scripts, and structured data workflows than spreadsheet files.',
      },
      {
        question: 'Do spreadsheet headers matter?',
        answer:
          'Yes. They usually become the keys in the generated JSON objects.',
      },
      {
        question: 'Should I clean the spreadsheet before converting?',
        answer:
          'Yes. Cleaner source data usually leads to cleaner JSON output.',
      },
    ],

    relatedTools: [
      { name: 'Excel to CSV', slug: 'excel-to-csv' },
      { name: 'CSV to JSON', slug: 'csv-to-json' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
    ],
  },
  'merge-csv-files': {
    what: 'This tool merges multiple CSV files into one single CSV file. It is useful when you need to combine exports, reports, or datasets that share the same structure into one unified file.',

    howTo: [
      'Upload the CSV files you want to merge.',
      'Click the "Run tool" button.',
      'Wait for the tool to combine the files into one output.',
      'Download the merged CSV file.',
    ],

    exampleInput: `file 1
name,age,country
Maca,30,Brasil
Ana,25,Chile

file 2
name,age,country
Jose,28,Peru
Marta,31,Chile`,

    exampleOutput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru
Marta,31,Chile`,

    useCases: [
      'Combine multiple CSV exports into one report.',
      'Join files from different teams, dates, or sources.',
      'Prepare a unified dataset before analysis or import.',
      'Reduce manual copy-paste work across similar CSV files.',
    ],

    notes: [
      'This works best when all CSV files follow the same column structure.',
      'It is a good idea to validate the merged file after combining it.',
      'If headers differ between files, the output may need manual review.',
    ],

    faqs: [
      {
        question: 'Can I merge CSV files with different columns?',
        answer:
          'This first version works best when the files share the same headers and structure.',
      },
      {
        question: 'Why merge CSV files?',
        answer:
          'Merging is useful when you want one consolidated file instead of several separate exports.',
      },
      {
        question: 'Should I validate the final file?',
        answer:
          'Yes. Validation helps confirm the merged structure is still consistent.',
      },
    ],

    relatedTools: [
      { name: 'Split CSV File', slug: 'split-csv-file' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
      { name: 'CSV Sorter', slug: 'csv-sorter' },
    ],
  },
  'split-csv-file': {
    what: 'This tool splits one CSV file into smaller CSV files automatically. It is useful when your dataset is too large to manage easily or when you need to break one export into smaller parts.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to split the file into smaller parts.',
      'Download the generated split CSV files.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru
Marta,31,Chile`,

    exampleOutput: `multiple smaller CSV files generated from the original dataset`,

    useCases: [
      'Break large CSV files into smaller files for easier review.',
      'Prepare smaller chunks for sharing or import.',
      'Reduce file size when a platform has upload limits.',
      'Organize one large export into more manageable parts.',
    ],

    notes: [
      'This is useful when one CSV file is too large for manual handling.',
      'You should review the split outputs to confirm the expected distribution of rows.',
      'If needed, validate the resulting files before import or sharing.',
    ],

    faqs: [
      {
        question: 'Why split a CSV file?',
        answer:
          'Splitting makes large datasets easier to handle, share, and process.',
      },
      {
        question: 'Can splitting help with upload limits?',
        answer:
          'Yes. Smaller CSV files can be useful when a platform limits file size or row count.',
      },
      {
        question: 'Should I validate the split files afterward?',
        answer:
          'Yes. It is a good idea to confirm each output file still has a valid structure.',
      },
    ],

    relatedTools: [
      { name: 'Merge CSV Files', slug: 'merge-csv-files' },
      { name: 'CSV Validator', slug: 'csv-validator' },
      { name: 'CSV Row Counter', slug: 'csv-row-counter' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
    ],
  },
  'csv-row-counter': {
    what: 'This tool counts the number of rows in a CSV file automatically. It is useful when you need a quick way to measure dataset size before reporting, splitting, cleaning, or importing a file.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to count the rows.',
      'Review the result shown by the tool.',
    ],

    exampleInput: `name,age,country
Maca,30,Brasil
Ana,25,Chile
Jose,28,Peru`,

    exampleOutput: `Total rows: 3`,

    useCases: [
      'Check dataset size before importing a CSV file.',
      'Measure how large an export is before splitting it.',
      'Quickly review row counts in reports or administrative datasets.',
      'Confirm whether a cleaned or filtered file contains the expected number of records.',
    ],

    notes: [
      'This tool is useful as a quick inspection step before other operations.',
      'You can use it before splitting, filtering, or validating a file.',
      'The result usually refers to data rows, not just the header line.',
    ],

    faqs: [
      {
        question: 'Why count rows in a CSV file?',
        answer:
          'Row counts help you understand dataset size before cleanup, reporting, import, or splitting.',
      },
      {
        question: 'Can this help before splitting a file?',
        answer:
          'Yes. Knowing the row count makes it easier to decide how to split a large file.',
      },
      {
        question: 'Can row counting help validate expectations?',
        answer:
          'Yes. It is useful for checking whether a file contains the number of records you expected.',
      },
    ],

    relatedTools: [
      { name: 'Split CSV File', slug: 'split-csv-file' },
      { name: 'CSV Filter Rows', slug: 'csv-filter-rows' },
      { name: 'CSV Sorter', slug: 'csv-sorter' },
      { name: 'CSV Validator', slug: 'csv-validator' },
    ],
  },
  'csv-column-remover': {
    what: 'This tool removes columns from a CSV file automatically. It is useful when you want to delete unnecessary fields before exporting, sharing, or importing the file into another system.',

    howTo: [
      'Upload your CSV file.',
      'Click the "Run tool" button.',
      'Wait for the tool to remove the target columns based on the tool logic.',
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
      'Remove unnecessary fields from exported reports.',
      'Delete private or irrelevant columns before sharing files.',
      'Simplify CSV files before another import process.',
      'Reduce clutter in wide datasets.',
    ],

    notes: [
      'Column removal is useful when a file contains extra fields you do not want to keep.',
      'It is a good idea to review the output to confirm the right columns were removed.',
      'If you need more control, you may prefer tools like CSV Column Selector or CSV Remove Column.',
    ],

    faqs: [
      {
        question: 'Why remove columns from a CSV file?',
        answer:
          'Removing columns helps simplify datasets, reduce clutter, and prepare files for sharing or import.',
      },
      {
        question: 'Should I review the file after removing columns?',
        answer:
          'Yes. Reviewing the output helps confirm the final structure is correct.',
      },
      {
        question: 'Is this useful before sending files to others?',
        answer:
          'Yes. It can help remove private, irrelevant, or unnecessary fields before sharing.',
      },
    ],

    relatedTools: [
      { name: 'CSV Column Selector', slug: 'csv-column-selector' },
      { name: 'CSV Remove Column', slug: 'csv-remove-column-selectable' },
      { name: 'CSV Header Renamer', slug: 'csv-header-renamer' },
      { name: 'Remove Empty Columns CSV', slug: 'remove-empty-columns-csv' },
    ],
  },
  'excel-cleaner': {
    what: 'This tool cleans Excel files by removing completely empty rows and preparing the spreadsheet for export, review, or further processing. It is useful when your Excel file contains unnecessary blank lines that make the dataset harder to manage.',

    howTo: [
      'Upload your Excel file.',
      'Click the "Run tool" button.',
      'Wait for the tool to remove completely empty rows.',
      'Download the cleaned Excel file.',
    ],

    exampleInput: `An Excel file with data rows separated by unnecessary blank rows.`,

    exampleOutput: `A cleaned Excel file with empty rows removed and the remaining dataset preserved.`,

    useCases: [
      'Clean spreadsheet exports before converting them to CSV or JSON.',
      'Prepare Excel files for reporting or manual review.',
      'Remove blank rows that make large spreadsheets harder to manage.',
      'Improve the structure of messy Excel files before sharing them.',
    ],

    notes: [
      'This first version removes completely empty rows only.',
      'It does not yet remove duplicates, empty columns, or fix header names.',
      'You should still review the cleaned spreadsheet before using it in another workflow.',
    ],

    faqs: [
      {
        question: 'What does this Excel cleaner remove?',
        answer: 'This first version removes rows that are completely empty.',
      },
      {
        question: 'Does it clean duplicate rows too?',
        answer:
          'No. This version focuses only on removing empty rows from Excel files.',
      },
      {
        question: 'Should I still review the file after cleaning it?',
        answer:
          'Yes. It is always a good idea to review the cleaned spreadsheet before exporting or sharing it.',
      },
    ],

    relatedTools: [
      { name: 'Excel to CSV', slug: 'excel-to-csv' },
      { name: 'Excel to JSON', slug: 'excel-to-json' },
      { name: 'CSV Cleaner', slug: 'csv-cleaner' },
      { name: 'CSV Validator', slug: 'csv-validator' },
    ],
  },
}
