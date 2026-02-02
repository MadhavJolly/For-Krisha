import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Success: React.FC = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-pink-200 to-red-100 flex flex-col items-center justify-center overflow-hidden p-4 text-center">
      <ReactConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={300}
        gravity={0.2}
      />

      <div className="z-10 max-w-4xl bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-4 border-pink-300 transform animate-[bounce_1s_infinite]">
        <h1 className="text-5xl md:text-7xl font-handwriting text-red-600 mb-6">
          WOHOOO! 🎉
        </h1>
        <p className="text-2xl md:text-3xl text-pink-600 font-bold mb-8">
          I KNEW YOU WOULD SAY YES, KRISHA! 💖
        </p>
        
        <div className="relative w-full max-w-lg mx-auto mb-8 rounded-xl overflow-hidden shadow-lg border-4 border-yellow-300">
           {/* Mind Blown Gif */}
           <img 
             src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" 
             alt="Mind Blown" 
             className="w-full h-auto"
           />
        </div>

        <p className="text-xl text-gray-700 font-medium">
            Get ready for the best Valentine's Day ever! 🌹🍫
        </p>
        <p className="text-sm text-gray-500 mt-4 italic">
            (Screenshots permitted as evidence)
        </p>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center opacity-30 pointer-events-none">
          <img src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif" alt="Dancing Cat" className="h-32" />
          <img src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif" alt="Dancing Cat" className="h-32" />
          <img src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif" alt="Dancing Cat" className="h-32" />
      </div>
    </div>
  );
};

export default Success;