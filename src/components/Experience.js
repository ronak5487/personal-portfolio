import React from 'react'
import ojas from "../assets/ojas.png";

const Experience = () => {
  return (
    <div className='flex flex-col  pt-44 md:px-24 px-5 divide-y-2 divide-y-reverse hover:divide-amber-500 divide-slate-300' id='experience'>
      <div className='flex text-white font-mono md:font-medium font-semibold md:justify-start justify-center md:text-7xl text-5xl'>EXPERIENCE</div>
    <div className='flex md:flex-row flex-col md:pt-20 pt-16 '>
      <div className='flex md:justify-start justify-center items-center md:mb-12 w-80'>
      <img src={ojas} alt="nit logo" className='flex md:w-40 md:h-40 w-28 h-28 rounded-full bg-white justify-center'/>
      </div>
     <div className='flex flex-col md:pt-0 pt-6 md:px-8 '>
        <div className='md:flex hidden text-white md:text-4xl text-2xl font-mono font-bold text-center md:text-left'>Ojas - Technical Club Of Electrical Department</div>
        <div className='md:hidden flex text-white md:text-4xl text-4xl font-mono font-bold text-center justify-center md:text-left'>Ojas</div>
        <div className='md:hidden flex text-white md:text-4xl text-2xl font-mono font-bold text-center md:text-left mt-4'>Technical Club Of Electrical Department</div>

        <div className='flex text-white md:text-2xl text-xl font-mono font-semibold justify-center md:justify-start text-center md:pt-2 pt-4'>Coordinator</div>
        <div className='flex text-slate-400 md:text-2xl text-xl font-mono md:justify-start justify-center pt-2'>December 2020 - Present</div>
        <div className='flex text-slate-400 md:text-xl text-md font-mono md:justify-start justify-center md:text-left text-center  md:pt-1 pt-4 '>⚡Participated in Project exhibition with modified Hydro Power Plant Project in ”NIMBUS-2K21”, tech fest
at NIT Hamirpur</div>
<div className='flex text-slate-400 text-md  md:text-xl font-mono md:justify-start justify-center md:text-left pt-1  text-center pb-20 '>⚡Co-organized a virtual puzzle solving event ”ELECTROHUNT” hosted on Mozilla Hubs, with
participation of over 100+ enthusiasts</div>
{/* <div className='flex text-slate-400 text-xl font-mono md:justify-start justify-center text-left pt-1 '>⚡Participated in Project exhibition with modified Hydro Power Plant Project in ”NIMBUS-2K21”, tech fest
at NIT Hamirpur</div>
         */}

      </div>
    </div>
    </div>
  )
}

export default Experience





