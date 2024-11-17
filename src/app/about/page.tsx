
import React from 'react';

import Image from 'next/image';

const About = () => {
    return (
        <section className="about">
             
            <h1>About ME</h1>
            <div className="about-container">

            <div className='chil1 '>
                <p>
                        Hello! I &apos;m Sobia, a passionate web development learner with a deep interest in creating
                    modern, responsive, and user-friendly websites. Currently, I am honing my skills in HTML, 
                    CSS, JavaScript, and the Next.js framework, aiming to build efficient and impactful web 
                    solutions.
                </p>
               </div>
               <div className='chil2'>
                    <Image src="/image.jpg" width={500} height={500} alt='sobia queen'></Image>
                </div>

              
              
               



            </div>
        </section>
    );
};

export default About;
