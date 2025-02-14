// src/hooks/useDarkMode.js
import { useState, useEffect } from "react";

function useDarkMode() {
  // const [isDarkMode, setDarkMode] = useState(() => {
  //   // Check local storage first
  //   if (typeof window !== 'undefined') { // Check if window is defined (for SSR)
  //     return localStorage.getItem('theme') === 'dark';
  //   }
  //   return false; // Default to light mode if no preference is found (or during SSR)
  // });

  const [isDarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const html = window.document.documentElement; // Get the root <html> element

    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
