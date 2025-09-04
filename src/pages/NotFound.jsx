import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main role="main" aria-labelledby="notfound-title" className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-block p-6 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-4xl md:text-5xl font-bold text-primary">🚀</span>
        </div>

        <h1 id="notfound-title" className="text-5xl md:text-6xl font-extrabold">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">Pagina non trovata</h2>

        <p className="text-muted-foreground max-w-xl mx-auto">
          Sembra che questa rotta sia finita fuori mappa. Puoi tornare indietro, esplorare la home o dare un'occhiata ai miei progetti.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-md border border-input bg-background hover:bg-primary/5 transition-colors duration-200 flex items-center gap-2"
            aria-label="Torna indietro"
          >
            <ArrowLeft size={16} /> Torna indietro
          </button>

          <Link to="/" className="cosmic-button">
            Vai alla Home
          </Link>

          <Link to="/projects" className="px-5 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-200">
            Vedi progetti
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
