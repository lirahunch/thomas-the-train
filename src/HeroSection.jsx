import React, { useState, useEffect } from "react";
import thomasFaceDark from "./assets/thomasFaceDark.png";
import thomasFaceLight from "./assets/thomasFaceLight.png";
import thomasTriggeredGif from "./assets/thomasTriggeredGif.gif";
import thomasMeme1 from "./assets/thomasMeme1.png";
import thomasMeme2 from "./assets/thomasMeme2.webp";
import thomasMeme3 from "./assets/thomasMeme3.webp";

function HeroSection({ dark }) {
  const memes = [thomasTriggeredGif, thomasMeme1, thomasMeme2, thomasMeme3];
  const [displayedMemes, setDisplayedMemes] = useState([]);

  useEffect(() => {
    if (!dark) {
      setDisplayedMemes([]);
      return;
    }

    const interval = setInterval(() => {
      if (displayedMemes.length >= 40) {
        setDisplayedMemes([]);
      }

      setDisplayedMemes((oldMemes) => [
        ...oldMemes,
        {
          id: Date.now(),
          src: memes[Math.floor(Math.random() * memes.length)],
          top: `${Math.floor(Math.random() * 100 - 40)}vh`,
          left: `${Math.floor(Math.random() * 100)}vw`,
          animation: ["animate-spin", "animate-jump", "animate-pulse"][
            Math.floor(Math.random() * 3)
          ],
        },
      ]);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [displayedMemes, dark]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-y-hidden">
      <img
        src={dark ? thomasFaceDark : thomasFaceLight}
        alt="Center Image"
        className="w-32 h-32 animate-spin-slow z-[20]"
      />

      <h1
        className={`text-5xl mt-4 ${
          dark ? "font-HelpMe animate-colorToggle" : ""
        }  duration-2000 z-[20] text-white`}
      >
        $THOMAS
      </h1>

      <div className={`text-5xl mt-4 ${
          dark ? "font-HelpMe animate-colorToggle" : ""
        }  duration-2000 z-[20] text-white`}>
        Tokenomics:<br />
        10,000,000 Supply<br />
        100% Burnt Liquidity<br />
        No team tokens
      </div>

      <div className="absolute w-full h-full">
        {displayedMemes.map((meme) => (
          <img
            key={meme.id}
            src={meme.src}
            className={`${meme.animation} absolute z-[0]`}
            style={{ top: meme.top, left: meme.left }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
