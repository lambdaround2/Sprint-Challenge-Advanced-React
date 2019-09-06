import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", false);
  const body = window.document.body;
  isDarkMode
    ? body.classList.add("dark-mode")
    : body.classList.remove("dark-mode");

  return [isDarkMode, setIsDarkMode];
};
