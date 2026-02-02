import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Wait for animation to finish before calling parent
      setTimeout(() => {
        onOpen();
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 pointer-events-none opacity-50">
         {/* Background floating hearts */}
         {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute animate-float text-pink-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 20 + 20}px`
              }}
            >
              ❤️
            </div>
         ))}
      </div>

      {/* Header Text - Fades out when opening to prevent overlap */}
      <div className={`z-10 text-center mb-16 transition-all duration-700 ease-in-out absolute top-20 w-full ${isOpen ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
        <h1 className="text-4xl md:text-5xl font-handwriting text-pink-600 mb-4 drop-shadow-sm">
          A special delivery for Krisha 🐰
        </h1>
        <p className="text-pink-400 font-semibold animate-pulse">Click the envelope to open</p>
      </div>

      {/* Envelope Container */}
      <div 
        onClick={handleOpen}
        className={`relative w-80 h-52 transition-transform duration-700 ease-in-out cursor-pointer ${isOpen ? 'translate-y-32 scale-110' : 'hover:scale-105'}`}
      >
        {/* Back of Envelope */}
        <div className="absolute inset-0 bg-red-800 rounded-md shadow-2xl"></div>

        {/* The Card */}
        <div 
          className={`absolute inset-x-4 top-4 bottom-4 bg-white rounded-md shadow-md z-10 flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 delay-300 ease-in-out
            ${isOpen ? '-translate-y-40 z-20' : ''}`}
        >
          <div>
            <p className="font-handwriting text-2xl text-red-500 mb-2">Hey Krisha!</p>
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              I have something<br/>very important<br/>to ask you...
            </p>
            <Heart className="w-5 h-5 text-red-400 mx-auto mt-2 animate-pulse fill-current" />
          </div>
        </div>

        {/* Front Pocket */}
        {/* Creates the V shape pocket using clip-path */}
        <div 
            className="absolute inset-0 z-30 bg-red-600 rounded-md pointer-events-none"
            style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)' }}
        ></div>

        {/* Flap */}
        {/* Triangle flap that rotates open */}
        <div 
          className={`absolute inset-0 z-40 bg-red-500 rounded-md origin-top transition-transform duration-700 ease-in-out border-b-4 border-black/5
            ${isOpen ? 'rotate-x-180' : ''}`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 55%)' }}
        >
          {/* Heart seal on the flap */}
           <div className={`absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-red-200 rounded-full p-2 shadow-sm">
                  <Heart className="w-6 h-6 text-red-600 fill-current" />
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Envelope;