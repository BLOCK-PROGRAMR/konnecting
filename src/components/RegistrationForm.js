
import React, { useState } from "react";

const ReigistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [errors, setErrors] = useState({});
  const [Image,setImage]=useState(null);
  const handleFileChange = (e) => {
    if(e.target.files && e.target.files[0]){
    setImage(e.target.files[0]);}
    else{
      console.log("null");
      setImage(null);
      console.log(Image);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsObj = {};
    if (!username.trim()) {
      errorsObj.username = "Username is required";
    }
    if (!password.trim()) {
      errorsObj.password = "Password is required";
    }
    if (!email.trim()) {
      errorsObj.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsObj.email = "Email is invalid";
    }
    if (!address.trim()) {
      errorsObj.address = "Address is required";
    }
    if (!phoneNumber.trim()) {
      errorsObj.phoneNumber = "Phone Number is required";
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      errorsObj.phoneNumber = "Phone Number should be 10 digits";
    }
    if (!skills.trim()) {
      errorsObj.skills = "Skills are required";
    }
    if (!Image) {
      errorsObj.Image = "Image is required";
    }


    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }

   
    const formData = new FormData();
    formData.append('image', Image);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('phoneNumber', phoneNumber);
    formData.append('skills', skills);
    console.log(formData.skills);
  console.log("submitted");
   
//use fetching to send the data local server
    fetch("http://localhost:2005/api/connecting/lgin", {
      method: "post",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("Response from server:", data);
        // Reset form fields and errors after successful submission
        setUsername("");
       setPassword("");
        setEmail("");
        setAddress("");
        setPhoneNumber("");
        setSkills("");
        setImage(null);
        setErrors({});
      })
      .catch((error) => {
       
      });
  };


  return (
    <div className="mt-10 ">
      
      <div className="">
      <h1 className="text-center font-semibold text-2xl">ReigistrationForm</h1>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-green-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full">
        <div className="mb-4">
            <label htmlFor="imge" className="block text-gray-700 text-sm font-bold mb-2">
              Image:
            </label>
            <input
              type="file"
              id="imge"
              name="image"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
            />
            {errors.image && <p className="text-red-500 text-xs italic">{errors.image}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
            />
            {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="skills" className="block text-gray-700 text-sm font-bold mb-2">Skills:</label>
            <textarea
              id="skills"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
            />
            {errors.skills && <p className="text-red-500 text-xs italic">{errors.skills}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ReigistrationForm;
