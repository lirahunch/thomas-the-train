import { useState, useRef, useEffect } from "react";
import "./App.css";
import ThomasNavBar from "./ThomasNavBar";
import musicDark from "./assets/musicDark.mp3";
import musicLight from "./assets/musicLight.mp3";
import HeroSection from "./HeroSection";
import thomasCreepy from "./assets/thomasCreepy.png";

function App() {
  const [dark, setDark] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const darkAudioRef = useRef(null);
  const lightAudioRef = useRef(null);
  const tokenomicsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        tokenomicsRef.current &&
        window.scrollY + window.innerHeight >= tokenomicsRef.current.offsetTop
      ) {
        setDark(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="flex flex-col overflow-x-hidden">
      <div
        className={`${
          dark ? "bg-thomasDark" : "bg-thomasLight"
        } h-screen bg-center bg-cover relative overflow-x-hidden`}
      >
        <ThomasNavBar
          dark={dark}
          setDark={setDark}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />

        {dark ? (
          <audio
            ref={darkAudioRef}
            src={musicDark}
            autoPlay
            muted={isMuted}
            volume="0.33"
            loop
          />
        ) : (
          <audio
            ref={lightAudioRef}
            src={musicLight}
            autoPlay
            muted={isMuted}
            volume="0.33"
            loop
          />
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

      <div
        ref={tokenomicsRef}
        className={`${
          dark ? "bg-thomasDark2" : "bg-thomasLight2"
        } h-screen bg-center bg-cover relative z-[1000] flex flex-col justify-center items-center p-6`}
      >
        <img src={thomasCreepy} className="absolute top-0 rotate-180 right-3/4 h-1/2" />
        <img src={thomasCreepy} className="absolute bottom-0 left-3/4 h-1/2"/>
        <h1 className="text-4xl md:text-6xl mb-4 text-center font-HelpMe animate-colorToggle z-[100]">
          Tokenomics
        </h1>
        <p className="text-lg md:text-xl text-center font-HelpMe animate-colorToggle z-[100] md:px-10 px-64">
         Tokenomics:<br />
        10,000,000 Supply<br />
        100% Burnt Liquidity<br />
        No team tokens
        </p>
      </div>
    </div>
  );
}

export default App;
