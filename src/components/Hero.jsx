import { motion } from "framer-motion";
import foto from "../assets/images/foto.jpg";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto mt-20 p-6 rounded shadow flex flex-col md:flex-row items-center text-center md:text-left gap-6 bg-gray-900 card">
      <motion.img 
        src={foto} 
        alt="Paula" 
        className="w-32 h-32 rounded-full shadow object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-white">👋 ¡Hola! Soy Paula</h2>
        <p className="text-gray-300">
          Desarrolladora web fullstack especializada en PHP, Laravel y React. Me encanta construir experiencias funcionales, modernas y accesibles. Busco un equipo donde crecer y aportar valor.
        </p>
      </motion.div>
    </section>
  );
}
