
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './ProjectModal.scss'

type Props = {
  project: Project
  onClose: () => void
}

const backdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const modal = { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }

const ProjectModal: React.FC<Props> = ({ project, onClose }) => (
  <AnimatePresence>
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
        onClick={e => e.stopPropagation()}
      >
        <button className="close" onClick={onClose}><X size={20} /></button>

        <header>
          <img src={project.icon} alt="" />
          <h3>{project.title}</h3>
          <span className="badge">{project.impact}</span>
        </header>

        <p>{project.description}</p>

        <ul className="tech">
          {project.tech.map(t => <li key={t}>{t}</li>)}
        </ul>

        <img className="demo" src={project.demoGif} alt="Demo GIF" />
      </motion.article>
    </motion.div>
  </AnimatePresence>
)

export default ProjectModal
