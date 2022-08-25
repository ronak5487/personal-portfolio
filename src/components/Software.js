import React from 'react'
import mm from "../assets/mm.png";
import vc from "../assets/vc.png";
import ms from "../assets/ms.png";
import gitt from "../assets/gitt.png";
import sio from "../assets/sio.png";
import hh from "../assets/hh.png";
import ml from "../assets/ml.png";




const Software = () => {
  return (
    <div className='flex flex-col ' >
      <div className='flex text-white justify-center md:text-6xl text-xl font-mono font-bold mt-28'>SOFTWARES I FAMILIAR WITH </div>
      <div className='flex flex-row flex-wrap md:justify-center justify-evenly items-center mt-12 md:px-60 px-4   '>
        <div className='flex flex-col md:w-52 w-32 shadow-2xl hover:shadow-white md:mx-6 mt-8 hover:cursor-pointer   shadow-black md:h-48 h-40 border-transparent border-2 justify-center items-center'>
           <img src={mm} className=" h-36 w-36" alt="metamask" />
           <p className='text-white font-mono text-xl '>Metamask</p>
        </div>
        <div className='flex flex-col md:w-52 w-32 shadow-2xl hover:shadow-white hover:cursor-pointer md:mx-6 mt-8 shadow-black md:h-48 h-40 border-transparent border-2 justify-center items-center'>
           <img src={vc} className=" h-28 w-24 mt-3" alt="Vs code" />
           <p className='text-white font-mono text-xl mt-4 '>VS Code</p>
        </div>
        <div className='flex flex-col md:w-52 w-32 shadow-2xl hover:shadow-white md:mx-6 mt-8 hover:cursor-pointer  shadow-black md:h-48 h-40 border-transparent border-2 justify-center items-center'>
           <img src={ms} className=" h-24 w-28 mt-4 md:mt-7" alt="MS-office" />
           <p className='text-white font-mono text-xl mt-4'>MS-Office</p>
        </div>
        <div className='flex flex-col md:w-52 w-32 shadow-2xl hover:shadow-white md:mx-6 mt-8 hover:cursor-pointer  shadow-black md:h-48 h-40 border-transparent border-2 justify-center items-center'>
           <img src={gitt} className=" h-24 w-24 mt-2 md:mt-6" alt="Git" />
           <p className='text-white font-mono text-xl mt-5 '>Git</p>
        </div>
        <div className='flex flex-col md:w-52 w-32 shadow-2xl hover:shadow-white md:mx-6 mt-8 hover:cursor-pointer  shadow-black md:h-48 h-40 border-transparent border-2 justify-center items-center'>
           <img src={sio} className="  w-40 mt-16 px-2" alt="sanity" />
           <p className='text-white font-mono text-xl mt-12 '>Sanity-io</p>
        </div>
        <div className='flex flex-col md:w-52 w-32 shadow-2xl hover:shadow-white md:mx-6 mt-8 hover:cursor-pointer  shadow-black md:h-48 h-40 border-transparent border-2 justify-center items-center'>
           <img src={hh} className=" h-20 w-28 mt-8" alt="Hardhat" />
           <p className='text-white font-mono text-xl mt-7 '>Hardhat</p>
        </div>
        <div className='flex flex-col md:w-52 w-32 shadow-2xl hover:shadow-white md:mx-6 mt-8 hover:cursor-pointer  shadow-black md:h-48 h-40 border-transparent border-2 justify-center items-center'>
           <img src={ml} className=" h-20 w-28 mt-8" alt="Matlab" />
           <p className='text-white font-mono text-xl mt-7 '>Matlab</p>
        </div>
</div>
{/* <div className='flex md:flex-row flex-col mt-20 md:mt-44 h-80 items-center justify-center'>
   <div className='flex w-1/3 justify-center text-white md:text-6xl text-3xl font-mono font-semibold '>LEETCODE PROFILE</div>
   <div className="flex  items-center justify-center w-2/3 px-56"> <img src="https://leetcode-stats.vercel.app/api?username=Ronak_gupta&theme=dark" alt="leetcode" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300' /> </div>
</div> */}
    </div>
  )
}

export default Software
