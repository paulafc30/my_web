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
