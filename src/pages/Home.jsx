// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import UpcomingEvent from '../components/home/UpcomingEvent';
import AboutSection from '../components/home/AboutSection';
import FeaturedSpeakers from '../components/home/FeaturedSpeakers';

const Home = () => {
  return (
    <div>
      {/* Full-screen hero section */}
      <Hero />
      
      {/* Upcoming event with countdown */}
      <UpcomingEvent />
      
      {/* About TEDx section */}
      <AboutSection />
      
      {/* Featured speakers */}
      <FeaturedSpeakers />
    </div>
  );
};

export default Home;