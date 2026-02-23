// src/pages/Events.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images directly
import kaiftbnl from '../assets/kaiftbnl.png';
import naghmatbnl from '../assets/naghmatbnl.png';
import vrtikatbnl from '../assets/vrtikatbnl.png';
import prttbnl from '../assets/prtbnl.png';
import eventBanner from '../assets/event-banner.png';

const Events = () => {
  const [activeTab, setActiveTab] = useState('event');

  // Upcoming event data with imported image
  const upcomingEvent = {
    title: "TEDxShivajiCollege 2025: Gravity & Glitch",
    date: "To be revealed",
    time: "10:00 AM - 5:00 PM",
    location: "ShivajiCollege Auditorium",
    description: "Join us for a day of groundbreaking ideas and inspirational talks",
    ticketsAvailable: true,
    featuredImage: eventBanner, // Use the imported image
    theme: {
      title: "Gravity & Glitch",
      description: "Errors That Change the Equations"
    }
  };

  // Past events data with imported images
  const pastEvents = [
    {
      id: 1,
      title: "Hope Behind Bars",
      image: vrtikatbnl, // Use the imported image
      speakers: [
        { name: "Vartika Nanda ", topic: "Journalist" }
      ]
    },
    {
      id: 2,
      title: "Life hits refresh ? It's time to choose your",
      image: kaiftbnl, // Use the imported image
      speakers: [
        { name: "Mohommad Kaif", topic: "Athelete" }
      ]
    },
    {
      id: 3,
      title: "Expanding Gamut of Success",
      image: prttbnl, // Use the imported image
      speakers: [
        { name: "Paritosh Tripathi", topic: "Actor" }
      ]
    },
    {
      id: 4,
      title: "Responsibilities of a Journalist",
      image: naghmatbnl, // Use the imported image
      speakers: [
        { name: "Nagma Sahar", topic: "Journalist" }
      ]
    }
  ];

  // Speaker timetable data for the upcoming event
  const speakerTimetable = [
    {
      name: "Mohammad Kaif",
      title: "Cricket: More Than Just A Game",
      time: "10:30",
      description: "Former Indian Cricketer"
    },
    {
      name: "Vartika Nanda",
      title: "Media Reimagined: Breaking Barriers",
      time: "11:45",
      description: "Indian Journalist"
    },
    {
      name: "Deepak Gupta",
      title: "Entrepreneurship: The Path Less Taken",
      time: "13:30",
      description: "Co-Founder, Bombay Shaving Company"
    },
    {
      name: "Paritosh Tripathi",
      title: "Art of Performance: Finding Your Voice",
      time: "14:45",
      description: "Actor and Performer"
    },
    {
      name: "Interactive Session",
      title: "AUDIENCE DISCUSSION AND Q&A",
      time: "16:00",
      description: "Engagement Program"
    },
    {
      name: "Closing Remarks",
      title: "REFLECTIONS AND FUTURE VISION",
      time: "17:15",
      description: "TEDx Organizers"
    }
  ];

  // Past event speakers data exactly matching the image
  const pastEventSpeakers = [
    {
      name: "Lisa Becking",
      title: "ALL THE SEA WE DO NOT SEE",
      time: "14:30"
    },
    {
      name: "Robin Pocornie",
      title: "ERROR 404: HUMAN FACE NOT FOUND",
      time: "14:50"
    },
    {
      name: "Fonger Ypma",
      title: "GROWING BACK ICE, IN THE ARCTIC?",
      time: "15:05"
    },
    {
      name: "Friendred Peng",
      title: "HOW TECHNOLOGY IS CHANGING THE WAY WE EXPERIENCE ART",
      time: "15:22"
    },
    {
      name: "Ma'MaQueen",
      title: "THE REALITY OF LIVING THE FANTASY",
      time: "16:28"
    },
    {
      name: "Impact Program",
      title: "",
      time: "16:45"
    },
    {
      name: "Milio van de Kamp",
      title: "REDEFINING POVERTY: TOWARDS A BETTER UNDERSTANDING OF INEQUALITY",
      time: "17:11"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/40 z-10"></div>

        {/* Background image - use imported image with proper fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${upcomingEvent.featuredImage || 'https://via.placeholder.com/1920x1080?text=TEDx+Event'})`,
            backgroundPosition: 'center 30%'
          }}
        ></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-tedx-red">Events</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover our upcoming and past TEDx events that bring together the brightest minds and biggest ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('event')}
              className={`bg-tedx-red text-white font-bold px-6 py-2 rounded-full text-base transition-all duration-300 ${activeTab === 'event' ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
            >
              Event
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`bg-tedx-red text-white font-bold px-6 py-2 rounded-full text-base transition-all duration-300 ${activeTab === 'past' ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active Tab */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Event Content */}
        {activeTab === 'event' && (
          <div>
            {/* Event Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6">{upcomingEvent.title}</h2>

                <div className="flex items-center text-lg mb-6">
                  <div className="bg-tedx-red rounded-full w-4 h-4 mr-3"></div>
                  <span className="mr-8">{upcomingEvent.date}</span>
                  <span>{upcomingEvent.time}</span>
                </div>

                <div className="mb-6 flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-tedx-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {upcomingEvent.location}
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-tedx-red mb-2">{upcomingEvent.theme.title}</h3>
                  <p className="text-xl italic">{upcomingEvent.theme.description}</p>
                </div>

                <p className="text-lg mb-8">{upcomingEvent.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-tedx-red hover:bg-red-700 text-white py-2 px-5 rounded-full font-bold transition duration-300">
                    View Highlights
                  </button>
                  <button className="border-2 border-white hover:border-tedx-red hover:text-tedx-red text-white py-2 px-5 rounded-full font-bold transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-tedx-red opacity-30 rounded-full blur-3xl"></div>
                <img
                  src={upcomingEvent.featuredImage}
                  alt={upcomingEvent.title}
                  className="w-full h-auto rounded-lg shadow-2xl relative z-10"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x400?text=TEDx+Event";
                  }}
                />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-red-900 opacity-40 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Event Schedule/Timetable */}
            <div className="mt-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Join us for a full day of inspiring talks and meaningful connections
                </p>
              </div>

              {/* Timetable */}
              <div className="w-full max-w-[600px] mx-auto bg-[#161616] rounded-xl overflow-hidden shadow-xl">
                {/* Header */}
                <div className="py-4 px-6 bg-[#111111]">
                  <h3 className="text-center text-sm font-medium tracking-widest text-white uppercase">EVENT</h3>
                  <h4 className="text-center text-[2.2rem] font-bold mt-1 leading-none text-white tracking-tight">SCHEDULE</h4>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-6 py-2 px-6 border-b border-[#2a2a2a] text-[#999999]">
                  <div className="col-span-4 font-bold text-xs uppercase tracking-wide">SPEAKER</div>
                  <div className="col-span-2 text-right font-bold text-xs uppercase tracking-wide">TIME</div>
                </div>

                {/* Speaker Rows */}
                {pastEventSpeakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 py-3 px-6 border-b border-[#2a2a2a]"
                  >
                    <div className="col-span-4">
                      <h4 className="text-lg font-bold text-white">{speaker.name}</h4>
                      {speaker.title && (
                        <p className="text-tedx-red font-bold mt-0.5 text-sm tracking-wide uppercase">{speaker.title}</p>
                      )}
                    </div>
                    <div className="col-span-2 text-right text-2xl font-bold text-white">
                      {speaker.time}
                    </div>
                  </div>
                ))}

                {/* Footer */}
                <div className="py-6 px-6 text-center bg-[#111111]">
                  <p className="text-[#777777] text-xs font-medium tracking-wide uppercase">
                    29 NOVEMBER 2023<br />
                    MUZIEKGEBOUW AAN 'T IJ
                  </p>
                  <p className="mt-3 text-tedx-red text-xs font-bold uppercase tracking-wide">THIS EVENT HAS ENDED</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Past Events Content */}
        {activeTab === 'past' && (
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Past Events</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our previous TEDx events and the ideas that were shared
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {pastEvents.map(event => (
                <div
                  key={event.id}
                  className="bg-[#111111] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="text-sm text-tedx-red font-bold mb-3">{event.date}</div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-400 mb-2">Featured Speaker:</h4>
                      <ul className="space-y-2">
                        {event.speakers.map((speaker, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-tedx-red mr-2">•</span>
                            <div>
                              <span className="font-bold">{speaker.name}</span>
                              <span className="mx-2">|</span>
                              <span className="text-gray-400">{speaker.topic}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <button className="text-tedx-red hover:underline flex items-center">
                        Watch Talks
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-black to-[#150505] py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to be a part of TEDxShivajiCollege?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you're interested in attending, volunteering, or partnering with us, we'd love to have you join our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-involved"
              className="bg-tedx-red hover:bg-red-700 text-white py-2 px-6 rounded-full font-bold transition duration-300"
            >
              Get Involved
            </Link>
            <a
              href="mailto:info@tedxshivajicollege.org"
              className="border-2 border-white hover:border-tedx-red hover:text-tedx-red text-white py-2 px-6 rounded-lg font-bold transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;