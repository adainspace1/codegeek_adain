import React from "react";

const ServiceCard = ({image, name, title, desc})=>{
    return(
        <>
<div className="flex items-start gap-3 sm:gap-10 lg:w-[90%] shadow-2xl m-4 p-4">
      <img
        src={image}
        width="60px"
        height="60px"
        alt="features"
        className="rounded-full"
      />
      
      <div className='flex-1'>
        
        <h3 className="text-2xl text-orange-500 font-bold">{name}</h3>
        <p className="text-2xl font-bold text-orange-500"> {title}</p>
        <p className=' text-black'>
            {desc}
        </p>
      <section className="border-t border-blue-200 bg-black1 w-full">

      </section>
      </div>
    </div>
        </>
    );
}

const Hero3 = ()=>{

    return(
        <>
        <div className="flex justify-center items-center ">
        <h1 className="text-orange-500 text-2xl font-bold">Testimonials</h1>


        </div>


        <div className="flex justify-center items-center ">
        <h1 className="text-4xl font-bold">Our Valued Pathners</h1>


        </div>

        <div className="flex justify-center items-center bg-white shadow-xl">

            <div className="flex gap-5 md:gap-10 flex-col flex-1">

           <ServiceCard 
           image={"/t1.webp"}
           name={"John Smith"}
           title={"Tech Innovators Inc."}
           desc={"Adain transformed our digital strategy, delivering a 50% increase in online engagement within three months. Their innovative solutions and exceptional support have set a new standard for our business."}
           />

<ServiceCard 
           image={"/t1.webp"}
           name={"John Smith"}
           title={"Tech Innovators Inc."}
           desc={"Adain transformed our digital strategy, delivering a 50% increase in online engagement within three months. Their innovative solutions and exceptional support have set a new standard for our business."}
           />



<ServiceCard 
           image={"/t1.webp"}
           name={"John Smith"}
           title={"Tech Innovators Inc."}
           desc={"Adain transformed our digital strategy, delivering a 50% increase in online engagement within three months. Their innovative solutions and exceptional support have set a new standard for our business."}
           />
            </div>

        </div>
        </>
    );
}

export default Hero3;