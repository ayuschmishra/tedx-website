// src/pages/GetInvolved.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'volunteer', // Default selection
    message: ''
  });

  // State for form submission
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // State for animation
  const [animatedItem, setAnimatedItem] = useState(0);

  // Effect for process step animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedItem(prev => (prev < 4 ? prev + 1 : 0));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'volunteer',
        message: ''
      });
    }, 5000);
  };

  // Involvement options with icons and descriptions
  const involvementOptions = [
    {
      id: 'volunteer',
      title: 'Become a Volunteer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Join our passionate team of volunteers to help organize and execute our TEDx event. Gain valuable experience, expand your network, and be part of something meaningful.',
      benefits: [
        'Expand your professional network',
        'Gain event planning experience',
        'Connect with inspiring speakers',
        'Access to exclusive TEDx community'
      ]
    },
    {
      id: 'speaker',
      title: 'Become a Speaker',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Have an idea worth spreading? Apply to be a speaker at our next TEDx event. Share your unique perspective, innovative ideas, or inspiring story with our audience.',
      benefits: [
        'Share your ideas with a diverse audience',
        'Professional video of your talk',
        'Join the global TEDx speakers community',
        'Amplify your message and personal brand'
      ]
    },
    {
      id: 'sponsor',
      title: 'Become a Sponsor',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Support our mission by becoming a sponsor. Gain visibility for your brand while helping us create a memorable event that spreads innovative ideas throughout our community.',
      benefits: [
        'Brand visibility to diverse, engaged audience',
        'Acknowledgment in all event materials',
        'VIP access to TEDx event',
        'Networking opportunities with speakers and attendees'
      ]
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What skills do I need to volunteer?",
      answer: "We welcome volunteers with diverse skills - from organization and management to creativity and technical abilities. Most importantly, we value enthusiasm, reliability, and teamwork. Training will be provided for specific roles."
    },
    {
      question: "How much time commitment is required for volunteers?",
      answer: "Time commitment varies by role. In the months leading up to the event, most volunteers contribute 3-5 hours per week. As the event approaches, this may increase to 5-10 hours weekly, with full-day commitment on the event day."
    },
    {
      question: "What's the process for becoming a speaker?",
      answer: "Potential speakers should submit their idea through our online form. Our curation team reviews all submissions and selects ideas that align with our theme. Selected speakers receive coaching and support to develop their talk."
    },
    {
      question: "What sponsorship packages do you offer?",
      answer: "We offer various sponsorship tiers from Bronze to Platinum, each with different benefits and visibility opportunities. We also create custom packages to align with specific marketing objectives. Contact us for our detailed sponsorship prospectus."
    },
    {
      question: "Can I attend the event as just an audience member?",
      answer: "Absolutely! Ticket sales usually open 2-3 months before the event. Follow our social media channels for announcements on ticket availability."
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      title: "Apply for TEDx",
      description: "Select your ticket type and complete a short application to tell us more about you.",
      image: "/src/assets/opbanner1.png"
    },
    {
      number: 2,
      title: "Give us time to review",
      description: "We review every application carefully to grow the community in a thoughtful way.",
      image: "/src/assets/opbanner2.png"
    },
    {
      number: 3,
      title: "Join TEDx",
      description: "After approval you'll receive your registration details to join this unique experience.",
      image: "/src/assets/opbanner3.png"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 bg-tedx-black text-tedx-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get <span className="text-tedx-red">Involved</span>
            </h1>
            <p className="text-xl">
              Join our community and help spread ideas worth sharing
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Involvement Options */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ways to Get Involved</h2>
            <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              There are many ways to be a part of the TEDxShivajiCollege community. 
              Explore the opportunities below and find the best fit for you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {involvementOptions.map((option) => (
              <div 
                key={option.id} 
                className="bg-[#161616] border border-gray-800 rounded-lg p-8 shadow-xl transition-all duration-500 hover:shadow-tedx-red/30 hover:border-tedx-red transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-start">
                  <div className="text-tedx-red mb-6">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{option.title}</h3>
                    <p className="text-gray-300 mb-4">{option.description}</p>
                    
                    <h4 className="font-semibold text-tedx-red mb-2">Benefits:</h4>
                    <ul className="space-y-1 mb-6">
                      {option.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-4 h-4 text-tedx-red mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className="inline-flex items-center text-tedx-red hover:text-white font-semibold transition-colors duration-300"
                      onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Timeline Section with Image Cards */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Process</h2>
            <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Here's what you can expect when you decide to get involved with TEDxShivajiCollege
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            {/* Connecting swirling line */}
            <div className="hidden md:block absolute z-0">
              <svg width="100%" height="400" viewBox="0 0 1200 400" className="absolute top-1/2 left-0 -translate-y-1/2">
                <path 
                  d="M100,200 C300,100 500,300 700,200 C900,100 1100,300 1300,200" 
                  fill="none" 
                  stroke="#e62b1e" 
                  strokeWidth="6" 
                  strokeDasharray="10,10"
                  className="path-animation"
                />
                <circle cx="200" cy="200" r="12" fill="#e62b1e" />
                <circle cx="600" cy="200" r="12" fill="#e62b1e" />
                <circle cx="1000" cy="200" r="12" fill="#e62b1e" />
              </svg>
            </div>
            
            {/* Mobile connecting line (vertical) */}
            <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-tedx-red transform -translate-x-1/2 z-0"></div>
            
            {/* Process steps as image cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`transform transition-all duration-700 ${animatedItem === index + 1 ? 'scale-105' : 'scale-100'}`}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-2xl h-full">
                    {/* Image as background */}
                    <div className="h-60 md:h-72 overflow-hidden relative">
                      <img 
                        src={step.image} 
                        alt={`Step ${step.number}: ${step.title}`} 
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-tedx-red flex items-center justify-center text-white font-bold text-lg">
                        {step.number}
                      </div>
                      
                      {/* Step title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="p-6 bg-[#161616] border-t-2 border-tedx-red">
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CSS for path animation */}
        <style jsx>{`
          .path-animation {
            stroke-dashoffset: 1000;
            animation: dash 5s linear forwards infinite;
          }
          
          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className="mb-8 border-b border-gray-800 pb-8 last:border-0 last:pb-0 hover:border-tedx-red transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-tedx-red mr-3">{(index + 1).toString().padStart(2, '0')}</span>
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#161616] rounded-lg shadow-2xl overflow-hidden border border-gray-800">
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl font-bold text-white mb-2">Express Your Interest</h2>
                <div className="h-1 w-16 bg-tedx-red mb-6"></div>
                <p className="text-gray-300 mb-8">
                  Fill out the form below to let us know how you'd like to get involved with TEDxShivajiCollege.
                  Our team will reach out to you with more information.
                </p>
                
                {formSubmitted ? (
                  <div className="bg-tedx-red/20 border-l-4 border-tedx-red p-4 mb-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-tedx-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-white">
                          Thank you for your interest! We've received your information and will contact you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#161616] border border-gray-700 rounded-lg focus:ring-tedx-red focus:border-tedx-red text-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#161616] border border-gray-700 rounded-lg focus:ring-tedx-red focus:border-tedx-red text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#161616] border border-gray-700 rounded-lg focus:ring-tedx-red focus:border-tedx-red text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">I'm Interested In</label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#161616] border border-gray-700 rounded-lg focus:ring-tedx-red focus:border-tedx-red text-white"
                          required
                        >
                          <option value="volunteer">Volunteering</option>
                          <option value="speaker">Speaking</option>
                          <option value="sponsor">Sponsorship</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 bg-[#161616] border border-gray-700 rounded-lg focus:ring-tedx-red focus:border-tedx-red text-white"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-tedx-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-[#150505] py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with the latest news, events, and opportunities from TEDxShivajiCollege
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 bg-[#161616] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-tedx-red text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-tedx-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;