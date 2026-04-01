export type GuideFaqItem = {
  question: string
  answer: string
}

export type GuideConfig = {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  intro: string
  summary?: string
  whenToUse?: string[]
  steps: string[]
  commonMistakes?: string[]
  faq?: GuideFaqItem[]
  toolBenefits?: string[]
  expectedResult?: string
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
    summary:
      'CSV to JSON conversion is one of the most common data preparation tasks when moving from spreadsheet-based files into software workflows. The main goal is to preserve the structure of the original rows and columns while transforming them into valid JSON objects.',
    whenToUse: [
      'When you need to send tabular data into an app or API.',
      'When you want to transform spreadsheet exports into developer-friendly structured data.',
      'When you need JSON output for automation, scripts, or web projects.',
    ],
    steps: [
      'Prepare your CSV file and make sure the headers are correct.',
      'Open the CSV to JSON tool.',
      'Upload your CSV file.',
      'Run the conversion.',
      'Copy or download the resulting JSON output.',
      'Validate the output before using it in your project or workflow.',
    ],
    commonMistakes: [
      'Using a CSV file with missing or inconsistent headers.',
      'Ignoring extra spaces or malformed rows before converting.',
      'Assuming the output JSON is ready for production without validating it.',
    ],
    faq: [
      {
        question: 'Why convert CSV to JSON?',
        answer:
          'JSON is easier to use in apps, APIs, scripts, and web development workflows than raw CSV files.',
      },
      {
        question: 'Do CSV headers matter?',
        answer:
          'Yes. Headers usually become the property names in the resulting JSON objects.',
      },
      {
        question: 'Should I clean the CSV before converting?',
        answer:
          'Yes. Cleaning the file first can reduce errors and produce more reliable JSON output.',
      },
    ],
    toolBenefits: [
      'Convert spreadsheet-style rows into structured JSON quickly.',
      'Avoid doing manual copy-paste transformations.',
      'Get output that is easier to use in apps, APIs, and scripts.',
    ],
    expectedResult:
      'A structured JSON output generated from your CSV file, ready to review, copy, or reuse.',
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
    summary:
      'JSON to CSV conversion is useful when data needs to be moved from developer-oriented formats into spreadsheets, reports, or operations workflows. CSV is often easier for non-technical users to open and review.',
    whenToUse: [
      'When you need to review API data in a spreadsheet.',
      'When you want to share JSON-based data with non-technical teammates.',
      'When you need a CSV export for reporting or manual review.',
    ],
    steps: [
      'Make sure your JSON data is valid and consistently structured.',
      'Open the JSON to CSV tool.',
      'Paste your JSON content into the input field.',
      'Run the conversion.',
      'Download the CSV result.',
      'Open the CSV in Excel or another spreadsheet tool to review it.',
    ],
    commonMistakes: [
      'Using invalid JSON input.',
      'Converting nested JSON without checking how fields flatten into columns.',
      'Assuming all objects have the same keys when they do not.',
    ],
    faq: [
      {
        question: 'Why convert JSON to CSV?',
        answer:
          'CSV is easier to inspect, share, and analyze in spreadsheet-based workflows.',
      },
      {
        question: 'Does JSON need to be valid first?',
        answer:
          'Yes. Invalid JSON can break the conversion process or create incomplete output.',
      },
      {
        question: 'Can nested JSON be harder to convert?',
        answer:
          'Yes. Nested data may require flattening or special handling depending on the structure.',
      },
    ],
    toolBenefits: [
      'Turn structured JSON into spreadsheet-friendly rows and columns.',
      'Make technical data easier to review manually.',
      'Prepare exports that can be opened in Excel or shared with teammates.',
    ],
    expectedResult:
      'A CSV file generated from your JSON input, ready for spreadsheet review or export workflows.',
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
    summary:
      'CSV to Excel conversion is common when users need a more comfortable spreadsheet experience, better sharing options, or a familiar file format for administrative work.',
    whenToUse: [
      'When a teammate expects an Excel file instead of CSV.',
      'When you want to review tabular data in a more comfortable spreadsheet format.',
      'When you want to prepare data for a workflow centered around Excel files.',
    ],
    steps: [
      'Prepare your CSV file and confirm the columns are structured correctly.',
      'Open the CSV to Excel tool.',
      'Upload your CSV file.',
      'Run the conversion.',
      'Download the Excel file.',
      'Open the result in Excel to review formatting and values.',
    ],
    commonMistakes: [
      'Skipping a quick review of the CSV before conversion.',
      'Assuming formatting from CSV will automatically become styled Excel cells.',
      'Not checking delimiter consistency before converting.',
    ],
    faq: [
      {
        question: 'Why convert CSV to Excel?',
        answer:
          'Excel files are often easier to review, share, and edit in office workflows.',
      },
      {
        question: 'Will CSV formatting be preserved exactly?',
        answer:
          'Not always. CSV mainly stores raw tabular values, not rich spreadsheet formatting.',
      },
    ],
    toolBenefits: [
      'Turn plain CSV data into a more familiar spreadsheet file.',
      'Make exports easier to review and share.',
      'Reduce friction when working with Excel-based office workflows.',
    ],
    expectedResult:
      'An Excel file created from your CSV data, ready to open and review.',
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
    summary:
      'Excel to CSV conversion is often necessary when software platforms, databases, or import tools require a plain text tabular format instead of spreadsheets.',
    whenToUse: [
      'When another system only accepts CSV uploads.',
      'When you need a lightweight export for import or automation.',
      'When you want to move spreadsheet data into a simpler format.',
    ],
    steps: [
      'Open or prepare your Excel file.',
      'Go to the Excel to CSV tool.',
      'Upload your spreadsheet file.',
      'Run the conversion.',
      'Download the CSV file.',
      'Check the resulting file before importing it into another system.',
    ],
    commonMistakes: [
      'Ignoring hidden issues in the source spreadsheet.',
      'Not checking whether the selected sheet contains the right data.',
      'Assuming every Excel feature maps cleanly into CSV.',
    ],
    faq: [
      {
        question: 'Why convert Excel to CSV?',
        answer:
          'Many tools, databases, and import workflows accept CSV more easily than Excel files.',
      },
      {
        question: 'Does CSV keep formulas and formatting?',
        answer:
          'No. CSV is designed for plain tabular values, not spreadsheet formulas or rich formatting.',
      },
    ],
    toolBenefits: [
      'Generate a simpler file format accepted by many import workflows.',
      'Prepare spreadsheet data for systems that prefer CSV.',
      'Reduce compatibility issues across platforms and tools.',
    ],
    expectedResult:
      'A CSV export generated from your Excel file, ready for upload or import.',
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
    summary:
      'CSV files often contain extra spaces, inconsistent rows, empty fields, duplicate entries, or structural problems. A cleaning workflow reduces friction before analysis, import, or reporting.',
    whenToUse: [
      'Before importing CSV files into another platform.',
      'Before sharing exported data with teammates or clients.',
      'Before filtering, sorting, or validating the data further.',
    ],
    steps: [
      'Review the CSV structure and identify messy rows, blank values, or inconsistent formatting.',
      'Use a CSV cleaning tool to normalize the file.',
      'Remove duplicate rows if needed.',
      'Remove empty columns or unnecessary fields.',
      'Validate the final structure.',
      'Export the cleaned version for reuse or import.',
    ],
    commonMistakes: [
      'Cleaning only visible problems and ignoring structural issues.',
      'Skipping validation after cleanup.',
      'Trying to fix multiple different CSV issues manually when tools can simplify the process.',
    ],
    faq: [
      {
        question: 'What does cleaning a CSV file usually involve?',
        answer:
          'It often includes normalizing values, removing duplicates, deleting empty columns, and validating structure.',
      },
      {
        question: 'Should I validate the CSV after cleaning it?',
        answer:
          'Yes. Validation helps confirm the file is consistent before you import or share it.',
      },
      {
        question: 'Can CSV cleaning improve imports?',
        answer:
          'Yes. Cleaner files usually reduce errors and make downstream workflows easier.',
      },
    ],
    toolBenefits: [
      'Reduce messy formatting before imports or analysis.',
      'Make CSV files easier to review, share, and reuse.',
      'Save time compared with cleaning everything manually.',
    ],
    expectedResult:
      'A cleaner CSV file with fewer formatting issues and better structure for downstream use.',
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
    summary:
      'Removing duplicate rows is one of the simplest ways to improve CSV quality. It reduces repeated records, makes reports more accurate, and prepares files for cleaner imports.',
    whenToUse: [
      'When exported data contains repeated rows.',
      'When reports look inflated because records appear more than once.',
      'Before importing CSV data into another system.',
    ],
    steps: [
      'Open your CSV file and confirm which rows are duplicated.',
      'Go to the Remove Duplicates CSV tool.',
      'Upload the file.',
      'Run the tool.',
      'Download the cleaned file.',
      'Validate the result before using it in another workflow.',
    ],
    commonMistakes: [
      'Removing rows without checking whether duplicates are truly unwanted.',
      'Assuming similar rows are identical when key fields differ.',
      'Skipping a final review after deduplication.',
    ],
    faq: [
      {
        question: 'Why are duplicate rows a problem?',
        answer:
          'They can distort reports, create import issues, and reduce trust in the dataset.',
      },
      {
        question: 'Should I review duplicates before deleting them?',
        answer:
          'Yes. Some repeated-looking records may still represent valid separate entries.',
      },
    ],
    toolBenefits: [
      'Remove repeated rows faster than doing it manually.',
      'Improve reporting accuracy and reduce noise in exports.',
      'Prepare cleaner files for imports and analysis.',
    ],
    expectedResult:
      'A CSV file with duplicate rows removed and a cleaner final dataset.',
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
    summary:
      'Deleting empty columns reduces noise in your dataset and makes CSV files easier to work with. It is especially useful before sharing exports or importing them into other systems.',
    whenToUse: [
      'When a CSV export contains blank unused columns.',
      'Before sending files to clients or teammates.',
      'Before analysis or import into another platform.',
    ],
    steps: [
      'Review the CSV file and identify columns that contain no useful data.',
      'Open the Remove Empty Columns CSV tool.',
      'Upload your file.',
      'Run the tool.',
      'Download the cleaned CSV.',
      'Check the result before sending or importing it elsewhere.',
    ],
    commonMistakes: [
      'Deleting columns that look empty but contain hidden values or metadata.',
      'Cleaning columns without reviewing whether they are needed later.',
      'Skipping a final file review after cleanup.',
    ],
    faq: [
      {
        question: 'Why remove empty columns?',
        answer:
          'They add noise, make files harder to review, and can complicate downstream workflows.',
      },
      {
        question: 'Should I keep a backup of the original file?',
        answer:
          'Yes. Keeping the original is a good habit before any cleanup step.',
      },
    ],
    toolBenefits: [
      'Simplify wide CSV files with unnecessary blank columns.',
      'Make exported data easier to review and share.',
      'Reduce clutter before analysis or import.',
    ],
    expectedResult:
      'A cleaner CSV file with empty columns removed and a more focused structure.',
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
    summary:
      'Sorting is one of the fastest ways to make a CSV easier to inspect. It helps reveal patterns, clusters, and outliers before deeper analysis or cleanup.',
    whenToUse: [
      'When you want to organize rows alphabetically.',
      'When you want to inspect numeric values more clearly.',
      'Before filtering or reviewing a large CSV manually.',
    ],
    steps: [
      'Decide which column you want to sort by.',
      'Open the CSV Sorter tool.',
      'Upload your CSV file.',
      'Enter the target column name.',
      'Run the tool.',
      'Download the sorted file and verify the order.',
    ],
    commonMistakes: [
      'Sorting by the wrong column name.',
      'Assuming date values always sort correctly as text.',
      'Not checking whether mixed data types affect the output order.',
    ],
    faq: [
      {
        question: 'Why sort a CSV file?',
        answer:
          'Sorting helps make data easier to review, compare, and prepare for later steps.',
      },
      {
        question: 'Can dates be tricky to sort?',
        answer:
          'Yes. Date-like strings may not sort properly unless the format is consistent and sortable.',
      },
    ],
    toolBenefits: [
      'Organize rows quickly for easier review.',
      'Make patterns and values easier to inspect.',
      'Prepare datasets for filtering, sharing, or reporting.',
    ],
    expectedResult:
      'A CSV file sorted by the selected column and easier to inspect or reuse.',
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
    summary:
      'Filtering lets you reduce a large CSV to the rows that actually matter for a task. This is useful for segmented reports, specific exports, and focused cleanup work.',
    whenToUse: [
      'When you only need rows that match one condition.',
      'When you want to isolate a region, status, category, or label.',
      'Before exporting a smaller subset of a large dataset.',
    ],
    steps: [
      'Identify the column and value you want to filter by.',
      'Open the CSV Filter Rows tool.',
      'Upload your CSV file.',
      'Enter the filter rule in the required format.',
      'Run the tool.',
      'Download or review the filtered result.',
    ],
    commonMistakes: [
      'Using the wrong column name.',
      'Forgetting that exact matches may exclude similar values.',
      'Not reviewing the output when no rows match the filter.',
    ],
    faq: [
      {
        question: 'Why filter CSV rows?',
        answer:
          'Filtering helps keep only the records relevant to a specific task, report, or workflow.',
      },
      {
        question: 'What happens if nothing matches?',
        answer:
          'The result may be empty or the tool may return a message instead of a file, depending on implementation.',
      },
    ],
    toolBenefits: [
      'Keep only the rows you actually need.',
      'Reduce large exports into smaller focused datasets.',
      'Make CSV review and sharing more targeted.',
    ],
    expectedResult:
      'A filtered CSV output containing only rows that match your condition.',
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
    summary:
      'CSV validation is one of the most important pre-import checks. It helps detect format inconsistencies early, so the file is easier to trust and safer to use in downstream systems.',
    whenToUse: [
      'Before importing a CSV into another platform.',
      'After cleaning or editing a CSV manually.',
      'When a CSV export seems broken or inconsistent.',
    ],
    steps: [
      'Prepare the CSV file you want to check.',
      'Open the CSV Validator tool.',
      'Upload the file.',
      'Run the validation.',
      'Review any detected issues.',
      'Fix the file or continue if the structure is valid.',
    ],
    commonMistakes: [
      'Assuming a file is valid just because it opens in Excel.',
      'Skipping validation after manual edits.',
      'Ignoring duplicated headers or inconsistent row lengths.',
    ],
    faq: [
      {
        question: 'Why validate a CSV file?',
        answer:
          'Validation helps catch structural issues before they break imports, reports, or automations.',
      },
      {
        question: 'Can a CSV look normal but still be invalid?',
        answer:
          'Yes. A file can appear fine visually and still contain structural inconsistencies.',
      },
      {
        question: 'Should validation happen before import?',
        answer:
          'Yes. It is one of the safest checks you can do before using a CSV in another system.',
      },
    ],
    toolBenefits: [
      'Catch structural problems before they break downstream workflows.',
      'Reduce failed imports and confusing file errors.',
      'Build confidence before using a CSV in another system.',
    ],
    expectedResult:
      'A validation result that helps confirm whether your CSV structure is safe to use.',
    toolSlug: 'csv-validator',
    relatedCategorySlugs: ['csv-tools', 'data-cleaning-tools'],
    relatedGuideSlugs: [
      'how-to-clean-a-csv-file',
      'how-to-remove-empty-columns-in-csv',
    ],
  },
}

export const allGuides = Object.values(guideRegistry)
