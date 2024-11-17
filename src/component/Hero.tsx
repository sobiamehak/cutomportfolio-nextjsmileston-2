import Image from 'next/image';
import "../styles/hero.css";


export default function HeroSection() {



  return (

    <section className={`heroSection `}>

      {/* Image Section */}
      <div className="imageContainer">
        <Image
          src="/image.jpg" 
          alt="Profile Picture"
          width={450}
          height={650}
          className="profileImage"
        />
      </div>

      {/* Text Section */}
      <div className="textContainer">
        <h1 className="heading">Hi, I &apos;m  </h1>
        <h2 className="subheading">A Web Developer 
            <span className='span'> Sobia Mehak</span>
        </h2>
        <p className="description">
          I create responsive and modern websites with a focus on design and functionality.
        </p>
      </div>
    </section>
  );
}
