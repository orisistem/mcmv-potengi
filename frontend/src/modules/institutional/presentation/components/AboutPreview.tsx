import { Link } from 'react-router-dom'

export function AboutPreview() {
  return (
    <section className="bg-[#FAFCFF] px-4 py-20">
      <div className="mx-auto max-w-[1126px]">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#007A4D]">
              Sobre o Residencial
            </p>
            <h2 className="mb-6 text-3xl font-bold text-[#08060d] md:text-4xl">
              Um novo lar para voc&ecirc; e sua fam&iacute;lia
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-[#6b6375]">
              O Residencial Novo Potengi &eacute; um empreendimento do
              Programa Minha Casa, Minha Vida &mdash; Modalidade Cidades,
              destinado a fam&iacute;lias de baixa renda do munic&iacute;pio
              de Potengi, Cear&aacute;.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-[#6b6375]">
              S&atilde;o unidades habitacionais projetadas com conforto,
              seguran&ccedil;a e qualidade de vida, em uma estrutura completa
              com infraestrutura urbana, &aacute;reas de lazer e
              proximidade com serviços essenciais.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 font-semibold text-[#003366] transition-colors hover:text-[#002244]"
            >
              Leia mais
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

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '120', label: 'Unidades habitacionais' },
              { number: 'R$ 0', label: 'Entrada zero' },
              { number: 'At&eacute; R$ 2.640', label: 'Renda familiar' },
              { number: '360 meses', label: 'Prazo de financiamento' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e5e4e7] bg-white p-6 text-center"
              >
                <p className="text-2xl font-bold text-[#003366]">
                  {item.number}
                </p>
                <p className="mt-1 text-sm text-[#6b6375]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
