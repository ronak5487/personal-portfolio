import React from 'react'
import Contacts from '../components/Contacts'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Greetings from '../components/Greetings'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Skills2 from '../components/Skills2'
import Software from '../components/Software'

const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#171c28] min-h-screen max-w-max overflow-x-hidden ">
      <Navbar  />
      <Greetings  />
      <Skills2   />
      <Software   />
      <Education  />
      <Projects  />
      <Experience  />
      <Contacts/>
      <Footer/> 
    </div>
  )
}

export default HomePage
