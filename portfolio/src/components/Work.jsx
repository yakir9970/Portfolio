import React from 'react'
import test from '../assets/test.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-[#ccd6f6] dark:text-[#374151] dark:bg-[#f9fafb]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63] dark:border-[#3429aa]'>Work</p>
              {/*eslint-disable-next-line*/}
            <p className='py-4'>// Check out some of my recent work</p>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>

            <div className='relative shadow-lg shadow-[#535c74] dark:shadow-[#374151] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <img src={test} alt="test" className='absolute top-0 right-0 group-hover:blur-[3px] w-full h-full object-cover rounded-md' />
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100 z-10'>
                    <span className='text-3xl font-bold text-[#ff9a63] tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-t-2 border-l-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-t-2 border-r-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='relative shadow-lg shadow-[#535c74] dark:shadow-[#374151] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <img src={test} alt="test" className='absolute top-0 right-0 group-hover:blur-[3px] w-full h-full object-cover rounded-md' />
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100 z-10'>
                    <span className='text-3xl font-bold text-[#ff9a63] tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-t-2 border-l-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-t-2 border-r-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='relative shadow-lg shadow-[#535c74] dark:shadow-[#374151] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <img src={test} alt="test" className='absolute top-0 right-0 group-hover:blur-[3px] w-full h-full object-cover rounded-md' />
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100 z-10'>
                    <span className='text-3xl font-bold text-[#ff9a63] tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-t-2 border-l-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-t-2 border-r-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='relative shadow-lg shadow-[#535c74] dark:shadow-[#374151] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <img src={test} alt="test" className='absolute top-0 right-0 group-hover:blur-[3px] w-full h-full object-cover rounded-md' />
                {/*hover effects */}
                <div className='opacity-0 group-hover:opacity-100 z-10'>
                    <span className='text-3xl font-bold text-[#ff9a63] tracking-wider'>
                    test application name
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='absolute bottom-0 right-0 text-center w-1/2 py-3 border-t-2 border-l-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='absolute bottom-0 left-0 text-center w-1/2 py-3 border-t-2 border-r-[1px] border-[#535c74]/80 hover:bg-[#0a192f]/95 rounded-md hover:text-[#ff9a63] bg-transparent text-[#ff9a63] font-bold text-xl'>Code</button>
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
