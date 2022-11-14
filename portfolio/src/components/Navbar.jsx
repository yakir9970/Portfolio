import React, {useState} from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const clickHandler = ()=>{
        setNav(!nav);
    }

  return (
    <div className='z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#E8F1F2]'>

      {/*logo*/}  
      <div>
        <img src={Logo} alt="Logo" style={{width:'80px'}}/>
      </div>

      {/*menu*/}
        <ul className='hidden md:flex text-[#ff9a63]'>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/*hamburger menu*/}
        <div onClick={clickHandler} className='md:hidden z-10 text-4xl text-[#ff9a63] cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

    {/*mobile menu*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='mobile_li'>
        <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
              Home
            </Link>
        </li>
        <li className='mobile_li'>
        <Link onClick={clickHandler} to="about" smooth={true} duration={500}>
              About
            </Link>
        </li>
        <li className='mobile_li'>
        <Link onClick={clickHandler} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
        </li>
        <li className='mobile_li'>
        <Link onClick={clickHandler} to="work" smooth={true} duration={500}>
              Work
            </Link>
        </li>
        <li className='mobile_li'>
        <Link onClick={clickHandler} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
        </li>
    </ul>

    {/*social icons*/}
    <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' href="/">
            LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' href="/">
            GitHub <FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#34A853]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' href="/">
            E-Mail <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#717b87]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' href="/">
            Resume <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>
    </div>

    </div>
  )
}

export default Navbar
