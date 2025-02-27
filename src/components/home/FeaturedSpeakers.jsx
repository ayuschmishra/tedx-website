// src/components/home/FeaturedSpeakers.jsx
import { useState } from 'react';

// Import images directly
import mhmdkaif from '../../assets/mhmdkaif.png';
import vartikananda from '../../assets/vartikananda.png';
import deepak from '../../assets/deepak.png';
import paritosh from '../../assets/paritosh.png';

const FeaturedSpeakers = () => {
    // Sample speakers data with imported images
    const speakers = [
      {
        id: 1,
        name: "Mohammad Kaif",
        title: "Former Indian Cricketer",
        image: mhmdkaif, // Use the imported image
      },
      {
        id: 2,
        name: "Vartika Nanda",
        title: "Indian Journalist",
        image: vartikananda, // Use the imported image
      },
      {
        id: 3,
        name: "Deepak Gupta",
        title: "Co-Founder, Bombay Shaving Company",
        image: deepak, // Use the imported image
      },
      {
        id: 4,
        name: "Paritosh Tripathi",
        title: "Actor",
        image: paritosh, // Use the imported image
      },
    ];
  
    return (
      <section className="py-24 bg-tedx-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tedx-black">Featured Speakers</h2>
            <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/300x300?text=${speaker.name.replace(' ', '+')}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tedx-black mb-1">{speaker.name}</h3>
                  <p className="text-tedx-red font-medium mb-2">{speaker.title}</p>
                  <p className="text-gray-700">{speaker.topic}</p>
                </div>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                  <button 
                    className="text-tedx-red hover:text-red-700 font-medium transition duration-300 flex items-center"
                    onClick={() => {/* Would typically open modal with more info */}}
                  >
                    View Profile
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedSpeakers;