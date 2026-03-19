// src/components/home/UpcomingEvent.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import event banner image directly
import eventBanner from '../../assets/event-banner.png';

const UpcomingEvent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('April 2, 2025 10:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // This would typically come from an API or CMS
  const nextEvent = {
    title: "TEDxShivajiCollege 2026: Gravity & Glitch",
    date: "April 2, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "ShivajiCollege Auditorium",
    image: eventBanner, // Use the imported image
    description: "Join us for a day of groundbreaking ideas and inspirational talks"
  };

  // Countdown removed for now since date is To be revealed

  return (
    <section className="py-24 bg-tedx-black text-tedx-white relative">

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tedx-white">Next Event</h2>
          <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Event Image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={nextEvent.image}
                alt={nextEvent.title}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=TEDx+Event';
                }}
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-tedx-white mb-4">{nextEvent.title}</h3>
            <div className="mb-6 space-y-2">
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-tedx-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {nextEvent.date}
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-tedx-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {nextEvent.time}
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-tedx-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {nextEvent.location}
              </p>
            </div>

            <p className="text-gray-300 mb-6">{nextEvent.description}</p>

            {/* Countdown */}
            <div className="bg-[#1a1a1a] border border-gray-800 p-4 rounded-lg mb-6">
              {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-tedx-white">{timeLeft.days}</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider text-xs">Days</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-tedx-white">{timeLeft.hours}</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider text-xs">Hours</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-tedx-white">{timeLeft.minutes}</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider text-xs">Mins</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-tedx-white">{timeLeft.seconds}</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider text-xs">Secs</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <div className="text-3xl font-bold text-tedx-white tracking-widest uppercase">Coming soon</div>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <Link
                to="/events"
                className="bg-tedx-red hover:bg-red-700 text-tedx-white font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Learn More
              </Link>
              <Link
                to="/get-involved"
                className="border-2 border-tedx-white hover:border-tedx-red hover:text-tedx-red text-tedx-white font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;