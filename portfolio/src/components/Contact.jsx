import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'


const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] text-[#ccd6f6] dark:text-[#374151] dark:bg-[#f9fafb] flex justify-center items-center p-4'>
      <form action="https://getform.io/f/b230017d-7a03-405d-b39d-e81039c4b474" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63] dark:border-[#3429aa]'>Contact</p>
            <div className='py-4'>
              {/*eslint-disable-next-line*/}
              <p className=' inline'>// Submit the form below or send me an email - </p>
              <a className='font-bold inline' href = "mailto: yakir.travish1@gmail.com">
              <HiOutlineMail size={30} className="inline mr-1"/>
                yakir.travish1@gmail.com
              </a>
            </div>
        </div>

        <input className='p-2 bg-[#ccd6f6] dark:bg-[#374151] font-bold text-[#0a192f] dark:text-[#f9fafb]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] dark:bg-[#374151] font-bold text-[#0a192f] dark:text-[#f9fafb]' type="email" placeholder='Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6] dark:bg-[#374151] font-bold text-[#0a192f] dark:text-[#f9fafb]' placeholder='Message' name="message" rows="10"></textarea>

        <button className='text-[#ccd6f6] dark:text-[#374151] border-[#ccd6f6] dark:border-[#374151] border-2 px-6 py-3 my-8 mx-auto flex items-center text-sm md:text-lg font-bold hover:bg-[#ff9a63] dark:hover:bg-[#3429aa] hover:text-[#0a192f] dark:hover:text-[#f9fafb] hover:border-[#0a192f] dark:hover:border-[#f9fafb]'>Send</button>
      </form>
    </div>
  )
}

export default Contact
