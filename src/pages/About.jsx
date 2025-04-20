// src/pages/About.jsx
import React, { useState } from 'react';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Team members data from the PDF
  const teamMembers = [
    // Leadership
    {
      id: 1,
      name: "Mohit Singh Rathore",
      role: "Lead Organizer",
      bio: "BA Hons Economics, 3rd Year",
      image: "/img/team/mohit.png",
      category: "leadership"
    },
    {
      id: 2,
      name: "Joel Chamathil Mohan",
      role: "Lead Co-Organizer",
      bio: "B.Com Hons, 3rd Year",
      image: "/img/team/joel.png",
      category: "leadership"
    },
    {
      id: 3,
      name: "Harsh",
      role: "Co-Organizer",
      bio: "B.Com Hons, 3rd Year",
      image: "/img/team/harsh.png",
      category: "leadership"
    },
    {
      id: 4,
      name: "Priyaranjan",
      role: "Co-Organizer",
      bio: "B.Sc (Hons) Zoology, 3rd Year",
      image: "/img/team/priyaranjan.png",
      category: "leadership"
    },
    
    // Creative Team
    {
      id: 5,
      name: "Simarjeet Singh",
      role: "Head Designer",
      bio: "BA Hons Economics, 3rd Year",
      image: "/img/team/simarjeet.png",
      category: "creative"
    },
    {
      id: 6,
      name: "Ishaan Rana",
      role: "Creative Head",
      bio: "BA Hons Economics, 3rd Year",
      image: "/img/team/ishaan.png",
      category: "creative"
    },
    {
      id: 7,
      name: "Khushi Yadav",
      role: "Creative Co-Head",
      bio: "BA Program, 2nd Year",
      image: "/img/team/khushi-y.png",
      category: "creative"
    },
    {
      id: 8,
      name: "Jasmeet Singh",
      role: "Video Production Head",
      bio: "B.Com Hons, 3rd Year",
      image: "/img/team/jasmeet.png",
      category: "creative"
    },
    
    // Public Relations
    {
      id: 9,
      name: "Rekha Saini",
      role: "Public Relation Head",
      bio: "B.Com Hons, 3rd Year",
      image: "/img/team/rekha.png",
      category: "relations"
    },
    {
      id: 10,
      name: "Vishakha",
      role: "Public Relation Co-Head",
      bio: "BA Program, 2nd Year",
      image: "/img/team/vishakha.png",
      category: "relations"
    },
    
    // Curation
    {
      id: 11,
      name: "Ashwarya Thakur",
      role: "Curator Head",
      bio: "BA Hons Economics, 3rd Year",
      image: "/img/team/ashwarya.png",
      category: "curation"
    },
    {
      id: 12,
      name: "Khushi Chauhan",
      role: "Curator Head",
      bio: "BA Program, 2nd Year",
      image: "/img/team/khushi-c.png",
      category: "curation"
    },
    
    // Tech & Logistics
    {
      id: 13,
      name: "Ayush Mishra",
      role: "Website Manager",
      bio: "B.Sc (Hons) Physics, 2nd Year",
      image: "/img/team/ayush.png",
      category: "tech"
    },
    {
      id: 14,
      name: "Harshit Shree",
      role: "Website Manager",
      bio: "BA Hons Economics, 3rd Year",
      image: "/img/team/harshit.png",
      category: "tech"
    },
    {
      id: 15,
      name: "Piyush Rai",
      role: "Logistics Head",
      bio: "BA Hons Economics, 3rd Year",
      image: "/img/team/piyush.png",
      category: "tech"
    },
    {
      id: 16,
      name: "Pulkit Garg",
      role: "Finance Head",
      bio: "B.Com Hons, 3rd Year",
      image: "/img/team/pulkit.png",
      category: "tech"
    },
    
    // Event Team
    {
      id: 17,
      name: "Aman Singh",
      role: "Event Producer",
      bio: "BA Program, 3rd Year",
      image: "/img/team/aman.png",
      category: "events"
    },
    {
      id: 18,
      name: "Lakshay Nahar",
      role: "Event Producer",
      bio: "B.Com Hons, 3rd Year",
      image: "/img/team/lakshay.png",
      category: "events"
    },
    {
      id: 19,
      name: "Pratham Singh",
      role: "Event Producer",
      bio: "BA Program, 3rd Year",
      image: "/img/team/pratham.png",
      category: "events"
    },
    {
      id: 20,
      name: "Kabir",
      role: "Event Manager",
      bio: "B.Com Hons, 3rd Year",
      image: "/img/team/kabir.png",
      category: "events"
    },
    {
      id: 21,
      name: "Sauma Kumari",
      role: "Event Manager",
      bio: "BA Hons English, 3rd Year",
      image: "/img/team/saumya.png",
      category: "events"
    },
    // Additional profile
    {
      id: 22,
      name: "Ms. Abha Vasal",
      role: "Advisory Board Member",
      bio: "TEDx Coordinator",
      image: "/img/team/john.png",
      category: "advisory"
    }
  ];

  // Filter team members based on active category
  const filteredMembers = activeCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeCategory);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Team' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'creative', name: 'Creative Team' },
    { id: 'relations', name: 'Public Relations' },
    { id: 'curation', name: 'Curation' },
    { id: 'tech', name: 'Tech & Logistics' },
    { id: 'events', name: 'Event Management' },
    { id: 'advisory', name: 'Advisory' }
  ];

  return (
    <div>
      {/* About Hero */}
      <section className="py-24 bg-black text-tedx-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-tedx-red">TEDx</span>ShivajiCollege
            </h1>
            <p className="text-xl">
              Bringing ideas worth spreading to our community
            </p>
          </div>
        </div>
      </section>
      
      {/* What is TEDx */}
      <section className="py-24 bg-tedx-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-tedx-black mb-8">What is TEDx?</h2>
          <div className="max-w-3xl">
            <p className="text-gray-700 mb-4">
              In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
            </p>
            <p className="text-gray-700 mb-4">
              Our event is called TEDxShivajiCollege, where x = independently organized TED event. At our TEDxShivajiCollege event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group.
            </p>
            <p className="text-gray-700">
              The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tedx-black">Meet Our Team</h2>
            <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              The dedicated volunteers who make TEDxShivajiCollege possible
            </p>
          </div>

          {/* Team Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-tedx-red text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-gray-200 flex items-center justify-center text-tedx-red font-bold text-xl"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Fallback text if image fails to load */}
                    <span className="bg-tedx-black/70 p-2 rounded opacity-0 hover:opacity-0 transition-opacity duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tedx-black mb-1">{member.name}</h3>
                  <p className="text-tedx-red font-medium mb-2">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-tedx-purple text-tedx-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8">
              Passionate about spreading ideas? We're always looking for volunteers to join our TEDx team.
            </p>
            <a 
              href="/get-involved" 
              className="inline-block bg-tedx-white text-tedx-red font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 