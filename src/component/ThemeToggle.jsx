import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // inizializza dal localStorage oppure dalla preferenza di sistema
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // nessuna preferenza salvata: usa prefers-color-scheme
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Imposta tema chiaro" : "Imposta tema scuro"}
      aria-pressed={isDarkMode}
      className={cn(
        "fixed top-4 right-4 z-[9999] hidden sm:inline-flex items-center justify-center p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" aria-hidden="true" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
