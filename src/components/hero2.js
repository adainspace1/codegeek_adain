"use client";
import React from 'react';
import {FaArrowRight} from 'react-icons/fa'
import {motion} from 'framer-motion'

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <img
        src={imgSrc}
        width="60px"
        height="60px"
        alt="features"
        className=""
      />
      
      <div className='flex-1'>
        
        <h3 className="text-lg  font-semibold">{title}</h3>
        <p className="text-lg "> {desc}</p>
        <div className='flex justify-end'>
        <FaArrowRight className="text-orange-500 " size={20}/>

        </div>
      <section className="border-t border-blue-200 bg-black1 w-full">

      </section>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <motion.section 
    initial={{x: -1000}}
    animate={{x: 0}}
    transition={{
      duration: "2",
    }}
    className="relative  container px-5 md:px-16 mx-auto mt-20">
      <div className="flex gap-10 items-center flex-col lg:flex-row" id='section1'>
        <div className="mt-10 relative w-full flex-1">
          <img
            src='/10.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className=" text-3xl md:text-4xl font-bold text-center lg:text-left">
            People Technology Posibilities
            </h2>
            <p className="textblack">
            To link consumers with service providers via developed content based products that service the global ICT sphere.            </p>
          </div>
          <ServiceCard
            imgSrc='/Mission.jpg'
            title="Mission"
            desc={"To link consumers with service providers via developed content based products that service the global ICT sphere."}
          />
          <ServiceCard
            imgSrc='/Vision.jpg'
            title="Vission"
            desc={"To be the most preferred technological based company in Nigeria and beyond that provide the right kind of products."}
          />

         <ServiceCard
            imgSrc='/Value.jpg'
            title="Values"
            desc={"Excellence and timely delivery of solutions, improvement and possibilities."}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
