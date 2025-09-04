import React, { useState } from 'react'
import {cn} from "@/lib/utils"
const skills = [
  { name: "HTML", level: 80, category: "Frontend" },
  { name: "CSS", level: 75, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express", level: 65, category: "Backend" },
  { name: "Git", level: 80, category: "Strumenti" },
  { name: "GitHub", level: 75, category: "Strumenti" },
  { name: "VS Code", level: 90, category: "Strumenti" }
];

const category=["Tutte", "Frontend", "Backend", "Strumenti"]

const Skills = () => {

    const[activeCategory,setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => { return activeCategory === "Tutte" || skill.category === activeCategory})
  return (
    <section id="skills" className='py-24 px-4 relative bg-secondary/30'>
      <div className="container mx-auto max-w-5xl"></div>
      <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
        Mie <span className='text-primary'>Competenze</span>
      </h2>
      <div className='flex flex-wrap justify-center gap-4 mb-12'>
        {category.map((cat,key)=>(
            <button key={key} className={cn('px-5 py-2 rounded-full transition-colors duration-300',activeCategory===cat?"bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary ")}onClick={()=>setActiveCategory(cat)}>{cat}</button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredSkills.map((skill,key)=>(
            <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                <div className='text-left mb-4'>
                    <h3 className='font-semibold text-lg'>{skill.name}</h3>
                </div>
                <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                <div className='bg-primary h-2 rounded-full origini-left animate-[grow_1.5s_ease-out]' style={{width:skill.level+"%"}}/>
                </div>
                <div className='text-right mt-1'>
                    <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
