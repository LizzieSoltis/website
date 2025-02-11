document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    // Function to set dark mode
    const setDarkMode = (isDark) => {
      if (isDark) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
      localStorage.setItem('darkMode', isDark);
    };
  
    // Function to apply dark mode on page load
    const applyDarkMode = () => {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode === 'true') {
        setDarkMode(true);
      }
    };
  
    // Apply dark mode on page load
    applyDarkMode();
  
    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
      const isDarkMode = body.classList.toggle('dark-mode');
      setDarkMode(isDarkMode);
    });
  
    // Responsive navigation functionality
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
});