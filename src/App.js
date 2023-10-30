import { useState, useRef, useEffect } from "react";
import "./App.css";
import ThomasNavBar from "./ThomasNavBar";
import musicDark from "./assets/musicDark.mp3";
import musicLight from "./assets/musicLight.mp3";
import HeroSection from "./HeroSection";

import thomasTriggeredGif from "./assets/thomasTriggeredGif.gif";
import thomasMeme1 from "./assets/thomasMeme1.png";
import thomasMeme2 from "./assets/thomasMeme2.webp";
import thomasMeme3 from "./assets/thomasMeme3.webp";

function App() {
  const [dark, setDark] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(true);


  const darkAudioRef = useRef(null);
  const lightAudioRef = useRef(null);

  const handleChoice = (choice) => {
    setIsMuted(false);
    if (choice === "yes") {
      setDark(true);
      // darkAudioRef.current.play();
    } else {
      setDark(false);
      // lightAudioRef.current.play();

      setTimeout(() => {
        setDark(true);
        darkAudioRef.current.play();
      }, 5000);
    }
    setShowModal(false);
  };

  return (
    <div
      className={`${
        dark ? "bg-thomasDark" : "bg-thomasLight"
      } h-screen bg-center bg-cover relative`}
    >
      <ThomasNavBar dark={dark} setDark={setDark} />

      {dark ? (
        <audio ref={darkAudioRef} src={musicDark} autoPlay muted={isMuted} />
      ) : (
        <audio ref={lightAudioRef} src={musicLight} autoPlay muted={isMuted} />
      )}
      <HeroSection dark={dark} />
      

      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000]">
          <div className="bg-gray-900 p-10 rounded-lg shadow-lg text-white text-xl">
            <p className="text-3xl mb-6">Are you ready?</p>
            <div className="flex justify-around">
              <button
                className="bg-red-700 px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleChoice("yes")}
              >
                Yes
              </button>
              <button
                className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleChoice("no")}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
