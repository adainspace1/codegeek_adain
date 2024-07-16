import AdainNavBar from "@/components/navbar";
import React from "react";
import TeamTypo from '@/components/teamtypo'
import Footer from "@/components/footer";

const Team = ()=>{
        return(
            <>
            <AdainNavBar/>
            
            <TeamTypo />
            {/* team card */}


    <div className="md:bg-orange-500 py-12 ">
      <div className="md:container mx-auto">
        <div className="md:flex justify-center items-center">
            
          {/* Card 1 */}
          <div className="bg-white md:w-full sm:w-1/8 md:w-1/8 lg:w-1/4 px-4 mb-8">
          
            <div className="md:rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <img src='/ernest.png'
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
              <h3 className="text-2xl mb-4">Dr Ernest Salefu</h3>
              <p className="text-gray-600 ">
              CEO Adain Tech
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/8 md:w-1/8 lg:w-1/4 px-4 mb-8">
          
          <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
            <div className="mb-4 relative">
            <img src='/Des.JPG'
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
            <h3 className="text-2xl mb-4">Destined Obihosa</h3>
            <p className="text-gray-600 ">
                Full Stack Developer
             </p>
          </div>
        </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/8 md:w-1/8 lg:w-1/4 px-4 mb-8">
          
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <img src='/Walix.JPG'
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
              <h3 className="text-2xl mb-4 ">Waliyu Gbadamosi</h3>
              <p className="text-gray-600 ">
             FrontEnd Developer </p>
            </div>
          </div>
          {/**card 4 */}



          <div className="w-full sm:w-1/8 md:w-1/8 lg:w-1/4 px-4 mb-8">
          
          <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
            <div className="mb-4 relative">
            <img src='/Billy.JPG'
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
            <h3 className="text-2xl mb-4 ">Billy Gbadamosi</h3>
            <p className="text-gray-600 ">
                Head Of Media
             </p>
          </div>
        </div>
           
        </div>
      </div>

      
    </div>

    <Footer/>
            </>
        );
}

export default Team;