import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async(e)=> {
    try{
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length ==="") {
      setError('Password must contain at least 8 characters');
      return;
    }
  
     const response=await fetch("http://localhost:2005/api/connecting/login",{
          method:"post",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({email,password})
     })
     const data=await response.json();
     if(!response.ok){
        throw new Error(data.Error);
     }
        setError("");
        setEmail("");
        setPassword("");
  }
  catch(error){
          setError(error.message);
      
  }
  }
  useEffect(()=>{
    fetchdata();
  },[])
  const [data,setdata]=useState([]);
  const [found,setFound]=useState(false);
  const fetchdata=async()=>{
           const signdata=await fetch("http://localhost:2005/api/connecting/signupdata");
           const jsondata=await signdata.json();
           console.log(jsondata);
           setdata(jsondata);

  }
   const handlelogin=()=>{
    const foundEmail = data.find(item => item.email === email);
    if(foundEmail){
      setFound(true);
    }
    else{
        setFound(false);
        setEmail("");
       setPassword("");
       
    }
    
   } 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Email:</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Password:</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
       {found?<Link to="/"> <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
               onClick={handlelogin}
            type="submit" 
          >Login
          </button></Link>: <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
               onClick={handlelogin}
            type="submit" 
          >Login
          </button>} 
        </form>
        <p className="mt-4 text-sm text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
        { <p className='text-red-400  capitalize p-4 text-center text-xl'>{found?"":"not-found"}</p>}
      </div>
     
    </div>
  );
};

export default UserLogin;
