export default function TechStack() {
  const technologies = [
    'HTML & CSS', 'JavaScript', 'React', 'PHP', 'Laravel',
    'MySQL', 'TailwindCSS', 'Git & GitHub', 'Docker', 'Figma', 'Vite', 'Netlify'
  ]

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4">🛠️ Tecnologías</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm">
        {technologies.map((tech, i) => (
          <span key={i} className="tech-item">{tech}</span>
        ))}
      </div>
    </section>
  )
}
