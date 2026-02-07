const darkModeToggle = document.getElementById('darkModeToggle');
const savedDarkMode = localStorage.getItem('darkMode');

if (savedDarkMode === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

// Toggle dark mode
darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});