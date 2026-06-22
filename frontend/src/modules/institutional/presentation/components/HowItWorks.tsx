import { Link } from 'react-router-dom'

const steps = [
  {
    step: 1,
    title: 'Fa&ccedil;a seu pr&eacute;-cadastro',
    description:
      'Preencha o formul&aacute;rio online com seus dados pessoais, documentos e composi&ccedil;&atilde;o familiar.',
  },
  {
    step: 2,
    title: 'Aguarde a an&aacute;lise',
    description:
      'Sua inscri&ccedil;&atilde;o ser&aacute; analisada conforme os crit&eacute;rios do programa MCMV.',
  },
  {
    step: 3,
    title: 'Apresente os documentos',
    description:
      'Se pr&eacute;-aprovado, voc&ecirc; ser&aacute; convocado para apresentar a documenta&ccedil;&atilde;o comprobat&oacute;ria.',
  },
  {
    step: 4,
    title: 'Contempla&ccedil;&atilde;o',
    description:
      'Ap&oacute;s aprova&ccedil;&atilde;o final, voc&ecirc; ser&aacute; contemplado com sua casa pr&oacute;pria.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-[1126px] text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#007A4D]">
          Passo a Passo
        </p>
        <h2 className="mb-4 text-3xl font-bold text-[#08060d] md:text-4xl">
          Como participar
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-[#6b6375]">
          O processo seletivo &eacute; simples e transparente. Confira as
          etapas:
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-[#e5e4e7] bg-[#FAFCFF] p-6 text-left"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#003366] text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-[#08060d]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6b6375]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/cadastro"
            className="inline-flex items-center gap-2 rounded-full bg-[#003366] px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#002244]"
          >
            Quero me pr&eacute;-cadastrar
          </Link>
        </div>
      </div>
    </section>
  )
}
