/* src/context/ThemeContext.jsx */

import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Function to get the initial theme
const getInitialTheme = () => {
  if (typeof window !== 'undefined') { // Check if we are on the client
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme; // Use stored theme
    }
    // If no stored theme, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark'; // Default for server-side
};

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // 2. Set initial state from the function
  const [theme, setTheme] = useState(getInitialTheme);

  // 3. ONE useEffect to rule them all
  useEffect(() => {
    // This effect runs whenever 'theme' state changes
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save the new theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // This runs only when the 'theme' state changes

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the context
export const useTheme = () => {
  return useContext(ThemeContext);
};