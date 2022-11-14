import React from 'react'
import Avatar from '../assets/Avatar.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-[#ccd6f6]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63]'>About</p>
            </div>
            </div><div>
            </div>
            <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
            <div className='md:border-r-[0.5rem] border-[#ff9a63] -mr-3 md:text-right'>
                    <p className='mr-3 font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim officia asperiores aut molestiae magni nobis modi eos corporis harum earum, amet debitis maxime perspiciatis repellat praesentium doloribus necessitatibus! Odit!</p>
                </div>
                <div className='mx-auto'>
                  <img src={Avatar} alt="avatar" className='w-[350px] drop-shadow-[0_25px_25px_rgba(255,255,255,0.25)] '/>
                </div>
                
            </div>
      </div>
    </div>
  )
}

export default About
