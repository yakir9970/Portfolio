import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-[#ccd6f6]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='md:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63]'>About</p>
            </div>
            </div><div>
            </div>
            <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
                <div className='md:text-right text-4xl font-bold'>
                    <p>Hi, I'm Yakir, nice to meet you. Please take a look around.</p>
                </div>
                <div className='md:border-l-[0.5rem] border-[#ff9a63] -ml-3'>
                    <p className='ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim officia asperiores aut molestiae magni nobis modi eos corporis harum earum, amet debitis maxime perspiciatis repellat praesentium doloribus necessitatibus! Odit!</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
