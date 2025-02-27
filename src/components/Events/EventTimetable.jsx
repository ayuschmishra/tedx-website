// src/components/events/EventTimetable.jsx
import React from 'react';

const EventTimetable = () => {
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
    <div className="w-full max-w-[720px] mx-auto bg-[#161616] rounded-lg overflow-hidden shadow-xl">
      {/* Header */}
      <div className="py-5 px-8 bg-[#111111]">
        <h3 className="text-center text-base font-medium tracking-widest text-white uppercase">TIMETABLE</h3>
        <h4 className="text-center text-[2.5rem] font-bold mt-2 leading-none text-white tracking-tight">Our Speakers</h4>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-6 py-3 px-8 border-b border-[#2a2a2a] text-[#999999]">
        <div className="col-span-4 font-bold text-sm uppercase tracking-wide">SPEAKER</div>
        <div className="col-span-2 text-right font-bold text-sm uppercase tracking-wide">TIME</div>
      </div>
      
      {/* Speaker Rows */}
      {pastEventSpeakers.map((speaker, index) => (
        <div 
          key={index} 
          className="grid grid-cols-6 py-5 px-8 border-b border-[#2a2a2a]"
        >
          <div className="col-span-4">
            <h4 className="text-xl font-bold text-white">{speaker.name}</h4>
            {speaker.title && (
              <p className="text-tedx-red font-bold mt-1 text-base tracking-wide uppercase">{speaker.title}</p>
            )}
          </div>
          <div className="col-span-2 text-right text-3xl font-bold text-white">
            {speaker.time}
          </div>
        </div>
      ))}
      
      {/* Footer */}
      <div className="py-8 px-8 text-center bg-[#111111]">
        <p className="text-[#777777] text-sm font-medium tracking-wide uppercase">
          29 NOVEMBER 2023<br />
          MUZIEKGEBOUW AAN 'T IJ
        </p>
        <p className="mt-5 text-tedx-red text-sm font-bold uppercase tracking-wide">THIS EVENT HAS ENDED</p>
      </div>
    </div>
  );
};

export default EventTimetable;