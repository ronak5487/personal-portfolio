import React from 'react'
import Skills1 from './Skills1'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import solidity from "../assets/solidity.png";
import cpp from "../assets/cpp.png";
import py from "../assets/py.png";
import mi from "../assets/mi.png";


const Skills2 = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse mt-44 ' id='skills' >
      <div className='flex md:w-1/2  md:px-32 px-6 '>
        <Skills1 />
      </div>
      <div className='flex flex-col md:justify-start md:w-1/2 p-6 '>
        <div className='md:text-left text-center text-white font-mono font-md md:text-5xl text-4xl'>SKILLS I HAVE</div>
        <div className='flex md:text-left text-center text-white font-mono font-md md:text-2xl text-xl mt-6'>CRAZY WEB DEVELOPER AS WELL AS INFANT PROGRAMMER WHO WANTS TO EXPLORE EVERY TECH STACK</div>
        <div className='flex flex-wrap mt-4 text-white justify-center'>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={html} width={60} height={60} alt="html" />
            <div className='text-slate-400 mt-2 font-md' >html-5</div>
          </div>
          <div className='flex flex-col  hover:border-white hover:border-2 text-center p-4'>
            <img src={css} width={60} height={60} alt="css-3" />
            <div className='text-slate-400  mt-2 font-md' >css-3</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={javascript} width={60} height={60} alt="js" />
            <div className='text-slate-400 mt-2 font-md' >JavaScript</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={reactjs} width={68} height={68} alt="reactjs" />
            <div className='text-slate-400 mt-2 font-md' >react-js</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2  hover:border-white hover:border-2text-center p-4'>
            <img src={next} width={60} height={60} alt="next" />
            <div className='text-slate-400 mt-2 font-md' >next-js</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={node} width={54} height={54} alt="html" />
            <div className='text-slate-400 mt-2 font-md' >node-js</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={solidity} width={60} height={60} alt="solidity" />
            <div className='text-slate-400 mt-2 font-md' >Solidity</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={cpp} width={60} height={60} alt="cpp" />
            <div className='text-slate-400 mt-2 font-md' >C++</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={py} width={60} height={60} alt="py" />
            <div className='text-slate-400 mt-2 font-md' >Python</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={mi} width={60} height={60} alt="mi" />
            <div className='text-slate-400 mt-2 font-md' >Material-ui</div>
          </div>
        </div>
        <div className='flex md:text-left text-center text-white font-mono font-md md:text-xl text-xl mt-6'>⚡I can develop highly interactive Front end / User Interfaces for your web applications</div>
        <div className='flex md:text-left text-center text-white font-mono font-md md:text-xl text-xl mt-4'>⚡I can develop web applications based on blockchain which includes writing smart contracts and deploying it!!!</div>
        <div className='flex md:text-left text-center text-white font-mono font-md md:text-xl text-xl mt-4'>⚡I have a good grasp in Data Structures and algorithms in c++ programming language</div>
        
      </div>
    </div>
  )
}

export default Skills2
