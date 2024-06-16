import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";

const Findworker_1=(props)=>{
  const {obj,obj2}=props;
    return(

        <div>
          {
        obj.length === 0 ? <Shimmer/>:(
            <div className="flex flex-wrap justify-center p-4 mt-[30] bg-white">
    {obj2.map((item) => (
        <div key={item._id} className="m-4 p-4 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] rounded-2xl shadow-md text-black">
             <img src={item.image} className="w-[300] h-[300] ml-[48] rounded-lg"/>
             <br/>
            <h1>{item.username}</h1>
            <h2>{item.phoneNumber}</h2>
            <h2>{item.skill}</h2>
            <h2>{item.email}</h2>
            <h2>{item.address}</h2>
            <h2>{item.skills}</h2>
        </div>
     
    ))}
</div>
        )
    }
        </div>
    )
}
export default Findworker_1;