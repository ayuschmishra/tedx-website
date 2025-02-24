// src/components/layout/VignetteTransition.jsx
import React from 'react';

const VignetteTransition = () => {
  return (
    <div className="relative h-24 overflow-hidden">
      {/* Top vignette (fading from hero section) */}
      <div 
        className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-tedx-black to-transparent z-10"
      ></div>
      
      {/* Bottom vignette (fading to upcoming event section) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-tedx-white to-transparent z-20"
      ></div>
    </div>
  );
};

export default VignetteTransition;