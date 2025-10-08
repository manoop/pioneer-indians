(function () {
  const languageToggle = document.getElementById('language-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach((el) => {
      const text = el.dataset[lang];
      if (text) {
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    if (languageToggle) {
      languageToggle.dataset.language = lang;
      languageToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to German' : 'Switch to English');
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      const current = languageToggle.dataset.language || 'en';
      const nextLang = current === 'en' ? 'de' : 'en';
      setLanguage(nextLang);
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('is-open');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });
  }

  // Initialize with English copy by default
  setLanguage('en');
})();
