import React, { useState, useEffect, useRef } from 'react';

interface QuestionProps {
  onYes: () => void;
}

const Question: React.FC<QuestionProps> = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ top: '60%', left: '70%' });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial random position slightly offset to avoid overlapping YES immediately if screen is small
  useEffect(() => {
    // Set initial position to be distinct from the YES button
    setNoBtnPosition({ top: '60%', left: '70%' });
  }, []);

  const moveButton = () => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const padding = 50; // Keep button away from edges
      
      const newTop = Math.random() * (containerRect.height - 100) + padding;
      const newLeft = Math.random() * (containerRect.width - 100) + padding;

      setNoBtnPosition({ 
        top: `${(newTop / containerRect.height) * 100}%`, 
        left: `${(newLeft / containerRect.width) * 100}%` 
      });
      setIsHovered(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-pink-50 flex flex-col items-center justify-center overflow-hidden p-4"
    >
      <div className="z-10 text-center mb-12 animate-fade-in-up max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-handwriting text-red-600 mb-8 leading-tight drop-shadow-md">
          Krisha <span className="inline-block animate-bounce">💖</span>,<br />
          Will you be my Valentine?
        </h1>
        <div className="w-full max-w-md mx-auto">
             <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmM5c2ZqZ2Z4eG9hOHY4eXoxbm54ZnZ4eXoxbm54ZnZ4eXoxbm54ZnZ4eXoxbm54ZnZ4eXoxbm54ZnZ4eXoxbm54ZnZ4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" 
                alt="Cute bear asking" 
                className="w-48 h-48 mx-auto object-contain mb-8 rounded-full shadow-lg bg-white p-2"
             />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 z-20">
        <button
          onClick={onYes}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-12 rounded-full text-3xl shadow-xl transform transition-transform hover:scale-125 focus:outline-none ring-4 ring-green-300 animate-pulse"
        >
          YES! 😍
        </button>

        <button
          style={{
            position: 'absolute',
            top: noBtnPosition.top,
            left: noBtnPosition.left,
            transition: 'all 0.2s ease-out'
          }}
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded text-xs shadow-sm cursor-not-allowed hover:opacity-0"
        >
          No 😢
        </button>
      </div>
      
      {isHovered && (
        <div className="absolute bottom-10 text-pink-400 font-semibold animate-bounce">
            Nice try! You can't catch it! 🏃‍♀️💨
        </div>
      )}
    </div>
  );
};

export default Question;