import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import {  createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Find from "./components/Find-jobs";
import Findworker from "./components/Find-workers";
import Error from "./components/Error";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ReigistrationForm from "./components/RegistrationForm";
import Services from "./components/Services";
import UserLogin from "./components/login";
import SignUp from "./components/signin";
import Data from "./components/moreAbout";





const App = () => {
  return (
    <div  className="">
      {/* outlet is used to combine certain components */}
     <Header/>
     <Outlet/>
<Footer/>
    </div>
  );
};

const Approuter=createBrowserRouter([

  {path:"/",
element:<App/>,
children:[
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/find",
    element:<Find/>
  
  },
  {
    path:"/findworker",
    element:<Findworker/>
  },{
    path:"/services",
    element:<Services/>
  },
  {
    path:"/userdata",
    element:<Data/>
  },

],

errorElement:<Error/>
},
{
  path:"/login",
  element:<ReigistrationForm/>,
},
{
  path:"/userlogin",
  element:<UserLogin/>
},
{
  path:"/signup",
  element:<SignUp/>
},
 {
  path:"/err",   element:<Error/>
}
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter}/>)
//ReactDOM.render(<RouterProvider router={Approuter}/>, document.getElementById('root'));
