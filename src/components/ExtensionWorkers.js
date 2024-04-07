
 import { useState,useEffect } from "react";

const ExtensionWorkers=()=>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
            fetchdata();
    },[]);
    const fetchdata=async()=>{
         const LoginData=await fetch("http://localhost:2005/api/connecting/getdata");
         const jsonData=await LoginData.json();
         setdata(jsonData);
         console.log(jsonData);


    }
    return(

        <div>
             <div  className="flex">  
     {data.map((obj) => (
          
      <div key={obj._id} className=" m-4 p-4 w-[250] flex-wrap rounded-2xl shadow-md ">
        <h1>{obj.username}</h1>
    <h2>{obj.phoneNumber}</h2>
  
     </div>
    
))}
 </div>
        </div>
    )

}
export default ExtensionWorkers;