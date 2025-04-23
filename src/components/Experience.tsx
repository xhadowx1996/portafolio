import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import '../styles/Experience.scss'

import infraImg from '../../public/infra.jpg'
import gravityImg from '../../public/gravity.jpg'
import titaImg from '../../public/tita.jpg'
import mok from '../../public/mok.jpg'
import puntonmierda from '../../public/punto mierda.jpg'

const experiences = [
  {
    company: 'Infracommerce LATAM',
    role: 'Fullstack Semi Senior',
    date: '2024 - Actualidad',
    stack: 'Node.js, VTEX IO, PostgreSQL',
    image: infraImg,
  },
  {
    company: 'Gravity',
    role: 'Web Developer Senior',
    date: '2022 - 2024',
    stack: 'Spring Boot, C#, GitLab CI',
    image: gravityImg,
  },
  {
    company: 'Tita Media',
    role: 'Backend Developer',
    date: '2021 - 2022',
    stack: 'Node.js, VTEX IO, Automatización',
    image: titaImg,
  },
  {
    company: 'Grupo Mok',
    role: 'Programador de Software',
    date: '2020 - 2021',
    stack: 'React Hooks, Django REST, Node.js, Java, PostgreSQL, MongoDB',
    image: mok,
  },
  {
    company: 'Punto Merca',
    role: 'Analista de Datos',
    date: '2018',
    stack: 'Elaboración de informes, Manejo de SQL Server',
    image: puntonmierda,
  },
]

const Experience: React.FC = () => (
  <section className="experience-section" id="experience">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span>//</span> <strong>Experience</strong>
    </motion.h2>

    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
    >
      {experiences.map((exp, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={exp.image} alt={exp.company} />
            <h3>{exp.role}</h3>
            <p><strong>Empresa:</strong> {exp.company}</p>
            <p><strong>Fechas:</strong> {exp.date}</p>
            <p><strong>Stack:</strong> {exp.stack}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

export default Experience
