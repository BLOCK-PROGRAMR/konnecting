import { FaSun, FaMoon } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setMsg(""); // Reset message when toggling mode
  };
 
  const handleMsg = () => {
    const modeMsg = darkMode ? "White mode" : "Dark mode";
    setMsg(modeMsg);
  };

  return (
    <div className="relative">
      <button
        className="text-white bg-gray-700 px-4 py-2 rounded-full"
        onMouseEnter={handleMsg}
        onMouseLeave={() => setMsg("")}
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun/> : <FaMoon/>}
      </button>
      {msg && (
        <h2 className="absolute bg-red-400 rounded-md p-2 text-white top-10 left-0">
          {msg}
        </h2>
      )}
    </div>
  );
};

export default Mode;
