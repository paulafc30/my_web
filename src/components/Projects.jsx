export default function Projects() {
  const projects = [
    {
      name: 'Compiso Web',
      desc: 'Alquiler de pisos y búsqueda de compañeros.',
      github: 'https://github.com/medelcasta/compiso',
      demo: 'https://compiso.infy.uk/'
    },
    {
      name: 'Secure App',
      desc: 'Gestión de archivos con control de roles.',
      github: 'https://github.com/paulafc30/secure-app',
      demo: 'https://secure-app.netlify.app/'
    },
    {
      name: 'Mi Web',
      desc: 'Este mismo portfolio personal.',
      github: 'https://github.com/paulafc30/my_web',
      demo: '#'
    }
  ]

  return (
    <section className="max-w-5xl mx-auto p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">🚀 Proyectos destacados</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.desc}</p>
            <div className="mt-3">
              <a href={project.github} className="btn-link mr-2" target="_blank">GitHub</a>
              <a href={project.demo} className="btn-link" target="_blank">Ver demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
