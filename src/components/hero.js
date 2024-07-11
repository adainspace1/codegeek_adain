import React from "react";
import {motion} from 'framer-motion';



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
          className="text-2xl text-orange-500 font-bold">{subtitle} </motion.h3>
          <h1 className="text-2xl text-orange-500 font-bold">{title} </h1>
        </div>
        
      </>
    )
  }
  


const Hero = () => {
  return (
    <>
      <section className='md:bg-cover md:bg-fixed bg-center pt-20 md:pt-30 h-screen relative flex justify-center items-center'>
        <div className='w-full h-12'>
        <video
autoPlay
  loop
  muted
  playsInline
  className='background-video'
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

          <div className='m-2'>
            <div className='container'>
              <div className='row'>
                <Heading subtitle='WELCOME TO Adain Technologies' title='' />
                <motion.p 
                initial={{x: -1000}}
                animate={{x: 0}}
                transition={{
                  duration: "2",
                }}
                className=" text-orange-500 "> Pioneering the future with cutting-edge<br/> AI and innovative tech solutions. Empowering businesses<br/> through intelligent automation and seamless integration.</motion.p>
                <div className='transform translate-y-70 animate-button-animation delay-1000'>
                  <button className='md:text-black hover:text-white  bg-orange-500 hover:bg-orange-500 md:bg:hover-black rounded-xl lg:m-8 p-1  w-42 shadow-md'>
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
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
