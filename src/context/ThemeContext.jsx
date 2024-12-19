import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Detect system theme
  const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(getSystemTheme());

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update theme based on system changes
  useEffect(() => {
    const systemThemeChangeHandler = (e) => {
      setIsDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", systemThemeChangeHandler);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", systemThemeChangeHandler);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export default useTheme;
