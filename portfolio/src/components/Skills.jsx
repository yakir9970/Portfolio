import React from 'react'

import Css from '../assets/css.png'
import GitHub from '../assets/github.png'
import gitLight from '../assets/gitLight.png'
import Html from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/react.png'
import Java from '../assets/Java.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-[#ccd6f6] dark:text-[#374151] dark:bg-[#f9fafb]'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63] dark:border-[#3429aa]'>Skills</p>
              {/*eslint-disable-next-line*/}
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb]  hover:scale-110 duration-500'>
                    <img src={Html} alt="html" className='w-20 mx-auto pt-4' />
                    <p className='my-4 text-xl font-bold'>Html</p>
                </div>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb] hover:scale-110 duration-500'>
                    <img src={Css} alt="css" className='w-20 mx-auto pt-4' />
                    <p className='my-4 text-xl font-bold'>Css</p>
                </div>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="js" className='w-20 mx-auto pt-4' />
                    <p className='my-4 text-xl font-bold'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="react" className='w-20 mx-auto pt-4' />
                    <p className='my-4 text-xl font-bold'>React</p>
                </div>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb] hover:scale-110 duration-500'>
                    <img src={Node} alt="node" className='w-20 mx-auto pt-4' />
                    <p className='my-4 text-xl font-bold'>Node</p>
                </div>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb] hover:scale-110 duration-500'>
                    <img src={Mongo} alt="mongo" className='w-20 mx-auto pt-4' />
                    <p className='my-4 text-xl font-bold'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="github" className='w-20 mx-auto pt-4 dark:hidden' />
                    <img src={gitLight} alt="LogoLight" className="hidden w-20 mx-auto pt-4 dark:block" />
                    <p className='my-4 text-xl font-bold'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#535c74] dark:shadow-[#374151] dark:bg-[#f0f3fb] hover:scale-110 duration-500'>
                    <img src={Java} alt="java" className='w-14 mx-auto pt-4' />
                    <p className='my-4 text-xl font-bold'>Java</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
