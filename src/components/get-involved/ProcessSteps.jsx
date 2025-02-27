// src/components/get-involved/ProcessSteps.jsx
import React, { useState, useEffect, useRef } from 'react';
import { processStepImages, getFallbackImage } from '../../utils/PlaceholderImagesConfig';

const ProcessSteps = () => {
  const [animatedItem, setAnimatedItem] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Process steps data - matching second image reference
  const processSteps = [
    {
      number: 1,
      title: "Apply for TEDx",
      description: "Select your ticket type and complete a short application to tell us more about you.",
      image: processStepImages.step1
    },
    {
      number: 2,
      title: "Give us time to review",
      description: "We review every application carefully to grow the community in a thoughtful way.",
      image: processStepImages.step2
    },
    {
      number: 3,
      title: "Join TEDx",
      description: "After approval you'll receive your registration details to join this unique experience.",
      image: processStepImages.step3
    }
  ];

  // Initialize refs array when component mounts
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, processSteps.length);
  }, [processSteps.length]);

  // Handle scroll-based animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-100px',
      threshold: 0.3, // When element is 30% visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the index from the data attribute
          const index = parseInt(entry.target.dataset.index);
          setAnimatedItem(index);
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe each card element
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // For automatic animation cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedItem(prev => (prev < processSteps.length - 1 ? prev + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [processSteps.length]);

  return (
    <section className="py-24 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Process</h2>
          <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Here's what you can expect when you decide to get involved with TEDxShivajiCollege
          </p>
        </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .path-animation {
          stroke-dashoffset: 100;
          animation: dash 15s linear forwards infinite;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        
        @keyframes pulse {
          0% { r: 8; opacity: 0.7; }
          50% { r: 12; opacity: 1; }
          100% { r: 8; opacity: 0.7; }
        }
        
        .pulse-circle {
          animation: pulse 2s infinite;
        }
      `}</style>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Connecting line with animated dots - visible on desktop */}
          <div className="hidden md:block absolute z-0 h-full w-full">
            {/* Curved connecting line */}
            <svg className="absolute top-1/2 left-0 right-0 -translate-y-1/2" width="100%" height="200" viewBox="0 0 1200 100">
              <path 
                d="M100,50 C400,0 800,100 1100,50" 
                fill="none" 
                stroke="#e62b1e" 
                strokeWidth="3" 
                strokeDasharray="8,8"
                className="path-animation"
              />
              
              {/* Circles at key points */}
              <circle cx="100" cy="50" r="10" fill="#e62b1e" className={animatedItem === 0 ? 'pulse-circle' : ''} />
              <circle cx="600" cy="75" r="10" fill="#e62b1e" className={animatedItem === 1 ? 'pulse-circle' : ''} />
              <circle cx="1100" cy="50" r="10" fill="#e62b1e" className={animatedItem === 2 ? 'pulse-circle' : ''} />
            </svg>
          </div>
          
          {/* Mobile connecting vertical line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-tedx-red z-10">
            {/* Dots on the timeline */}
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`absolute left-0 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-black
                  ${animatedItem === index ? 'bg-tedx-red scale-110' : 'bg-gray-800'}
                  transition-all duration-500`}
                style={{ top: `${index * 33.33 + 5}%` }}
              >
                <span className="text-white text-xs font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {step.number}
                </span>
              </div>
            ))}
          </div>
          
          {/* Process steps as alternating cards (similar to your second image) */}
          <div className="relative z-10">
            {processSteps.map((step, index) => {
              // For desktop: Alternate left and right alignment
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  ref={el => cardRefs.current[index] = el}
                  data-index={index}
                  className={`
                    mb-16 last:mb-0 md:mb-8
                    opacity-0 translate-y-8
                    transition-all duration-700
                    ${index === 0 ? 'md:ml-0' : ''}
                    ${index === 1 ? 'md:ml-auto md:mr-0' : ''}
                    ${index === 2 ? 'md:ml-0 md:mr-auto' : ''}
                  `}
                  style={{
                    width: '100%',
                    maxWidth: '350px',
                    marginLeft: index === 1 ? 'auto' : index === 0 ? '10%' : '',
                    marginRight: index === 1 ? '10%' : index === 2 ? 'auto' : '',
                  }}
                >
                  <div 
                    className={`
                      relative overflow-hidden rounded-lg shadow-2xl
                      transform transition-all duration-500
                      ${animatedItem === index ? 'scale-105 shadow-tedx-red/30' : 'scale-100'}
                    `}
                  >
                    {/* Image container */}
                    <div className="h-48 overflow-hidden relative">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${step.image || getFallbackImage(step.number, 'process')})`,
                        }}
                      ></div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-tedx-red flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      
                      {/* Title at bottom of image */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description box */}
                    <div className="p-6 bg-[#161616] border-t-2 border-tedx-red">
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

