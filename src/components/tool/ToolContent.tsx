'use client'

type ToolContentProps = {
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

export function ToolContent({
  what,
  howTo,
  exampleInput,
  exampleOutput,
  useCases,
  notes,
  faqs,
  relatedTools,
}: ToolContentProps) {
  return (
    <div className='space-y-10 mt-10'>
      {/* WHAT THIS TOOL DOES */}
      {what && (
        <section>
          <h2 className='text-lg font-semibold mb-2'>What this tool does</h2>
          <p className='text-sm text-zinc-700 leading-relaxed'>{what}</p>
        </section>
      )}

      {/* HOW TO USE */}
      {howTo && howTo.length > 0 && (
        <section>
          <h2 className='text-lg font-semibold mb-2'>How to use it</h2>

          <ol className='list-decimal pl-5 space-y-1 text-sm text-zinc-700'>
            {howTo.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {/* EXAMPLE */}
      {(exampleInput || exampleOutput) && (
        <section>
          <h2 className='text-lg font-semibold mb-2'>Example</h2>

          {exampleInput && (
            <div className='mb-4'>
              <p className='text-sm font-medium mb-1'>Input:</p>

              <pre className='bg-zinc-950 text-zinc-100 text-xs p-3 rounded-lg overflow-x-auto'>
                {exampleInput}
              </pre>
            </div>
          )}

          {exampleOutput && (
            <div>
              <p className='text-sm font-medium mb-1'>Output:</p>

              <pre className='bg-zinc-950 text-zinc-100 text-xs p-3 rounded-lg overflow-x-auto'>
                {exampleOutput}
              </pre>
            </div>
          )}
        </section>
      )}

      {/* USE CASES */}
      {useCases && useCases.length > 0 && (
        <section>
          <h2 className='text-lg font-semibold mb-2'>Common use cases</h2>

          <ul className='list-disc pl-5 space-y-1 text-sm text-zinc-700'>
            {useCases.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* NOTES */}
      {notes && notes.length > 0 && (
        <section>
          <h2 className='text-lg font-semibold mb-2'>Important notes</h2>

          <ul className='list-disc pl-5 space-y-1 text-sm text-zinc-700'>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section>
          <h2 className='text-lg font-semibold mb-2'>FAQ</h2>

          <div className='space-y-3'>
            {faqs.map((faq, index) => (
              <div key={index}>
                <p className='font-medium text-sm'>{faq.question}</p>

                <p className='text-sm text-zinc-700'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RELATED TOOLS */}
      {relatedTools && relatedTools.length > 0 && (
        <section>
          <h2 className='text-lg font-semibold mb-2'>Related tools</h2>

          <ul className='list-disc pl-5 space-y-1 text-sm text-zinc-700'>
            {relatedTools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
