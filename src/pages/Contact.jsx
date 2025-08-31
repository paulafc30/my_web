import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    /*emailjs
      .send(
        "TU_SERVICE_ID",   // ← Sustituye por tu Service ID de EmailJS
        "TU_TEMPLATE_ID",  // ← Sustituye por tu Template ID
        formData,
        "TU_PUBLIC_KEY"    // ← Sustituye por tu Public Key
      )
      .then(() => setEnviado(true))
      .catch((error) => alert("Error: " + error.text));*/
      setEnviado(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 pt-20">
      <div className="bg-red-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        {enviado ? (
          <h2 className="text-2xl text-center text-green-300 font-semibold">
            ¡Solicitud enviada correctamente!
          </h2>
        ) : (
          <>
            <h2 className="text-2xl mb-6 text-center font-bold text-white">
              Contacta conmigo
            </h2>
            <form onSubmit={enviarFormulario} className="space-y-4">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="w-full p-2 rounded bg-black text-white border border-red-600"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="w-full p-2 rounded bg-black text-white border border-red-600"
                onChange={handleChange}
              />
              <textarea
                name="mensaje"
                placeholder="Motivo del contacto"
                required
                rows="4"
                className="w-full p-2 rounded bg-black text-white border border-red-600"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 p-2 rounded font-bold transition"
              >
                Enviar
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
