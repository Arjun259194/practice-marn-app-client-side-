import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Header />
      <button className="p-2 m-2 bg-stone-300 border-2 border-stone-900" onClick={handleThemeSwitch}>Click</button>
    </>
  );
}

export default App;
