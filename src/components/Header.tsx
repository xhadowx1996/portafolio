import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import '../styles/Header.scss'

interface Props {
  toggleTheme: () => void
  dark: boolean
}

const Header: React.FC<Props> = ({ toggleTheme, dark }) => (
  <header className="header">
    <div className="header-content">
      <div className="logo">DM</div>

      <nav className="nav">
        <a className="nav-link" href="#about">Acerca De</a>
        <a className="nav-link" href="#experience">Experiencia</a>
        <a className="nav-link" href="#projects">Proyectos</a>
        <a className="nav-link" href="#contact">Contáctame</a>
      </nav>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  </header>
)

export default Header
