export default function McmvPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#003366] to-[#001D3A] px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1126px] text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#80D4A6]">
            Programa
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Minha Casa, Minha Vida &mdash; Cidades
          </h1>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-2xl font-bold text-[#08060d]">
            O que &eacute; o MCMV Cidades?
          </h2>
          <p className="mb-4 leading-relaxed text-[#6b6375]">
            O Programa Minha Casa, Minha Vida (MCMV) &eacute; um programa
            do Governo Federal que facilita o acesso &agrave; moradia digna
            para fam&iacute;lias de baixa renda. A modalidade Cidades
            &eacute; voltada para munic&iacute;pios com at&eacute; 50 mil
            habitantes, permitindo que prefeituras apresentem propostas de
            empreendimentos habitacionais.
          </p>
          <p className="mb-4 leading-relaxed text-[#6b6375]">
            Por meio dessa modalidade, a Prefeitura de Potengi viabilizou
            a constru&ccedil;&atilde;o do Residencial Novo Potengi, com
            recursos do Fundo de Desenvolvimento Social (FDS) e
            contrapartida do munic&iacute;pio.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFCFF] px-4 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-2xl font-bold text-[#08060d]">
            Faixas de renda
          </h2>

          <div className="overflow-hidden rounded-xl border border-[#e5e4e7]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#003366] text-white">
                  <th className="px-6 py-4 font-semibold">Faixa</th>
                  <th className="px-6 py-4 font-semibold">
                    Renda familiar
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Subs&iacute;dio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e4e7]">
                {[
                  {
                    faixa: 'Faixa 1',
                    renda: 'At&eacute; R$ 2.640,00',
                    subsidio: 'At&eacute; 95% do valor',
                  },
                  {
                    faixa: 'Faixa 2',
                    renda: 'De R$ 2.640,01 a R$ 4.400,00',
                    subsidio: 'Parcial',
                  },
                  {
                    faixa: 'Faixa 3',
                    renda: 'De R$ 4.400,01 a R$ 8.000,00',
                    subsidio: 'Redu&ccedil;&atilde;o de taxas',
                  },
                ].map((row) => (
                  <tr key={row.faixa} className="bg-white">
                    <td className="px-6 py-4 font-medium text-[#08060d]">
                      {row.faixa}
                    </td>
                    <td className="px-6 py-4 text-[#6b6375]">
                      {row.renda}
                    </td>
                    <td className="px-6 py-4 text-[#6b6375]">
                      {row.subsidio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-2xl font-bold text-[#08060d]">
            Requisitos
          </h2>
          <ul className="flex flex-col gap-4">
            {[
              'N&atilde;o possuir im&oacute;vel pr&oacute;prio',
              'Renda familiar dentro das faixas do programa',
              'Residir no munic&iacute;pio de Potengi-CE',
              'N&atilde;o ter sido contemplado em programa habitacional anterior',
              'Estar com CPF regular junto &agrave; Receita Federal',
            ].map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 text-[#6b6375]"
              >
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-[#007A4D]"
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
                    __html: req,
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
