
import { Mechanic,Farmer,Mason,Electricians,Carpenters} from "../utils/constants";
import { useState,useEffect,} from "react";
import React from "react";

const HomePage_1=()=>{
    const [showAbout,setshowAbout]=useState(false);
   const [showQuesions,setshowQuestions]=useState(false)
   const toggleabout=()=>{
    showAbout?setshowAbout(false):setshowAbout(true)
   }
   const togglequestions=()=>{
        showQuesions?setshowQuestions(false):setshowQuestions(true)
   }
   const data={
       about:{
        title:"jobs",
        cards:{
          jobs:"4500 people get jobs in this platform",
          fields:"carpenters,electicians,farming,plumber etc..."
          
        }
      },
      askquestions:{
          title:"frequently asked questions",
          cards:{
               statement1:"most of them asked this website get really give job opportunities in rural level, we can believe  this website if we dont belive this website you can ask who got their opportunities in this website!! ",
               statement2:"this website mainly focussing on rural unemployment!!"
          }
      }
    }

    return(

        <div>

            
         <div className="bg-gray-800">
          <h1 className="text-4xl font-bold text-orange-700 shadow-lg text-center ">Important Features </h1>
         <div className="p-6 m-6 flex  flex-wrap  justify-evenly">
            
           <div className="w-[400] h-[440] bg-gray-900 rounded-lg text-orange-400 hover:cursor-text ">
            <img src={Electricians}/>
            <h1 className="p-2 text-lg uppercase font-semibold space-x-1 text-center">Electricians</h1>
            <p className="p-1">
            Book appointments(<b className="text-green-500">goto findworkers page</b>)with skilled local electricians for repairs, installations, and electrical upgrades. Contact us for timely solutions or custom projects. Experienced professionals ensure quality workmanship at competitive rates.
            </p>

           </div>
           <div className="w-[400] h-[440] rounded-lg bg-gray-900 hover:cursor-text text-orange-400">
               <img src={Mason}/>
               <h1 className="p-2 text-lg uppercase font-semibold space-x-1 text-center ">Masonworkerrs</h1>
               <p className="p-1">
               Book an appointment(<b className="text-green-500">goto findworkers page</b>) with skilled local masons for brickwork, plastering, and more. Contact us for timely repairs or new construction projects. Experienced professionals ensure quality workmanship at competitive prices. 
               </p>
           </div>
           <div className="w-[400] h-[440] bg-gray-900 rounded-lg text-orange-400 hover:cursor-text">
             <img src={Carpenters}/>
             <h1 className="p-2 text-lg uppercase font-semibold space-x-1 text-center">Carpenters</h1>
             <p className="p-1">
             Book appointments(<b className="text-green-500">goto findworkers page</b>) with skilled local carpenters for furniture making, repairs, and installations. Contact us for timely woodwork solutions or custom projects. Experienced professionals ensure quality craftsmanship at competitive rates.
             </p>
           </div>
           <div className="w-[400] h-[440] rounded-lg bg-gray-900 hover:cursor-text text-orange-400 mt-3 ">
               <img src={Mechanic}/>
               <h1 className="p-2 text-lg uppercase font-semibold space-x-1 text-center ">Mechanics</h1>
               <p className="p-1">
               Book an appointment(<b className="text-green-500">goto findworkers page</b>) with skilled local Mechanics for repair the device.Contact us for timely repairs or new construction projects. Experienced professionals ensure quality workmanship at competitive prices. 
               </p>
           </div>
           <div className="w-[400] h-[440] rounded-lg bg-gray-900 hover:cursor-text text-orange-400 mt-3 ">
               <img src={Farmer}/>
               <h1 className="p-2 text-lg uppercase font-semibold space-x-1 text-center ">Farmers</h1>
               <p className="p-1">
               Book an appointment(<b className="text-green-500">goto findworkers page</b>) with skilled local Farmers,for Contact us for timely needs. 
               </p>
           </div>

         </div>
         </div> 
         <div>
     <h1 className="text-2xl font-serif text-center p-4 ">frequently asked questions !!</h1>
         <div className="text-center p-4 my-4  w-5/12 mx-auto bg-gray-50 shadow-lg ">
            <div className=" flex justify-between cursor-pointer" onClick={toggleabout}>
          <span className="font-bold text-lg">{data.about.title}</span>
    <span>{showAbout?"⬆️":"⬇️"}</span>
          </div>
         {showAbout && <div>{data.about.cards.jobs},{data.about.cards.fields}</div>}
        </div>
    \
        <div className="text-center p-4 my-4  w-5/12 mx-auto bg-gray-50 shadow-lg ">
            <div className=" flex justify-between cursor-pointer" onClick={togglequestions}>
          <span className="font-bold text-lg">{data.askquestions.title}</span>
    <span> {showQuesions?"⬆️":"⬇️"}</span>
          </div>
         {showQuesions && <div>{data.askquestions.cards.statement1},{data.about.cards.statement2}</div>}

        </div>
        </div>

        </div>
    )
}
export default HomePage_1;