// src/components/get-involved/OurProcess.jsx
import React, { useState, useEffect, useRef } from 'react';

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: "Application",
      description: "Submit your application through our online form, indicating your area of interest.",
      image: "/img/process/step1.jpg" // Replace with your actual image path
    },
    {
      number: 2,
      title: "Review",
      description: "Our team reviews your application and reaches out to discuss opportunities.",
      image: "/img/process/step2.jpg" // Replace with your actual image path
    },
    {
      number: 3,
      title: "Onboarding",
      description: "Selected individuals receive orientation and necessary materials to get started.",
      image: "/img/process/step3.jpg" // Replace with your actual image path
    },
    {
      number: 4,
      title: "Engagement",
      description: "Actively participate and contribute to making our TEDx event a success.",
      image: "/img/process/step4.jpg" // Replace with your actual image path
    }
  ];

  // Initialize refs array when component mounts
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, processSteps.length);
  }, [processSteps.length]);

  // Handle scroll-based animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // When element is 50% visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the index from the data attribute
          const index = parseInt(entry.target.dataset.index);
          setActiveStep(index);
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe each step element
    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-24 bg-black text-white" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Process</h2>
          <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Here's what you can expect when you decide to get involved with TEDxShivajiCollege
          </p>
        </div>
        
        {/* Process steps timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-tedx-red transform -translate-x-1/2 z-10"></div>
          
          {/* Mobile timeline (visible on smaller screens) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-tedx-red z-10"></div>
          
          {/* Process steps */}
          <div className="relative z-20">
            {processSteps.map((step, index) => {
              // Determine if step should be on left or right (alternating)
              const isEven = index % 2 === 0;
              const stepPosition = isEven ? 'md:ml-0 md:mr-auto md:pr-16' : 'md:ml-auto md:mr-0 md:pl-16';
              const alignClass = isEven ? 'md:text-right' : 'md:text-left';
              const marginClass = index > 0 ? 'mt-20' : '';
              
              return (
                <div 
                  key={step.number}
                  className={`relative flex items-center mb-12 transition-opacity duration-700 opacity-0 ${marginClass} ${index === activeStep ? 'opacity-100' : ''}`}
                  ref={el => stepRefs.current[index] = el}
                  data-index={index}
                >
                  {/* Step number circle (mobile) */}
                  <div className="md:hidden absolute left-8 w-8 h-8 bg-tedx-red rounded-full flex items-center justify-center transform -translate-x-1/2 z-20 border-4 border-black">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  
                  {/* Step number circle (desktop - centered on timeline) */}
                  <div className="hidden md:flex absolute left-1/2 w-12 h-12 bg-tedx-red rounded-full items-center justify-center transform -translate-x-1/2 z-20 border-4 border-black">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  {/* Content box */}
                  <div 
                    className={`bg-[#161616] border border-gray-800 rounded-lg shadow-xl p-6 md:p-8 w-full md:w-5/12 ml-16 md:ml-0 ${stepPosition}`}
                  >
                    <div className={`${alignClass}`}>
                      <h3 className="text-2xl font-bold text-tedx-red mb-3">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default OurProcess;