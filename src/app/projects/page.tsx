import React from 'react'

import Image from 'next/image'
import Link from "next/link"

const Projects = () => {
  return (
    
    <div className='pardiv'>
      
      <div className='child'>
       <Image src="/cdtimer.jpeg" alt="countdown timer"  width={300}  height={400}/>
       <button className='button'>
       <Link href="https://github.com/sobiamehak/asynchronous-assignment.git"> Click here to check 
        </Link>
        </button>
      </div>
    
      <div className='child'>
      <Image src="/resume.png" alt="countdown timer"  width={300}  height={400}/>
       <button className='button'>
       <Link href="https://github.com/sobiamehak/asynchronous-assignment.git"> Click here to check 
        </Link>
        </button>
      </div>
      
      <div className='child'>
      <Image src="/cli-cal.jpeg" alt="countdown timer"  width={300}  height={400}/>
       <button className='button'>
       <Link href="https://github.com/sobiamehak/asynchronous-assignment.git"> Click here to check 
        </Link>
        </button>
      </div>
    </div>
  )
}

export default Projects
