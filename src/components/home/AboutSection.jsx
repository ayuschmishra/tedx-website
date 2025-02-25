// src/components/home/AboutSection.jsx
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* TEDx logo and "x" explanation */}
          <div className="md:w-1/2 order-2 md:order-1">
            {/* Use the actual TEDx logo image */}
            <div className="mb-8">
              <img 
                src="/src/assets/tedx-logo-with-text.png" 
                alt="TEDx = independently organized TED event" 
                className="w-full max-w-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x150?text=TEDx+Logo';
                }}
              />
            </div>
            
            <p className="text-gray-700 mb-6">
              TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. 
              At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. 
              These local, self-organized events are branded TEDx, where x = independently organized TED event.
            </p>
            
            <p className="text-gray-700 mb-8">
              The TED Conference provides general guidance for the TEDx program, but individual TEDx events are 
              self-organized (subject to certain rules and regulations).
            </p>
            
            <Link 
              to="/about" 
              className="inline-block bg-tedx-black hover:bg-gray-800 text-tedx-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Learn More About TEDx
            </Link>
          </div>
          
          {/* Right side - Videos/photos */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/src/assets/tedx-speaker1.png" 
                  alt="TEDx Speaker" 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=TEDx+Speaker';
                  }}
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/src/assets/tedx-speaker2.png" 
                  alt="TEDx Speaker" 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=TEDx+Speaker';
                  }}
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg col-span-2">
                <img 
                  src="/src/assets/tedx-stage.png" 
                  alt="TEDx Stage" 
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x300?text=TEDx+Stage';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;