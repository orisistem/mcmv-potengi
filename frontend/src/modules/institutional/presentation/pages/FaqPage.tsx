import { useState } from 'react'

const faqItems = [
  {
    question: 'Quem pode participar do programa MCMV Cidades?',
    answer:
      'Fam&iacute;lias com renda mensal de at&eacute; R$ 2.640,00 (Faixa 1), que n&atilde;o possuam im&oacute;vel pr&oacute;prio e que residam no munic&iacute;pio de Potengi-CE.',
  },
  {
    question: 'Preciso dar entrada no financiamento?',
    answer:
      'N&atilde;o. Para a Faixa 1 do MCMV Cidades, o subs&iacute;dio pode cobrir at&eacute; 95% do valor do im&oacute;vel, com parcelas m&iacute;nimas e sem entrada.',
  },
  {
    question: 'Quais documentos s&atilde;o necess&aacute;rios para o pr&eacute;-cadastro?',
    answer:
      'RG, CPF, comprovante de resid&ecirc;ncia, comprovante de renda de todos os membros da fam&iacute;lia, certid&atilde;o de casamento (se casado) e certid&otilde;es de nascimento dos dependentes.',
  },
  {
    question: 'Qual o prazo para an&aacute;lise do pr&eacute;-cadastro?',
    answer:
      'O prazo m&eacute;dio de an&aacute;lise &eacute; de 15 a 30 dias &uacute;teis ap&oacute;s o envio da documenta&ccedil;&atilde;o completa.',
  },
  {
    question: 'Como acompanhar o status da minha inscri&ccedil;&atilde;o?',
    answer:
      'Voc&ecirc; ser&aacute; notificado por e-mail e telefone sobre o andamento da sua inscri&ccedil;&atilde;o. Tamb&eacute;m &eacute; poss&iacute;vel entrar em contato com a Secretaria de Habita&ccedil;&atilde;o de Potengi.',
  },
  {
    question: 'Posso me cadastrar se j&aacute; tenho um im&oacute;vel?',
    answer:
      'N&atilde;o. Um dos requisitos do programa &eacute; n&atilde;o possuir im&oacute;vel pr&oacute;prio no nome de qualquer membro do grupo familiar.',
  },
  {
    question: 'O programa atende fam&iacute;lias de outros munic&iacute;pios?',
    answer:
      'O Residencial Novo Potengi &eacute; voltado prioritariamente para fam&iacute;lias residentes no munic&iacute;pio de Potengi-CE.',
  },
  {
    question: 'Qual o valor das parcelas do financiamento?',
    answer:
      'As parcelas s&atilde;o calculadas com base na renda familiar, podendo ser de at&eacute; 5% da renda bruta, com valor m&iacute;nimo de R$ 80,00 para a Faixa 1.',
  },
  {
    question: 'O que acontece se eu for contemplado e desistir?',
    answer:
      'A desist&ecirc;ncia implica na perda da unidade e retorno ao final da fila de espera. O candidato poder&aacute; ser convocado novamente conforme disponibilidade.',
  },
  {
    question: 'Como &eacute; feita a sele&ccedil;&atilde;o dos candidatos?',
    answer:
      'A sele&ccedil;&atilde;o segue crit&eacute;rios definidos pelo programa, priorizando fam&iacute;lias com menor renda, maior n&uacute;mero de dependentes, mulheres chefes de fam&iacute;lia, pessoas com defici&ecirc;ncia e idosos.',
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <section className="bg-gradient-to-br from-[#003366] to-[#001D3A] px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1126px] text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#80D4A6]">
            FAQ
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Perguntas Frequentes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#C3C7CF]">
            Tire suas d&uacute;vidas sobre o programa, o cadastro e o
            Residencial Novo Potengi.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {faqItems.map((item, index) => {
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
      </section>
    </>
  )
}
