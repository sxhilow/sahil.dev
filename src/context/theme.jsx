import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useState("dark");

  const darkTheme = () => setDefaultTheme("dark");
  const lightTheme = () => setDefaultTheme("light");

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(defaultTheme)
  }, [defaultTheme]);

  return (
    <ThemeContext.Provider value={{ defaultTheme, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
