import React from "react";
import { FaMoon, FaSun, FaVolumeMute } from "react-icons/fa";

const ThomasNavBar = ({ dark, setDark, setIsMuted, isMuted }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 bg-transparent text-white fixed w-full z-[1000] ${
        dark && "animate-bounce"
      }`}
    >
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        <FaVolumeMute />
      </button>


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
