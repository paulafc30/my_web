// copy.jsx — ES/EN translations (v2: honest, warm, junior)

const COPY = {
  es: {
    nav: {
      about: 'Sobre mí',
      work: 'Proyectos',
      training: 'Formación',
      contact: 'Contacto',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'Abierta a oportunidades · Jaén o remoto',
      headlineLines: [
        ['Desarrolladora ', 'fullstack', ' junior'],
        ['con mucha ', 'actitud', ' '],
        ['y aún más ganas de', ' aprender', '.'],
      ],
      lede: [
        <>
          Soy <b>Paula Fernández Cañas</b>. He estado trabajando como{' '}
          <b>desarrolladora web junior</b> en BNT Business Telecom, en proyectos
          web e <b>IoT</b>.
        </>,
        <>
          Empecé por el front (HTML, CSS, JavaScript, Tailwind) y acabé tocando
          backend con <b>PHP, Laravel y MySQL</b>. Me atrae el backend y es por
          donde quiero seguir creciendo. Actualmente también me estoy formando
          en <b>IA y Big Data</b>.
        </>,
      ],
      cta1: 'Ver proyectos',
      cta2: 'Descargar CV',
      info: {
        role: 'Junior Web Developer',
        focus: 'Fullstack (con interés en back)',
        location: 'Jaén, ES · GMT+1',
        availability: 'Open to work — remoto o Jaén',
      },
      portraitPh: 'arrastra una foto',
    },
    projects: {
      label: 'Proyectos',
      title: 'Proyectos en los que estoy trabajando',
      roleLabel: 'rol',
      meta: 'Desliza →',
      list: [
        /* 01 — pendiente de revisar
        {
          n: "01",
          name: "Secure Files App",
          sub: "Plataforma de archivos con 2FA",
          tag: "Académico",
          status: "done",
          role: "fullstack — sobre todo backend y auth",
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
          role: "diseño, front y backend ligero",
          desc: "Mi proyecto de fin de grado. Una web que conecta inquilinos y propietarios con un sistema de matches, chat interno, valoraciones y notificaciones por email.",
          stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "EmailJS"],
          year: "2024",
          link: "https://paula-fernandez-canas.vercel.app/project-2.html",
        },
        */
        {
          n: '03',
          name: 'Finanzor',
          sub: 'App de finanzas personales mobile-first',
          tag: 'Personal',
          status: 'wip',
          role: 'diseño + frontend + backend — proyecto en solitario',
          desc: 'Aplicación personal para registrar ingresos y gastos por categorías, ver un calendario de movimientos, gestionar presupuestos mensuales y crear metas de ahorro con seguimiento. Incluye KPIs con "Saldo a hoy" y barra de "Saldo estimado" con proyección de movimientos futuros. Importación de CSV bancario, exportación de datos y sección de sugerencias y fallos integrada (Supabase + Web3Forms). Multiusuario.',
          stack: [
            'React 18',
            'Vite',
            'Tailwind',
            'Supabase',
            'React Query',
            'Web3Forms',
            'Vercel',
          ],
          year: '2025 →',
          thumb: 'assets/images/finanzor.png',
          link: 'https://paula-fernandez-canas.vercel.app/project-3.html',
        },
        {
          n: '04',
          name: 'Mi Armario',
          sub: 'PWA para gestionar tu armario digital',
          tag: 'Personal',
          status: 'wip',
          role: 'arquitectura, diseño y desarrollo — proyecto en solitario',
          desc: 'App web PWA para organizar ropa por categorías, crear outfits y gestionar prendas en venta (flujo Baúl → En Venta → Vendida). Integra Web Share Target para importar desde Wallapop o Vinted y lista de deseos con preview automático de URLs. Buscador con filtros avanzados acumulables: color, talla, tejido y marca. Prettify: IA de eliminación de fondo (isnet_fp16) con composición estilo catálogo 1600×1600, sombra de suelo, tres acabados (Estudio, Crema, PNG) y soporte AVIF/HEIC; incluye botón de deshacer retoque por miniatura.',
          stack: [
            'React 18',
            'TypeScript',
            'Vite',
            'Tailwind',
            'Supabase',
            'Zustand',
            'PWA',
            'ONNX / AI',
          ],
          year: '2025 →',
          thumb: 'assets/images/miarmario.png',
          link: 'https://paula-fernandez-canas.vercel.app/project-4.html',
        },
        {
          n: '05',
          name: 'AparcaYa',
          sub: 'Ocupación en tiempo real y predicción de aparcamientos en Málaga',
          tag: 'IA & Big Data',
          status: 'wip',
          role: 'frontend completo — mapa, chatbot, integración de datos y despliegue',
          desc: 'App web que muestra en tiempo real la ocupación de los 12 aparcamientos públicos de Málaga y predice disponibilidad a 1-2 horas. Incluye mapa interactivo con Leaflet, semáforo de ocupación y un chatbot que recomienda aparcamiento según tu destino. Modelo predictivo en scikit-learn exportado a JS; visión artificial con MobileNetV2 para clasificar plazas desde cámara de tráfico.',
          stack: [
            'JavaScript',
            'Leaflet.js',
            'Python',
            'scikit-learn',
            'TensorFlow',
            'OpenCV',
            'Supabase',
            'Vercel',
          ],
          year: '2026 →',
          thumb: 'assets/images/aparcaya.png',
          link: 'https://paula-fernandez-canas.vercel.app/project-5.html',
        },
        {
          n: '06',
          name: 'Gestión Interna · Piensos Urbano',
          sub: 'App para modernizar el flujo de trabajo de un negocio familiar',
          tag: 'Freelance',
          status: 'wip',
          role: 'fullstack en equipo con Aurora Medel',
          desc: 'Proyecto en equipo con Aurora Medel para un familiar suyo con un negocio de piensos. El cliente gestionaba todo con Canva y Excel — construimos una aplicación interna para centralizar y digitalizar ese flujo de trabajo.',
          stack: ['Laravel', 'PHP', 'JavaScript', 'Docker', 'PL/SQL'],
          year: '2025 →',
          link: '#',
        },
        {
          n: '07',
          name: 'lour.es',
          sub: 'Portfolio para Lourdes, editora de vídeo y creadora de contenido',
          tag: 'Freelance',
          status: 'done',
          role: 'diseño y desarrollo completo — proyecto en solitario',
          desc: 'Portfolio personal para Lourdes, editora de vídeo para influencers y marcas. Incluye sección de edición con galería de creadoras de YouTube y Reels/TikTok, vídeos enlazados por creadora, páginas de servicios y contacto. Desplegado en lour.es con Cloudflare.',
          stack: [
            'React 18',
            'TypeScript',
            'Vite',
            'Tailwind',
            'Replit',
            'Cloudflare',
          ],
          year: '2026',
          link: 'https://lour.es',
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Tecnologías y Lenguajes',
      meta: 'Honesta — no soy senior de nada',
      skills: [
        {
          n: 'HTML',
          icon: 'https://cdn.simpleicons.org/html5/e34f26',
          pct: 90,
        },
        { n: 'CSS', icon: 'https://cdn.simpleicons.org/css/1572b6', pct: 85 },
        {
          n: 'JavaScript',
          icon: 'https://cdn.simpleicons.org/javascript/f7df1e',
          pct: 82,
        },
        { n: 'Git', icon: 'https://cdn.simpleicons.org/git/f05032', pct: 82 },
        {
          n: 'Tailwind',
          icon: 'https://cdn.simpleicons.org/tailwindcss/06b6d4',
          pct: 75,
        },
        { n: 'PHP', icon: 'https://cdn.simpleicons.org/php/8892bf', pct: 72 },
        {
          n: 'Laravel',
          icon: 'https://cdn.simpleicons.org/laravel/ff2d20',
          pct: 72,
        },
        {
          n: 'MySQL',
          icon: 'https://cdn.simpleicons.org/mysql/4479a1',
          pct: 68,
        },
        {
          n: 'Bootstrap',
          icon: 'https://cdn.simpleicons.org/bootstrap/7952b3',
          pct: 65,
        },
        {
          n: 'jQuery',
          icon: 'https://cdn.simpleicons.org/jquery/0769ad',
          pct: 63,
        },
        {
          n: 'Figma',
          icon: 'https://cdn.simpleicons.org/figma/f24e1e',
          pct: 62,
        },
        {
          n: 'CodeIgniter',
          icon: 'https://cdn.simpleicons.org/codeigniter/ef4223',
          pct: 58,
        },
        {
          n: 'Linux',
          icon: 'https://cdn.simpleicons.org/linux/111111',
          pct: 55,
        },
        {
          n: 'React',
          icon: 'https://cdn.simpleicons.org/react/61dafb',
          pct: 52,
        },
        { n: 'XML', icon: null, pct: 52 },
        { n: 'JSON', icon: null, pct: 50 },
        {
          n: 'TypeScript',
          icon: 'https://cdn.simpleicons.org/typescript/3178c6',
          pct: 45,
        },
        {
          n: 'PL/SQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/oracle/oracle-original.svg',
          pct: 42,
        },
        {
          n: 'Docker',
          icon: 'https://cdn.simpleicons.org/docker/2496ed',
          pct: 42,
        },
        {
          n: 'Node.js',
          icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
          pct: 38,
        },
        {
          n: 'Python',
          icon: 'https://cdn.simpleicons.org/python/3776ab',
          pct: 35,
        },
        {
          n: 'Vitest',
          icon: 'https://cdn.simpleicons.org/vitest/6e9f18',
          pct: 33,
        },
        {
          n: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/java/java-original.svg',
          pct: 30,
        },
        {
          n: 'MATLAB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/matlab/matlab-original.svg',
          pct: 30,
        },
        {
          n: 'Oracle DB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/oracle/oracle-original.svg',
          pct: 30,
        },
        {
          n: 'Cypress',
          icon: 'https://cdn.simpleicons.org/cypress/69d3a7',
          pct: 28,
        },
        {
          n: 'Google Cloud',
          icon: 'https://cdn.simpleicons.org/googlecloud/4285f4',
          pct: 28,
        },
        {
          n: 'Spring',
          icon: 'https://cdn.simpleicons.org/spring/6db33f',
          pct: 25,
        },
        {
          n: 'AWS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/amazonwebservices/amazonwebservices-original.svg',
          pct: 25,
        },
        {
          n: 'C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/cplusplus/cplusplus-original.svg',
          pct: 25,
        },
        {
          n: '.NET',
          icon: 'https://cdn.simpleicons.org/dotnet/512bd4',
          pct: 20,
        },
        {
          n: 'ChatGPT',
          icon: null,
          pct: 58,
        },
        {
          n: 'Gemini',
          icon: 'https://cdn.simpleicons.org/googlegemini/4285f4',
          pct: 68,
        },
        {
          n: 'Claude',
          icon: 'https://cdn.simpleicons.org/claude/d97757',
          pct: 80,
        },
      ],
    },
    about: {
      label: 'Sobre mí',
      title: 'Un poco de mi trayectoria.',
      p1: (
        <>
          Mi interés por la tecnología empezó mucho antes del bachillerato, pero
          fue ahí donde di mi primer paso real: elegí la rama tecnológica y fue
          donde escribí mis primeras líneas de código. Después me decanté por
          estudiar <b>Ingeniería Telemática</b> en Málaga — aprendí muchas
          cosas, pero sentí que necesitaba algo más concreto y que siempre
          podría retomar la carrera. Así que empecé un{' '}
          <b>Grado Superior de Desarrollo de Aplicaciones Web</b> que me
          encantó. Ahí supe que esto era lo mío: aprendí mucho y me llevé muy
          buenos compañeros.
        </>
      ),
      p2: (
        <>
          Hice las prácticas del grado en <b>Toomba Digital Agency</b>, donde
          aprendí el flujo completo de un proyecto desde cero: esquemas, casos
          de uso, diseño en <b>Figma</b> y desarrollo real con <b>Laravel</b>,
          Eloquent y 2FA. Después de un verano formándome,{' '}
          <b>BNT Business Telecom</b> me dio la oportunidad de entrar como
          desarrolladora. Allí toqué mucho: Git, pipelines, trabajo en equipo,
          Laravel, JavaScript, CodeIgniter, MySQL, CSS, <b>Figma</b>... y
          trabajé en proyectos <b>IoT</b> con conexiones entre código y
          dispositivos físicos, además de migrar a mano un proyecto de{' '}
          <b>Laravel 5.4 a Laravel 12</b>.
        </>
      ),
      p3: (
        <>
          Por una situación personal tuve que dejar BNT y Málaga y volver a Jaén
          con mi familia. Pero estoy dispuesta a volver al sector con más fuerza
          y con muchas ganas de seguir aprendiendo. Lo que busco es un{' '}
          <b>equipo</b> donde crecer bien.
        </>
      ),
      timeline: [
        {
          when: 'Ahora',
          what: 'En búsqueda activa',
          note: 'Buscando mi siguiente oportunidad. Abierta a roles fullstack o backend, en Jaén o remoto.',
          now: true,
        },
        {
          when: 'nov. 2025 – jun. 2026',
          what: 'Desarrolladora junior · BNT Business Telecom',
          note: 'Fullstack en proyectos web e IoT: Git, pipelines, Laravel, CodeIgniter, JavaScript, MySQL, Figma. Conexiones entre código y dispositivos físicos. Migración de Laravel 5.4 a 12.',
        },
        {
          when: 'feb. – jun. 2025',
          what: 'Prácticas · Toomba Digital Agency',
          note: 'Proyecto real en Laravel con Eloquent y 2FA. Esquemas, casos de uso y diseño en Figma — aprendí el flujo completo de un proyecto desde cero.',
        },
        {
          when: 'sept. 2023 – jun. 2025',
          what: 'Grado Superior · Desarrollo de Aplicaciones Web',
          note: 'TFG: Compiso, plataforma para compañeros de piso.',
        },
        {
          when: 'sept. 2022 – sept. 2023',
          what: 'Ingeniería Telemática',
          note: 'Bases de programación, C++, Matlab y un nuevo enfoque.',
        },
        {
          when: 'sept. 2020 – jun. 2022',
          what: 'Bachillerato tecnológico · IES Huarte de San Juan',
          note: 'La rama tecnológica fue la decisión que lo cambió todo.',
        },
      ],
    },
    training: {
      label: 'Formación',
      title: 'Educación y certificaciones.',
      eduLabel: 'Educación',
      certLabel: 'Licencias y certificaciones',
      langsLabel: 'Idiomas',
      edu: [
        {
          school: 'MEDAC',
          degree: 'Técnico Superior en Desarrollo de Aplicaciones Web',
          period: 'sept. 2023 – jun. 2025',
          logo: 'assets/images/MEDAC_imagotipo_cuadr_azul_PNG.png',
        },
        {
          school: 'IES Huarte de San Juan',
          degree: 'Bachillerato Tecnológico',
          period: 'sept. 2020 – jun. 2022',
          logo: 'https://ieshuartedesanjuan.es/wp-content/uploads/2020/03/cropped-logo1-320x320.png',
        },
      ],
      certs: [
        {
          name: 'Programación en IA y Big Data aplicables en 5G',
          issuer: 'Formación en Tecnología 5G · Polo Digital',
          date: 'may. – jun. 2026',
          icon: 'https://formacionen5g.es/wp-content/uploads/2022/10/LANDING_FORMACION_5G_03_05.png',
        },
        {
          name: 'Introducción al Big Data y la Inteligencia Artificial',
          issuer: 'Grupo Aspasia',
          date: 'mar. 2026',
          icon: 'https://grupoaspasia.com/wp-content/uploads/2022/02/Logo350x70-2.png',
        },
        {
          name: 'Cisco CCNA — Fundamentos de networking para redes IP',
          issuer: 'Udemy',
          date: 'mar. 2026',
          icon: 'https://cdn.simpleicons.org/cisco/1BA0D7',
        },
        {
          name: 'Ciberseguridad avanzada en entornos de tecnologías de la operación',
          issuer: 'Hedima DN Formación',
          date: '',
          icon: '🔐',
        },
        {
          name: 'Curso de .NET',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/dotnet/512BD4',
        },
        {
          name: 'Curso de Spring Boot y MVC',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/spring/6DB33F',
        },
        {
          name: 'Curso TypeScript',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/typescript/3178C6',
        },
        {
          name: 'Curso de Python 3',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/python/3776AB',
        },
        {
          name: 'Curso de Spring Core 5',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/spring/6DB33F',
        },
        {
          name: 'Certificado MATLAB',
          issuer: 'MathWorks',
          date: 'feb. 2023',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/matlab/matlab-original.svg',
        },
      ],
      langs: [
        {
          name: 'Español',
          level: 'Nativo',
          icon: 'ES',
        },
        {
          name: 'Inglés',
          level: 'B1',
          icon: 'EN',
        },
      ],
    },
    blog: {
      label: 'Blog',
      title: 'Mis Notas.',
      meta: 'Notas de campo · honestas',
      intro:
        'No soy ninguna experta, pero me encanta aprender cosas nuevas, compartir mis descubrimientos y mi forma de ver el mundo.',
      empty: 'Pronto más notas.',
      readMore: 'leer',
      seeAll: 'Ver todas →',
      posts: [
        {
          date: '2026 · 07 · 12',
          kind: 'Personal',
          title: 'ferava.es: Fernández, Ambición, Valiente',
          excerpt:
            'He registrado ferava.es como mi dominio personal. Fer de Fernández, A de Ambición, Va de Valiente — porque hace falta valentía para dedicarte a algo que ya hacen miles de personas, y hacerlo igualmente. No porque sea original, sino porque la originalidad rara vez está en inventar algo desde cero: está en mejorar lo que ya existe e innovar en la forma de presentarlo y venderlo. Ahí es donde se marca la diferencia. Es mi pequeña declaración de intenciones.',
          time: '1 min',
          link: null,
        },
        {
          date: '2026 · 06 · 25',
          kind: 'Proyecto',
          title:
            'AparcaYa: predicción de aparcamiento en tiempo real con ML y visión artificial',
          excerpt:
            'Proyecto final del curso de IA y Big Data junto a Luisa Moreira Mendoza. Construimos un Random Forest para predecir la ocupación de los 12 aparcamientos de Málaga a 1-2 horas vista, y un modelo de visión artificial con MobileNetV2 para clasificar plazas desde cámaras de tráfico reales. Todo integrado con un chatbot y mapa interactivo.',
          time: '4 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_smartcity-machinelearning-python-share-7475982668053037056-oPE4/',
        },
        {
          date: '2026 · 06 · 25',
          kind: 'Formación',
          title: 'Cerrando el curso de IA y Big Data en 5G',
          excerpt:
            'Ha sido breve pero intenso. Me llevo bases sólidas en tecnologías que no conocía, proyectos que me han hecho pensar de verdad y un grupo de compañeros estupendo. Gracias al profesor Pablo Udias por conseguir que todo pareciera fácil y divertido.',
          time: '2 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_ia-bigdata-formacionen5g-share-7475985760723288065-c1JW/',
        },
        {
          date: '2026 · 06 · 07',
          kind: 'Formación',
          title: 'Mi primer flujo ETL con Pentaho Data Integration',
          excerpt:
            'En clase monté un pipeline completo: validación de CSVs, limpieza, unión de datos de clientes y tarifas, cálculo de costes y generación de informe. Con Job automatizado y control de errores por email.',
          time: '3 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_pentaho-etl-dataanalytics-activity-7468338312672477185-se15',
        },
        {
          date: '2026 · 06 · 01',
          kind: 'Formación',
          title: 'Primer día en el curso de IA y Big Data',
          excerpt:
            'Empiezo el curso de Programación en IA y Big Data en el Polo Digital (formación en tecnologías 5G). Java, Python, Power BI, modelos de IA, Pentaho... promete mucho.',
          time: '2 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_ia-bigdata-programaciaejn-activity-7464775232483151872-TBKe',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      titlePre: '¿Buscas a una programadora',
      titleAccent: 'con ganas',
      titlePost: ' para tu empresa?',
      kicker:
        'Estoy abierta a un puesto fullstack o backend, en Jaén o remoto. Si tu equipo necesita de alguien con muchas ideas y motivación, mándame un correo y hablamos!',
      copy: 'Copiar correo',
      copied: '¡Copiado!',
      freelance: {
        title: '¿Tienes un proyecto propio?',
        text: 'También hago proyectos pequeños por mi cuenta. Si necesitas una landing page, una tienda online o una app de gestión interna, cuéntame la idea y lo vemos.',
        tags: ['Landing page', 'Tienda online', 'Gestión interna'],
      },
      links: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/paula-fernandez-canas/',
        },
        { name: 'GitHub', url: 'https://github.com/paulafc30' },
        { name: 'CV (pdf)', url: '#' },
      ],
      form: {
        title: 'Escríbeme',
        namePh: 'Tu nombre',
        emailPh: 'Tu email',
        msgPh: 'Tu mensaje...',
        send: 'Enviar →',
        sending: 'Enviando...',
        sent: '¡Mensaje enviado! Te respondo pronto.',
        error: 'Algo salió mal. Prueba por email directamente.',
      },
    },
    footer: {
      left: '© 2026 Paula Fernández Cañas',
      mid: 'Jaén, ES',
      right: '',
    },
  },

  en: {
    nav: {
      about: 'About',
      work: 'Projects',
      training: 'Training',
      contact: 'Contact',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'Open to opportunities · Jaén, Andalusia or remote',
      headlineLines: [
        ['Junior ', 'fullstack', ' developer'],
        ['with a lot of attitude', ' '],
        ['and even more', ' eagerness to learn', '.'],
      ],
      lede: [
        <>
          I'm <b>Paula Fernández Cañas</b>. I've been working as a{' '}
          <b>junior web developer</b> at BNT Business Telecom, on web and{' '}
          <b>IoT</b> projects.
        </>,
        <>
          I started on the front (HTML, CSS, JavaScript, Tailwind) and ended up
          writing backend with <b>PHP, Laravel and MySQL</b>. The backend is
          where I want to keep growing. I'm also currently studying{' '}
          <b>AI and Big Data</b>.
        </>,
      ],
      cta1: 'See projects',
      cta2: 'Download CV',
      info: {
        role: 'Junior Web Developer',
        focus: 'Fullstack (backend-focused)',
        location: 'Jaén, Andalusia · GMT+1',
        availability: 'Open to work — remote or Jaén, Andalusia',
      },
      portraitPh: 'drop a photo',
    },
    projects: {
      label: 'Projects',
      title: 'Projects I am working on',
      roleLabel: 'role',
      meta: 'Swipe →',
      list: [
        /* 01 — pending review
        {
          n: "01",
          name: "Secure Files App",
          sub: "File platform with 2FA",
          tag: "Academic",
          status: "done",
          role: "fullstack — mostly backend and auth",
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
          role: "design, front and light backend",
          desc: "My final degree project. A web app that connects tenants and landlords with a matching system, in-app chat, ratings and email notifications.",
          stack: ["PHP", "MySQL", "Tailwind", "JavaScript", "EmailJS"],
          year: "2024",
          link: "https://paula-fernandez-canas.vercel.app/project-2.html",
        },
        */
        {
          n: '03',
          name: 'Finanzor',
          sub: 'Mobile-first personal finance app',
          tag: 'Personal',
          status: 'wip',
          role: 'design + frontend + backend — solo project',
          desc: "Personal app to track income and expenses by category, view a transaction calendar, manage monthly budgets and savings goals. Features KPIs with 'Balance today' and an 'Estimated balance' bar projecting future transactions. Bank CSV import, data export and a built-in feedback section (Supabase + Web3Forms). Multi-user.",
          stack: [
            'React 18',
            'Vite',
            'Tailwind',
            'Supabase',
            'React Query',
            'Web3Forms',
            'Vercel',
          ],
          year: '2025 →',
          thumb: 'assets/images/finanzor.png',
          link: 'https://paula-fernandez-canas.vercel.app/project-3.html',
        },
        {
          n: '04',
          name: 'Mi Armario',
          sub: 'PWA to manage your digital wardrobe',
          tag: 'Personal',
          status: 'wip',
          role: 'architecture, design and development — solo project',
          desc: 'PWA web app to organise clothes by category, create outfits and manage items for sale (Stored → For Sale → Sold flow). Integrates Web Share Target to import from Wallapop or Vinted and a wishlist with automatic URL preview. Advanced search with stackable filters: colour, size, material and brand. Prettify: AI background removal (isnet_fp16) with 1600×1600 catalogue composition, floor shadow, three finish styles (Studio, Warm, PNG) and AVIF/HEIC support; includes per-image undo button.',
          stack: [
            'React 18',
            'TypeScript',
            'Vite',
            'Tailwind',
            'Supabase',
            'Zustand',
            'PWA',
            'ONNX / AI',
          ],
          year: '2025 →',
          thumb: 'assets/images/miarmario.png',
          link: 'https://paula-fernandez-canas.vercel.app/project-4.html',
        },
        {
          n: '05',
          name: 'AparcaYa',
          sub: 'Real-time occupancy and parking prediction in Málaga',
          tag: 'AI & Big Data',
          status: 'wip',
          role: 'full frontend — map, chatbot, data integration and deployment',
          desc: "Web app showing real-time occupancy of Málaga's 12 public car parks and predicting availability 1-2 hours ahead. Features an interactive Leaflet map, occupancy traffic-light indicator and a chatbot that recommends where to park based on your destination. Predictive model in scikit-learn exported to JS; computer vision with MobileNetV2 to classify spaces from traffic camera images.",
          stack: [
            'JavaScript',
            'Leaflet.js',
            'Python',
            'scikit-learn',
            'TensorFlow',
            'OpenCV',
            'Supabase',
            'Vercel',
          ],
          year: '2026 →',
          thumb: 'assets/images/aparcaya.png',
          link: 'https://paula-fernandez-canas.vercel.app/project-5.html',
        },
        {
          n: '06',
          name: 'Internal Ops · Piensos Urbano',
          sub: 'App to modernise a family business workflow',
          tag: 'Freelance',
          status: 'wip',
          role: 'fullstack with Aurora Medel',
          desc: "Team project with Aurora Medel for her family member's pet food business. The client was managing everything with Canva and Excel — we built an internal app to centralise and digitalise that workflow.",
          stack: ['Laravel', 'PHP', 'JavaScript', 'Docker', 'PL/SQL'],
          year: '2025 →',
          link: '#',
        },
        {
          n: '07',
          name: 'lour.es',
          sub: 'Portfolio for Lourdes, video editor and content creator',
          tag: 'Freelance',
          status: 'done',
          role: 'full design and development — solo project',
          desc: 'Personal portfolio for Lourdes, a video editor for influencers and brands. Features an editing section with a creator gallery (YouTube and Reels/TikTok), per-creator video links, a services page and a contact page. Deployed at lour.es via Cloudflare.',
          stack: [
            'React 18',
            'TypeScript',
            'Vite',
            'Tailwind',
            'Replit',
            'Cloudflare',
          ],
          year: '2026',
          link: 'https://lour.es',
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Technologies & Languages',
      meta: "Honest — I'm senior at nothing",
      skills: [
        {
          n: 'HTML',
          icon: 'https://cdn.simpleicons.org/html5/e34f26',
          pct: 90,
        },
        { n: 'CSS', icon: 'https://cdn.simpleicons.org/css/1572b6', pct: 85 },
        {
          n: 'JavaScript',
          icon: 'https://cdn.simpleicons.org/javascript/f7df1e',
          pct: 82,
        },
        { n: 'Git', icon: 'https://cdn.simpleicons.org/git/f05032', pct: 82 },
        {
          n: 'Tailwind',
          icon: 'https://cdn.simpleicons.org/tailwindcss/06b6d4',
          pct: 75,
        },
        { n: 'PHP', icon: 'https://cdn.simpleicons.org/php/8892bf', pct: 72 },
        {
          n: 'Laravel',
          icon: 'https://cdn.simpleicons.org/laravel/ff2d20',
          pct: 72,
        },
        {
          n: 'MySQL',
          icon: 'https://cdn.simpleicons.org/mysql/4479a1',
          pct: 68,
        },
        {
          n: 'Bootstrap',
          icon: 'https://cdn.simpleicons.org/bootstrap/7952b3',
          pct: 65,
        },
        {
          n: 'jQuery',
          icon: 'https://cdn.simpleicons.org/jquery/0769ad',
          pct: 63,
        },
        {
          n: 'Figma',
          icon: 'https://cdn.simpleicons.org/figma/f24e1e',
          pct: 62,
        },
        {
          n: 'CodeIgniter',
          icon: 'https://cdn.simpleicons.org/codeigniter/ef4223',
          pct: 58,
        },
        {
          n: 'Linux',
          icon: 'https://cdn.simpleicons.org/linux/111111',
          pct: 55,
        },
        {
          n: 'React',
          icon: 'https://cdn.simpleicons.org/react/61dafb',
          pct: 52,
        },
        { n: 'XML', icon: null, pct: 52 },
        { n: 'JSON', icon: null, pct: 50 },
        {
          n: 'TypeScript',
          icon: 'https://cdn.simpleicons.org/typescript/3178c6',
          pct: 45,
        },
        {
          n: 'PL/SQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/oracle/oracle-original.svg',
          pct: 42,
        },
        {
          n: 'Docker',
          icon: 'https://cdn.simpleicons.org/docker/2496ed',
          pct: 42,
        },
        {
          n: 'Node.js',
          icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
          pct: 38,
        },
        {
          n: 'Python',
          icon: 'https://cdn.simpleicons.org/python/3776ab',
          pct: 35,
        },
        {
          n: 'Vitest',
          icon: 'https://cdn.simpleicons.org/vitest/6e9f18',
          pct: 33,
        },
        {
          n: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/java/java-original.svg',
          pct: 30,
        },
        {
          n: 'MATLAB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/matlab/matlab-original.svg',
          pct: 30,
        },
        {
          n: 'Oracle DB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/oracle/oracle-original.svg',
          pct: 30,
        },
        {
          n: 'Cypress',
          icon: 'https://cdn.simpleicons.org/cypress/69d3a7',
          pct: 28,
        },
        {
          n: 'Google Cloud',
          icon: 'https://cdn.simpleicons.org/googlecloud/4285f4',
          pct: 28,
        },
        {
          n: 'Spring',
          icon: 'https://cdn.simpleicons.org/spring/6db33f',
          pct: 25,
        },
        {
          n: 'AWS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/amazonwebservices/amazonwebservices-original.svg',
          pct: 25,
        },
        {
          n: 'C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/cplusplus/cplusplus-original.svg',
          pct: 25,
        },
        {
          n: '.NET',
          icon: 'https://cdn.simpleicons.org/dotnet/512bd4',
          pct: 20,
        },
        {
          n: 'ChatGPT',
          icon: null,
          pct: 58,
        },
        {
          n: 'Gemini',
          icon: 'https://cdn.simpleicons.org/googlegemini/4285f4',
          pct: 68,
        },
        {
          n: 'Claude',
          icon: 'https://cdn.simpleicons.org/claude/d97757',
          pct: 80,
        },
      ],
    },
    about: {
      label: 'About',
      title: 'A little about my journey.',
      p1: (
        <>
          My interest in technology started long before secondary school, but
          that's where I took my first real step: I chose the technology track
          and wrote my first lines of code. From there I went on to study{' '}
          <b>Telematics Engineering</b> in Málaga — I learned a lot, but felt I
          needed something more hands-on and knew I could always come back to
          it. So I switched to a{' '}
          <b>Higher Vocational Diploma in Web Application Development</b>, which
          I loved. That's where I knew this was for me: I learned a lot and made
          great friends along the way.
        </>
      ),
      p2: (
        <>
          I did my placement at <b>Toomba Digital Agency</b>, where I learned
          the full project lifecycle from scratch: schemas, use cases, design in{' '}
          <b>Figma</b>, and real development with <b>Laravel</b>, Eloquent and
          2FA. After a summer of self-study, <b>BNT Business Telecom</b> gave me
          the opportunity to join as a developer. There I worked with Git,
          pipelines, team workflows, Laravel, JavaScript, CodeIgniter, MySQL,
          CSS, <b>Figma</b> — and on <b>IoT</b> projects connecting code to
          physical devices, plus a hand-migration from{' '}
          <b>Laravel 5.4 to Laravel 12</b>.
        </>
      ),
      p3: (
        <>
          A personal situation meant I had to leave BNT and Málaga and return to
          Jaén, Andalusia. But I'm ready to get back into the industry with
          renewed energy and a lot of desire to keep growing. What I'm looking
          for is a <b>team</b> where I can do exactly that.
        </>
      ),
      timeline: [
        {
          when: 'Now',
          what: 'Actively looking',
          note: 'Looking for my next opportunity. Open to fullstack or backend roles, in Jaén (Andalusia) or remote.',
          now: true,
        },
        {
          when: 'Nov. 2025 – Jun. 2026',
          what: 'Junior developer · BNT Business Telecom',
          note: 'Fullstack on web and IoT projects: Git, pipelines, Laravel, CodeIgniter, JavaScript, MySQL, Figma. Code-to-device connections. Hand-migrated a Laravel 5.4 project to Laravel 12.',
        },
        {
          when: 'Feb. – Jun. 2025',
          what: 'Internship · Toomba Digital Agency',
          note: '4 months. Real project in Laravel with Eloquent and 2FA. Use cases, schemas and Figma design — learned the full flow of building a project from scratch.',
        },
        {
          when: 'Sep. 2023 – Jun. 2025',
          what: 'Higher Vocational · Web Application Development',
          note: 'Where I knew this was my path. Final project: Compiso, a flatmate matching platform.',
        },
        {
          when: 'Sep. 2022 – Sep. 2023',
          what: 'Telematics Engineering',
          note: 'Programming fundamentals, C++, MATLAB and a new direction.',
        },
        {
          when: 'Sep. 2020 – Jun. 2022',
          what: 'Technology Baccalaureate · IES Huarte de San Juan',
          note: 'Choosing the technology stream was the decision that changed everything.',
        },
      ],
    },
    training: {
      label: 'Training',
      title: 'Education & certifications.',
      eduLabel: 'Education',
      certLabel: 'Licences & certifications',
      langsLabel: 'Languages',
      edu: [
        {
          school: 'MEDAC',
          degree: 'Higher Vocational Diploma in Web Application Development',
          period: 'Sep. 2023 – Jun. 2025',
          logo: 'assets/images/MEDAC_imagotipo_cuadr_azul_PNG.png',
        },
        {
          school: 'IES Huarte de San Juan',
          degree: 'Technology Baccalaureate',
          period: 'Sep. 2020 – Jun. 2022',
          logo: 'https://ieshuartedesanjuan.es/wp-content/uploads/2020/03/cropped-logo1-320x320.png',
        },
      ],
      certs: [
        {
          name: 'AI & Big Data Programming applicable to 5G',
          issuer: '5G Technology Training · Polo Digital',
          date: 'May – Jun. 2026',
          icon: 'https://formacionen5g.es/wp-content/uploads/2022/10/LANDING_FORMACION_5G_03_05.png',
        },
        {
          name: 'Introduction to Big Data and Artificial Intelligence',
          issuer: 'Grupo Aspasia',
          date: 'Mar. 2026',
          icon: 'https://grupoaspasia.com/wp-content/uploads/2022/02/Logo350x70-2.png',
        },
        {
          name: 'Cisco CCNA — Networking Fundamentals for IP Networks',
          issuer: 'Udemy',
          date: 'Mar. 2026',
          icon: 'https://cdn.simpleicons.org/cisco/1BA0D7',
        },
        {
          name: 'Advanced Cybersecurity in Operations Technology Environments',
          issuer: 'Hedima DN Formación',
          date: '',
          icon: '🔐',
        },
        {
          name: '.NET Course',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/dotnet/512BD4',
        },
        {
          name: 'Spring Boot and MVC Course',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/spring/6DB33F',
        },
        {
          name: 'TypeScript Course',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/typescript/3178C6',
        },
        {
          name: 'Python 3 Course',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/python/3776AB',
        },
        {
          name: 'Spring Core 5 Course',
          issuer: 'OpenWebinars',
          date: '',
          icon: 'https://cdn.simpleicons.org/spring/6DB33F',
        },
        {
          name: 'MATLAB Certificate',
          issuer: 'MathWorks',
          date: 'Feb. 2023',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/matlab/matlab-original.svg',
        },
      ],
      langs: [
        {
          name: 'Spanish',
          level: 'Native',
          icon: 'ES',
        },
        {
          name: 'English',
          level: 'B1 — Cambridge University Press & Assessment · Nov. 2020',
          icon: 'EN',
        },
      ],
    },
    blog: {
      label: 'Blog',
      title: 'My Notes.',
      meta: 'Field notes · honest',
      intro:
        "I'm no expert, but I love learning new things, sharing what I find and how I see the world.",
      empty: 'More notes coming soon.',
      readMore: 'read',
      seeAll: 'See all →',
      posts: [
        {
          date: '2026 · 07 · 12',
          kind: 'Personal',
          title: 'ferava.es: Fernández, Ambition, Valiente',
          excerpt:
            "I registered ferava.es as my personal domain. Fer from Fernández, A from Ambición (Ambition), Va from Valiente (Brave) — because it takes courage to dedicate yourself to something thousands of people already do, and do it anyway. Not because it's original — originality rarely comes from building something from scratch. It comes from improving what already exists and innovating in how you present and sell it. That's where the difference is made. My small declaration of intent.",
          time: '1 min',
          link: null,
        },
        {
          date: '2026 · 06 · 25',
          kind: 'Project',
          title:
            'AparcaYa: real-time parking prediction with ML and computer vision',
          excerpt:
            'Final project of the AI & Big Data course, built with Luisa Moreira Mendoza. We trained a Random Forest to predict occupancy across 12 Málaga car parks 1-2 hours ahead, and a MobileNetV2 vision model to classify spaces from real traffic cameras. All integrated with a chatbot and interactive map.',
          time: '4 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_smartcity-machinelearning-python-share-7475982668053037056-oPE4/',
        },
        {
          date: '2026 · 06 · 25',
          kind: 'Training',
          title: 'Wrapping up the AI & Big Data in 5G course',
          excerpt:
            "Short but intense. I leave with solid foundations in technologies I didn't know, projects that made me think hard, and a great group of classmates. Thanks to professor Pablo Udias for making it all feel easy and fun.",
          time: '2 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_ia-bigdata-formacionen5g-share-7475985760723288065-c1JW/',
        },
        {
          date: '2026 · 06 · 07',
          kind: 'Training',
          title: 'My first ETL pipeline with Pentaho Data Integration',
          excerpt:
            'Built a complete ETL flow in class: CSV validation, data cleaning, joining customer and rate data, cost calculation and report generation. With an automated Job and email error handling.',
          time: '3 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_pentaho-etl-dataanalytics-activity-7468338312672477185-se15',
        },
        {
          date: '2026 · 06 · 01',
          kind: 'Training',
          title: 'First day of the AI & Big Data course',
          excerpt:
            'Starting a hands-on course in AI and Big Data programming at the Polo Digital (5G technology training). Java, Python, Power BI, AI models, Pentaho — looks very promising.',
          time: '2 min',
          link: 'https://www.linkedin.com/posts/paula-fernandez-canas_ia-bigdata-programaciaejn-activity-7464775232483151872-TBKe',
        },
      ],
    },
    contact: {
      label: 'Contact',
      titlePre: 'Looking for a junior',
      titleAccent: 'with drive',
      titlePost: ' for your team?',
      kicker:
        "I'm open to a fullstack or backend role, in Jaén (Andalusia) or remote. If your team needs someone with lots of ideas and motivation, send me an email and let's talk!",
      copy: 'Copy email',
      copied: 'Copied!',
      freelance: {
        title: 'Got a project of your own?',
        text: "I also take on small projects independently. If you need a landing page, an online store or an internal management app, tell me about it and we'll figure it out.",
        tags: ['Landing page', 'Online store', 'Internal app'],
      },
      links: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/paula-fernandez-canas/',
        },
        { name: 'GitHub', url: 'https://github.com/paulafc30' },
        { name: 'CV (pdf)', url: '#' },
      ],
      form: {
        title: 'Send me a message',
        namePh: 'Your name',
        emailPh: 'Your email',
        msgPh: 'Your message...',
        send: 'Send →',
        sending: 'Sending...',
        sent: "Message sent! I'll get back to you soon.",
        error: 'Something went wrong. Try emailing me directly.',
      },
    },
    footer: {
      left: '© 2026 Paula Fernández Cañas',
      mid: 'Jaén, Andalusia',
      right: '',
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
function useActiveSection(ids) {
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function Header({ t, lang, setLang, dark, setDark }) {
  const active = useActiveSection([
    'top',
    'work',
    'training',
    'about',
    'contact',
    'blog',
  ]);
  const navLinks = [
    { href: '#work', label: t.nav.work, id: 'work' },
    { href: '#training', label: t.nav.training, id: 'training' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
    { href: '#blog', label: t.nav.blog, id: 'blog' },
  ];
  return (
    <header className="top">
      <div className="wrap top-inner">
        <a href="#top" className="brand">
          <span className="mark">P</span>
          <span className="name">Paula Fernández</span>
          <span className="role">/ dev junior</span>
        </a>
        <nav className="nav">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={active === id ? 'nav-active' : ''}>
              {label}
            </a>
          ))}
        </nav>
        <div className="top-right">
          <button
            className="pill"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label="Toggle language">
            <span className={'seg ' + (lang === 'es' ? 'on' : '')}>ES</span>
            <span className="seg">·</span>
            <span className={'seg ' + (lang === 'en' ? 'on' : '')}>EN</span>
          </button>
          <button
            className="pill"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme">
            {dark ? '◐' : '◑'}
          </button>
        </div>
      </div>
      <nav className="nav-mobile" aria-label="Navegación">
        {navLinks.map(({ href, label, id }) => (
          <a key={id} href={href} className={active === id ? 'nav-active' : ''}>
            {label}
          </a>
        ))}
      </nav>
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
                  <span key={j} className={j === 1 ? 'accent' : 'ink'}>
                    {part}
                  </span>
                ))}
                {i < t.hero.headlineLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <div className="lede">
            {Array.isArray(t.hero.lede) ? (
              t.hero.lede.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{t.hero.lede}</p>
            )}
          </div>

          <div className="cta-row hero-cta">
            <a href="#work" className="btn-pill primary">
              {t.hero.cta1} <span className="arr">→</span>
            </a>
            <a
              href="assets/paula-fernandez-cv.pdf"
              download="Paula-Fernandez-Canas-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill">
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
              placeholder={t.hero.portraitPh}></image-slot>
          </div>
          <div className="info-card">
            <div className="kv">
              <span className="k">rol</span>{' '}
              <span className="v">{t.hero.info.role}</span>
              {t.hero.info.company && (
                <>
                  <span className="k">en</span>
                  <span className="v">{t.hero.info.company}</span>
                </>
              )}
              <span className="k">stack</span>{' '}
              <span className="v">{t.hero.info.focus}</span>
              <span className="k">desde</span>{' '}
              <span className="v">{t.hero.info.location}</span>
              <span className="k">estado</span>{' '}
              <span className="v">
                <span className="live">
                  <i />
                  {t.hero.info.availability}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------- Project card -------
function ProjectCard({ p, roleLabel = 'role' }) {
  const tagClass = p.status === 'wip' ? 'tag' : 'tag muted';
  return (
    <article className="pcard">
      <div className="thumb">
        <image-slot
          id={'thumb-' + p.n}
          shape="rect"
          src={p.thumb || undefined}
          placeholder={'captura · ' + p.name}></image-slot>
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
          <span className="k">{roleLabel}</span>
          <span>{p.role}</span>
        </div>

        <div className="stack">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <div className="foot">
        <span className="yr">{p.year}</span>
        {p.link && p.link !== '#' && (
          <a href={p.link} target={p.link.includes('project-') ? '_self' : '_blank'} rel="noopener noreferrer">
            {p.link.includes('project-') ? 'Ver detalle' : 'Ver web'} <span className="arr">→</span>
          </a>
        )}
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
    if (card)
      el.scrollTo({
        left: card.offsetLeft - el.offsetLeft,
        behavior: 'smooth',
      });
  }

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onScroll() {
      const items = Array.from(el.children);
      let best = 0,
        bestDist = Infinity;
      items.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
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
        <div className="meta">
          {t.projects.meta} &nbsp;·&nbsp; {String(idx + 1).padStart(2, '0')} /{' '}
          {String(total).padStart(2, '0')}
        </div>
      </div>

      <div className="car-wrap">
        <div className="car-controls">
          <button
            className="car-btn"
            disabled={idx === 0}
            onClick={() => scrollTo(Math.max(0, idx - 1))}
            aria-label="Previous">
            ←
          </button>
          <button
            className="car-btn"
            disabled={idx === total - 1}
            onClick={() => scrollTo(Math.min(total - 1, idx + 1))}
            aria-label="Next">
            →
          </button>
        </div>
        <div className="carousel" ref={ref}>
          {t.projects.list.map((p, i) => (
            <ProjectCard key={i} p={p} roleLabel={t.projects.roleLabel} />
          ))}
        </div>
        <div className="car-progress">
          <i
            style={{
              width: `${100 / total}%`,
              left: `${(idx * 100) / total}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ------- Stack -------
function Stack({ t }) {
  const R = 36;
  const CIRC = 2 * Math.PI * R;
  return (
    <section className="section wrap" id="stack">
      <div className="section-head">
        <div>
          <div className="label">{t.stack.label}</div>
          <h2>{t.stack.title}</h2>
        </div>
        <div className="meta">{t.stack.meta}</div>
      </div>
      <div className="skills-grid">
        {t.stack.skills.map((s, i) => {
          const offset = CIRC * (1 - s.pct / 100);
          return (
            <div key={i} className="skill-item">
              <div className="skill-ring-wrap">
                <svg className="skill-ring" viewBox="0 0 88 88">
                  <circle
                    cx="44"
                    cy="44"
                    r={R}
                    fill="none"
                    stroke="var(--rule)"
                    strokeWidth="3.5"
                  />
                  <circle
                    cx="44"
                    cy="44"
                    r={R}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="3.5"
                    strokeDasharray={`${CIRC} ${CIRC}`}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 44 44)"
                  />
                </svg>
                {s.icon ? (
                  <img className="skill-icon" src={s.icon} alt={s.n} />
                ) : (
                  <span className="skill-icon-text">{s.n}</span>
                )}
              </div>
              <span className="skill-name">{s.n}</span>
            </div>
          );
        })}
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
function Training({ t }) {
  return (
    <section id="training" className="section wrap">
      <div className="section-head">
        <div>
          <div className="label">{t.training.label}</div>
          <h2>{t.training.title}</h2>
        </div>
      </div>

      <h4 className="training-sub">{t.training.eduLabel}</h4>
      <div className="training-edu">
        {t.training.edu.map((e, i) => (
          <div key={i} className="edu-item">
            {e.logo && <img className="edu-logo" src={e.logo} alt={e.school} />}
            <div className="edu-body">
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-period">{e.period}</div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="training-sub">{t.training.langsLabel}</h4>
      <div className="lang-grid">
        {t.training.langs.map((l, i) => (
          <div key={i} className="lang-item">
            <span className="lang-icon">{l.icon}</span>
            <div className="lang-body">
              <div className="lang-name">{l.name}</div>
              <div className="lang-level">{l.level}</div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="training-sub">{t.training.certLabel}</h4>
      <div className="cert-grid">
        {t.training.certs.map((c, i) => (
          <div
            key={i}
            className={'cert-item' + (c.highlight ? ' cert-highlight' : '')}>
            {c.icon && (
              <div className="cert-icon-wrap">
                {c.icon.startsWith('http') ? (
                  <img src={c.icon} className="cert-icon" alt="" />
                ) : (
                  <span className="cert-icon-emoji">{c.icon}</span>
                )}
              </div>
            )}
            <div className="cert-body">
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              {c.date && <div className="cert-date">{c.date}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
      {t.blog.intro && <p className="blog-intro">{t.blog.intro}</p>}
      <div className="blog-grid">
        {t.blog.posts.map((p, i) => {
          const cardProps = {
            key: i,
            className: 'bcard' + (p.link ? '' : ' bcard-static'),
          };
          const inner = (
            <>
              <div className="bmeta">
                <span className="bdate">{p.date}</span>
                <span className="bsep">·</span>
                <span className="bkind">{p.kind}</span>
              </div>
              <h3 className="btitle">{p.title}</h3>
              <p className="bexcerpt">{p.excerpt}</p>
              {p.link && (
                <span className="bread">
                  {t.blog.readMore} <span className="arr">→</span>
                </span>
              )}
            </>
          );
          return p.link ? (
            <a
              {...cardProps}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div {...cardProps}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}

// ------- Contact -------
function Contact({ t }) {
  const [copied, setCopied] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', msg: '' });
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error

  function copy() {
    navigator.clipboard?.writeText('paulafc30@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      // ⚠️ Reemplaza YOUR_FORM_ID con tu ID de Formspree (formspree.io)
      const res = await fetch('https://formspree.io/f/xnjknwpz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.msg,
        }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div
          className="label dim"
          style={{
            color: 'var(--accent)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
          {t.contact.label}
        </div>
        <h2>
          {t.contact.titlePre}{' '}
          <span className="accent">{t.contact.titleAccent}</span>
          {t.contact.titlePost}
        </h2>

        <div className="contact-grid">
          {/* Columna izquierda */}
          <div className="contact-left">
            <p className="kicker">{t.contact.kicker}</p>
            <div className="email-row">
              <a
                href="https://mail.google.com/mail/?view=cm&to=paulafc30@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                paulafc30@gmail.com
              </a>
              <button
                className="copy-icon"
                onClick={copy}
                aria-label="Copiar correo"
                title={copied ? t.contact.copied : t.contact.copy}>
                {copied ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
            <div className="links">
              {t.contact.links.map((l, i) => {
                const icon = l.name.toLowerCase().includes('linkedin') ? (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.98-1.981 1.98 1.98 0 1 1 1.98 1.981zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ) : l.name.toLowerCase().includes('github') ? (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ) : null;
                return (
                  <a key={i} href={l.url} target="_blank" rel="noopener">
                    {icon}
                    {l.name} ↗
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div className="contact-right">
            {status === 'sent' ? (
              <p className="cf-sent">{t.contact.form.sent}</p>
            ) : (
              <form className="cf" onSubmit={handleSubmit}>
                <input
                  className="cf-input"
                  type="text"
                  placeholder={t.contact.form.namePh}
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                />
                <input
                  className="cf-input"
                  type="email"
                  placeholder={t.contact.form.emailPh}
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                />
                <textarea
                  className="cf-input cf-textarea"
                  placeholder={t.contact.form.msgPh}
                  value={form.msg}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, msg: e.target.value }))
                  }
                  required
                  rows={5}
                />
                {status === 'error' && (
                  <p className="cf-error">{t.contact.form.error}</p>
                )}
                <button
                  className="cf-btn"
                  type="submit"
                  disabled={status === 'sending'}>
                  {status === 'sending'
                    ? t.contact.form.sending
                    : t.contact.form.send}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="freelance-callout">
          <div className="freelance-title">{t.contact.freelance.title}</div>
          <p className="freelance-text">{t.contact.freelance.text}</p>
          <div className="freelance-tags">
            {t.contact.freelance.tags.map((tag, i) => (
              <span key={i} className="freelance-tag">
                {tag}
              </span>
            ))}
          </div>
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

Object.assign(window, {
  Header,
  Hero,
  Projects,
  Stack,
  About,
  Blog,
  Contact,
  Footer,
});

// ───────────────────────

// app.jsx — main App component (v2: light default, brick red, calmer)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  accent: '#b8412c',
  dark: false,
  lang: 'es',
  fontSize: 14,
}; /*EDITMODE-END*/

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
      <Header
        t={copy}
        lang={lang}
        setLang={setLang}
        dark={dark}
        setDark={setDark}
      />
      <Hero t={copy} />
      <Projects t={copy} />
      <Training t={copy} />
      <Stack t={copy} />
      <About t={copy} />
      <Contact t={copy} />
      <Blog t={copy} />
      <Footer t={copy} />

      <TweaksPanel>
        <TweakSection
          label={lang === 'es' ? 'Idioma & tema' : 'Language & theme'}
        />
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

        <TweakSection
          label={lang === 'es' ? 'Color de marca' : 'Brand color'}
        />
        <TweakColor
          label={lang === 'es' ? 'Acento' : 'Accent'}
          value={t.accent}
          options={[
            '#b8412c',
            '#8a2b18',
            '#c95a3c',
            '#a83a64',
            '#2c5e8a',
            '#445a3f',
          ]}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label={lang === 'es' ? 'Tipografía' : 'Typography'} />
        <TweakSlider
          label={lang === 'es' ? 'Tamaño base' : 'Base size'}
          value={t.fontSize}
          min={12}
          max={18}
          step={1}
          unit="px"
          onChange={(v) => setTweak('fontSize', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
