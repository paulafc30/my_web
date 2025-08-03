import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-techgray p-6 rounded shadow">
      <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        👩‍💻 Sobre mí
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Soy una desarrolladora fullstack apasionada por crear soluciones prácticas y eficientes, usando tecnologías modernas tanto en el backend como en el frontend.
      </motion.p>
    </section>
  )
}
