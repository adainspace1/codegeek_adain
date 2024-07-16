import React from "react";
import { FaStar} from 'react-icons/fa'
import Link from 'next/link'


const ServiceCard = ({image, name,  desc})=>{
    return(
        <>
<div className="flex items-start gap-3 sm:gap-10 lg:w-[90%] shadow-2xl m-4 p-4">
    
      <img
        src={image}
        width="30px"
        height="30px"
        alt="features"
        className="rounded-full bg-orange-500"
      />
      
      <div className='flex-1'>
        
        <h3 className="text-2xl text-black font-bold">{name}</h3>
        <div className="flex flex-row">
        <FaStar className="text-orange-500" size={14}/> 
        <FaStar className="text-orange-500" size={14}/>
        <FaStar className="text-orange-500" size={14}/>
        </div>
             <p className="text-sm">5.0</p>

        
        
        <p>Get Full Hands On Experience</p>
       

        <div className='transform translate-y-70 animate-button-animation delay-1000'>
                  <button className='md:text-black hover:text-white  bg-orange-500 hover:bg-orange-500 md:bg:hover-black  lg:m-8 p-1  w-42 shadow-md'>
                   <Link href="https://hacked8.vercel.app/index.html#hero">GET STARTED NOW </Link> 
                  </button>
                </div>
        
      <section className="border-t border-blue-200 bg-black1 w-full">

      </section>
      </div>
    </div>
        </>
    );
}

const AcademyHero1 = ()=>{

    return(
        <>
        <div className="flex justify-center items-center mt-20">
        <h1 className="text-orange-500 text-2xl font-bold">Courses</h1>


        </div>


        <div className="flex justify-center items-center bg-white">

            <div className="flex gap-5 md:gap-10 flex-col flex-1">

           <ServiceCard 
           image={"/c1.png"}
           name={"Introduction To Software Engineering"}
           />

<ServiceCard 
           image={"/c2.png"}
           name={"Ehancing UI/UX Designs"}
           />



         <ServiceCard 
           image={"/c2.png"}
           name={"HTML, CSS and JavaScript"}
           />
            </div>

        </div>
        </>
    );
}

export default AcademyHero1;