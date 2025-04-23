import React from 'react'
import '../styles/ProjectsSlider.scss'

const projects = [
  {
    title: 'App VTEX',
    desc: 'App para sincronizar inventarios, precios y órdenes con VTEX IO + GraphQL.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'NestJS Microservicios',
    desc: 'Arquitectura basada en microservicios usando NestJS y RabbitMQ.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Google Drive Automation',
    desc: 'Respaldo automático de archivos usando Node.js y Google APIs.',
    image: 'https://via.placeholder.com/300x200'
  }
]

const ProjectsSlider = () => {
  return (
    <section id="projects" className="projects-slider">
      <h2>Proyectos Destacados</h2>
      <div className="cards">
        {projects.map((proj, idx) => (
          <div key={idx} className="card">
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSlider
