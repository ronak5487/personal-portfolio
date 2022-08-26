import React from 'react'
import nit from "../assets/nit.png";
import s from "../assets/s.jpg";


const Education = () => {
  return (
    <div className='flex flex-col pt-44 md:px-24 px-7 divide-y-2 divide-y-reverse hover:divide-amber-500 divide-slate-300' id='education'>
      <div className='flex text-white font-mono md:font-medium font-semibold md:justify-start justify-center md:text-7xl text-5xl'>EDUCATION</div>
    <div className='flex md:flex-row flex-col md:pt-20 pt-16 '>
      <div className='flex md:justify-start justify-center'>
      <img src={nit} alt="nit logo" className='flex md:w-40 md:h-40 w-28 h-28'/>
      </div>
     <div className='flex flex-col md:pt-0 pt-6 md:px-16 '>
        <div className='flex text-white md:text-4xl text-2xl font-mono font-bold text-center'>National Institute Of Technology Hamirpur</div>
        <div className='flex text-white md:text-2xl text-xl font-mono font-semibold text-center pt-2'>Bachelor Of Technology In Electrical Engineering</div>
        <div className='flex text-slate-400 md:text-2xl text-xl font-mono md:justify-start justify-center pt-2'>July 2020 - Present</div>
        <div className='flex text-slate-400 md:text-2xl text-xl font-mono md:justify-start justify-center text-center pt-2 pb-8 '>CGPA - 8.7 </div>
        

      </div>
    </div>
    <div className='flex md:flex-row flex-col md:pt-20 pt-16 '>
      <div className='flex md:justify-start justify-center'>
      <img src={s} alt="nit logo" className='flex md:w-40 md:h-40 w-28 h-28 rounded-full'/>
      </div>
     <div className='flex flex-col md:pt-0 pt-6 md:px-16'>
        <div className='flex text-white md:text-4xl text-2xl font-mono font-bold md:justify-start justify-center text-center'>Alpha Beta School [CBSE Board]</div>
        <div className='flex text-white md:text-2xl text-xl font-mono font-semibold md:justify-start justify-center pt-1'>Senior Secondary</div>
        <div className='flex text-slate-400 md:text-2xl text-xl font-mono md:justify-start justify-center pt-1'>Percentage - 94.8 %</div>
        <div className='flex text-white md:text-2xl text-xl font-mono font-semibold md:justify-start justify-center pt-1'>Secondary</div>
        <div className='flex text-slate-400 md:text-2xl text-xl font-mono md:justify-start justify-center text-center pt-1 pb-8 '>Percentage - 92.2 %</div>
        

      </div>
    </div>
    </div>
  )
}

export default Education
