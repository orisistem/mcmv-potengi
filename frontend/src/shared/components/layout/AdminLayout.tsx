import { Link, Outlet, useLocation } from 'react-router-dom'

const sidebarLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/admin/candidatos', label: 'Candidatos', icon: '👥' },
  { to: '/admin/conteudo', label: 'Conteúdo', icon: '📝' },
]

export function AdminLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-64 flex-col border-r border-[#e5e4e7] bg-[#fafcff]">
        <div className="flex h-16 items-center justify-center border-b border-[#e5e4e7]">
          <Link to="/admin/dashboard" className="text-lg font-bold text-[#003366]">
            Admin Potengi
          </Link>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={[
                'flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                pathname === link.to
                  ? 'bg-[#D6E6F5] text-[#003366]'
                  : 'text-[#6b6375] hover:bg-[#f4f3ec]',
              ].join(' ')}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-white p-6">
        <Outlet />
      </main>
    </div>
  )
}
