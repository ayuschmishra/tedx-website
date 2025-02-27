// src/components/get-involved/TimelineProcess.jsx
import React, { useState, useEffect } from 'react';

const TimelineProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Process steps data matching the first image
  const processSteps = [
    {
      number: 1,
      title: "Application",
      description: "Submit your application through our online form, indicating your area of interest."
    },
    {
      number: 2,
      title: "Review",
      description: "Our team reviews your application and reaches out to discuss opportunities."
    },
    {
      number: 3,
      title: "Onboarding",
      description: "Selected individuals receive orientation and necessary materials to get started."
    },
    {
      number: 4,
      title: "Engagement",
      description: "Actively participate and contribute to making our TEDx event a success."
    }
  ];

  // Effect for process step animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev < processSteps.length - 1 ? prev + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [processSteps.length]);

  // Handle scroll observers
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionElement = document.getElementById('process-timeline');
      
      if (!sectionElement) return;
      
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.offsetHeight;
      
      // Calculate which step should be active based on scroll position
      if (scrollPosition > sectionTop - viewportHeight / 2 && 
          scrollPosition < sectionTop + sectionHeight - viewportHeight / 2) {
        const scrollProgress = (scrollPosition - (sectionTop - viewportHeight / 2)) / (sectionHeight - viewportHeight / 2);
        const stepIndex = Math.min(
          Math.floor(scrollProgress * processSteps.length),
          processSteps.length - 1
        );
        
        setActiveStep(stepIndex);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [processSteps.length]);

  return (
    <section id="process-timeline" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Process</h2>
          <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Here's what you can expect when you decide to get involved with TEDxShivajiCollege
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline with vertical line */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute h-full w-1 bg-tedx-red left-12 md:left-1/2 -ml-0.5 z-0"></div>
            
            {/* Process steps */}
            {processSteps.map((step, index) => {
              // Determine if step is on left or right (alternating for desktop)
              const isEven = index % 2 === 0;
              const isActive = index <= activeStep;
              
              // For mobile, all steps are on the right
              // For desktop, alternate left and right
              const stepClasses = `
                relative flex items-start mb-16 last:mb-0
                transition-all duration-500
                ${isActive ? 'opacity-100' : 'opacity-40'}
              `;
              
              const contentClasses = `
                flex-grow ml-6 md:ml-0
                md:w-5/12 ${isEven ? 'md:pr-12 md:ml-auto md:text-right' : 'md:pl-12 md:mr-auto'}
              `;
              
              return (
                <div key={step.number} className={stepClasses}>
                  {/* Circle step marker */}
                  <div className={`
                    absolute 
                    left-12 md:left-1/2 
                    w-10 h-10 
                    rounded-full 
                    flex items-center justify-center 
                    transform -translate-x-1/2
                    transition-all duration-500
                    border-4 border-black
                    z-10
                    ${isActive ? 'bg-tedx-red' : 'bg-gray-800'}
                  `}>
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  
                  {/* Content box */}
                  <div className={contentClasses}>
                    <div className={`
                      bg-[#161616] 
                      border border-gray-800 
                      rounded-lg 
                      p-6
                      shadow-lg
                      transform transition-transform duration-500
                      ${isActive ? 'scale-100' : 'scale-95'}
                      ${isActive && index === activeStep ? 'border-tedx-red' : ''}
                    `}>
                      <h3 className="text-2xl font-bold text-tedx-red mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
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

export default TimelineProcess;