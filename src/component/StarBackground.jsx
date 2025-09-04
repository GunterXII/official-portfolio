import React, { useEffect, useState } from 'react'

const StarBackground = () => {
    const [stars,setStars]=useState([])
    const [meteors,setMeteors]=useState([])
    useEffect(()=>{
 generateStars()
     generateMeteors()
     const handleResize=()=>{
        generateStars()
     }
     window.addEventListener('resize',handleResize)
     return ()=>{
        window.removeEventListener('resize',handleResize)
     }
    },[])
    const generateStars=()=>{
        const numberOfStars=Math.floor(window.innerWidth*window.innerHeight/10000)//per cambiare densita stelle basta dividere per un numero maggiore o inferiore 

        const newStars=[]
        for(let i=0;i<numberOfStars;i++){
            newStars.push({
                id:i,//id per identificare le stelle,uguale all indice
                size:Math.random()*3+1, //dimensione delle stelle da 1 a 4 pixel
                x:Math.random()*100, //posizione x delle stelle in percentuale
                y:Math.random()*100, //posizione y delle stelle
                opacity:Math.random()*0.5+0.5, //opacità delle stelle da 0.5 a 1
                animationDurantion:Math.random()*4+2, //durata animazione delle stelle da 2 a 6 secondi
            })
        }
        setStars(newStars)
    }//in questo modo abbiamo uno sfondo pieno di stelle che cambiano in posizione e dimensione ad ogni refresh della pagina

    const generateMeteors=()=>{
        const numberOfMeteors=4

        const newMeteors=[]
        for(let i=0;i<numberOfMeteors;i++){
            newMeteors .push({
                id:i,//id per identificare le meteore,uguale all indice
                size:Math.random()*2+1, //dimensione delle meteore
                x:Math.random()*100, //posizione x delle meteore in percentuale
                y:Math.random()*20, //posizione y delle meteore
                delay:Math.random()*15, //attesa prima di apparire le meteore
                animationDurantion:Math.random()*3+3, //durata animazione delle meteore da 3 a 6 secondi
            })
        }
        setMeteors(newMeteors)
    }//in questo modo abbiamo uno sfondo pieno di stelle che cambiano in posizione e dimensione ad ogni refresh della pagina
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {stars.map((star)=>(
        <div key={star.id} className='star animate-pulse-subtle' style={{width:`${star.size}px`,height:`${star.size}px`,left:`${star.x}%`,opacity:`${star.opacity}px`,animationDuration:`${star.animationDurantion}s`,top:`${star.y}%`}}/>
        
      ))}
      {meteors.map((meteor)=>(
        <div key={meteor.id} className='meteor animate-meteor' style={{width:`${meteor.size*50}px`,height:`${meteor.size*1}px`,left:`${meteor.x}%`,delay:`${meteor.delay}px`,animationDuration:`${meteor.animationDurantion}s`,top:`${meteor.y}%`}}/>
      ))}
    </div>
  )
}

export default StarBackground
