import { useState } from 'react'
import { Link } from 'react-router-dom'

const previewItems = [
  {
    question: 'Quem pode participar do programa MCMV Cidades?',
    answer:
      'Fam&iacute;lias com renda mensal de at&eacute; R$ 2.640,00, que n&atilde;o possuam im&oacute;vel pr&oacute;prio e que residam no munic&iacute;pio de Potengi-CE h&aacute; pelo menos 3 anos.',
  },
  {
    question: 'Preciso dar entrada no financiamento?',
    answer:
      'N&atilde;o. O programa MCMV Cidades oferece subs&iacute;dio integral para fam&iacute;lias de baixa renda, sem necessidade de entrada.',
  },
  {
    question: 'Quais documentos s&atilde;o necess&aacute;rios?',
    answer:
      'RG, CPF, comprovante de resid&ecirc;ncia, comprovante de renda, certid&atilde;o de casamento (se casado) e certid&otilde;es de nascimento dos dependentes.',
  },
]

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#FAFCFF] px-4 py-20">
      <div className="mx-auto max-w-[800px]">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-[#007A4D]">
          FAQ
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-[#08060d] md:text-4xl">
          Perguntas frequentes
        </h2>

        <div className="flex flex-col gap-3">
          {previewItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="rounded-xl border border-[#e5e4e7] bg-white overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-4 text-left cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#08060d]">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[#6b6375] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.75 7.5L10 13.75L16.25 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="border-t border-[#e5e4e7] px-6 py-4">
                    <p
                      className="text-[#6b6375] leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.answer,
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 font-semibold text-[#003366] transition-colors hover:text-[#002244]"
          >
            Ver todas as perguntas
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 3.75L13.75 10L7.5 16.25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
