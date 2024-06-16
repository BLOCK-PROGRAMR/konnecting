import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HomePage } from "../utils/constants";
import HomePage_1 from "../subcomponents/Home_1";

const Home=()=>{
   

    return(
        <div className="">
          <div className="flex  p-[100] m-4  ">
            
          <div className="p-4  font-medium ">
                   <h1 className=" text-4xl  text-center font-semibold "> WE CAN GET NEARBY OPPORTUNITIES BASED ON YOUR INTEREST </h1>
                    <br/>
                   <h2 className=" ml-15 text-3xl lowercase text-center">We Connect You To The Solution In Modern And Effecient Way...</h2>
                   <br/>
               
                   <div className="ml-[20] p-4">
                   <h1 className="  text-3xl font-semibold">We create the pathway and oppurtunities for u</h1>
                  
                  </div>
          </div>
          <div className="relative">
         <img 
            src={HomePage} 
            className="w-full  h-full"
            alt="Worker"
            />
           
         </div>

          </div>
        {/* this page shows the workers and their description!!!! */}
         <HomePage_1/>
        
        </div>
    )
}
export default Home;