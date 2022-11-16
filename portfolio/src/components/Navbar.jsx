import React, {useState,useEffect} from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill,BsSunFill,BsMoonFill} from 'react-icons/bs'
import { SlArrowUp } from "react-icons/sl";
import Logo from '../assets/logo.png'
import LogoLight from '../assets/LogoLight.png'
import {Link} from 'react-scroll'
import Switch from './Switch';
import CV from '../assets/Yakir_Travish_CV.pdf'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const [toTop,setToTop]=useState(false)

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
          setToTop(true)
        }
        else{
          setToTop(false)
        }
      })
    },[])

    const clickHandler = () => {
        setNav(!nav);
    }

   

  return (
    <div className='z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] dark:bg-[#f9fafb] text-[#E8F1F2]'>

      {/*logo*/}  
      <div>
        <img src={Logo} alt="Logo" style={{width:'80px'}} className="dark:hidden" />
        <img src={LogoLight} alt="LogoLight" style={{width:'80px'}} className="hidden dark:block" />
      </div>

      {/*menu*/}
        <ul className='hidden md:flex text-[#ff9a63] dark:text-[#3429aa]'>
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
          <li>
            <BsMoonFill className='inline text-2xl -mt-4'/>
            <Switch className='inline'/>
            <BsSunFill className='inline text-2xl -mt-4'/>
          </li>
        </ul>

      {/*hamburger menu*/}
        <div onClick={clickHandler} className='md:hidden z-10 text-4xl text-[#ff9a63] dark:text-[#3429aa] cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

    {/*mobile menu*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] dark:bg-[#f9fafb] flex flex-col justify-center items-center'}>
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
        <li className='mt-10'>
          <BsMoonFill className='inline text-2xl -mt-4 text-[#ff9a63] dark:text-[#3429aa]'/>
          <Switch className='inline'/>
          <BsSunFill className='inline text-2xl -mt-4 text-[#ff9a63] dark:text-[#3429aa]'/>
        </li>
        <li className='fixed bottom-24 inline-flex space-x-4'>
          <a className='bg-[#0A66C2] border-4 border-[#0A66C2]' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yakir-travish/">
            <FaLinkedin size={50}/>
          </a>
          <a className='bg-[#333] border-4 border-[#333]' target="_blank" rel="noreferrer" href="https://github.com/yakir9970">
            <FaGithub size={50}/>
          </a>
          <a className='bg-[#34A853] border-4 border-[#34A853]' href = "mailto: yakir.travish1@gmail.com">
            <HiOutlineMail size={50}/>
          </a>
          <a className='bg-[#717b87] border-4 border-[#717b87]' href={CV} download>
            <BsFillPersonLinesFill size={50}/>
          </a>
        </li>
    </ul>

    {/*social icons*/}
    <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yakir-travish/">
            LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' target="_blank" rel="noreferrer" href="https://github.com/yakir9970">
            GitHub <FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#34A853]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' href = "mailto: yakir.travish1@gmail.com">
            E-Mail <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#717b87]'>
          <a className='flex justify-between items-center w-full text-lg font-bold text-gray-300' href={CV} download>
            Resume <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>
    </div>

    {/*BACK TO TOP*/}
    {toTop && (
    <div className='hidden md:flex fixed bottom-[3%] right-[3%] transition-all duration-500'>
    <Link to="home" smooth={true} duration={500}>
      <button className='p-2 border-2 border-[#ccd6f6] dark:border-[#374151] dark:text-[#374151] rounded-full text-5xl hover:border-[#0a192f] dark:hover:border-[#f9fafb] hover:bg-[#ccd6f6] dark:hover:bg-[#374151] hover:text-[#0a192f] dark:hover:text-[#f9fafb]'>
        <SlArrowUp />
      </button>
    </Link>
    </div>
    )}


    </div>
  )
}

export default Navbar
