export default function TechStack() {
  const technologies = [
    'HTML & CSS', 'JavaScript', 'React', 'PHP', 'Laravel',
    'MySQL', 'TailwindCSS', 'Git & GitHub', 'Docker', 'Figma', 'Vite', 'Netlify'
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 bg-gray-900 rounded shadow mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Tecnologías</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
        {technologies.map((tech, i) => (
          <span key={i} className="bg-gray-700 py-1 px-2 rounded">{tech}</span>
        ))}
      </div>
    </section>
  );
}
