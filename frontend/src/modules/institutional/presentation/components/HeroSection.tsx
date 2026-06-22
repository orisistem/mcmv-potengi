import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#001D3A] px-4 py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1126px] text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#80D4A6]">
          Programa Minha Casa, Minha Vida &mdash; Modalidade Cidades
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Residencial Novo Potengi
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-[#C3C7CF] md:text-xl">
          Realize o sonho da casa pr&oacute;pria em Potengi, Cear&aacute;.
          Cadastre-se e participe do processo seletivo.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/cadastro"
            className="inline-flex items-center gap-2 rounded-full bg-[#C8900A] px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#8A6200]"
          >
            Fazer pr&eacute;-cadastro
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 3.75L13.75 10L7.5 16.25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            to="/como-participar"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-white/10"
          >
            Saiba mais
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/5 text-[200px] font-bold leading-none md:text-[300px]">
        MCMV
      </div>
    </section>
  )
}
