import React from "react";
import { FaMoon, FaSun, FaVolumeMute } from "react-icons/fa";

const ThomasNavBar = ({ dark, setDark }) => {
  return (
    <div className={`flex justify-between items-center p-4 bg-transparent text-white fixed w-full z-[1000] ${dark && "animate-bounce"}`}>
      <button className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition">
        <FaVolumeMute />
      </button>

      <div className="flex-1 text-center py-1 px-2 rounded bg-gray-600 max-w-sm">
        0x1234...abcd  
      </div>

      <button
        className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        onClick={() => setDark(!dark)}
      >
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThomasNavBar;
