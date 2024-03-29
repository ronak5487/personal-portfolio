import React from 'react'
import skill1 from '../assets/skill1.gif'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
// import solidity from "../assets/solidity.png";
import cpp from "../assets/cpp.png";
import py from "../assets/py.png";
// import mi from "../assets/mi.png";
import ex from "../assets/ex.png";
import db from "../assets/db.png";
import DO from "../assets/do.png";
import SO from "../assets/so.png";






const Skills2 = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse md:pt-44 pt-32 ' id='skills' >
      <div className='flex md:w-1/2 pl-4 h-1/3 md:mt-0 mt-12'>
        <img src={skill1} alt="skill1"/>
      </div>
      <div className='flex flex-col md:justify-start md:w-1/2 p-6  '>
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
            <img src={cpp} width={60} height={60} alt="cpp" />
            <div className='text-slate-400 mt-2 font-md' >C++</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={py} width={60} height={60} alt="py" />
            <div className='text-slate-400 mt-2 font-md' >Python</div>
          </div>
          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={ex} width={60} height={60} alt="mi" />
            <div className='text-slate-400 mt-2 font-md' >Express.js</div>
          </div>

          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={db} width={60} height={60} alt="mi" />
            <div className='text-slate-400 mt-2 font-md' >MongoDB</div>
          </div>

          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={DO} width={60} height={60} alt="mi" />
            <div className='text-slate-400 mt-2 font-md' >Digital Ocean</div>
          </div>

          <div className='flex flex-col hover:border-white hover:border-2 text-center p-4'>
            <img src={SO} width={60} height={60} alt="mi" />
            <div className='text-slate-400 mt-2 font-md' >Socket.io</div>
          </div>

        </div>
        <div className='flex md:text-left text-center text-white font-mono font-md md:text-xl text-lg mt-6'>⚡I can develop highly interactive Front end / User Interfaces for your web applications</div>
        <div className='flex md:text-left text-center text-white font-mono font-md md:text-xl text-lg mt-4'>⚡I can develop highly efficient and responsive full-stack applications and also have experience in deploying and hosting web application to Digital Ocean </div>
        <div className='flex md:text-left text-center text-white font-mono font-md md:text-xl text-lg mt-4'>⚡I have a good grasp in Data Structures and algorithms in c++ programming language, solving over 800+ DSA question. Also ranked in top 8% among leetcode participants</div>
        
      </div>
    </div>
  )
}

export default Skills2
