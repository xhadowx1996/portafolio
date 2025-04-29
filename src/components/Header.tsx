import React, { useState } from 'react'
import { FaSun, FaMoon, FaChevronLeft } from 'react-icons/fa'
import '../styles/Header.scss'

interface Props {
  toggleTheme: () => void
  dark: boolean
}

const Header: React.FC<Props> = ({ toggleTheme, dark }) => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="header-content">

        {/* LOGO → abre / cierra */}
        <button className="logo logo--btn" onClick={() => setOpen(!open)}>DM</button>

        {/* PANEL + FLECHA */}
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {/* Flecha cierre */}
          <button className="nav-close" onClick={close} aria-label="Cerrar menú">
            <FaChevronLeft />
          </button>

          {/* Links */}
          <a className="nav-link" href="#about"      onClick={close}>Acerca De</a>
          <a className="nav-link" href="#experience" onClick={close}>Experiencia</a>
          <a className="nav-link" href="#projects"   onClick={close}>Proyectos</a>
          <a className="nav-link" href="#contact"    onClick={close}>Contáctame</a>
        </nav>

        {/* Switch tema */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  )
}

export default Header
