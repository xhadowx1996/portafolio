import React from 'react'
import '../styles/About.scss'

const About: React.FC = () => (
<section id="about" className="about">
  <div className="about-section">
    <div className="about-info">
      <h2>// Sobre mí</h2>

      <p>
        Soy <strong>Daniel Moya</strong>, desarrollador backend con <strong>5+ años</strong> construyendo<br />
        apps que sobreviven a los lunes y a las deploy‑parties de medianoche.<br />
        Mi superpoder es convertir <code>throw new Error()</code> en <em>logs significativos</em> 🎉.
      </p>

      <p>
        He trabajado con <b>Java</b>, <b>Spring Boot</b>, <b>Node.js</b>, <b>NestJS</b> y <b>VTEX IO</b>,<br />
        orquestando microservicios, APIs y uno que otro meme en los PRs.<br />
        Cuando no estoy peleando con el linter, me encontrarás levantando pesas<br />
        o practicando el arte milenario de ~googlear~ *investigar* soluciones.
      </p>

      <p className="fun">
        Fun fact: mi record personal es hacer deploy <em>sin</em> romper producción<br />
        durante <strong>42 días seguidos</strong>. (Sí, hago <code>git push</code> con casco).
      </p>
    </div>

    <div className="about-stack">
      <h3>Stack actual 🛠️</h3>
      <ul>
        <li>⚡ TypeScript / Node.js / NestJS</li>
        <li>☕ Java 17 + Spring Boot</li>
        <li>🐳 Docker & Kubernetes</li>
        <li>🛒 VTEX IO & VTEX Legacy</li>
        <li>☁️ AWS (ECS, S3, Lambda)</li>
        <li>📊 PostgreSQL, MongoDB, Redis</li>
      </ul>
    </div>
  </div>
</section>


)

export default About