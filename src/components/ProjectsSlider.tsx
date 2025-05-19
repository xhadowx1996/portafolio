import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes,
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaGem,
  FaServer,
} from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/ProjectsSlider.scss'
import '../styles/ProjectModal.scss'

type Project = {
  title: string
  impact: string
  summary: string
  description: string
  tech: string[]
  image: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  demoGif: string
  url: string
}

const projects: Project[] = [
  {
    title: 'EndPoint Visualizer',
    impact: '+24 % velocidad de onboarding',
    summary: 'Árbol de categorías → Endpoints al vuelo',
    description:
      'Microservicio en Node.js + TypeScript que navega el árbol de categorías y expone cada endpoint con un payload de ejemplo. Acelera el onboarding y reduce dudas de integración.',
    tech: ['Node.js', 'TypeScript', 'Express'],
    image: '/endpoints%20specst.jpg',
    icon: FaServer,
    demoGif: '/gif/endpoint-visualizer.gif',
    url: '#endpoints',
  },
  {
    title: 'Tercer Precio Dashboard',
    impact: '+15 % margen',
    summary: 'Tabla de precios viva para e‑commerce',
    description:
      'Back‑office en Node.js + React donde marketing ajusta precios en vivo y publica a la web. Soporta export a CSV y logging de auditoría.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: '/tercerprecio.jpg',
    icon: FaGem,
    demoGif: '/gif/tercer-precio-demo.gif',
    url: '#tercer-precio',
  },
  {
    title: 'GeoStore Maps',
    impact: '+9 % visitas tienda',
    summary: 'Mapa que traza lat/long de sucursales',
    description:
      'App en React que consume un JSON público con coordenadas y muestra tiendas en Google Maps con filtros por servicio.',
    tech: ['React', 'Google Maps API'],
    image: '/google maps .jpg',
    icon: FaShieldAlt,
    demoGif: '/gif/geostore-demo.gif',
    url: '#geostore',
  },
  {
    title: 'Mongo Showcase',
    impact: '100 % uptime',
    summary: 'Portafolio de apps en Mongo + React',
    description:
      'Servicio Node que expone colecciones y un frontend React que lista cards con íconos dinámicos por categoría. Despliegue en Render.',
    tech: ['MongoDB', 'React', 'Node.js'],
    image: 'maquetacion .jpg',
    icon: FaServer,
    demoGif: '/gif/mongo-showcase.gif',
    url: '#mongo-showcase',
  },
  {
    title: 'Content Media Uploader',
    impact: '+30 % rapidez de campañas',
    summary: 'Administra videos, GIFs y copy desde CMS propio',
    description:
      'Plataforma custom que permite subir videos, arrastrar‑y‑soltar GIFs y editar texto en vivo. Integra autenticación y versionado de assets.',
    tech: ['React', 'Node.js', 'AWS S3'],
    image: '/landinds%20.jpg',
    icon: FaCloud,
    demoGif: '/gif/content-uploader-demo.gif',
    url: '#content-uploader',
  },
]

const backdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const modal = { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }

const ProjectsSlider: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="projects-slider">
      <h2>// Proyectos Destacados</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {projects.map((p) => {
          const CardIcon = p.icon
          return (
            <SwiperSlide key={p.title}>
              <motion.article
                whileHover={{ y: -4, rotate: -0.3 }}
                className="project-card"
                onClick={() =>
                  p.url.startsWith('#') ? setSelected(p) : window.open(p.url)
                }
              >
                <img src={p.image} alt={p.title} />
                <div className="card-body">
                  <CardIcon size={32} className="card-icon" />
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <ul className="tech">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className="badge">{p.impact}</span>
                </div>
              </motion.article>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSlider

type ModalProps = { project: Project; onClose: () => void }

const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  const Icon = project.icon
  return (
    <motion.div
      className="overlay"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.article
        className="modal-card"
        variants={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose} aria-label="Cerrar modal">
          <FaTimes size={20} />
        </button>

        <header>
          <Icon size={48} className="header-icon" />
          <h3>{project.title}</h3>
          <span className="badge">{project.impact}</span>
        </header>

        <p>{project.description}</p>

        <ul className="tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <img className="demo" src={project.demoGif} alt={`${project.title} demo`} />
      </motion.article>
    </motion.div>
  )
}
