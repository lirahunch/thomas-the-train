import React from "react";
import { FaMoon, FaSun, FaVolumeMute, FaTwitter, FaTelegramPlane } from "react-icons/fa";

const ThomasNavBar = ({ dark, setDark, setIsMuted, isMuted }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 bg-transparent text-white fixed w-full z-[1000] ${
        dark && "animate-bounce"
      }`}
    >
      <div className="flex gap-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        >
          <FaVolumeMute />
        </button>
        {/* Twitter Button */}
        <a
          href="https://twitter.com/ThomasTankSOL"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        >
          <FaTwitter />
        </a>
        {/* Telegram Button */}
        <a
          href="https://t.me/ThomasTank_Portal"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        >
          <FaTelegramPlane />
        </a>
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
