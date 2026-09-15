import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu, X, Home, ClipboardList, Compass, FileCheck2, BookOpen,
  Briefcase, ClipboardCheck, Wrench, ChevronDown,
} from 'lucide-react'

const navigation = [
  { name: 'Inici', href: '/', icon: Home },
  {
    name: 'Activitats',
    href: '/activitats',
    icon: ClipboardList,
    submenu: [
      { name: 'A1. Idea i requeriments', href: '/activitats/1' },
      { name: 'A2. Arquitectura', href: '/activitats/2' },
      { name: 'A3. Pla i seguretat', href: '/activitats/3' },
      { name: 'A4. Prototip', href: '/activitats/4' },
      { name: 'A5. Defensa', href: '/activitats/5' },
    ],
  },
  { name: 'Metodologia', href: '/metodologia', icon: Compass },
  { name: 'Exemple resolt', href: '/exemple', icon: FileCheck2 },
  {
    name: 'Teoria',
    href: '/teoria',
    icon: BookOpen,
    submenu: [
      { name: '1. Digitalització i IT/OT', href: '/teoria/1' },
      { name: '2. Tecnologies habilitadores', href: '/teoria/2' },
      { name: '3. Cloud computing', href: '/teoria/3' },
      { name: '4. Intel·ligència artificial', href: '/teoria/4' },
      { name: '5. Dades i seguretat', href: '/teoria/5' },
      { name: '6. Projecte de transformació', href: '/teoria/6' },
    ],
  },
  { name: 'Casos empresarials', href: '/casos', icon: Briefcase },
  { name: 'Avaluació', href: '/avaluacio', icon: ClipboardCheck },
  { name: 'Recursos', href: '/recursos', icon: Wrench },
]

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})
  const location = useLocation()

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  const toggleMenu = (name) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }))

  const isMenuOpen = (item) =>
    openMenus[item.name] !== undefined ? openMenus[item.name] : isActive(item.href)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 flex flex-col
        lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-gray-900 block">Digitalització</span>
              <span className="text-xs text-gray-500">Curs 2026-27</span>
            </div>
          </Link>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto flex-1">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg
                      ${isActive(item.href)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'}
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen(item) ? 'rotate-180' : ''}`} />
                  </button>
                  {isMenuOpen(item) && (
                    <div className="ml-8 mt-1 space-y-1">
                      <Link
                        to={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          block px-4 py-2 rounded-lg text-sm
                          ${location.pathname === item.href
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-500 hover:bg-gray-100'}
                        `}
                      >
                        Índex
                      </Link>
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`
                            block px-4 py-2 rounded-lg text-sm
                            ${location.pathname === sub.href
                              ? 'bg-primary-100 text-primary-700'
                              : 'text-gray-600 hover:bg-gray-100'}
                          `}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg
                    ${isActive(item.href)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t bg-gray-50 flex-shrink-0">
          <div className="text-xs text-gray-500">
            <p className="font-medium text-gray-700">Mòdul 1665 · CFGS</p>
            <p>33 h · 17 setmanes · DAW, DAM i ASIX</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b flex items-center px-4 lg:px-8">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="ml-4 lg:ml-0 min-w-0">
            <h1 className="text-base lg:text-lg font-semibold text-gray-900 truncate">
              Digitalització Aplicada als Sectors Productius
            </h1>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
