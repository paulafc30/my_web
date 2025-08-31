import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-gray-900 rounded shadow mt-8">
      <motion.h2
        className="text-3xl font-bold mb-4 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Sobre mí
      </motion.h2>
      <motion.p
        className="text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Soy desarrolladora fullstack apasionada por crear soluciones prácticas y eficientes, usando tecnologías modernas tanto en el backend como en el frontend. Me gusta escribir código limpio y colaborar en equipos que buscan mejorar continuamente.
      </motion.p>
    </section>
  );
}
