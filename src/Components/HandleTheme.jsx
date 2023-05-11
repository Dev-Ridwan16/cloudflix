import { useState, useEffect } from 'react';

export const useToggleTheme = () => {
  const [handleTheme, setHandleTheme] = useState(true);

  const changeTheme = () => {
    setHandleTheme(prevTheme => !prevTheme);
  };

  const updateBodyStyles = (isDarkMode) => {
    if (isDarkMode) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  useEffect(() => {
    updateBodyStyles(handleTheme);
  }, [handleTheme]);

  return [handleTheme, changeTheme];
};
