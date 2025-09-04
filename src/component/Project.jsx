import { Description } from '@radix-ui/react-toast'
import { ArrowRight, Github } from 'lucide-react';
import React from 'react'
const projects = [
  {
    id: 1,
    title: "Cryptoplace Tracker",
    description:
      "Un'app web per monitorare criptovalute in tempo reale, con grafici interattivi e dati aggiornati tramite API.",
    video:"/progetti/Cryptoplace - Bernardo - Google Chrome 2025-09-02 14-15-38.mp4",
    tags: ["React", "API", "Chart.js", "CSS", "JavaScript"],
    gitHubUrl:"https://github.com/GunterXII/crypto-marketplace"
  },
  {
    id: 2,
    title: "YouTube Clone",
    description:
      "Replica di YouTube con ricerca video, player integrato e interfaccia responsive, sviluppata con React e API.",
    video:"/progetti/Youtube Clone - Bernardo - Google Chrome 2025-09-02 14-23-41.mp4",
     tags: ["React", "API", "CSS", "JavaScript","Responsive"],
     gitHubUrl:"https://github.com/GunterXII/youtube-clone"
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Clone di Netflix con catalogo dinamico, sezioni tematiche e integrazione di API per i dettagli dei film.",
    video:"/progetti/Netflx Clone - Bernardo - Google Chrome 2025-08-29 13-45-59.mp4",
     tags: ["React", "API", "CSS", "Firebase","Javascript"],
     gitHubUrl:"https://github.com/GunterXII/netflix-clone"
  },
];

const Project = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Progetti <span className='text-primary'> Principali</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Una selezione dei miei progetti, dove sperimento con codice e creatività
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((progetto,key)=>(
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <video src={progetto.video} controls className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {progetto.tags.map((tag, key)=>(
                                    <span key={key} className='rounded-full bg-secondary border text-secondary-foreground px-2 py-1 text-xs font-medium'>#{tag}</span>
                                ))}
                            </div>
                        
                        <h3 className='text-xl font-semibold mb-1'>{progetto.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4'>{progetto.description}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                                <a href={progetto.gitHubUrl} className='text-foreground/80 hover:text-primary transition-colors duration-300' target='_blank'><Github size={20}>GitHub</Github></a>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-12'>
                <a href="https://github.com/GunterXII" target="_blank"className='cosmic-button w-fit flex items-center mx-auto gap-2'>Vedi su Github <ArrowRight size={16}></ArrowRight></a>
            </div>
        </div>
      
    </section>
  )
}

export default Project


