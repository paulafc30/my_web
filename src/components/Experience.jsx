export default function Experience() {
  const experiences = [
    {
      title: 'Proyecto Freelance – Secure App',
      date: '2025',
      desc: 'Aplicación segura de archivos con control de acceso y roles.'
    },
    {
      title: 'Proyecto académico – Compiso Web',
      date: '2024',
      desc: 'Aplicación web para compartir piso desarrollada con Laravel.'
    }
  ]

  return (
    <section className="max-w-5xl mx-auto p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">💼 Experiencia</h2>
      <ul className="space-y-4">
        {experiences.map((exp, i) => (
          <li key={i} className="bg-white rounded shadow p-4">
            <h3 className="font-bold">{exp.title}</h3>
            <p className="text-sm text-gray-600">{exp.date}</p>
            <p className="mt-2 text-sm">{exp.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
