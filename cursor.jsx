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
