import { WorkerImg,Carpenters,Mason, Electricians} from "../utils/constants";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import BackgroundImageSlider from "./BackgroundHome";

const Home=()=>{
 
  
    return(


        <div className="">
          <div className="flex  p-4 m-4">
          <div className=" font-serif  p-4  font-medium ">
                   <h1 className=" text-4xl capitalize text-center font-semibold ">"Empowering the hands building bright future!!!"{"⚒️⚒️"}</h1>
                    <br/>
                   <h2 className=" ml-15 text-3xl capitalize text-center">website is a platform for connecting rural employers and employes...</h2>
                   <br/>
                   <br/>
                   <div className="ml-[25] p-4">
                   <h1 className="  text-3xl font-semibold">We can contact nearby workers to your needs:</h1>
                   <ul className="p-4">
        <li className="p-2 text-2xl ">Carpenters{"🪚"}</li>   
                   <li className="p-2 text-2xl ">Electricians & Plumber{"👨‍🔧"}</li>
                   <li className="p-2 text-2xl ">Mason Workers{"👷‍♂️"}</li>
                   <li className="p-2 text-2xl  ">Farmers{"👩‍🌾"}</li>
                   <li className="p-2 text-2xl ">..etc</li>
                   
                   </ul></div>
          </div>
           <div className="">
            <img src={WorkerImg} className="rounded-3xl w-[700]"/>
           </div>
          </div>
         {/**  oportunities to the village skill full people */}
         {/** Theme:Avoid unemployment to the rural */ }
         <div className="bg-gray-800">
          <h1 className="text-4xl font-bold text-orange-700 shadow-lg text-center ">Important Features </h1>
         <div className="p-6 m-6 flex justify-evenly">
            
           <div className="w-[400] h-[440] bg-gray-900 rounded-lg text-orange-400 hover:cursor-text">
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

         </div>
         </div> 
         
        </div>
    )
}
export default Home;