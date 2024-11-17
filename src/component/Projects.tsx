import React from 'react'
import "../styles/projects.css"
import Image from 'next/image'
import Link from "next/link"

const Projects = () => {
  return (
    
    <div className='pardiv'>
    
      <div className='child'>

       <Image src="/cdtimer.jpeg" alt="countdown timer"  width={300}  height={400}/>
       <button className='button'>
        
       <Link href="https://countdown-timer-rho-opal.vercel.app/"> Click here to check 
        </Link>
        </button>
      </div>
    
      <div className='child'>
      <Image src="/resume.png" alt="resume"  width={300}  height={400}/>
       <button className='button'>
       <Link href="https://giai-chackarhon.vercel.app/"> Click here to check 
        </Link>
        </button>
      </div>
      
      <div className='child'>
      <Image src="/plantweb.png" alt="plantweb"  width={300}  height={400}/>
       <button className='button'>
       <Link href="https://ttdassignmentmile2-dbt1.vercel.app/"> Click here to check 
        </Link>
        </button>
      </div>
    </div>
  )
}

export default Projects
