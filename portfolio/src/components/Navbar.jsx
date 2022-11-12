import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const clickHandler = ()=>{
        setNav(!nav);
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2D343E] text-[#E8F1F2]'>

      {/*logo*/}  
      <div>
        <img src={Logo} alt="Logo Image" style={{width:'70px'}}/>
      </div>

      {/*menu*/}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>contant</li>
        </ul>

      {/*hamburger menu*/}
        <div onClick={clickHandler} className='md:hidden z-10 text-4xl'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

    {/*mobile menu*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2D343E] flex flex-col justify-center items-center'}>
        <li className='mobile_li'>Home</li>
        <li className='mobile_li'>About</li>
        <li className='mobile_li'>Skills</li>
        <li className='mobile_li'>Work</li>
        <li className='mobile_li'>contant</li>
    </ul>

    {/*social icons*/}
    <div className='hidden'></div>

    </div>
  )
}

export default Navbar
