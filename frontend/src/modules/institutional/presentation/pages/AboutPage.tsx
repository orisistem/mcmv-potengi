export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#003366] to-[#001D3A] px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1126px] text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#80D4A6]">
            Sobre
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Residencial Novo Potengi
          </h1>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-2xl font-bold text-[#08060d]">
            O empreendimento
          </h2>
          <p className="mb-4 leading-relaxed text-[#6b6375]">
            O Residencial Novo Potengi &eacute; um empreendimento do
            Programa Minha Casa, Minha Vida &mdash; Modalidade Cidades,
            localizado no munic&iacute;pio de Potengi, estado do Cear&aacute;.
            O projeto contempla a constru&ccedil;&atilde;o de unidades
            habitacionais destinadas a fam&iacute;lias de baixa renda,
            promovendo o acesso &agrave; moradia digna e contribuindo para
            o desenvolvimento urbano da regi&atilde;o.
          </p>
          <p className="mb-4 leading-relaxed text-[#6b6375]">
            As unidades foram projetadas seguindo padr&otilde;es de
            qualidade, conforto e efici&ecirc;ncia energ&eacute;tica,
            garantindo um lar seguro e acolhedor para voc&ecirc; e sua
            fam&iacute;lia.
          </p>
          <p className="leading-relaxed text-[#6b6375]">
            O residencial conta com infraestrutura completa, incluindo
            pavimenta&ccedil;&atilde;o, rede de &aacute;gua e esgoto,
            energia el&eacute;trica, ilumina&ccedil;&atilde;o p&uacute;blica,
            &aacute;reas de lazer e proximidade com escolas, postos de
            sa&uacute;de e com&eacute;rcio local.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFCFF] px-4 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-2xl font-bold text-[#08060d]">
            Diferenciais
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Localiza&ccedil;&atilde;o privilegiada',
                desc: 'Pr&oacute;ximo a escolas, postos de sa&uacute;de, com&eacute;rcio e transporte p&uacute;blico.',
              },
              {
                title: 'Qualidade construtiva',
                desc: 'Unidades com padr&atilde;o de qualidade, acabamento e efici&ecirc;ncia energ&eacute;tica.',
              },
              {
                title: 'Infraestrutura completa',
                desc: 'Rede de &aacute;gua, esgoto, energia, pavimenta&ccedil;&atilde;o e ilumina&ccedil;&atilde;o p&uacute;blica.',
              },
              {
                title: '&Aacute;reas de lazer',
                desc: 'Espa&ccedil;os de conviv&ecirc;ncia, pra&ccedil;as e &aacute;rea verde para toda a fam&iacute;lia.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e4e7] bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-[#08060d]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6375]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
