export function toggleMode() {
  const isDarkMode = document.documentElement.classList.toggle('dark');
  localStorage.setItem('color-scheme', isDarkMode ? 'dark' : 'light');
}
