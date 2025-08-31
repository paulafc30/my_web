import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-black to-red-900 px-6">
      <motion.h1
        className="text-5xl font-bold mb-4 text-red-500 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Paula Fernández Cañas
      </motion.h1>
      <motion.p
        className="text-xl text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Desarrolladora web fullstack con pasión por la tecnología, el diseño y la eficiencia en el desarrollo.
      </motion.p>
      <motion.a
        href="#proyectos"
        className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Ver proyectos
      </motion.a>
    </div>
  );
};

export default Home;
