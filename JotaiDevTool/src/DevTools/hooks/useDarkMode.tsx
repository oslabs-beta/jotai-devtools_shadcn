import { useState } from 'react';

export const useToggleDarkMode = (initialValue = false): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState(initialValue);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return [darkMode, toggleDarkMode];
};