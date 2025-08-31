import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md border-b border-red-700">
      <h1 className="text-2xl font-bold text-red-500">Paula Fernández</h1>
      <Link
        to="/contacto"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition"
      >
        Contactar
      </Link>
    </nav>
  );
};

export default Navbar;
