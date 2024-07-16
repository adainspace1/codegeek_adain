import React from "react";
import {FaUser, FaCalendar} from 'react-icons/fa'

const Trending = ({ icon, icontext, title, text})=>{
    return(
  <>
    <div className="bg-orange-500 py-12 mt-5">
      <div className="md:container mx-auto">
        <div className="md:flex justify-center gap-10 items-center">
            
          {/* Card 1 */}
          <div className="md:w-full m-4 p-4 bg-white sm:w-1/8 md:w-1/8 lg:w-1/8 px-4 mb-8 shadow-xl">
          
            <div className="md:rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <img src={"/Ai.jpg"}
              alt='academy'
              className="rounded-lg w-full h-40"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              {/* icon and write up */}
              <div className="flex  gap-4 flex-row">

              <div className="flex items-start gap-2">
              <FaUser size={15} className="text-orange-500"/>

              <div className="flex-1">
              <p className="text-sm font-bold text-orange-500"> Adnet</p>

              </div>
              </div>

              {/*  */}


              <div className="flex items-start gap-2">
              <FaCalendar size={15} className="text-orange-500"/>

              <div className="flex-1">
              <p className="text-sm font-bold text-orange-500"> Jan.18,2024</p>

              </div>
              </div>

              </div>
              
               

              <h3 className="text-2xl mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600 ">
                We take you through the process of design and development
                </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:w-full m-4 p-4 bg-white sm:w-1/8 md:w-1/8 lg:w-1/8 px-4 mb-8 shadow-xl">
          
          <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
            <div className="mb-4 relative">
            <img src={"/Cyber.jpg"}
            alt='academy'
            className="rounded-lg w-full h-40"
            width={200} height={100}/>
              
              {/* Gradient Effect */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                }}
              ></div>


              {/* icon */}
              
            </div>

            <div className="flex  gap-4 flex-row">

              <div className="flex items-start gap-2">
              <FaUser size={15} className="text-orange-500"/>

              <div className="flex-1">
              <p className="text-sm font-bold text-orange-500"> Adnet</p>

              </div>
              </div>

              {/*  */}


              <div className="flex items-start gap-2">
              <FaCalendar size={15} className="text-orange-500"/>

              <div className="flex-1">
              <p className="text-sm font-bold text-orange-500"> Jan.18,2024</p>

              </div>
              </div>

              </div>
            <h3 className="text-2xl mb-4">Cyber Security</h3>
            <p className="text-gray-600 ">
           Build your dream software and engineering career. </p>
          </div>
        </div>

          {/* Card 3 */}
          <div className="md:w-full m-4 p-4 bg-white sm:w-1/8 md:w-1/8 lg:w-1/8 px-4 mb-8 shadow-xl" >
          
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <img src={"/IT.jpg"}
              alt='academy'
              className="rounded-lg w-full h-40"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>

              <div className="flex gap-4 flex-row">

                    <div className="flex items-start gap-2">
                    <FaUser size={15} className="text-orange-500"/>

                    <div className="flex-1">
                    <p className="text-sm font-bold text-orange-500"> Adnet</p>

                    </div>
                    </div>

                    {/*  */}


                    <div className="flex items-start gap-2">
                    <FaCalendar size={15} className="text-orange-500"/>

                    <div className="flex-1">
                    <p className="text-sm font-bold text-orange-500"> Jan.18,2024</p>

                    </div>
                    </div>

                    </div>
                                  <h3 className="text-2xl mb-4">Internet Of Things</h3>
              <p className="text-gray-600 ">
             Supplies it with the necessary regelialia </p>
            </div>
          </div>
          {/**card 4 */}
           
        </div>
      </div>

      
    </div>
</>
    );
}




export default Trending;