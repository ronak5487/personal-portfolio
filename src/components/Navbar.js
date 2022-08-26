
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {HashLink as Link} from 'react-router-hash-link'
const Navbar = () => {
  const [toggleMenu , setToggleMenu] =useState(false);
  console.log(toggleMenu);
  return (
    <>
    <div className='flex flex-col' id='nav'>
    <div className='py-6 fixed flex w-screen items-center px-5  bg-[#171c28] animate-side-in overflow-x-hidden '>
      <div className='flex-1 flex-row'>
        <span className='text-slate-400 text-4xl'>&lt;</span>
        <span className=' font-augustina text-white cursor-pointer  font-bold text-3xl'> Ronak Gupta</span>
        <span className='text-slate-400 ml-3 text-4xl'>/&gt;</span>
        </div>
        <div className='md:flex hidden text-white text-xl mr-14 font-mono'>
          <Link to="#skills" smooth>
         <div className='hover:bg-fuchsia-700 py-3 px-4 cursor-pointer md:mx-3 mx-4' >Skills</div></Link>
         <Link to="#education" smooth>
         <div className='hover:bg-fuchsia-700 py-3 px-4 cursor-pointer md:mx-3 mx-4'>Education</div></Link>
         <Link to="#projects" smooth>
         <div className='hover:bg-fuchsia-700 py-3 px-4 cursor-pointer md:mx-3 mx-4'>Projects</div></Link>
         <Link to="#experience" smooth>
         <div className='hover:bg-fuchsia-700 py-3 px-4 cursor-pointer md:mx-3 mx-4'>Experience</div></Link>
         <Link to="#contact" smooth>
         <div className='hover:bg-fuchsia-700 py-3 px-4 cursor-pointer md:mx-3 mx-4 '>Contact</div></Link>
        </div>
        {
          !toggleMenu &&
         <div className='flex relative items-center'><AiOutlineMenu fontSize={25} className="text-white hover:cursor-pointer md:hidden " onClick={() => setToggleMenu(true)}/></div>
          }
          {
            toggleMenu &&
            <div className='flex relative items-center'><AiOutlineClose fontSize={30} className='text-white hover:cursor-pointer md:hidden' onClick={()=> setToggleMenu(false)}/></div>
          }
          </div>
          {
            toggleMenu &&
          <div className=' w-screen fixed md:hidden flex-1 flex-col p-6 top-20 justify-start text-white font-mono text-2xl blue-glassmorphism animate-side-in'>
        <Link to="#skills" smooth>
        <div className='hover:bg-fuchsia-700 p-2'><div className='mx-4'>Skills</div></div></Link>
        <Link to="#education" smooth>
        <div className='hover:bg-fuchsia-700 p-2'><div className='mx-4'>Education</div></div></Link>
        <Link to="#projects" smooth>
        <div className='hover:bg-fuchsia-700 p-2'><div className='mx-4'>Projects</div></div></Link>
        <Link to="#experience" smooth>
        <div className='hover:bg-fuchsia-700 p-2'><div className='mx-4'>Experience</div></div></Link>
        <Link to="#contact" smooth>
        <div className='hover:bg-fuchsia-700 p-2'><div className='mx-4'>Contact</div></div></Link>
        
          </div>
          }
          </div>
          </>

  )
}

export default Navbar









 
// ...
// <ul>
//   <li className="listPadding">
//     <Link onClick={this.handleScroll}
//         to="about"
//         activeClass="active"
//         spy={true} 
//         smooth={true}
//     >
//         ABOUT
//     </Link>
//   </li>
// </ul>