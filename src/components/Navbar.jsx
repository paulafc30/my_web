import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow">
      <h1 className="text-xl font-semibold">Paula Fernández Cañas</h1>
      <Link
        to="/contacto"
        className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded transition"
      >
        Contactar
      </Link>
    </nav>
  );
};

export default Navbar;
