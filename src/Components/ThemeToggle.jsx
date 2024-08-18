import { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prevMode => !prevMode);

  return (
    <button
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="p-4 border  rounded  dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? <MdLightMode size='2em' /> : <MdDarkMode size='2em' />}
    </button>
  );
};

export default ThemeToggle;
