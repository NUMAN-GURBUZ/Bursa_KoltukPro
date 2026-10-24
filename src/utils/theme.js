const THEME_STORAGE_KEY = 'bursa-clean-theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  } catch {
    return null;
  }
}

function updateThemeToggle(theme) {
  document.querySelectorAll('[data-action="theme-toggle"]').forEach(button => {
    const isDark = theme === 'dark';
    const label = isDark ? 'Açık moda geç' : 'Karanlık moda geç';
    const icon = button.querySelector('[data-theme-toggle-icon]');

    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('title', label);
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  updateThemeToggle(theme);
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Depolama kullanılamıyorsa tema yalnızca geçerli oturumda uygulanır.
  }
}

function initializeTheme() {
  applyTheme(getStoredTheme() ?? (darkMediaQuery.matches ? 'dark' : 'light'));

  document.querySelectorAll('[data-action="theme-toggle"]').forEach(button => {
    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  });

  darkMediaQuery.addEventListener('change', event => {
    if (!getStoredTheme()) applyTheme(event.matches ? 'dark' : 'light');
  });
}

initializeTheme();
