// src/pages/About.jsx
import React, { useState } from 'react';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Team members data
  const teamMembers = [
    // Advisory
    {
      id: 15,
      name: "Ms. Abha Vasal",
      role: "Advisory Board Member",
      bio: "TEDx Coordinator",
      image: "/img/team/john.png",
      category: "advisory"
    },

    // Leadership
    {
      id: 1,
      name: "Khushi Chauhan",
      role: "Licensee",
      bio: "BA Program, 3rd Year",
      image: "/img/team/khushi-c.webp",
      category: "leadership"
    },
    {
      id: 2,
      name: "Ayush Joshia",
      role: "Co-Licensee",
      bio: "B.Sc Physics Hons, 3rd Year",
      image: "/img/team/ayush-j.webp",
      category: "leadership"
    },
    {
      id: 3,
      name: "Pratham Nagpal",
      role: "CO-Organizer",
      bio: "BA Program, 4th Year",
      image: "/img/team/pratham.webp",
      category: "leadership"
    },
    {
      id: 4,
      name: "Ayush Mishra",
      role: "Executive Producer",
      bio: "B.Sc Physics Hons, 3rd Year",
      image: "/img/team/ayusch.webp",
      category: "leadership"
    },
    {
      id: 5,
      name: "Mayank Ray",
      role: "Event Producer",
      bio: "BA Program, 3rd Year",
      image: "/img/team/mayank.webp",
      category: "leadership"
    },

    // Council
    {
      id: 6,
      name: "Ashish Giri",
      role: "Tech Head",
      bio: "B.A. English Hons",
      image: "/img/team/ashish.webp",
      category: "council"
    },
    {
      id: 7,
      name: "Swaraj Priyadarshi",
      role: "Tech Head",
      bio: "Tech Specialist",
      image: "/img/team/swaraj.webp",
      category: "council"
    },

    {
      id: 8,
      name: "Somya",
      role: "Design Head",
      bio: "B.A. Economics Hons",
      image: "/img/team/somya.webp",
      category: "council"
    },

    {
      id: 9,
      name: "Anshika",
      role: "Logistics Head",
      bio: "English Hons, 2nd Year",
      image: "/img/team/anshika.webp",
      category: "council"
    },
    {
      id: 10,
      name: "Reyansh",
      role: "Operations Head",
      bio: "B.A. Prog, 2nd Year",
      image: "/img/team/reyansh.webp",
      category: "council"
    },

    {
      id: 11,
      name: "Mahniya Gautam",
      role: "Finance Head",
      bio: "B.A. Economics Hons, 3rd Year",
      image: "/img/team/mahniya.webp",
      category: "council"
    },

    {
      id: 12,
      name: "Alya Mehta",
      role: "Curation Head",
      bio: "B.A. Economics Hons, 1st Year",
      image: "/img/team/alya.webp",
      category: "council"
    },

    {
      id: 13,
      name: "Shreya Bansal",
      role: "PR Head",
      bio: "B.Com Hons, 2nd Year",
      image: "/img/team/shreya.webp",
      category: "council"
    },

    {
      id: 14,
      name: "Hiteshi",
      role: "Social Media Head",
      bio: "BA Prog, 3rd Year",
      image: "/img/team/hiteshi.webp",
      category: "council"
    }
  ];

  // Filter team members based on active category
  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === activeCategory);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Team' },
    { id: 'advisory', name: 'Advisory' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'council', name: 'Council' }
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
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