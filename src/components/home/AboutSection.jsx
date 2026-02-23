// src/components/home/AboutSection.jsx
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
// Import the image properly
import headTexture from '../../assets/headtexture.png';

const AboutSection = () => {
  // Add scroll animation effect when component loads
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Check if element is in viewport
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('fade-in-up');
        }
      });
    };

    // Run on mount and add scroll listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section className="py-28 bg-tedx-black text-tedx-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Theme heading with background clip text */}
          <h2
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-16 text-center animate-on-scroll"
            style={{
              background: `url(${headTexture}) blue repeat 40% 100%`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent"
            }}
          >
            Gravity & Glitch <br /> Errors That Change the Equations
          </h2>

          {/* Theme information box - fixed with proper sizing and layout */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg w-full max-w-5xl animate-on-scroll">
            <div className="flex flex-col md:flex-row">
              {/* Left side - headings */}
              <div className="md:w-1/4 mb-4 md:mb-0 pr-4">
                <h3 className="text-sm font-semibold text-tedx-white">THIS YEAR'S THEME</h3>
                <h4 className="text-4xl md:text-5xl font-bold text-tedx-red mt-1">Gravity & Glitch</h4>
              </div>

              {/* Right side - text with proper spacing */}
              <div className="md:w-3/4 md:pl-8 lg:pl-16">
                <p className="text-gray-300 text-base mb-4">
                  Step into a space where stability meets disruption, and familiar equations are courageously reexamined. "Gravity and Glitch" explores the tension between the forces that ground us and the errors that transform us.
                </p>
                <p className="text-gray-300 text-base">
                  It reflects on how established systems provide direction, yet true progress often begins with a deviation from the expected. Each disruption becomes an opportunity to rethink, reshape, and reimagine what once seemed fixed. Embrace the power of imbalance as a catalyst for innovation, resilience, and a future redefined by possibility.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll">
            <Link
              to="/events"
              className="bg-tedx-red hover:bg-red-700 text-tedx-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center"
            >
              Explore Theme
            </Link>
            <Link
              to="/about"
              className="border-2 border-tedx-white hover:border-tedx-red hover:text-tedx-red text-tedx-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Add CSS for animation */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;