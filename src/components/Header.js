
import React, { useState } from "react";
import Mode from "./DarkMode";
import { Link,useLocation } from "react-router-dom";
import { HeaderIcon } from "../utils/constants";
//import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {

  const location=useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white border-gray-200 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <span className="self-center text-7xl whitespace-nowrap text-black font-serif flex ">CONNECTING</span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={showMenu ? "true" : "false"}
        >
          <span className="sr-only">main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto  mt-5  ${showMenu ? "block" : "hidden md:block"}`} id="navbar-default text-center">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 uppercase text-lg  font-mono  ${Mode?"bg-white":"bg-black"} `} >
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 dark:text-black md:dark:hover:text-blue-500  
                aria-current="page" ${location.pathname === '/home' ? 'text-red-400' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/find"
                className={`block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent  ${location.pathname==='/find' ? 'text-red-600 ':''}`}
              >
                Find-Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/findworker"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent "
              >
                Find-workers
              </Link>
            </li>
            <li>
              <Link
                   to="/services"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent t"
              >
                Services
                </Link>
            </li>
          {/** <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent "
              >
                About
              </a>
            </li>*/}  
            <li>
              <Link to="/userlogin">
              <button className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent ">
                Sign Up
              </button>{/*  */}
              </Link>
            </li>
            {/**<li className="">
              <Mode />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
