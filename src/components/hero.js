import React from "react";
import {motion} from 'framer-motion';
import Link from "next/link";


const Heading = ({ subtitle, title }) => {
    return (
      <>
        <div id='heading'>
          <motion.h3 
          initial={{x: -1000}}
          animate={{x: 0}}
          transition={{
            duration: "2",
          }}
          className="text-2xl text-orange-500 font-bold  m-4">{subtitle} </motion.h3>
          <h1 className="text-2xl text-orange-500 font-bold ">{title} </h1>
        </div>
        
      </>
    )
  }
  


const Hero = () => {
  return (
    <>
      <section className='md:bg-cover md:bg-fixed bg-center pt-20 md:pt-30 h-screen relative flex justify-center items-center'>
        <div className='md:w-full h-12'>
        <video
autoPlay
  loop
  muted
  playsInline
  className='md:w-full background-video'
  style={{
    position: 'absolute',
    top: '5%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
   
  }}
>
  <source src='/9928.MP4' type='video/mp4' />
</video>

          <div className='md:m-2'>
            <div className='md:container'>
              <div className='row'>
                <Heading subtitle='WELCOME TO ADAIN TECHNOLOGIES' title='' />
                <motion.p 
                initial={{x: -1000}}
                animate={{x: 0}}
                transition={{
                  duration: "2",
                }}
                className=" text-orange-500 text-2xl m-4"> Pioneering the future with cutting-edge<br/> AI and innovative tech solutions. Empowering businesses<br/> through intelligent automation and seamless integration.</motion.p>
                <div className='transform translate-y-70 animate-button-animation delay-1000'>
                  <button className='md:text-black hover:text-white  bg-orange-500 hover:bg-orange-500 md:bg:hover-black  lg:m-8 p-1  w-42 shadow-md'>
                  <Link href="#section1">GET STARTED NOW</Link> 
                  </button>
                  {/* <button> VIEW ADAIN <i className='fa fa-long-arrow-alt-right'></i></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
