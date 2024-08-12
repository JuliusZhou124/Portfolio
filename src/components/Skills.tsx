"use client"

import React from 'react'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
// import python from "../assets/python.png"
// TODO: fill in skills
const skillIcons = [
    {icon: <FaHtml5 size={140} />, label: "HTML"},
    {icon: <FaCss3Alt size={140} />, label: "CSS"},
    {icon: <FaReact size={110} />, label: "React"},
    {icon: <FaJsSquare size={140} />, label: "Javascript"},
]

const Skills = () => {

  return (
    <div className='py-32 bg-gradient-to-b from-purple-500 to-pink-500'>
      <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb-4'> What I Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {skillIcons.map((skill, index) => 
                (
                    <div
                        key={index}
                        className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center 
                        bg-white/10 p-4 rounded-xl'
                    >   
                        {skill.icon}
                        <p className='mt-2'> {skill.label} </p>
                    </div>
                )
            )}
        </div>
      </div>
    </div>
  )
}

export default Skills
