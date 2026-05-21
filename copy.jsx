// copy.jsx — ES/EN translations (v2: honest, warm, junior)

// Meses completos trabajando en BNT desde el 3 de noviembre de 2025.
// Se recalcula en cada carga del navegador.
function monthsAtBNT() {
  const start = new Date(2025, 10, 3); // 3 noviembre 2025 (mes 0-indexed)
  const now = new Date();
  // Redondeo al mes más cercano: si pasan >= 15 días del mes actual, suma 1.
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const dayDiff = now.getDate() - start.getDate();
  if (dayDiff >= 15) months++;
  else if (dayDiff < 0 && dayDiff > -15) months--;
  return Math.max(0, months);
}
const MESES_BNT = monthsAtBNT();
const MESES_ES = MESES_BNT === 1 ? 'mes' : 'meses';

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
          Hola, soy <b>Paula Fernández Cañas</b>. Llevo <b>{MESES_BNT} {MESES_ES}</b> trabajando
          como desarrolladora junior en BNT Business Telecom. Empecé por el
          front (HTML, CSS, JavaScript, Tailwind) y ahora también toco
          backend con <b>PHP, Laravel y MySQL</b>. Tengo más kilómetros en el
          front, pero el back me atrae y es por donde quiero seguir creciendo.
        </>
      ),
      cta1: "Ver proyectos",
      cta2: "Descargar CV",
      info: {
        role: "Junior Dev",
        company: "BNT Business Telecom",
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
        {
          n: "03",
          name: "Gestión Interna · Piensos Urbano",
          sub: "Aplicación interna en BNT Business Telecom",
          tag: "En curso",
          status: "wip",
          role: "Mi parte: fullstack en equipo — aprendiendo a diario",
          desc: "Trabajo actual. Toco frontend y backend, hago migraciones de datos y aprendo sobre arquitectura mientras el proyecto avanza. Mi primer proyecto serio en producción.",
          stack: ["Laravel", "PHP", "JavaScript", "Docker", "PL/SQL"],
          year: "2025 →",
          link: "#",
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
            { n: "PHP", lvl: "trabajo" },
            { n: "Laravel", lvl: "trabajo" },
            { n: "MySQL", lvl: "trabajo" },
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
          interesaba. Hace {MESES_BNT} {MESES_ES} entré en
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
        { when: "Ahora", what: "Desarrolladora junior · BNT Business Telecom", note: "Fullstack en una aplicación interna. Front, back, migraciones y todo lo que toque ese día.", now: true },
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
          Hi, I'm <b>Paula Fernández Cañas</b>. I've been working as a junior
          developer at BNT Business Telecom for <b>{MESES_BNT} month{MESES_BNT === 1 ? '' : 's'}</b>. I started on
          the front (HTML, CSS, JavaScript, Tailwind) and now I also write
          backend with <b>PHP, Laravel and MySQL</b>. I have more mileage on
          the front side, but I'm drawn to the backend and that's where I
          want to keep growing.
        </>
      ),
      cta1: "See projects",
      cta2: "Download CV",
      info: {
        role: "Junior Dev",
        company: "BNT Business Telecom",
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
        {
          n: "03",
          name: "Internal Ops · Piensos Urbano",
          sub: "Internal app at BNT Business Telecom",
          tag: "In progress",
          status: "wip",
          role: "My part: fullstack with the team — learning daily",
          desc: "My current work. I touch both frontend and backend, do data migrations and learn about architecture as the project grows. My first serious project in production.",
          stack: ["Laravel", "PHP", "JavaScript", "Docker", "PL/SQL"],
          year: "2025 →",
          link: "#",
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
            { n: "PHP", lvl: "at work" },
            { n: "Laravel", lvl: "at work" },
            { n: "MySQL", lvl: "at work" },
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
          cared about. {MESES_BNT} month{MESES_BNT === 1 ? '' : 's'} ago I joined
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
        { when: "Now", what: "Junior developer · BNT Business Telecom", note: "Fullstack on an internal application. Front, back, migrations, and whatever that day brings.", now: true },
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
