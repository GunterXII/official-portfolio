import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Chi Sono", href: "#about" },
  { name: "Competenze", href: "#skills" },
  { name: "Progetti", href: "#projects" },
  { name: "Contatti", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const firstLinkRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Theme inline state (gestito qui per evitare il componente fixed separato)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inizializza tema da localStorage o preferenza sistema
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
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

  // Scroll handler efficiente
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect per gestione menu mobile (lock scroll, escape e focus)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 0);

      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        menuButtonRef.current?.focus();
      };
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isMenuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center gap-4">
        {/* Logo a sinistra */}
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Bernardo</span> Portfolio
          </span>
        </a>

        {/* centro: nav links */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* destra: controls (toggle tema + menu button) */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Theme toggle: visibile su md+, ma disponibile anche nel menu mobile */}
          

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 text-foreground md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">{isMenuOpen ? "Chiudi menu" : "Apri menu"}</span>
          </button>
        </div>

        {/* mobile full-screen menu */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {/* toggle inside mobile menu for small screens */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Imposta tema chiaro" : "Imposta tema scuro"}
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-input"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-blue-900" />}
              <span>{isDarkMode ? "Tema chiaro" : "Tema scuro"}</span>
            </button>

            {navItems.map((item, idx) => (
              <a
                href={item.href}
                key={item.name}
                ref={idx === 0 ? firstLinkRef : null}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
