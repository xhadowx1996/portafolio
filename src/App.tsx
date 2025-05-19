import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import ProjectsSlider from './components/ProjectsSlider'
import Experience from './components/Experience'
import Integrations from './components/Integrations'
import SocialBar from './components/SocialBar'
import Footer from './components/Footer'
import './styles/index.scss'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('theme-light', !darkMode)
    document.body.classList.toggle('theme-dark', darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      <Services />
      <About />
      <Experience />
      <ProjectsSlider />  
      <Integrations />
      <SocialBar />
      <Footer />
    </div>
  )
}

export default App
