import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";    
import Findworker_1 from "../subcomponents/Findworker_1";
import { Link } from "react-router-dom";

const Findworker = () => {
    const [data, setdata] = useState([]);
    const [filterdata, setfilterdata] = useState("");
    const [_data, set_data] = useState([]);
    const [searchdata, setsearchdata] = useState("");
  

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const LoginData = await fetch("http://localhost:2005/api/connecting/getdata");
        const jsonData = await LoginData.json();//convert the data into json
        setdata(jsonData);
        set_data(jsonData);
        console.log(jsonData);
    };

    const handleSearch = (e) => {
        setsearchdata(e.target.value);
    };

    const handleFind = () => {
        console.log(searchdata);
        console.log(data.username)
        const __data = _data.filter(obj => obj.username.toLowerCase().includes(searchdata.toLowerCase()));
        console.log(__data);
        set_data(__data);
      
    };
    const handleSelect = (e) => {
        setfilterdata(e.target.value);
    };
   console.log(filterdata);
    const handleFilter = () => {
        const filter_data = data.filter(obj => obj.skills.toLowerCase() === filterdata.toLowerCase());
        set_data(filter_data);
    };
    const handleReset=()=>{
      set_data(data);
  
    }
    

    return  (
        <div>
            <div className=" p-8 flex mt-[50] ">
                <div className="w-[600]">
                <img src={"https://img.freepik.com/premium-vector/cool-concept-layout-construction-team-characters_163983-594.jpg?w=740"} className=" shadow-lg"/>
                </div>
                <div className="block">
                <h1 className="p-5 mt-[80] ml-[50] text-4xl font-semibold font-serif ">Findworker your locality  based on your problems </h1>
                <p className="ml-[60] text-lg">In this page  we can connect with the  professionall workers with your problems .. </p>
                </div>
                
            </div>
            <hr className="h-[8] bg-orange-700"/>
          <div className="bg-gray-400 w-full md:w-auto  flex flex-col justify-center items-center shadow-xl">
    
    <div className="flex flex-col md:flex-row justify-center items-center md:ml-[40] md:p-4 mt-[50]">
        <label htmlFor="" className="mr-2 md:mr-4 text-2xl font-semibold">Choose a skill:</label>
        <select value={filterdata} onChange={handleSelect} className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 bg-black text-white text-lg" >
            <option>choose an option</option>
            <option value="Farmer">Farmer</option>
            <option value="Carpenter">Carpenter</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="Barber">Barber</option>
            <option value="fisherman">fisherman</option>
        </select>
        <button className="bg-red-600 rounded-lg p-3 m-2 md:m-0 shadow-lg" onClick={handleFilter}>Filter</button>
        <label className=" pl-4  text-2xl font-semibold">Search:</label>
        <input type="text" className="mx-2 md:mx-4 px-2 md:px-4 h-[40] my-2 md:w-[300] text-black" onChange={handleSearch} value={searchdata} />
        <button className="bg-red-600 rounded-lg p-3 m-2 md:m-0 shadow-lg" onClick={handleFind}>Find</button>
    </div>
    <button className="bg-red-600 rounded-lg p-3 shadow-lg mt-4 mb-2" onClick={handleReset}>Reset</button>
</div>

{/* <Link to="/userdata"><Findworker_1 obj={data} obj2={_data}/></Link> */}
<Findworker_1 obj={data} obj2={_data}/>
        </div>
    );
};

export default Findworker;
