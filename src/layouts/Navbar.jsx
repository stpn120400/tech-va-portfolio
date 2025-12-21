import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton'
import AnimatedIcon from '../components/icons/AnimatedIcon'
import { Mail, Menu, X } from '../components/icons/icons'

const navLinks = [
  { label: 'About Me', to: '/about' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Portfolio', to: '/portfolio' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkBase =
    'px-3 py-2 text-sm font-semibold text-slate-100/90 transition hover:text-white focus-visible:outline-none'

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-glass backdrop-blur-lg">
          <Link to="/" className="text-lg font-bold tracking-tight text-white">
            STPN
          </Link>

          <nav className="hidden items-center gap-2 rounded-full bg-white/5 px-2 py-1 md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    linkBase,
                    isActive
                      ? 'text-white underline decoration-2 decoration-navy-300 underline-offset-8'
                      : 'text-slate-100/80',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <div className="group">
              <PrimaryButton to="/contact" className="flex items-center gap-2 px-4 py-2">
                <AnimatedIcon icon={Mail} size={18} animationType="hover-scale" />
                Contact Me
              </PrimaryButton>
            </div>
          </div>

          <button
            type="button"
            className="group inline-flex items-center justify-center rounded-lg border border-white/25 p-2 text-white transition md:hidden hover:bg-white/10"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <AnimatedIcon icon={X} size={24} animationType="none" />
            ) : (
              <AnimatedIcon icon={Menu} size={24} animationType="none" />
            )}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-2 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-glass backdrop-blur-lg md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'block rounded-xl px-3 py-2 text-sm font-semibold transition',
                      isActive ? 'bg-white/15 text-white' : 'text-slate-100/80 hover:bg-white/10',
                    ].join(' ')
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <PrimaryButton to="/contact" className="w-full justify-center flex items-center gap-2">
                <AnimatedIcon icon={Mail} size={16} animationType="none" />
                Contact Me
              </PrimaryButton>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
