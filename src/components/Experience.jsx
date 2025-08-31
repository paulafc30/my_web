export default function Experience() {
  const experiences = [
    { title: 'Secure App – Freelance', date: '2025', desc: 'Aplicación segura de archivos con control de acceso y roles.' },
    { title: 'Compiso Web – Académico', date: '2024', desc: 'Aplicación web para compartir piso desarrollada con Laravel.' }
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Experiencia</h2>
      <ul className="space-y-4">
        {experiences.map((exp, i) => (
          <li key={i} className="bg-gray-800 rounded shadow p-4 card">
            <h3 className="font-bold text-white">{exp.title}</h3>
            <p className="text-gray-400 text-sm">{exp.date}</p>
            <p className="mt-2 text-gray-300 text-sm">{exp.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
