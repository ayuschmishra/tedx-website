// src/components/home/FeaturedSpeakers.jsx

const FeaturedSpeakers = () => {
    // Sample speakers data (would typically come from API/CMS)
    const speakers = [
      {
        id: 1,
        name: "Dr. Jane Smith",
        title: "AI Ethics Researcher",
        topic: "The Human Side of Artificial Intelligence",
        image: "/src/assets/speaker1.png",
      },
      {
        id: 2,
        name: "Prof. Michael Wong",
        title: "Climate Scientist",
        topic: "Reimagining Sustainability for Urban Centers",
        image: "/src/assets/speaker2.png",
      },
      {
        id: 3,
        name: "Sara Johnson",
        title: "Social Entrepreneur",
        topic: "Creating Impact Through Community-Led Design",
        image: "/src/assets/speaker3.png",
      },
      {
        id: 4,
        name: "Alex Chen",
        title: "Quantum Computing Expert",
        topic: "The Next Revolution in Computing",
        image: "/src/assets/speaker4.png",
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