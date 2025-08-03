import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded shadow flex flex-col md:flex-row items-center text-center md:text-left gap-6">
      <img src="../public/images/foto.jpg" alt="Paula" className="w-32 h-32 rounded-full shadow object-cover" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">👋 ¡Hola! Soy Paula</h2>
        <p>
          Desarrolladora web fullstack especializada en PHP, Laravel y React. Me encanta construir experiencias funcionales, modernas y accesibles. Busco un equipo donde crecer y aportar valor.
        </p>
      </motion.div>
    </section>
  )
}
