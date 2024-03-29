import React from 'react'
import u from "../assets/u.png";
import wtick from "../assets/wtick.png";
import link from "../assets/link.png";
import { useNavigate } from "react-router-dom"

const Uber1 = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col md:pt-8 pt-4 max-w-screen bg-[#171c28] overflow-x-hidden min-h-screen overflow-x-hidden'>
      
      <div className='flex bg-blue-500 text-white w-20 justify-center rounded-xl p-1 font-mono text-lg  md:mx-24 mx-8 hover:cursor-pointer ' onClick={() => navigate(-1)}>Back</div>
      <div className=' flex justify-center text-white font-mono md:text-7xl md:mt-0 mt-8 text-5xl font-bold'>Uber-Clone</div>
      <div className='flex md:flex-row flex-col md:mt-16 mt-12 md:mx-56 md:items-start items-center'>
     <img src={u}  alt="uber" className='flex md:w-[440px] md:h-64 w-80 h-48  border-2 shadow-white '/>
     <div className='flex flex-col justify-start  md:ml-20  md:text-justify text-center'>
     <div className='flex text-white font-mono md:text-xl text-lg items-start md:mt-0 mt-12 px-4 '>It is a clone of uber which allows a person to locate its location and also to select its destination. User can also select its ride upon their choices . There is also a functionality of user authentication with metamask which provides security.</div>
    <a href="https://github.com/ronak5487/Uber-clone">
      <div className='flex md:mt-5 mt-7 items-center md:justify-start justify-center w-44 bg-blue-500 rounded-xl md:ml-4 ml-[88px]  p-2'>
     <img src={link} alt="link" className='flex md:w-5 md:h-4 w-5 h-4'/>
     <div className='flex text-white md:text-xl text-lg font-mono ml-2 '>Github Repo</div>
     </div>
     </a>
  
     <div className='flex mt-7 items-start  md:px-0 md:ml-0 ml-8 '>
      <div className='flex items-center '>
      <img src={wtick} alt="tick" className='flex md:w-14 md:h-9 w-9 h-6 items-center'/>
      <div className='flex text-white font-mono md:text-xl text-sm md:ml-2 flex-wrap text-left justify-start '>Metamask Authentication</div>
      </div>
      <div className='flex items-center md:ml-10  '>
      <img src={wtick} alt="tick" className='flex md:w-14 md:h-9 w-9 h-6 items-center'/>
      <div className='flex text-white font-mono md:text-xl text-sm text-left md:ml-2 flex-wrap md:mr-0 mr-10 '>Mapbox API</div>
      </div>
      
     </div>
     <div className='flex mt-7 md:items-start justify-start md:px-0 md:ml-0 ml-8 '>
      <div className='flex items-center '>
      <img src={wtick} alt="tick" className='flex md:w-14 md:h-9 w-9 h-6 items-center'/>
      <div className='flex text-white font-mono md:text-xl text-sm md:ml-2 flex-wrap text-left justify-start '>Sanity Database</div>
      </div>
      <div className='flex items-center md:ml-32 ml-8'>
      <img src={wtick} alt="tick" className='flex md:w-14 md:h-9 w-9 h-6 items-center'/>
      <div className='flex text-white font-mono md:text-xl text-sm text-left md:ml-2 flex-wrap '>Next js</div>
      </div>
      
     </div>
      </div>
      </div>
      <div className='flex justify-center text-white md:text-3xl text-xl font-mono py-24   '>Made with❤️by Ronak Gupta</div>
    </div>
  )
}

export default Uber1
