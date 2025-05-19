import React from 'react'
import '../styles/Integrations.scss'

const integrations = [
  {
    category: 'Tiendas VTEX',
    items: [
      { 
        name: 'Colchones Spring', url: 'https://www.colchonesspring.com.co'
      },
      {
        name: 'Studio f', url: 'https://www.studiof.com.co'
      },
      {
        name: 'Studio f Usa ', url: 'https://us.studiof.com'
      },

      {
        name: 'Dior Argentina', url: 'https://shop.dior.com.ar'
      },
      {
        name: 'Coca Cola Argentina', url: 'https://tienda.coca-cola.com.ar'
      },
      {
        name: 'fuera de serie', url: 'https://www.fueradeserie.com.co'
      },
    ]
  },
  {
    category: 'Apps VTEX',
    items: [
      { name: 'Consulta de Inventarios', url: '#projects' },
      { name: 'Servicios a la medida en VTEX IO', url: '#projects' }
    ]
  }
]

const Integrations: React.FC = () => (
  <section className="integrations" id="integrations">
    <h2><span>//</span> <strong>Integraciones & Casos</strong></h2>

    <div className="integration-grid">
      {integrations.map((group, idx) => (
        <div className="integration-card" key={idx}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((it, i) => (
              <li key={i}>
                <a href={it.url} target="_blank" rel="noopener noreferrer">
                  {it.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default Integrations