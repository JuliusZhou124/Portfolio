"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from "next/image";
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import profilepic from "../assets/profilepic.png"

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-gradient-to-b from-purple-500 to-pink-500">

        <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                        bg-gradient-to-br from-fuchsia-500 to-cyan-500'></div>

            <div className='relative'>
                <div className = 'text-8xl font-bold text-center'>
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">Julius Zhou</h1> 
                </div>

                <motion.div
                    className = "hidden md:block absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image
                        src={cursor}
                        height="170"
                        width="170"
                        alt="cursor"
                        className= ""
                        draggable = "false"
                    />
                </motion.div>

                <motion.div
                    className = "hidden md:block absolute left-[230px] top-[20px]"
                    drag
                >
                    <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt="cursor"
                        className= ""
                        draggable = "false"
                    />
                </motion.div>
            </div>

            <p className='text-center text-xl max-w-[500px] mx-auto text-white/80'>
                Hi! I do programming sometimes, with an interest in hardware and embedded systems as well as computer vision. In the past I&apos;ve done a little 
                bit of competitive programming and a sizeable amount of devops. Proficient in web-dev/frontend if needed. 
                Big linux and foss enthusiast, hmu if u wanna chat. Sw member of FRC 649 Robotics. Website is not yet complete, give me some time on that 😅
            </p>

            {/* <Image
                src={profilepic}
                alt="profile picture"
                className='h-auto w-auto mx-auto'
            /> */}
        </div>
  )
}

export default Hero
