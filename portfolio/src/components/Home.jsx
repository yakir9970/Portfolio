import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Typewriter } from 'react-simple-typewriter'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] dark:bg-[#f9fafb]'>
      {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#ff9a63] dark:text-[#3429aa] font-bold'>Hi, my name is</p>
          <h1 className='text-[#ccd6f6] dark:text-[#374151] text-4xl md:text-7xl font-bold'>Yakir Travish</h1>
          <h2 className='text-4xl md:text-7xl font-bold dark:text-[#6d809e] text-[#a3b5e3]'>I'm a{' '}
          <span className='dark:text-[#3429aa] text-[#ff9a63] font-bold'>
          <Typewriter
            words={["full stack developer","back end developer","front end developer","software engineer"]}
            loop={30}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h2>
          <p className='text-[#ccd6f6] dark:text-[#374151] font-bold py-4 max-w-[700px]'>I'm a full-stack developer specializing in building and designing exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
          
          <Link to="work" smooth={true} duration={500}>
          <div>
            <button className='text-[#ccd6f6] dark:text-[#374151] dark:border-[#374151] group border-[#ccd6f6] border-2 px-6 py-3 my-2 flex items-center text-sm md:text-lg font-bold hover:bg-[#ff9a63] dark:hover:bg-[#3429aa] hover:text-[#0a192f] dark:hover:text-[#f9fafb] hover:border-[#0a192f] dark:hover:border-[#f9fafb]'>View Work
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
