// copy.jsx — ES/EN translations (v2: honest, warm, junior)

const COPY = {
  es: {
    nav: { about: "Sobre mí", work: "Proyectos", contact: "Contacto", blog: "Blog" },
    hero: {
      eyebrow: "Abierta a oportunidades · Jaén o remoto",
      headlineLines: [
        ["Desarrolladora ", "fullstack", " junior"],
        ["con muchas ganas", " "],
        ["y aún más", " preguntas", "."],
      ],
      lede: (
        <>
          Hola, soy <b>Paula Fernández Cañas</b>. Estuve <b>9 meses</b> como
          desarrolladora junior en BNT Business Telecom — mi primer trabajo real. Empecé por el
          front (HTML, CSS, JavaScript, Tailwind) y acabé tocando
          backend con <b>PHP, Laravel y MySQL</b>. Tengo más kilómetros en el
          front, pero el back me atrae y es por donde quiero seguir creciendo.
        </>
      ),
      cta1: "Ver proyectos",
      cta2: "Descargar CV",
      info: {
        role: "Junior Dev · disponible",
        company: "En búsqueda activa",
        focus: "Fullstack (front-heavy)",
        location: "Jaén, ES · GMT+1",
        availability: "Open to work — remoto o Jaén",
      },
      portraitPh: "arrastra una foto",
    },
    projects: {
      label: "Proyectos",
      title: "Cosas en las que he trabajado",
      meta: "Desliza →",
      list: [
        /* 01 — pendiente de revisar
        {
          n: "01",
          name: "Secure Files App",
          sub: "Plataforma de archivos con 2FA",
          tag: "Académico",
          status: "done",
          role: "Mi parte: fullstack — sobre todo backend y auth",
          desc: "Plataforma para subir, compartir y solicitar archivos de forma segura. Implementé autenticación con 2FA, control de acceso por roles y un flujo de solicitudes por email.",
          stack: ["Laravel", "PHP", "JavaScript", "Docker", "PL/SQL"],
          year: "2024",
          link: "https://paula-fernandez-canas.vercel.app/project-1.html",
        },
        */
        /* 02 — pendiente de revisar
        {
          n: "02",
          name: "Compiso",
          sub: "TFG · Plataforma para encontrar compañeros de piso",
          tag: "TFG",
          status: "done",
          role: "Mi parte: diseño, front y backend ligero",
          desc: "Mi proyecto de fin de grado. Una web que conecta inquilinos y propietarios con un sistema de matches, chat interno, valoraciones y notificaciones por email.",
          stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "EmailJS"],
          year: "2024",
          link: "https://paula-fernandez-canas.vercel.app/project-2.html",
        },
        */
        {
          n: "03",
          name: "Gestión Interna · Piensos Urbano",
          sub: "App para modernizar el flujo de trabajo de un negocio familiar",
          tag: "Freelance",
          status: "wip",
          role: "Mi parte: fullstack en equipo con Aurora Medel",
          desc: "Proyecto en equipo con Aurora Medel para un familiar suyo con un negocio de piensos. El cliente gestionaba todo con Canva y Excel — construimos una aplicación interna para centralizar y digitalizar ese flujo de trabajo.",
          stack: ["Laravel", "PHP", "JavaScript", "Docker", "PL/SQL"],
          year: "2025 →",
          link: "#",
        },
        {
          n: "04",
          name: "Finanzor",
          sub: "App de finanzas personales mobile-first",
          tag: "Personal",
          status: "wip",
          role: "Mi parte: diseño + frontend + backend — proyecto en solitario",
          desc: "Aplicación personal para registrar ingresos y gastos por categorías, ver un calendario de movimientos, gestionar presupuestos mensuales y crear metas de ahorro con seguimiento. Permite importar CSV bancario y exportar datos. Multiusuario.",
          stack: ["React 18", "Vite", "Tailwind", "Supabase", "React Query", "Vercel"],
          year: "2025 →",
          thumb: "assets/images/finanzor-dashboard.jpg",
          link: "https://paula-fernandez-canas.vercel.app/project-3.html",
        },
        {
          n: "05",
          name: "Mi Armario",
          sub: "PWA para gestionar tu armario digital",
          tag: "Personal",
          status: "wip",
          role: "Mi parte: arquitectura, diseño y desarrollo — proyecto en solitario",
          desc: "App web PWA para organizar ropa por categorías, crear outfits y gestionar prendas en venta (flujo Baúl → En Venta → Vendida). Integra Web Share Target para importar desde Wallapop o Vinted y una lista de deseos con preview automático de URLs.",
          stack: ["React 18", "TypeScript", "Vite", "Tailwind", "Supabase", "Zustand", "PWA"],
          year: "2025 →",
          link: "https://paula-fernandez-canas.vercel.app/project-4.html",
        },
        {
          n: "06",
          name: "AparcaYa",
          sub: "Ocupación en tiempo real y predicción de aparcamientos en Málaga",
          tag: "IA & Big Data",
          status: "wip",
          role: "Mi parte: frontend completo — mapa, chatbot, integración de datos y despliegue",
          desc: "App web que muestra en tiempo real la ocupación de los 12 aparcamientos públicos de Málaga y predice disponibilidad a 1-2 horas. Incluye mapa interactivo con Leaflet, semáforo de ocupación y un chatbot que recomienda aparcamiento según tu destino. Modelo predictivo en scikit-learn exportado a JS; visión artificial con MobileNetV2 para clasificar plazas desde cámara de tráfico.",
          stack: ["JavaScript", "Leaflet.js", "Python", "scikit-learn", "TensorFlow", "OpenCV", "Supabase", "Vercel"],
          year: "2026 →",
          link: "https://paula-fernandez-canas.vercel.app/project-5.html",
        },
      ],
    },
    stack: {
      label: "Stack",
      title: "Lo que llevo en la mochila",
      meta: "Honesta — no soy senior de nada",
      cols: [
        {
          h: "Donde tengo más experiencia",
          desc: "Lo que uso a diario en el trabajo o he usado en varios proyectos.",
          chips: [
            { n: "HTML", lvl: "diario" },
            { n: "CSS", lvl: "diario" },
            { n: "JavaScript", lvl: "diario" },
            { n: "Tailwind", lvl: "diario" },
            { n: "PHP", lvl: "experiencia" },
            { n: "Laravel", lvl: "experiencia" },
            { n: "MySQL", lvl: "experiencia" },
            { n: "Git", lvl: "diario" },
          ],
          now: false,
        },
        {
          h: "Donde estoy creciendo",
          desc: "Cosas que toco en proyectos puntuales y donde quiero seguir aprendiendo.",
          chips: [
            { n: "PL/SQL", lvl: "aprendiendo" },
            { n: "Docker", lvl: "aprendiendo" },
            { n: "Oracle", lvl: "puntual" },
            { n: "Python", lvl: "puntual" },
            { n: "Arquitectura", lvl: "leyendo" },
            { n: "Testing", lvl: "siguiente" },
          ],
          now: true,
        },
      ],
    },
    about: {
      label: "Sobre mí",
      title: "Una junior con ganas de equipo.",
      p1: (
        <>
          Hace tiempo que ando trasteando con ordenadores. Desde los
          <b> 8 años</b> era la del cole a la que llamaban para arreglar el
          proyector o resolver el lío de turno con un equipo. El código de
          verdad llegó más tarde: mis primeras líneas fueron en una
          asignatura de <b>TIC en bachillerato</b>, en 2021. Me picó. Hice
          un año de <b>Ingeniería Telemática</b> para coger bases (y un
          buen rato de C++), y luego me pasé al <b>Grado Superior de
          Desarrollo de Aplicaciones Web</b> para ir directa a lo que me
          interesaba. Estuve <b>9 meses</b> en
          <b> BNT Business Telecom</b> como junior — mi primer trabajo de
          verdad como desarrolladora.
        </>
      ),
      p2: (
        <>
          Empecé por el front porque era lo que veía y entendía. Pero cuando
          conocí <b>Laravel</b> y empecé a leer código de otros me di cuenta de
          que lo que me engancha es lo de detrás: cómo se modelan los datos,
          cómo se organiza la lógica, qué pasa cuando algo falla. Sé poco
          todavía, pero pregunto mucho y no me asusta no saber.
        </>
      ),
      p3: (
        <>
          Lo que busco ahora es un <b>equipo</b> donde aprender bien, con gente
          que tenga paciencia para enseñar y a la que pueda devolverle ganas y
          trabajo limpio.
        </>
      ),
      timeline: [
        { when: "Ahora", what: "En búsqueda activa", note: "Buscando mi siguiente equipo. Abierta a roles fullstack o backend, en Jaén o remoto.", now: true },
        { when: "2025–2026", what: "Desarrolladora junior · BNT Business Telecom", note: "9 meses fullstack en una aplicación interna. Front, back, migraciones y todo lo que tocase ese día." },
        { when: "2024", what: "TFG defendido — Compiso", note: "Plataforma para buscar compañeros de piso. Diseño, front y back." },
        { when: "2024", what: "Secure Files App", note: "Proyecto académico con foco en seguridad: 2FA y control de acceso." },
        { when: "2022", what: "Grado Superior · Desarrollo de Aplicaciones Web", note: "Tras un año de Telemática, me pasé a DAW para ir directa al desarrollo." },
        { when: "2021", what: "Primer año de Ingeniería Telemática", note: "Aprendí bases de programación y bastante C++." },
        { when: "2021", what: "Primeras líneas de código", note: "En una asignatura de TIC en bachillerato. La chispa." },
        { when: "~2010", what: "La técnica del cole", note: "Con 8 años ya andaba abriendo el ordenador para ver qué había dentro — y arreglando proyectores en clase." },
      ],
    },
    blog: {
      label: "Blog",
      title: "Cosas que voy aprendiendo.",
      meta: "Notas de campo · honestas",
      intro: "No soy ninguna experta en sistemas, pero me encanta aprender cosas nuevas. Voy apuntando todo lo que escucho y leo — en la cabeza y en una libreta. Esto es la versión publicable de esa libreta.",
      empty: "Pronto más notas.",
      readMore: "leer",
      seeAll: "Ver todas →",
      posts: [
        {
          date: "2025 · 11 · 03",
          kind: "Aprendizaje",
          title: "El día que un .env se llevó el lunes por delante",
          excerpt: "Cómo un fichero mal copiado en local me hizo entender por qué existen los pre-commit hooks. Spoiler: ahora tengo dos.",
          time: "4 min",
          link: "#",
        },
        {
          date: "2025 · 10 · 15",
          kind: "Lectura",
          title: "Empezando con Clean Code (sin que me dé miedo)",
          excerpt: "Notas de los primeros capítulos. Lo que me ha hecho clic y lo que de momento solo entiendo a medias.",
          time: "6 min",
          link: "#",
        },
        {
          date: "2025 · 09 · 22",
          kind: "Evento",
          title: "Mi primera meetup local: fui sola y aprendí mucho",
          excerpt: "Crónica para juniors tímidas. Hablé poco, escuché mucho y volví con cuatro nombres apuntados en el móvil.",
          time: "3 min",
          link: "#",
        },
        {
          date: "2025 · 08 · 10",
          kind: "Aprendizaje",
          title: "Qué es 2FA y por qué me costó tanto entenderlo",
          excerpt: "Implementarlo en Secure Files me obligó a pillar el flujo de verdad. Lo cuento como me hubiera gustado leerlo al empezar.",
          time: "7 min",
          link: "#",
        },
      ],
    },
    contact: {
      label: "Contacto",
      titlePre: "¿Buscáis a una junior",
      titleAccent: "con ganas",
      titlePost: " para vuestro equipo?",
      kicker: "Estoy abierta a un primer (o segundo) puesto fullstack o backend, en Jaén o remoto. Si tu equipo tiene paciencia y ganas de enseñar, mándame un correo y lo hablamos.",
      copy: "Copiar correo",
      copied: "¡Copiado!",
      links: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/paula-fernandez-canas/" },
        { name: "GitHub", url: "https://github.com/paulafc30" },
        { name: "CV (pdf)", url: "#" },
      ],
    },
    footer: {
      left: "© 2026 Paula Fernández Cañas",
      mid: "Jaén, ES",
      right: "",
    },
  },

  en: {
    nav: { about: "About", work: "Projects", contact: "Contact", blog: "Blog" },
    hero: {
      eyebrow: "Open to opportunities · Jaén or remote",
      headlineLines: [
        ["Junior ", "fullstack", " developer"],
        ["full of energy", " "],
        ["and even more", " questions", "."],
      ],
      lede: (
        <>
          Hi, I'm <b>Paula Fernández Cañas</b>. I spent <b>9 months</b> as a junior
          developer at BNT Business Telecom — my first real job. I started on
          the front (HTML, CSS, JavaScript, Tailwind) and ended up writing
          backend with <b>PHP, Laravel and MySQL</b>. I have more mileage on
          the front side, but I'm drawn to the backend and that's where I
          want to keep growing.
        </>
      ),
      cta1: "See projects",
      cta2: "Download CV",
      info: {
        role: "Junior Dev · available",
        company: "Actively looking",
        focus: "Fullstack (front-heavy)",
        location: "Jaén, ES · GMT+1",
        availability: "Open to work — remote or Jaén",
      },
      portraitPh: "drop a photo",
    },
    projects: {
      label: "Projects",
      title: "Things I have worked on",
      meta: "Swipe →",
      list: [
        /* 01 — pending review
        {
          n: "01",
          name: "Secure Files App",
          sub: "File platform with 2FA",
          tag: "Academic",
          status: "done",
          role: "My part: fullstack — mostly backend and auth",
          desc: "Platform to upload, share and request files securely. I implemented 2FA, role-based access control and an email-driven file request flow.",
          stack: ["Laravel", "PHP", "JavaScript", "Docker", "PL/SQL"],
          year: "2024",
          link: "https://paula-fernandez-canas.vercel.app/project-1.html",
        },
        */
        /* 02 — pending review
        {
          n: "02",
          name: "Compiso",
          sub: "Thesis · Flatmate matching platform",
          tag: "Thesis",
          status: "done",
          role: "My part: design, front and light backend",
          desc: "My final degree project. A web app that connects tenants and landlords with a matching system, in-app chat, ratings and email notifications.",
          stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "EmailJS"],
          year: "2024",
          link: "https://paula-fernandez-canas.vercel.app/project-2.html",
        },
        */
        {
          n: "03",
          name: "Internal Ops · Piensos Urbano",
          sub: "App to modernise a family business workflow",
          tag: "Freelance",
          status: "wip",
          role: "My part: fullstack with Aurora Medel",
          desc: "Team project with Aurora Medel for her family member's pet food business. The client was managing everything with Canva and Excel — we built an internal app to centralise and digitalise that workflow.",
          stack: ["Laravel", "PHP", "JavaScript", "Docker", "PL/SQL"],
          year: "2025 →",
          link: "#",
        },
        {
          n: "04",
          name: "Finanzor",
          sub: "Mobile-first personal finance app",
          tag: "Personal",
          status: "wip",
          role: "My part: design + frontend + backend — solo project",
          desc: "Personal app to track income and expenses by category, view a transaction calendar, manage monthly budgets and savings goals with contribution tracking. Supports bank CSV import and data export. Multi-user.",
          stack: ["React 18", "Vite", "Tailwind", "Supabase", "React Query", "Vercel"],
          year: "2025 →",
          thumb: "assets/images/finanzor-dashboard.jpg",
          link: "https://paula-fernandez-canas.vercel.app/project-3.html",
        },
        {
          n: "05",
          name: "Mi Armario",
          sub: "PWA to manage your digital wardrobe",
          tag: "Personal",
          status: "wip",
          role: "My part: architecture, design and development — solo project",
          desc: "PWA web app to organise clothes by category, create outfits and manage items for sale (Stored → For Sale → Sold flow). Integrates Web Share Target to import from Wallapop or Vinted and a wishlist with automatic URL preview.",
          stack: ["React 18", "TypeScript", "Vite", "Tailwind", "Supabase", "Zustand", "PWA"],
          year: "2025 →",
          link: "https://paula-fernandez-canas.vercel.app/project-4.html",
        },
        {
          n: "06",
          name: "AparcaYa",
          sub: "Real-time occupancy and parking prediction in Málaga",
          tag: "AI & Big Data",
          status: "wip",
          role: "My part: full frontend — map, chatbot, data integration and deployment",
          desc: "Web app showing real-time occupancy of Málaga's 12 public car parks and predicting availability 1-2 hours ahead. Features an interactive Leaflet map, occupancy traffic-light indicator and a chatbot that recommends where to park based on your destination. Predictive model in scikit-learn exported to JS; computer vision with MobileNetV2 to classify spaces from traffic camera images.",
          stack: ["JavaScript", "Leaflet.js", "Python", "scikit-learn", "TensorFlow", "OpenCV", "Supabase", "Vercel"],
          year: "2026 →",
          link: "https://paula-fernandez-canas.vercel.app/project-5.html",
        },
      ],
    },
    stack: {
      label: "Stack",
      title: "What I carry in the backpack",
      meta: "Honest — I'm senior at nothing",
      cols: [
        {
          h: "Where I have more experience",
          desc: "What I use daily at work or have used across several projects.",
          chips: [
            { n: "HTML", lvl: "daily" },
            { n: "CSS", lvl: "daily" },
            { n: "JavaScript", lvl: "daily" },
            { n: "Tailwind", lvl: "daily" },
            { n: "PHP", lvl: "experience" },
            { n: "Laravel", lvl: "experience" },
            { n: "MySQL", lvl: "experience" },
            { n: "Git", lvl: "daily" },
          ],
          now: false,
        },
        {
          h: "Where I'm growing",
          desc: "Things I touch on specific projects and want to keep learning.",
          chips: [
            { n: "PL/SQL", lvl: "learning" },
            { n: "Docker", lvl: "learning" },
            { n: "Oracle", lvl: "occasional" },
            { n: "Python", lvl: "occasional" },
            { n: "Architecture", lvl: "reading" },
            { n: "Testing", lvl: "next" },
          ],
          now: true,
        },
      ],
    },
    about: {
      label: "About",
      title: "A junior looking for a team.",
      p1: (
        <>
          I've been poking around computers for a long time. From age
          <b> 8</b> I was the kid at school they'd call to fix the projector
          or sort out whatever a computer was doing that day. Proper code
          came later: my first lines were in an <b>ICT class in upper
          secondary</b>, back in 2021. I got hooked. I did a year of
          <b> Telematics Engineering</b> to lay foundations (and a good
          chunk of C++), and then switched to a <b>vocational higher
          education in Web Development (DAW)</b> to go straight to what I
          cared about. I spent <b>9 months</b> at
          <b> BNT Business Telecom</b> as a junior — my first real job as a
          developer.
        </>
      ),
      p2: (
        <>
          I started on the front because that's what I could see and
          understand. But when I met <b>Laravel</b> and started reading other
          people's code I realised what hooks me is what's underneath: how
          data is modelled, how logic is organised, what happens when
          something breaks. I still know little, but I ask a lot and I'm not
          afraid of not knowing.
        </>
      ),
      p3: (
        <>
          What I'm looking for now is a <b>team</b> where I can learn
          properly — with people who have patience to teach and to whom I
          can give back drive and clean work.
        </>
      ),
      timeline: [
        { when: "Now", what: "Actively looking", note: "Looking for my next team. Open to fullstack or backend roles, in Jaén or remote.", now: true },
        { when: "2025–2026", what: "Junior developer · BNT Business Telecom", note: "9 months fullstack on an internal application. Front, back, migrations, and whatever that day brought." },
        { when: "2024", what: "Thesis defended — Compiso", note: "Flatmate matching platform. Design, front and back." },
        { when: "2024", what: "Secure Files App", note: "Academic project focused on security: 2FA and access control." },
        { when: "2022", what: "Higher Vocational · Web Development (DAW)", note: "After a year of Telematics, I moved to DAW to go straight to dev work." },
        { when: "2021", what: "First year of Telematics Engineering", note: "Programming fundamentals and a good amount of C++." },
        { when: "2021", what: "First lines of code", note: "In an ICT class at secondary school. The spark." },
        { when: "~2010", what: "The class techie", note: "At 8 I was already opening the computer to see what was inside — and fixing classroom projectors." },
      ],
    },
    blog: {
      label: "Blog",
      title: "Things I'm learning.",
      meta: "Field notes · honest",
      intro: "I'm no systems expert, but I love learning new things. I write down everything I hear and read — in my head and in a notebook. This is the publishable version of that notebook.",
      empty: "More notes coming soon.",
      readMore: "read",
      seeAll: "See all →",
      posts: [
        {
          date: "2025 · 11 · 03",
          kind: "Learning",
          title: "The day a stray .env took down my Monday",
          excerpt: "How a badly-copied file made me finally understand pre-commit hooks. Spoiler: I have two now.",
          time: "4 min",
          link: "#",
        },
        {
          date: "2025 · 10 · 15",
          kind: "Reading",
          title: "Starting Clean Code (without freaking out)",
          excerpt: "Notes from the first chapters. What clicked and what I only sort-of get yet.",
          time: "6 min",
          link: "#",
        },
        {
          date: "2025 · 09 · 22",
          kind: "Event",
          title: "My first local meetup: went alone, learned plenty",
          excerpt: "A field report for shy juniors. I spoke little, listened a lot, came home with four names in my phone.",
          time: "3 min",
          link: "#",
        },
        {
          date: "2025 · 08 · 10",
          kind: "Learning",
          title: "What 2FA is and why it took me a while",
          excerpt: "Implementing it in Secure Files forced me to actually grok the flow. Writing it how I wish I'd read it.",
          time: "7 min",
          link: "#",
        },
      ],
    },
    contact: {
      label: "Contact",
      titlePre: "Looking for a junior",
      titleAccent: "with drive",
      titlePost: " for your team?",
      kicker: "I'm open to a first (or second) fullstack or backend role, in Jaén or remote. If your team is patient and willing to teach, send me an email and let's talk.",
      copy: "Copy email",
      copied: "Copied!",
      links: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/paula-fernandez-canas/" },
        { name: "GitHub", url: "https://github.com/paulafc30" },
        { name: "CV (pdf)", url: "#" },
      ],
    },
    footer: {
      left: "© 2026 Paula Fernández Cañas",
      mid: "Jaén, ES",
      right: "",
    },
  },
};

window.COPY = COPY;


// ───────────────────────

// cursor.jsx — v2: no custom cursor. Keep tiny no-ops for compat.

function useCustomCursor() {
  React.useEffect(() => {
    const el = document.getElementById('cursor');
    if (el) el.remove();
    const g = document.getElementById('grain');
    if (g) g.remove();
  }, []);
}

Object.assign(window, { useCustomCursor });


// ───────────────────────

// components.jsx — v2: warm, honest, no terminal chrome

// ------- Header -------
function Header({ t, lang, setLang, dark, setDark }) {
  return (
    <header className="top">
      <div className="wrap top-inner">
        <a href="#top" className="brand">
          <span className="mark">P</span>
          <span className="name">Paula Fernández</span>
          <span className="role">/ dev junior</span>
        </a>
        <nav className="nav">
          <a href="#work">{t.nav.work}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
          <a href="#blog">{t.nav.blog}</a>
        </nav>
        <div className="top-right">
          <button className="pill" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label="Toggle language">
            <span className={'seg ' + (lang === 'es' ? 'on' : '')}>ES</span>
            <span className="seg">·</span>
            <span className={'seg ' + (lang === 'en' ? 'on' : '')}>EN</span>
          </button>
          <button className="pill" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? '◐' : '◑'}
          </button>
        </div>
      </div>
    </header>
  );
}

// ------- Hero -------
function Hero({ t }) {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot" />
            <span>{t.hero.eyebrow}</span>
          </div>

          <h1 className="headline">
            {t.hero.headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line.map((part, j) => (
                  <span key={j} className={j === 1 ? 'accent' : 'ink'}>{part}</span>
                ))}
                {i < t.hero.headlineLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="lede">{t.hero.lede}</p>

          <div className="cta-row">
            <a href="#work" className="btn-pill primary">
              {t.hero.cta1} <span className="arr">→</span>
            </a>
            <a href="assets/paula-fernandez-cv.pdf" download="Paula-Fernandez-Canas-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-pill">
              {t.hero.cta2} <span className="arr">↓</span>
            </a>
          </div>
        </div>

        <div className="portrait-stack">
          <div className="portrait">
            <image-slot
              id="hero-portrait"
              shape="rect"
              src="assets/images/paula.jpeg"
              placeholder={t.hero.portraitPh}
            ></image-slot>
          </div>
          <div className="info-card">
            <div className="kv">
              <span className="k">rol</span>      <span className="v">{t.hero.info.role}</span>
              <span className="k">en</span>       <span className="v">{t.hero.info.company}</span>
              <span className="k">stack</span>    <span className="v">{t.hero.info.focus}</span>
              <span className="k">desde</span>    <span className="v">{t.hero.info.location}</span>
              <span className="k">estado</span>   <span className="v"><span className="live"><i />{t.hero.info.availability}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------- Project card -------
function ProjectCard({ p }) {
  const tagClass = p.status === 'wip' ? 'tag' : 'tag muted';
  return (
    <article className="pcard">
      <div className="thumb">
        <image-slot
          id={'thumb-' + p.n}
          shape="rect"
          src={p.thumb || undefined}
          placeholder={'captura · ' + p.name}
        ></image-slot>
        <span className="num">N.º {p.n}</span>
        <span className={tagClass}>{p.tag}</span>
      </div>
      <div className="body">
        <h3>
          {p.name}
          <span className="sub">{p.sub}</span>
        </h3>
        <p>{p.desc}</p>

        <div className="role">
          <span className="k">role</span>
          <span>{p.role}</span>
        </div>

        <div className="stack">
          {p.stack.map(s => <span key={s}>{s}</span>)}
        </div>
      </div>
      <div className="foot">
        <span className="yr">{p.year}</span>
        <a href={p.link} target="_blank" rel="noopener">
          Ver detalle <span className="arr">→</span>
        </a>
      </div>
    </article>
  );
}

// ------- Projects carousel -------
function Projects({ t }) {
  const ref = React.useRef(null);
  const [idx, setIdx] = React.useState(0);

  function scrollTo(i) {
    const el = ref.current;
    if (!el) return;
    const card = el.children[i];
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  }

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onScroll() {
      const items = Array.from(el.children);
      let best = 0, bestDist = Infinity;
      items.forEach((c, i) => {
        const d = Math.abs((c.offsetLeft - el.offsetLeft) - el.scrollLeft);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setIdx(best);
    }
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const total = t.projects.list.length;
  return (
    <section id="work" className="section wrap">
      <div className="section-head">
        <div>
          <div className="label">{t.projects.label}</div>
          <h2>{t.projects.title}</h2>
        </div>
        <div className="meta">{t.projects.meta} &nbsp;·&nbsp; {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
      </div>

      <div className="car-wrap">
        <div className="car-controls">
          <button className="car-btn" disabled={idx === 0} onClick={() => scrollTo(Math.max(0, idx - 1))} aria-label="Previous">←</button>
          <button className="car-btn" disabled={idx === total - 1} onClick={() => scrollTo(Math.min(total - 1, idx + 1))} aria-label="Next">→</button>
        </div>
        <div className="carousel" ref={ref}>
          {t.projects.list.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
        <div className="car-progress">
          <i style={{ width: `${100 / total}%`, left: `${(idx * 100) / total}%` }} />
        </div>
      </div>
    </section>
  );
}

// ------- Stack -------
function Stack({ t }) {
  return (
    <section className="section wrap">
      <div className="section-head">
        <div>
          <div className="label">{t.stack.label}</div>
          <h2>{t.stack.title}</h2>
        </div>
        <div className="meta">{t.stack.meta}</div>
      </div>
      <div className="stack-grid">
        {t.stack.cols.map((col, ci) => (
          <div className={'stack-col' + (col.now ? ' now' : '')} key={ci}>
            <h4>{col.h}</h4>
            <p className="desc">{col.desc}</p>
            <div className="chips">
              {col.chips.map((c, i) => (
                <span className="chip" key={i}>
                  {c.n}
                  <span className="nv">{c.lvl}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ------- About + timeline -------
function About({ t }) {
  return (
    <section id="about" className="section wrap">
      <div className="section-head">
        <div>
          <div className="label">{t.about.label}</div>
          <h2>{t.about.title}</h2>
        </div>
      </div>
      <div className="about-grid">
        <div>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
        <div className="timeline">
          {t.about.timeline.map((c, i) => (
            <div key={i} className={'t-item' + (c.now ? ' now' : '')}>
              <div className="when">{c.when}</div>
              <div className="what">{c.what}</div>
              <div className="note">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------- Blog -------
function Blog({ t }) {
  return (
    <section id="blog" className="section wrap">
      <div className="section-head">
        <div>
          <div className="label">{t.blog.label}</div>
          <h2>{t.blog.title}</h2>
        </div>
        <div className="meta">{t.blog.meta}</div>
      </div>
      {t.blog.intro && (
        <p className="blog-intro">{t.blog.intro}</p>
      )}
      <div className="blog-grid">
        {t.blog.posts.map((p, i) => (
          <a key={i} href={p.link} className="bcard">
            <div className="bmeta">
              <span className="bdate">{p.date}</span>
              <span className="bsep">·</span>
              <span className="bkind">{p.kind}</span>
              <span className="bsep">·</span>
              <span className="btime">{p.time}</span>
            </div>
            <h3 className="btitle">{p.title}</h3>
            <p className="bexcerpt">{p.excerpt}</p>
            <span className="bread">{t.blog.readMore} <span className="arr">→</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ------- Contact -------
function Contact({ t }) {
  const [copied, setCopied] = React.useState(false);
  function copy() {
    navigator.clipboard?.writeText('paulafc30@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="label dim" style={{
          color: 'var(--accent)',
          fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
        }}>{t.contact.label}</div>
        <h2>
          {t.contact.titlePre}{' '}<span className="accent">{t.contact.titleAccent}</span>{t.contact.titlePost}
        </h2>
        <p className="kicker">{t.contact.kicker}</p>
        <div className="email-row">
          <a href="mailto:paulafc30@gmail.com">paulafc30@gmail.com</a>
          <button className="copy" onClick={copy}>
            {copied ? t.contact.copied : t.contact.copy}
          </button>
        </div>
        <div className="links">
          {t.contact.links.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noopener">
              {l.name} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------- Footer -------
function Footer({ t }) {
  return (
    <footer className="bot">
      <div className="wrap bot-inner">
        <span>{t.footer.left}</span>
        <span>{t.footer.mid}</span>
        <span>{t.footer.right}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, Projects, Stack, About, Blog, Contact, Footer });


// ───────────────────────

// app.jsx — main App component (v2: light default, brick red, calmer)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#b8412c",
  "dark": false,
  "lang": "es",
  "fontSize": 14
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = t.lang;
  const setLang = (v) => setTweak('lang', v);
  const dark = t.dark;
  const setDark = (v) => setTweak('dark', v);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.lang = lang;
    document.body.style.fontSize = t.fontSize + 'px';
  }, [dark, t.accent, lang, t.fontSize]);

  // Drop legacy crosshair + grain (if still in DOM from older builds)
  useCustomCursor();

  const copy = COPY[lang] || COPY.es;

  return (
    <>
      <Header t={copy} lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <Hero t={copy} />
      <Projects t={copy} />
      <Stack t={copy} />
      <About t={copy} />
      <Contact t={copy} />
      <Blog t={copy} />
      <Footer t={copy} />

      <TweaksPanel>
        <TweakSection label={lang === 'es' ? 'Idioma & tema' : 'Language & theme'} />
        <TweakRadio
          label={lang === 'es' ? 'Idioma' : 'Language'}
          value={lang}
          options={['es', 'en']}
          onChange={(v) => setTweak('lang', v)}
        />
        <TweakToggle
          label={lang === 'es' ? 'Modo oscuro' : 'Dark mode'}
          value={dark}
          onChange={(v) => setTweak('dark', v)}
        />

        <TweakSection label={lang === 'es' ? 'Color de marca' : 'Brand color'} />
        <TweakColor
          label={lang === 'es' ? 'Acento' : 'Accent'}
          value={t.accent}
          options={['#b8412c', '#8a2b18', '#c95a3c', '#a83a64', '#2c5e8a', '#445a3f']}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label={lang === 'es' ? 'Tipografía' : 'Typography'} />
        <TweakSlider
          label={lang === 'es' ? 'Tamaño base' : 'Base size'}
          value={t.fontSize} min={12} max={18} step={1} unit="px"
          onChange={(v) => setTweak('fontSize', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);