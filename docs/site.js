(() => {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  const sync = () => {
    if (btn) btn.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'dark'));
  };

  const toggleTheme = () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    if (dark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    sync();
  };

  if (btn) btn.addEventListener('click', toggleTheme);
  sync();

  let gPrefix = false;
  window.addEventListener('keydown', (e) => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;

    const k = e.key.toLowerCase();
    if (k === 't') {
      e.preventDefault();
      toggleTheme();
      return;
    }

    if (k === 'g') {
      gPrefix = true;
      setTimeout(() => { gPrefix = false; }, 900);
      return;
    }

    if (gPrefix) {
      gPrefix = false;
      if (k === 'h') window.location.href = 'index.html';
      if (k === 'p') window.location.href = 'protocol.html';
      if (k === 'c') window.location.href = 'changelog.html';
    }
  });
})();
