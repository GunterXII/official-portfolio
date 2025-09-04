import { Code, User, Briefcase } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative" aria-labelledby="about-title">
      <div className="container mx-auto max-w-5xl">
        <h2 id="about-title" className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Chi <span className="text-primary">Sono</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* testo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Sviluppatore Web appassionato</h3>

            <p className="text-muted-foreground">
              Sono Bernardo, uno studente di informatica con due anni di esperienza nello studio e nello sviluppo web. Appassionato di frontend,
              creo interfacce interattive e responsive, cercando sempre di unire funzionalità ed estetica. Ogni progetto è un'occasione per esplorare
              nuove tecnologie e migliorare le mie competenze.
            </p>

            <p className="text-muted-foreground">
              Lavoro principalmente con HTML, CSS, JavaScript e librerie moderne come React, integrando strumenti come Tailwind CSS e Vite per
              ottimizzare il flusso di lavoro. Amo sperimentare con animazioni e design dinamici per creare esperienze fluide e performanti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button text-center" aria-label="Contattami">
                Contattami
              </a>

              {/* se hai il file CV metti href="/Bernardo_Scala_CV.pdf" download */}
              <a
                href="/htmlCode.pdf"
                download
                className="px-6 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                aria-label="Download Curriculum"
              >
                Download Curriculum
              </a>
            </div>
          </div>

          {/* cards caratteristiche */}
          <div className="grid grid-cols-1 gap-6">
            <article className="gradient-border p-6 card-hover" aria-labelledby="feat-dev">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10" aria-hidden>
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 id="feat-dev" className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creo interfacce web moderne e responsive con HTML, CSS e JavaScript, ottimizzando esperienza e performance. Uso React,
                    Tailwind CSS e Vite per progetti scalabili.
                  </p>
                </div>
              </div>
            </article>

            <article className="gradient-border p-6 card-hover" aria-labelledby="feat-ux">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10" aria-hidden>
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 id="feat-ux" className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Progetto interfacce intuitive e accessibili, applicando principi di usabilità e responsive design per un'esperienza coerente su tutti i dispositivi.
                  </p>
                </div>
              </div>
            </article>

            <article className="gradient-border p-6 card-hover" aria-labelledby="feat-pm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10" aria-hidden>
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 id="feat-pm" className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Organizzo e coordino progetti web, gestendo task, scadenze e comunicazione per garantire consegne puntuali e risultati di qualità.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
