import React from 'react'
import Welcome from './Welcome'
import fbicon from "../assets/fbicon.png";
import git from "../assets/git.png";
import envicon from "../assets/envicon.png";
import leeticon from "../assets/leeticon.png";
import licon from "../assets/licon.png";
import twicon from "../assets/twicon.png";
import uicon from "../assets/uicon.png";


const Greetings = () => {
  const style={
    fbicon:'flex hover:bg-black hover:cursor-pointer mx-2 bg-[#3B5998] items-center justify-center w-11 h-11 rounded-full mt-6 ',
    giticon:'flex hover:bg-black hover:cursor-pointer mx-2 bg-[#333333] items-center justify-center w-11 h-11 rounded-full mt-6 ',
    licon:'flex hover:bg-black hover:cursor-pointer mx-2 bg-[#0E76A8] items-center justify-center w-11 h-11 rounded-full mt-6',
    envicon:'flex hover:bg-black hover:cursor-pointer mx-2 bg-[#EA4335] items-center justify-center w-11 h-11 rounded-full mt-6',
    twicon:'flex hover:bg-black hover:cursor-pointer mx-2 bg-[#00ACEE] items-center justify-center w-11 h-11 rounded-full mt-6',
    leeticon:'flex hover:bg-black hover:cursor-pointer mx-2 bg-[#ffedd5] items-center justify-center w-11 h-11 rounded-full mt-6',
    uicon:'flex hover:bg-black hover:cursor-pointer mx-2 bg-[#ffffff] items-center justify-center w-11 h-11 rounded-full mt-6',
    button1:'bg-[#55198B] md:w-40 w-36 hover:text-[#55198B] mt-14 hover:bg-white hover:mt-14 h-12 rounded-md justify-center items-center text-center font-semibold font-mono text-white md:text-xl text-lg p-2 ',
    button2:'bg-[#55198B] md:w-48 w-40 h-12 md:ml-8 ml-5 rounded-md hover:text-[#55198B] hover:bg-white hover:mt-12 mt-14 justify-center items-center text-center font-semibold font-mono md:text-xl text-white text-lg p-2 '

}
  return (
    <div className='flex md:flex-row  flex-col '>
        <div className='flex flex-col md:mx-14 md:w-1/2 mt-16 w-screen'>
            <span className=' flex md:text-6xl text-3xl text-white md:justify-start ml-3  justify-center font-bold my-7 font-mono '>Hi all, I'm Ronak <span className="animate-wave"> 👋</span></span>
            <div className='text-white md:text-3xl mx-3 md:text-left text-center  text-md font-mono'>
            A passionate Full Stack Web and Blockchain Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Solidity and some other cool libraries and frameworks.
            </div>
            <div className='flex flex-row flex-wrap md:justify-start justify-center md:mx-0 mx-3 '>
            <a href="https://github.com/ronak5487" target="_blank" rel='noopener noreferrer'><div className={style.giticon}><img src={git} alt="fbicon" width={36} height={36}  ></img></div></a>
            <a href="https://www.linkedin.com/in/ronak-gupta-8bb688213/" target="_blank" rel='noopener noreferrer'><div className={style.licon}><img src={licon} alt="fbicon" width={20} height={20}  ></img></div></a>
            <a href="mailto: ronakkgupta5487@gmail.com" target="_blank" rel='noopener noreferrer'><div className={style.envicon}><img src={envicon} alt="fbicon" width={21} height={21}  ></img></div></a>
            <a href="https://twitter.com/RonakGu98817742" target="_blank" rel='noopener noreferrer'><div className={style.twicon}><img src={twicon} alt="fbicon" width={24} height={22}  ></img></div></a>
            <a href="https://www.facebook.com/profile.php?id=100058779511446" target="_blank" rel='noopener noreferrer'><div className={style.fbicon}><img src={fbicon} alt="fbicon" width={40} height={28}  ></img></div></a>
            <a href="https://leetcode.com/Ronak_gupta/" target="_blank" rel='noopener noreferrer'><div className={style.leeticon}><img src={leeticon} alt="fbicon" width={32} height={32}  ></img></div></a>
            <a href="https://www.youtube.com/channel/UC8Zng_by5eOuBczwHIWCweA/featured" target="_blank" rel='noopener noreferrer'><div className={style.uicon}><img src={uicon} alt="fbicon" width={35} height={35}  ></img></div></a>
            </div>
            <div className='flex md:justify-start justify-center items-center'>
              <div className={style.button1}>CONTACT ME</div>
              <a href="https://drive.google.com/file/d/18PHxBvH9Zd_E9bel0iWIcpgw3tpBIYrA/view?usp=sharing" target="_blank" rel="noopener noreferrer"><div className={style.button2}> SEE MY RESUME</div></a>
            </div>
        </div>
        
        <div className='justify-center items-center mt-12 md:w-1/3 md:px-2 px-4'>
        <Welcome/>
        </div> 


        
      
    </div>
    
  )
}

export default Greetings




