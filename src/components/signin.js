

import React, { useState } from 'react';

const SignUp= () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsObj = {};
    if (!username.trim()) errorsObj.username = "Username is required";
    if (!email.trim()) errorsObj.email = "Email is required";
    if (!password.trim()) errorsObj.password = "Password is required";

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }

    /*const formData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    formData.append('email', email);
    
    console.log(formData.username)
    console.log('form submitted');*/

    fetch("http://localhost:2005/api/connecting/signup", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
      })
     .catch((err)=>{

     })
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">SignUp</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
            />
            {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            signup
          </button>
        </form>
      </div>
    </div>
  );
};


export default SignUp;
