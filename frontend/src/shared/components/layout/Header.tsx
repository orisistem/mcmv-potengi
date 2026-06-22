import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/mcmv', label: 'MCMV' },
  { to: '/como-participar', label: 'Como Participar' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e5e4e7] bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1126px] items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold text-[#003366]">
          Potengi
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-[#6b6375] transition-colors hover:text-[#003366]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/cadastro"
          className="rounded-full bg-[#003366] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#002244]"
        >
          Pré-cadastro
        </Link>
      </div>
    </header>
  )
}
