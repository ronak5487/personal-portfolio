import React from 'react'
import wtick from "../assets/wtick.png";
import link from "../assets/link.png";
import { useNavigate } from "react-router-dom"
import Dev from '../assets/dev..png'


const Crypto = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col max-w-screen bg-[#171c28] md:pt-8 pt-4  min-h-screen '>
      <div className='flex bg-blue-500 text-white w-20 justify-center rounded-xl p-1 font-mono text-lg md:mx-24 mx-8 hover:cursor-pointer' onClick={() => navigate(-1)}>Back</div>
      <div className=' flex justify-center text-white font-mono md:text-7xl md:mt-0 mt-8 text-5xl font-bold'>DevHub</div>
      <div className='flex md:flex-row flex-col md:mt-16 mt-12 md:mx-56 md:items-start items-center'>
     <img src={Dev}  alt="crypto" className='flex md:w-[370px] md:h-56 w-80 h-48  border-2 shadow-white '/>
     <div className='flex flex-col justify-start  md:ml-20  md:text-justify text-center'>
     <div className='flex text-white font-mono md:text-xl text-lg items-start md:mt-0 mt-12 px-4 '>DevHub is an interactive social app aimed at fostering connections among developers, encouraging collaboration, and enabling knowledge sharing. The app employs secure JWT authentication for user login and registration and offers personalized dashboards for skills and experience management. Custom APIs facilitate post creation and engagement, while features like following, unfollowing, and liking promote networking.
  </div>
    <a href="https://github.com/ronak5487/Devhub">
      <div className='flex md:mt-12 mt-7 items-center md:justify-start justify-center w-44 bg-blue-500 rounded-xl md:ml-4 ml-[88px]  p-2'>
     <img src={link} alt="link" className='flex md:w-5 md:h-4 w-5 h-4'/>
     <div className='flex text-white md:text-xl text-lg font-mono ml-2 '>Github Repo</div>
     </div>
     </a>
  
     <div className="flex md:justify-start justify-around md:text-xl  mt-8">
            <div className="flex flex-col">
              <div className="flex items-center text-white font-mono">
                <img
                  src={wtick}
                  alt="tick"
                  className="flex md:w-14 md:h-9 w-9 h-6 items-center"
                />
                <div>React.js</div>
              </div>
              <div className="flex items-center text-white font-mono md:mt-3 mt-2">
                <img
                  src={wtick}
                  alt="tick"
                  className="flex md:w-14 md:h-9 w-9 h-6 items-center"
                />
                <div>Node.js</div>
              </div>
            </div>

            <div className="flex flex-col md:ml-20">
            <div className="flex items-center text-white font-mono">
                <img
                  src={wtick}
                  alt="tick"
                  className="flex md:w-14 md:h-9 w-9 h-6 items-center"
                />
                <div>Express.js</div>
              </div>
              <div className="flex items-center text-white font-mono md:mt-3 mt-2">
                <img
                  src={wtick}
                  alt="tick"
                  className="flex md:w-14 md:h-9 w-9 h-6 items-center"
                />
                <div>MongoDB</div>
              </div>
            </div>
         </div>

      </div>
      </div>
      <div className='flex justify-center text-white md:text-3xl text-xl font-mono py-24   '>Made with❤️by Ronak Gupta</div>
    </div>
  )
}

export default Crypto