import { Link } from 'react-router-dom'

const steps = [
  {
    step: '01',
    title: 'Pr&eacute;-cadastro online',
    description:
      'Acesse o formul&aacute;rio de pr&eacute;-cadastro em nosso site e preencha todos os dados solicitados: informa&ccedil;&otilde;es pessoais, composi&ccedil;&atilde;o familiar, renda e documentos.',
    details: [
      'Dados pessoais (RG, CPF, data de nascimento)',
      'Composi&ccedil;&atilde;o familiar',
      'Comprovante de renda',
      'Endere&ccedil;o residencial',
    ],
  },
  {
    step: '02',
    title: 'An&aacute;lise da inscri&ccedil;&atilde;o',
    description:
      'Ap&oacute;s o envio, sua inscri&ccedil;&atilde;o passar&aacute; por uma an&aacute;lise preliminar para verificar o enquadramento nos crit&eacute;rios do programa.',
    details: [
      'Verifica&ccedil;&atilde;o da renda familiar',
      'Valida&ccedil;&atilde;o dos dados informados',
      'Enquadramento nas faixas MCMV',
      'An&aacute;lise de duplicidade de CPF',
    ],
  },
  {
    step: '03',
    title: 'Documenta&ccedil;&atilde;o comprobat&oacute;ria',
    description:
      'Se pr&eacute;-aprovado, voc&ecirc; ser&aacute; convocado para apresentar os documentos f&iacute;sicos ou digitalizados para valida&ccedil;&atilde;o final.',
    details: [
      'RG e CPF de todos os membros da fam&iacute;lia',
      'Comprovante de resid&ecirc;ncia',
      'Comprovante de renda (contracheques, declara&ccedil;&atilde;o)',
      'Certid&atilde;o de casamento ou nascimento',
    ],
  },
  {
    step: '04',
    title: 'Contempla&ccedil;&atilde;o',
    description:
      'Com a documenta&ccedil;&atilde;o aprovada, voc&ecirc; ser&aacute; contemplado com uma unidade habitacional do Residencial Novo Potengi.',
    details: [
      'Assinatura do contrato',
      'Entrega das chaves',
      'Orienta&ccedil;&atilde;o sobre condom&iacute;nio',
      'Acompanhamento p&oacute;s-ocupa&ccedil;&atilde;o',
    ],
  },
]

export default function HowToJoinPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#003366] to-[#001D3A] px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1126px] text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#80D4A6]">
            Passo a Passo
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Como participar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#C3C7CF]">
            Confira o passo a passo para participar do processo seletivo do
            Residencial Novo Potengi.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-[800px]">
          <div className="flex flex-col gap-12">
            {steps.map((item, index) => (
              <div key={item.step} className="relative pl-16">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#003366] text-sm font-bold text-white">
                  {item.step}
                </span>

                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-10 h-full w-px bg-[#e5e4e7]" />
                )}

                <h2
                  className="mb-3 text-xl font-bold text-[#08060d]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="mb-4 leading-relaxed text-[#6b6375]"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                <ul className="flex flex-col gap-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm text-[#6b6375]"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#007A4D]"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M16.25 5L7.5 13.75L3.75 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: detail,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/cadastro"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8900A] px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#8A6200]"
            >
              Fazer pr&eacute;-cadastro
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
