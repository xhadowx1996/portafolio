import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Hero.scss'
import profileImg from '/profile.jpg'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <motion.div 
        className="hero-img-wrapper"
        initial={{ opacity: 0, x: -60 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <img src={profileImg} alt="Daniel Moya profile" className="hero-img"/>
      </motion.div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }}
      >
        <h1>Hola, soy Daniel Moya</h1>
        <p>
          Desarrollador backend con más de 5 años de experiencia construyendo soluciones eficientes,
          seguras y escalables usando tecnologías como <strong>Java</strong>, <strong>Spring Boot</strong>,
          <strong> VTEX IO</strong>, <strong>Node.js</strong> y <strong>NestJS</strong>.
          Me especializo en <em>automatización</em>, microservicios y arquitectura limpia; amante del código bien
          hecho y funcional.
        </p>
        <a className="btn" href="#contact">Contáctame</a>
      </motion.div>
    </section>
  )
}

export default Hero