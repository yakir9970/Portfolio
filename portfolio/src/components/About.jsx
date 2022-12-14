import React from 'react'
import Avatar from '../assets/Avatar.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-[#ccd6f6] dark:bg-[#f9fafb] dark:text-[#374151]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63] dark:border-[#3429aa]'>About</p>
          </div>
        </div>
        <div></div>
        <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
          <div className='-mr-3 md:text-right mt-10'>
              <p className='pr-[3.4rem] font-bold text-xl md:border-r-[0.5rem] border-[#ff9a63] dark:border-[#3429aa]'>I'm passionate about building software that improves the lives around me. I'm eager to learn and evolve myself in every way possible.<br /> <br />I'm a 4<sup>th</sup> year software engineering student, Software and Information Technologies specialization.</p>
          </div>

          <div className='mx-auto'>
            <img src={Avatar} alt="avatar" className='w-[350px] drop-shadow-[10px_25px_25px_rgba(204,214,246,0.25)] dark:drop-shadow-[10px_25px_25px_rgba(55,65,81,0.75)]'/>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default About
