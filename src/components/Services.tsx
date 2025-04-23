import React from 'react';
import { FaShieldAlt, FaLaptopCode, FaGem, FaServer, FaCloud } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Services.scss';

const services = [
  {
    icon: <FaShieldAlt />,
    title: 'Cyber Security',
    desc: 'Hardening infra, implementando OWASP best‑practices y monitoreo continuo para mantener tus aplicaciones seguras.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    desc: 'Frontend y Backend responsivos, rápidos y SEO‑friendly usando React, Vite, NestJS y Serverless.'
  },
  {
    icon: <FaGem />,
    title: 'Graphic Design',
    desc: 'Diseñando interfaces limpias, accesibles y coherentes con tu marca; enfocadas en conversión.'
  },
  {
    icon: <FaServer />,
    title: 'API & Microservices',
    desc: 'Arquitecturas desacopladas, escalables y observables (OpenTelemetry, Prometheus) con NestJS.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    desc: 'CI/CD, Docker, Kubernetes y pipelines GitOps para despliegues seguros y repetibles.'
  }
];

const Services: React.FC = () => (
  <section className="services" id="services">
    <h2><span>//</span> <strong>My Services</strong></h2>

    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="services-swiper"
    >
      {services.map((s, i) => (
        <SwiperSlide key={i}>
          <div className="service-card">
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Services;