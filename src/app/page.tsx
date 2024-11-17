import React from 'react'
import About from '@/component/About'
import Contact from '@/component/Contact'
import HeroSection from '@/component/Hero'
import Projects from '@/component/Projects'
import Mypro from '@/component/Mypro'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <About /> 
      <Mypro />
      <Projects />
     <Contact /> 
    

     
    </div>
  )
}

export default Home 
