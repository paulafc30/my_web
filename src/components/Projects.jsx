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
      name: 'Portfolio Personal',
      desc: 'Este mismo portfolio que estás viendo.',
      github: 'https://github.com/paulafc30/my_web',
      demo: '#'
    }
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="text-gray-300 text-sm">{project.desc}</p>
            <div className="mt-3 flex gap-2">
              <a href={project.github} target="_blank" className="btn-link">GitHub</a>
              <a href={project.demo} target="_blank" className="btn-link">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
