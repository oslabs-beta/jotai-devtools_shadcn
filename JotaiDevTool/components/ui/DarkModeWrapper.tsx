import React, { createContext, useState, useEffect } from 'react';

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    const handleDarkModeChange = () => {
      root.classList.remove(darkMode ? 'light' : 'dark');
      root.classList.add(darkMode ? 'dark' : 'light');
    };

    handleDarkModeChange();

    return () => {
      root.classList.remove(darkMode ? 'dark' : 'light');
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const value = { darkMode, toggleDarkMode };

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export default DarkModeProvider;