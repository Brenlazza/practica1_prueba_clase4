// script.js

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  function updateIcon(theme) {
    if (theme === 'dark') {
      icon.classList.remove('bi-sun');
      icon.classList.add('bi-moon');
    } else {
      icon.classList.remove('bi-moon');
      icon.classList.add('bi-sun');
    }
  }

  btn.addEventListener('click', function () {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    updateIcon(newTheme);
  });

  // Configurar icono al cargar según el tema inicial
  updateIcon(htmlElement.getAttribute('data-bs-theme'));
});
