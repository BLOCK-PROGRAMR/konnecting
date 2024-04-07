import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
        const jsonData = await LoginData.json();
        setdata(jsonData);
        set_data(jsonData);
        console.log(jsonData);
    };

    const handleSearch = (e) => {
        setsearchdata(e.target.value);
    };

    const handleClick = () => {
          
        const __data = _data.filter(obj => obj.username.toLowerCase().includes(searchdata.toLowerCase()));
        set_data(__data);
      
    };

    const handleSelect = (e) => {
        setfilterdata(e.target.value);
    };

  console.log("hello");
   console.log(filterdata);
    const handleFilter = () => {
        const filter_data = data.filter(obj => obj.skills.toLowerCase() === filterdata.toLowerCase());
        set_data(filter_data);
    };
    const handleReset=()=>{
      set_data(data);
  
    }
    

    return data.length === 0 ? <Shimmer /> : (
        <div>
          <div className="  bg-blue-500 w-full md:w-auto  flex flex-col justify-center items-center">
    <h1 className="text-center text-2xl font-semibold p-4 md:p-16">Find worker based on your Problems</h1>
    <div className="flex flex-col md:flex-row justify-center items-center md:ml-[100px] md:p-4">
        <label htmlFor="" className="mr-2 md:mr-4">Choose a skill:</label>
        <select value={filterdata} onChange={handleSelect} className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 bg-black text-white" >
            <option>choose an option</option>
            <option value="Farmer">Farmer</option>
            <option value="Carpenter">Carpenter</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="Barber">Barber</option>
            <option value="fisherman">fisherman</option>
        </select>
        <button className="bg-red-600 rounded-lg p-2 m-2 md:m-0 shadow-lg" onClick={handleFilter}>Filter</button>
        <label className="font-serif text-lg">Search:</label>
        <input type="text" className="mx-2 md:mx-4 px-2 md:px-4 h-8 my-2 text-black" onChange={handleSearch} value={searchdata} />
        <button className="bg-red-600 rounded-lg p-2 m-2 md:m-0 shadow-lg" onClick={handleClick}>Find</button>
    </div>
    <button className="bg-red-600 rounded-lg p-2 shadow-lg mt-4 mb-2" onClick={handleReset}>Reset</button>
</div>

<div className="flex flex-wrap justify-center  bg-white">
    {_data.map((obj) => (
        <div key={obj._id} className="m-4 p-4 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] rounded-2xl shadow-md text-black">
             <img src={obj.image}/>
            <h1>{obj.username}</h1>
            <h2>{obj.phoneNumber}</h2>
            <h2>{obj.skill}</h2>
            <h2>{obj.email}</h2>
            <h2>{obj.address}</h2>
            <h2>{obj.skills}</h2>
        </div>
    ))}
</div>

        </div>
    );
};

export default Findworker;
