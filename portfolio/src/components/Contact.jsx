import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] text-[#ccd6f6] flex justify-center items-center p-4'>
      <form action="https://getform.io/f/b230017d-7a03-405d-b39d-e81039c4b474" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff9a63]'>Contact</p>
            <p className='py-4'>// Submit the form below or send me an email - <p className='font-bold inline'>Yakir.Travish1@gmail.com</p></p>
        </div>

        <input className='p-2 bg-[#ccd6f6] font-bold text-black' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] font-bold text-black' type="email" placeholder='Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6] font-bold text-black' placeholder='Message' name="message" rows="10"></textarea>

        <button className='text-[#ccd6f6] border-[#ccd6f6] border-2 px-6 py-3 my-8 mx-auto flex items-center text-sm md:text-lg font-bold hover:bg-[#ff9a63] hover:text-[#0a192f] hover:border-[#0a192f]'>Send</button>
      </form>
    </div>
  )
}

export default Contact
