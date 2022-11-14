import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Typewriter } from 'react-simple-typewriter'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] dark:bg-[#f9fafb]'>
      {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#ff9a63] font-bold'>Hi, my name is</p>
          <h1 className='text-[#ccd6f6] text-4xl md:text-7xl font-bold'>Yakir Travish</h1>
          <h2 className='text-4xl md:text-7xl font-bold text-[#a3b5e3]'>I'm a{' '}
          <span style={{ color: '#ff9a63', fontWeight: 'bold' }}>
          <Typewriter
            words={["Full stack developer","Back end developer","Front end developer","Software engineer"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h2>
          <p className='text-[#ccd6f6] font-bold py-4 max-w-[700px]'>I'm a full-stack developer specializing in building and designing exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
          
          <Link to="work" smooth={true} duration={500}>
          <div>
            <button className='text-[#ccd6f6] group border-[#ccd6f6] border-2 px-6 py-3 my-2 flex items-center text-sm md:text-lg font-bold hover:bg-[#ff9a63] hover:text-[#0a192f] hover:border-[#0a192f]'>View Work
                <span className='group-hover:origin-[65%] group-hover:rotate-90 duration-300 text-xl font-bold'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </button>
          </div>
          </Link>
        </div>

    </div>
  )
}

export default Home
