
import { WorkerImg } from "../utils/constants";
import BackgroundImageSlider from "./BackgroundHome";
import{Link} from "react-router-dom";

const Find=()=>{


    return(
        <div> 
         <div className="flex flex-col md:flex-row">
  <div className="md:ml-40 md:flex-1 flex justify-center">
    <img
      src={WorkerImg}
      alt="Worker Image"
      className="m-4 p-6 shadow-xl rounded-xl hover:cursor-pointer w-full md:w-[500] hover:w-[400] flex-shrink-0"
    />
  </div>
  <div className="flex-1 text-center md:mr-20 mt-8 md:mt-0 p-5 m-5 ">
    <h1 className=" text-lg mb-4 p-5 capitalize mt-[150]">
      This page mainly focuses on a job portal. Jobs are updated daily, and you can apply based on your interest. No certificates are needed. We emphasize skillful workers.<br />
      <span className="block mt-4  text-lg">Skill comes from experience, not just education.</span>
      <br />
      <span className="block text-lg">This is not a permanent government job; it's contractual work.</span>
    </h1>
  </div>
</div>

<br/><br/>

<div className="flex flex-col md:flex-row items-center justify-center ml-10">
       <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-8  ">
          <h1 className="text-3xl font-bold mb-4">Register now to find local jobs that match your skills!</h1>
          <p className="text-lg mb-4">Join our platform to discover opportunities tailored to your talents and expertise within your community.</p>
         <p className="text-lg mb-4">Connect with local businesses and individuals seeking your unique skills and services.</p>
        <p className="text-lg mb-4">Unlock a world of opportunities by showcasing your talents and experiences through our platform.</p>
       <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center">
              Register
           </button>
      </Link>

  </div>
  
</div>


             </div>
    )
}

export default Find;

{/**<div className="w-[300] md:w-1/2 lg:w-1/3 xl:w-[1/4] flex-1 p-4 shadow-xl rounded-lg">
   
    <BackgroundImageSlider />
  </div> */}