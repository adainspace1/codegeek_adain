import React, { useState } from 'react';

import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
const images = [
  '/bg.webp',
  '/back.webp',
  '/about.webp',
  '/10.jpeg',
  '/11.jpeg',
  '/13.jpeg'
  // Add more image paths here
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className="md:grid grid-cols-2 m-4 p-4 gap-4 mt-8">


        <div>
            <h1 className="text-2xl  m-4 p-4 font-sans">
                We are optimistic about developing world class solution
                based products and provide services to meet the ever increasing demand 
                resulting to growth, technological improvement and business expansion in various spheres of human
                advancement.
            </h1>
        </div>

    
    
  
    <div className="relative w-full max-w-lg ml-auto">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 outline-none border-none h-12 w-12 z-10 text-white flex cursor-pointer text-2xl bg-orange-500 items-center justify-center rounded-full shadow-md  hover:text-white"
      >
        <FaArrowLeft size={20}/>
      </button>

      <div className="overflow-hidden">
        <ul className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <li key={index} className="flex-none w-full">
              <img className="w-full h-80 object-cover" src={image}  alt={`Slide ${index}`} />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 outline-none border-none h-12 w-12 z-10 text-white flex cursor-pointer text-2xl bg-orange-500 items-center justify-center rounded-full shadow-md  hover:text-white"
      >
        <FaArrowRight size={20}/>
      </button>

      <div className="flex justify-center mt-4">
        <div className="w-1/2 h-1 bg-orange-200 relative">
          <div
            className="h-full bg-orange-500 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>

    </div>



    {/* contact */}

    <section className="container mx-auto px-16 lg:px-32  bg-white">
        <h1 className="text-3xl md:text-4xl mt-20 text-black1 font-bold text-center lg:text-center">Contact Us</h1>
        
      </section>

      <div className='flex justify-center items-center p-10'>
      <form   method='post' className="w-full max-w-md mx-auto p-6 bg-white m-4 p-4 shadow-md rounded-md" >

      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-600">
          City/Location
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

    

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
         
          className="bg-orange-500 text-black p-2 m-4 rounded-md"
        >
          submit
        </button>
      </div>
    </form>

      </div>
     
        

    </>
  );
};

export default ImageSlider;
