
import { useState,useEffect } from "react"
const Data=()=>{

    useEffect(()=>{
         fetchData();
    },[])
    const fetchData=async()=>{
          
        const data=await fetch('http://localhost:2005/api/connecting/linkdata');
        const json=await data.json();
        console.log(json);
    }

    return(

        <div>

            <div>
                 <h1>hii hello guys</h1>
            </div>
        </div>
    )
}
export default Data;