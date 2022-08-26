import React from 'react';
import crypto from "../assets/crypto.png";
import u from "../assets/u.png";
import ron from "../assets/ron.png";
import { Link } from "react-router-dom"

const Projects = () => {
  return (
 <div className='flex flex-col pt-40 pt-4' id='projects'>
  <div className='flex text-white font-mono font-lg md:text-7xl text-5xl md:justify-start justify-center md:mx-24'>PROJECTS</div>
  <div className='flex md:flex-row flex-col justify-center items-center flex-wrap mt-24'>
    <div className='flex flex-col md:hover:border-white border-2 md:border-[#171c28]  rounded-2xl w-80 md:w-96 md:mx-12 hover:shadow-lg hover:shadow-white md:h-[32rem] h-[30rem]  items-center justify-start '>
     <img src={crypto}  alt="crypto" className='flex  rounded-t-2xl '></img>
     <div className='flex justify-center text-white text-4xl  font-bold mt-8 font-mono'>Crypto Dapp</div>
     <div className='flex justify-center text-center text-slate-400 md:text-xl text-md mt-6 px-4 font-mono'>A decentralised blockchain based application used to transfer ether from one account to another</div>
    <Link to="/crypto">
    <div className='flex text-white p-2 bg-[#55198B] w-28 justify-center items-center mb-6  hover:bg-white hover:text-[#55198B] rounded-xl md:mt-4 mt-[23px] '>Know more</div></Link>
    </div>

    <div className='flex flex-col md:hover:border-white border-2 rounded-2xl md:border-[#171c28] w-80 md:w-96 hover:shadow-lg md:h-[32rem] h-[30rem] hover:shadow-white md:mx-12 md:mt-0 mt-12 items-center '>
     <img src={u}  alt="crypto" className='flex rounded-t-2xl top-0'></img>
     <div className='flex justify-center text-white text-4xl font-bold mt-8 font-mono'>Uber-clone</div>
     <div className='flex justify-center text-center text-slate-400 md:text-xl text-md mt-6 px-4 font-mono'>It is a clone of uber having a additional functionality of user authentication with metamask</div>
     <Link to="/uber">
    <div className='flex text-white p-2 bg-[#55198B] w-28 justify-center items-center mb-6 mt-4 hover:bg-white hover:text-[#55198B] rounded-xl md:mt-[19px] mt-[24px]'>Know more</div> </Link>
    </div>

    <div className='flex flex-col md:hover:border-white border-2 rounded-2xl  md:border-[#171c28] w-80 md:w-96  md:mx-12 hover:shadow-lg md:h-[32rem] h-[30rem] hover:shadow-white md:mt-0 mt-12 items-center '>
     <img src={ron}  alt="crypto" className='flex rounded-t-2xl border-b-2'></img>
     <div className='flex justify-center text-white text-4xl font-bold mt-8 font-mono'>Portfolio</div>
     <div className='flex justify-center text-center text-slate-400 md:text-xl text-md mt-6 px-4 font-mono '>Its my personal mordern portfolio website made by using react js and tailwind css</div>
     <Link to="/portfolio">
    <div className='flex text-white p-2 bg-[#55198B] w-28 justify-center items-center mb-6 mt-4 hover:bg-white hover:text-[#55198B] rounded-xl md:mt-[55px] mt-[30px]'>Know more</div></Link>
    </div>
  </div>


 </div>














    // <div className='flex flex-col mt-32 divide-y-2 divide-y-reverse md:px-24 p-4' id='projects'>
    //   <div className='flex text-white font-mono font-medium md:text-7xl text-5xl md:justify-start justify-center'>PROJECTS</div>
    //   <div className='flex md:flex-row flex-col md:mt-32  mt-12 md:justify-start md:items-start items-center '>
    //     <div className='flex md:w-80 w-56 md:h-56 h-48 hover:bg-[#55198B]  border-white border-2 shadow-white shadow-xl hover:cursor-pointer rounded-lg'>
    //     <img src={eth}  alt="crypto dapp" className='flex justify-center'/>
    //     </div>
    //     <div className='flex md:w-8/12 md:ml-24 flex-col md:items-start items-center md:text-left flex-wrap text-center'>
    //       <div className='flex text-white md:text-5xl text-4xl font-mono md:font-medium font-semibold  md:mt-0 mt-8'>Crypto Dapp</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium   mt-8'>⚡It is a decentralized application based on blockchain through which we can transfer any amount of ether from one account to another.</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium  mt-1'>⚡The main motto of this app is to ensure security among transactions as all the data is accessible to every other person.</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium mb-16 mt-1'>⚡I have used solidity to write smart contract and react-js, tailwind-css for frontend.</div>
    //     </div>
    //   </div>

    //   <div className='flex md:flex-row flex-col md:mt-8 mt-12 md:justify-start md:items-start items-center '>
    //     <div className='flex md:w-80 w-56 md:h-56 h-48 hover:bg-[#55198B] items-center justify-center border-white border-2 shadow-white shadow-xl hover:cursor-pointer rounded-lg'>
    //     <img src={uber}  alt="crypto dapp" className='flex md:w-32  md:h-32 w-24 h-24'/>
    //     </div>
    //     <div className='flex md:w-8/12 md:ml-24 flex-col md:items-start items-center md:text-left flex-wrap text-center'>
    //       <div className='flex text-white md:text-5xl text-4xl font-mono md:font-medium font-semibold  md:mt-0 mt-8'>Uber-II</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium   mt-8'>⚡This is a clone of uber with an additional functionality of authentication of user using metamask.</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium  mt-1'>⚡I have used sanity database to store all the data related to rides and metamask for authentication.</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium mb-16 mt-1'>⚡I have used mapbox to insert map functionality in app and next-js, tailwind-css for frontend.</div>
    //     </div>
    //   </div>

    //   <div className='flex md:flex-row flex-col md:mt-8  mt-12 md:justify-start md:items-start items-center '>
    //     <div className='flex md:w-80 w-56 md:h-56 h-48 hover:bg-[#55198B] items-center justify-center border-white border-2 shadow-white shadow-xl hover:cursor-pointer rounded-lg'>
    //     <img src={pp}  alt="crypto dapp" className='flex md:w-32  md:h-32 w-24 h-24'/>
    //     </div>
    //     <div className='flex md:w-8/12 md:ml-24 flex-col md:items-start items-center md:text-left flex-wrap text-center'>
    //       <div className='flex text-white md:text-5xl text-4xl font-mono md:font-medium font-semibold  md:mt-0 mt-8'>Personal Portfolio</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium   mt-8'>⚡This is my personal Portfolio.</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium  mt-1'>⚡I have used sanity database to store all the data related to rides and metamask for authentication.</div>
    //       <div className='flex text-slate-500 md:text-xl text-md font-mono font-medium mb-16 mt-1'>⚡I have used mapbox to insert map functionality in app and next-js, tailwind-css for frontend.</div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Projects
