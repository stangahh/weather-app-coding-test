
import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Components/Organisms/Weather";

/** Long and specific to prevent localstorage key clash */
const localStorageKey = "WEATHER_THEME";

export const App = (): JSX.Element => {
  const [theme, setTheme] = useState(localStorage.getItem(localStorageKey) ?? "light");

  const toggleTheme = (): void => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <div className="container mx-auto text-right p-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={theme === "dark"} value="" className="sr-only peer" onClick={toggleTheme}/>
          <div className="w-11 h-6 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
        </label>
      </div>
      <Weather></Weather>
      <p className="text-sm">Copyright Jesse Stanger 2023</p>
    </div>
  );
};

export default App;
