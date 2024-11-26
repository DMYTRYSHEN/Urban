import eee1 from './fly.png';
import eee2 from './nofly.png';
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    handleMouseMove(e);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (!isResizing && e.type !== 'mousedown') return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    const percent = (x / rect.width) * 100;

    setPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!isResizing) return;
    
    const touch = e.touches[0];
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = Math.min(Math.max(0, touch.clientX - rect.left), rect.width);
    const percent = (x / rect.width) * 100;

    setPosition(percent);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="
    
    relative h-screen flex items-center justify-center bg-black text-white overflow-hidden 
    
    
    
    "  style={{borderRadius:'40px 40PX 0PX 0PX'}}>
      {/* <div className="text-center py-8  shadow-sm">
      <br /> <br /> <br /> <br />
        <h1 className="text-5xl font-bold text-gray-800" style={{
          display: 'inline',
          background: '#F60A41',
          color: '#fff',
          background: 'linear-gradient(55deg, #F60A41 0%, #D86B13 80%)',
         backgroundPosition: 'bottom center',
          paddingbottom: '9px',
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }



        }>Технології військового стану для цивільних потреб</h1>
        <br />
        <h2 className="text-3xl font-bold text-gray-800" style={{
          display: 'inline',
          background: '#F60A41',
          color: '#fff',
          background: 'linear-gradient(24deg, #F60A41  0%, #D86B13  60%, #f7f7f7  90%)',
         backgroundPosition: 'bottom center',
          paddingbottom: '9px',
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }} 
 >
   <br />
  Інноваційна децентралізована MESH мережа, динамічна маршрутизація </h2>
        <p className="text-gray-600 mt-2">Перетягніть повзунок для порівняння зображень</p>
      </div> */}
      
      <div className="relative w-full max-w-6xl mx-auto px-4 py-8 
      
      ">
        <h1 className="text-5xl " style={{
          display: 'inline',
          background: '#F60A41',
          color: '#fff',
          background: 'linear-gradient(55deg, #F60A41 0%, #D86B13 80%)',
        //  backgroundPosition: 'bottom center',
          paddingbottom: '9px',
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }



        }>Як працює Mesh?</h1>
        <div
          ref={sliderRef}
          className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-xl"
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsResizing(true)}
          style={{ touchAction: 'none' }}
        >
          {/* Before Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={eee1}
              alt="Before"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-md">
              До
            </div>
          </div>

          {/* After Image with Clip Path */}
          <div
            className="absolute inset-0 w-full h-full transition-[clip-path] duration-75  "
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`
            }}
          >
            <img
              src={eee2}
              alt="After"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-md">
              Після
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white transition-transform duration-75 cursor-col-resize"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize"
            >
              <svg
                className="w-6 h-6 text-gray-600 rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;