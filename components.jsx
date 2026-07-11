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

          <p className="lede">{t.hero.lede}</p>

          <div className="cta-row">
            <a href="#work" className="btn-pill primary">
              {t.hero.cta1} <span className="arr">→</span>
            </a>
            <a
              href="#"
              className="btn-pill"
              onClick={(e) => e.preventDefault()}>
              {t.hero.cta2} <span className="arr">↓</span>
            </a>
          </div>
        </div>

        <div className="portrait-stack">
          <div className="portrait">
            <image-slot
              id="hero-portrait"
              shape="rect"
              placeholder={t.hero.portraitPh}></image-slot>
          </div>
          <div className="info-card">
            <div className="kv">
              <span className="k">rol</span>{' '}
              <span className="v">{t.hero.info.role}</span>
              <span className="k">en</span>{' '}
              <span className="v">{t.hero.info.company}</span>
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
function ProjectCard({ p }) {
  const tagClass = p.status === 'wip' ? 'tag' : 'tag muted';
  return (
    <article className="pcard">
      <div className="thumb">
        <image-slot
          id={'thumb-' + p.n}
          shape="rect"
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
          <span className="k">role</span>
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
            <ProjectCard key={i} p={p} />
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
      {t.blog.intro && <p className="blog-intro">{t.blog.intro}</p>}
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
            <span className="bread">
              {t.blog.readMore} <span className="arr">→</span>
            </span>
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
    navigator.clipboard?.writeText('contacto@ferava.es');
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
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
        <p className="kicker">{t.contact.kicker}</p>
        <div className="email-row">
          <a href="mailto:contacto@ferava.es">contacto@ferava.es</a>
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
