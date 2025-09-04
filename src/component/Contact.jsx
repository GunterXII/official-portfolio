import React from 'react'
import { Mail,Phone,MapPin, Linkedin, Instagram, Send } from 'lucide-react';
import {cn} from "@/lib/utils"
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const Contact = () => {
    
    const handleSubmit=(e)=>{
         emailjs.sendForm(
      'service_oomi3py',      // Service ID
      'template_qemx18r',       // Template ID
      e.target,
      'YlOX4Gh7BLF87T5Dh'            // Public Key
    )
    .then(() => {
      toast.success('Grazie per il messaggio, ti risponderò il prima possibile');
      e.target.reset();
    })
    .catch(() => {
      toast.error('Errore nell’invio, riprova.');
    });
    }
  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
        <span className='text-primary'>Contattami</span>
      </h2>
      <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'> 
        Se hai un progetto interessante o vuoi semplicemente fare due chiacchiere sul mondo dello sviluppo web, non esitare a contattarmi. Sono sempre disponibile a collaborazioni, nuove sfide o a condividere idee e consigli
      </p>
      <div className='grid grid-cols-1  md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Come contattarmi</h3>
            <div className='space-y-6 justify-center'>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg.primary/10'>
                    <Mail className='h-6 w-6 text-primary'></Mail>
                    </div>
                    <div>
                        <h4 className='font-medium'> Email</h4>
                        <a href="mailto:bernardo.scala2005@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>bernardo.scala2005@gmail.com</a>
                    </div>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg.primary/10'>
                    <Phone className='h-6 w-6 text-primary'></Phone>
                    </div>
                    <div>
                        <h4 className='font-medium'> Whatsapp</h4>
                        <a href="tel:+393339115470" className='text-muted-foreground hover:text-primary transition-colors'>+39 3339115470</a>
                    </div>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg.primary/10'>
                    <MapPin className='h-6 w-6 text-primary'></MapPin>
                    </div>
                    <div>
                        <h4 className='font-medium'> Dove Sono</h4>
                        <a  className='text-muted-foreground hover:text-primary transition-colors'>Italia,Toscana,Pisa</a>
                    </div>
                </div>
            </div>
            <div className='pt-8'>
                <h4 className='font-medium mb-4'>Rimani in Contatto</h4>
                <div className='flex space-x-4 justify-center'>
                    <a href="www.linkedin.com/in/bernardo-scala-0289a2375" target="_blank">
                        <Linkedin></Linkedin>
                    </a>
                    <a href="https://www.instagram.com/bernardo._scala/?__pwa=1" target='_blank'>
                        <Instagram></Instagram>
                    </a>
                </div>
            </div>
        </div>
        <div className='bg-card p-8 rounded-lg shadow-xs' onSubmit={handleSubmit}> 
            <h3 className='text-2xl font-semibold mb-6'>Mandami un Messaggio</h3>
            <form  className='space-y-6' >
                <div>
                    <label htmlFor="name" className='block text-sm font-medium mb-2'>Nome</label>
                    <input type="text" id="name" name="name" required className='w-full px-4 py-3 rounded-md border  border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Bernardo Scala...'/>
                </div>
                <div>
                    <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                    <input type="email" id="email" name="email" required className='w-full px-4 py-3 rounded-md border  border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='bernardo.scala2005@gmail.com...'/>
                </div>
                <div>
                    <label htmlFor="messaggio" className='block text-sm font-medium mb-2'>Messaggio</label>
                    <textarea id="messaggio"  name="message" required className='w-full px-4 py-3 rounded-md border  border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Salve! Vorrei parlarti di...'/>
                </div>
                <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}><Send size={16}>Invia</Send></button>
            </form>
        </div>
      </div>
      </div>
    </section>
  )
}


export default Contact
