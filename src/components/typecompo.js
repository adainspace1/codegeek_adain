import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = ({text1, text2}) => {
  return (
    <>
        <div className='bg-black flex justify-center items-center mt-20 h-40'>

     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'THE FUTURE IS ADAIN',
        1000, 
        
        'ENDLESS POSSIBILITIES',
        1000, 
        
        'THE FUTURE IS YOU',
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

export default ExampleComponent;