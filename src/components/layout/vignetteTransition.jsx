// src/components/layout/VignetteTransition.jsx
import React from 'react';

const VignetteTransition = () => {
  return (
    <div className="relative h-16 overflow-hidden">
      {/* Red line divider like in the image */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-tedx-red z-30"></div>
      
      {/* Subtle gradient overlay to create depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40 z-20"></div>
      
      {/* Black base for consistent background */}
      <div className="absolute inset-0 bg-tedx-black z-10"></div>
    </div>
  );
};

export default VignetteTransition;