import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#ff9a63] font-bold'>Hi, my name is</p>
          <h1 className='text-[#ccd6f6] text-4xl md:text-7xl font-bold'>Yakir Travish</h1>
          <h2 className='text-4xl md:text-7xl font-bold text-[#a3b5e3]'>I'm a Full Stack Developer</h2>
          <p className='text-[#a3b5e3] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia consequuntur excepturi est itaque ut numquam deserunt praesentium accusamus atque, porro eveniet sapiente, iure eligendi nemo enim rem. Doloribus, blanditiis.</p>
          <div>
            <button className='text-[#ccd6f6] group border-[#ccd6f6] border-2 px-6 py-3 my-2 flex items-center text-sm md:text-lg font-bold hover:bg-[#ff9a63] hover:text-[#0a192f] hover:border-[#0a192f]'>View Work
                <span className='group-hover:origin-[65%] group-hover:rotate-90 duration-300 text-xl font-bold'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </button>
          </div>
        </div>

    </div>
  )
}

export default Home
