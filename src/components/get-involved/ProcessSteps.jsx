// src/components/get-involved/ProcessSteps.jsx
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { processStepImages, getFallbackImage } from '../../utils/PlaceholderImagesConfig';

const ProcessSteps = () => {
  const [animatedItem, setAnimatedItem] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);
  const [wave, setWave] = useState({ d: '', width: 0, height: 0 });

  // Process steps data - matching second image reference
  const processSteps = [
    {
      number: 1,
      title: "Apply for TEDx",
      description: "Select your ticket type and complete a short application to tell us more about you.",
      image: processStepImages.step1
    },
    {
      number: 2,
      title: "Give us time to review",
      description: "We review every application carefully to grow the community in a thoughtful way.",
      image: processStepImages.step2
    },
    {
      number: 3,
      title: "Join TEDx",
      description: "After approval you'll receive your registration details to join this unique experience.",
      image: processStepImages.step3
    }
  ];

  // Initialize refs array when component mounts
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, processSteps.length);
  }, [processSteps.length]);

  // Build a flowing path from card to card, using the cards' real positions
  // so it lines up on every screen size (mobile and desktop).
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const buildWave = () => {
      const box = container.getBoundingClientRect();
      // offsetLeft/offsetTop ignore the fade-in transform, so the line doesn't jump
      const cards = cardRefs.current.filter(Boolean).map(card => ({
        left: card.offsetLeft,
        right: card.offsetLeft + card.offsetWidth,
        top: card.offsetTop,
        bottom: card.offsetTop + card.offsetHeight,
        cx: card.offsetLeft + card.offsetWidth / 2,
        cy: card.offsetTop + card.offsetHeight / 2,
      }));
      if (cards.length < 2) return;

      // Smooth river-like curves: each one slips out from under a card and
      // flows into the next. The ends are tucked under the cards (inset).
      const isDesktop = box.width >= 768;
      const inset = 24;
      let d = '';
      for (let i = 0; i < cards.length - 1; i++) {
        const from = cards[i];
        const to = cards[i + 1];
        let start, end, c1, c2;

        if (isDesktop) {
          // Leave from the side facing the next card, sweep across, then
          // curve down into the top of the next card.
          const goingRight = to.cx > from.cx;
          start = { x: goingRight ? from.right - inset : from.left + inset, y: from.cy };
          end = { x: to.cx, y: to.top + inset };
          c1 = { x: start.x + (end.x - start.x) * 0.75, y: start.y };
          c2 = { x: end.x, y: start.y + (end.y - start.y) * 0.35 };
        } else {
          // Stacked cards: a gentle S-bend through the gap.
          const sway = box.width * 0.22;
          const side = i % 2 === 0 ? 1 : -1;
          start = { x: from.cx, y: from.bottom - inset };
          end = { x: to.cx, y: to.top + inset };
          const dy = end.y - start.y;
          c1 = { x: start.x + sway * side, y: start.y + dy * 0.5 };
          c2 = { x: end.x - sway * side, y: end.y - dy * 0.5 };
        }

        // Join segments underneath the card so the path stays continuous.
        d += i === 0 ? `M${start.x},${start.y}` : ` L${start.x},${start.y}`;
        d += ` C${c1.x},${c1.y} ${c2.x},${c2.y} ${end.x},${end.y}`;
      }
      setWave({ d, width: box.width, height: box.height });
    };

    buildWave();
    const resizeObserver = new ResizeObserver(buildWave);
    resizeObserver.observe(container);
    cardRefs.current.forEach(card => card && resizeObserver.observe(card));
    return () => resizeObserver.disconnect();
  }, []);

  // Handle scroll-based animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-100px',
      threshold: 0.3, // When element is 30% visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the index from the data attribute
          const index = parseInt(entry.target.dataset.index);
          setAnimatedItem(index);
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe each card element
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // For automatic animation cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedItem(prev => (prev < processSteps.length - 1 ? prev + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [processSteps.length]);

  return (
    <section className="py-24 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Process</h2>
          <div className="h-1 w-24 bg-tedx-red mx-auto mt-3"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Here&apos;s what you can expect when you decide to get involved with TEDxShivajiCollege
          </p>
        </div>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .path-animation {
          animation: dash 1.5s linear infinite;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -16;
          }
        }
        
        .wave-dot {
          filter: drop-shadow(0 0 6px #e62b1e);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .path-animation { animation: none; }
          .wave-dot { display: none; }
        }
      `}</style>
        
        <div className="max-w-6xl mx-auto relative" ref={containerRef}>
          {/* Wavy connecting line - drawn behind the cards, follows their real positions */}
          {wave.d && (
            <svg
              className="absolute inset-0 z-0 pointer-events-none"
              width={wave.width}
              height={wave.height}
              viewBox={`0 0 ${wave.width} ${wave.height}`}
              aria-hidden="true"
            >
              <path d={wave.d} fill="none" stroke="#e62b1e" strokeOpacity="0.25" strokeWidth="2" />
              <path
                id="process-wave-path"
                d={wave.d}
                fill="none"
                stroke="#e62b1e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="8,8"
                className="path-animation"
              />
              <circle r="6" fill="#e62b1e" className="wave-dot">
                <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#process-wave-path" />
                </animateMotion>
              </circle>
            </svg>
          )}

          {/* Process steps as alternating cards (similar to your second image) */}
          <div className="relative z-10">
            {processSteps.map((step, index) => {
              
              return (
                <div 
                  key={index} 
                  ref={el => cardRefs.current[index] = el}
                  data-index={index}
                  className={`
                    mb-24 last:mb-0 md:mb-12
                    opacity-0 translate-y-8
                    transition-all duration-700
                    ${index === 0 ? 'md:ml-0' : ''}
                    ${index === 1 ? 'md:ml-auto md:mr-0' : ''}
                    ${index === 2 ? 'md:ml-0 md:mr-auto' : ''}
                  `}
                  style={{
                    width: '100%',
                    maxWidth: '350px',
                    marginLeft: index === 1 ? 'auto' : index === 0 ? '10%' : '',
                    marginRight: index === 1 ? '10%' : index === 2 ? 'auto' : '',
                  }}
                >
                  <div 
                    className={`
                      relative overflow-hidden rounded-lg shadow-2xl bg-[#161616]
                      transform transition-all duration-500
                      ${animatedItem === index ? 'scale-105 shadow-tedx-red/30' : 'scale-100'}
                    `}
                  >
                    {/* Image container */}
                    <div className="h-48 overflow-hidden relative">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${step.image || getFallbackImage(step.number, 'process')})`,
                        }}
                      ></div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-tedx-red flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      
                      {/* Title at bottom of image */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description box */}
                    <div className="p-6 bg-[#161616] border-t-2 border-tedx-red">
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

