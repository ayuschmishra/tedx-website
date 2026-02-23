// src/components/home/Hero.jsx
import { Link } from 'react-router-dom';

// If you have a video background, you could reference it like this (from public folder):
// const videoBackground = "/videos/home-banner.mp4";

const Hero = () => {
  return (
    <div className="relative bg-tedx-black h-screen flex items-center">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-tedx-black to-transparent opacity-70"></div>

      {/* 
        Background Video - using a URL that seems more stable
        For local development, you should put your video in the public folder
        and reference it with just the path like "/videos/home-banner.mp4"
      */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        autoPlay
        playsInline
      >
        <source
          src="https://cdn.prod.website-files.com/62165efbce6bcc862200724a/67082a0cef3a219a8958dab2_HomeBanner-transcode.mp4"
          type="video/mp4"
        />
        {/* Fallback text if video fails to load */}
        Your browser does not support the video tag.
      </video>

      {/* Vignette effect at the bottom for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-tedx-black via-tedx-black/80 to-transparent z-10"></div>

      <div className="container mx-auto px-6 lg:px-8 z-20 text-tedx-white">
        <div className="max-w-2xl pl-0 md:pl-4 lg:pl-8">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-tedx-red">TEDx</span>ShivajiCollege
            </h1>
            <h2 className="text-2xl md:text-3xl font-light">Ideas Worth Spreading</h2>
          </div>

          <p className="text-xl mb-8">
            Join us for a day of inspiring talks, meaningful connections, and ideas that can change the world.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/events"
              className="bg-tedx-red hover:bg-red-700 text-tedx-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              Upcoming Events
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-tedx-white hover:border-tedx-red hover:text-tedx-red text-tedx-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;