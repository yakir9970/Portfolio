import React from 'react'
import test from '../assets/test.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-[#ccd6f6]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63]'>Work</p>
            <p className='py-4'>// Check out some of my recent work</p>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>

            <div style={{backgroundImage: `url(${test})`}} className='relative shadow-lg shadow-[#535c74] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-2 border-black bg-transparent text-[#ccd6f6] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-2 border-black bg-white text-[#ccd6f6] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${test})`}} className='relative shadow-lg shadow-[#535c74] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-2 border-black bg-white text-[#ccd6f6] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-2 border-black bg-white text-[#ccd6f6] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${test})`}} className='relative shadow-lg shadow-[#535c74] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-2 border-black bg-white text-[#ccd6f6] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-2 border-black bg-white text-[#ccd6f6] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${test})`}} className='relative shadow-lg shadow-[#535c74] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-2 border-black bg-white text-[#ccd6f6] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-2 border-black bg-white text-[#ccd6f6] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Work
