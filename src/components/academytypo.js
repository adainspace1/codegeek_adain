import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AcademyTypo = () => {
  return (
    <>
        <div className='bg-black flex justify-center items-center mt-20 h-40'>

     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'EXPLORE  ACADEMY',
        1000, 
        
        'AFFORDABLE PRICES',
        1000, 
        
        'GREATE RESOURCES',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
     
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='text-orange-500 text-2xl font-sans'
    />
        </div>
    
    </>
    
  );
};

export default AcademyTypo;