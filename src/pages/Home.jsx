import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import StarBackground from '../component/StarBackground'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import About from '../component/About'
import Skills from '../component/Skills'
import Project from '../component/Project'
import Contact from '../component/Contact'
import Footer from "../component/Footer"
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden' > 
      <ThemeToggle></ThemeToggle>
      <StarBackground></StarBackground>
      <Navbar></Navbar>
      <main>
        <HeroSection></HeroSection>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
