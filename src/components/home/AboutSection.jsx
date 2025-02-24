// src/components/home/AboutSection.jsx
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* TED logo and "x" explanation */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-tedx-red px-8 py-4 rounded-lg">
                <h3 className="text-4xl font-bold text-tedx-white">TED</h3>
              </div>
              <div className="text-8xl font-light text-tedx-red mx-4">×</div>
              <div className="border-2 border-tedx-black px-6 py-3 rounded-lg">
                <h3 className="text-3xl font-light text-tedx-black">independently organized event</h3>
              </div>
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