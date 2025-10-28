'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface TeamOverviewSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TeamOverviewSlide: React.FC<TeamOverviewSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (event.key === 'ArrowLeft' && onPrevious) {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious]);

  const teamMembers = [
    {
      name: 'Robert Putt',
      title: 'Founder & CEO',
      image: '/robert.png',
      expertise: ['Logistics', 'Data Science', 'Startup Scaling'],
      description: 'Robert Putt has a proven track record in scaling startups within the logistics sector and building high-performing data science teams. With deep logistics and data science experience from Amazon, Spreetail and Literati, he\'s transformed industries with vision and innovation.',
    },
    {
      name: 'Torrey Powell',
      title: 'Founder & Chief Technology Officer',
      image: '/torrey.png',
      expertise: ['Government Tech', '911 Systems', 'Public Safety'],
      description: 'Torrey Powell brings deep expertise in government technology as our CTO. He previously served as CTO, leading the development of cutting-edge 911 dispatch software that enhanced emergency response systems nationwide. His visionary leadership culminated in a successful exit, delivering scalable solutions for public safety infrastructure.',
    },
    {
      name: 'Ben Cook',
      title: 'Chief Architecture Officer',
      image: '/ben.png',
      expertise: ['Machine Learning', 'Computer Vision', 'AI Architecture'],
      description: 'Ben Cook is the CAO of Argus AI. Previously founded Sparrow Computing, where he specializes in building machine learning systems for entrepreneurs. A Harvard alumnus with advanced training in machine learning, scientific computing, and data science, Ben was the key driving force behind Hudl\'s computer vision success with 8 years as the founding lead member of the machine learning team, pioneering innovative tech solutions that transformed sports analytics.',
    },
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number */}
      <div 
        className="fixed bottom-8 right-8 text-white z-50"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        10
      </div>

      {/* Scrollable Content Container */}
      <div 
        className="relative w-full h-full overflow-y-auto"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(40px, 5vw, 80px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            width: 8px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background: rgba(255, 202, 43, 0.3);
            border-radius: 4px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 202, 43, 0.5);
          }
        `}</style>

        {/* Title Section */}
        <div style={{ marginBottom: 'clamp(40px, 5vh, 64px)' }}>
          <div
            style={{
              width: 'fit-content',
              paddingTop: 'clamp(6px, 0.8vh, 8px)',
              paddingBottom: 'clamp(6px, 0.8vh, 8px)',
              marginBottom: 'clamp(24px, 3vh, 40px)',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: 'clamp(24px, 2vw, 36px)',
                lineHeight: '1.2',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              OUR TEAM
            </h2>
            <div 
              style={{
                borderBottom: '3px solid #FFCA2B',
                width: '100%',
                marginTop: 'clamp(6px, 0.8vh, 8px)',
              }}
            />
          </div>
          
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: 'clamp(40px, 4.5vw, 72px)',
              lineHeight: '1.2',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            Leadership{' '}
            <span style={{ color: '#FFCA2B' }}>& Track Record</span>
          </h1>
        </div>

        {/* Team Photo Cards */}
        <div 
          className="grid gap-6 transition-all duration-1000"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            maxWidth: '100%',
            marginBottom: 'clamp(56px, 7vh, 80px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
          }}
        >
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white overflow-hidden flex flex-col transition-all duration-1000"
              style={{
                borderRadius: 'clamp(16px, 1.5vw, 20px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transitionDelay: `${index * 150 + 400}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative w-full bg-gray-200" style={{ height: 'clamp(220px, 20vw, 350px)' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {/* Yellow accent bar at bottom of image */}
                <div 
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: 'clamp(4px, 0.5vh, 6px)', backgroundColor: '#FFCA2B' }}
                />
              </div>
              
              {/* Card Content */}
              <div 
                className="flex-1 flex flex-col justify-center"
                style={{
                  padding: 'clamp(20px, 2.5vh, 32px)',
                }}
              >
                {/* Name */}
                <h3 
                  className="text-black"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 1.8vw, 28px)',
                    lineHeight: '120%',
                    marginBottom: 'clamp(6px, 0.8vh, 8px)',
                  }}
                >
                  {member.name}
                </h3>
                
                {/* Title */}
                <p 
                  className="text-black"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 1.1vw, 18px)',
                    lineHeight: '130%',
                    marginBottom: 'clamp(16px, 2vh, 20px)',
                    opacity: 0.8,
                  }}
                >
                  {member.title}
                </p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        fontFamily: 'Apercu Pro',
                        fontWeight: 500,
                        fontSize: 'clamp(11px, 1vw, 14px)',
                        padding: 'clamp(4px, 0.5vh, 6px) clamp(10px, 1vw, 14px)',
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        borderRadius: '20px',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accomplishments Section Header */}
        {/* <div 
          className="transition-all duration-1000"
          style={{
            marginBottom: 'clamp(32px, 4vh, 48px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '800ms',
          }}
        >
          <h2
            style={{
              fontFamily: 'Inter, var(--font-inter)',
              fontWeight: 600,
              fontSize: 'clamp(28px, 2.5vw, 40px)',
              lineHeight: '1.3',
              color: '#FFCA2B',
              marginBottom: 'clamp(8px, 1vh, 12px)',
            }}
          >
            Track Record & Accomplishments
          </h2>
          <div 
            style={{
              width: 'clamp(120px, 15vw, 200px)',
              height: '3px',
              background: '#FFCA2B',
            }}
          />
        </div> */}

        {/* Detailed Accomplishments */}
        {/* <div 
          className="w-full space-y-6"
          style={{
            maxWidth: '100%',
          }}
        >
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150 + 1000}ms`,
              }}
            > */}
              {/* Accomplishment Card */}
              {/* <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(164, 179, 255, 0.3)',
                  borderRadius: 'clamp(16px, 1.5vw, 20px)',
                  padding: 'clamp(24px, 3vh, 40px) clamp(28px, 3.5vw, 48px)',
                }}
              >
                {/* Name and Title */}
                {/* <div style={{ marginBottom: 'clamp(16px, 2vh, 20px)' }}>
                  <h3
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(24px, 2.2vw, 36px)',
                      fontWeight: 700,
                      color: '#FFCA2B',
                      marginBottom: 'clamp(8px, 1vh, 12px)',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(16px, 1.4vw, 22px)',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {member.title}
                  </p>
                </div>  */}

                {/* Description */}
                {/* <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(15px, 1.2vw, 20px)',
                    fontWeight: 400,
                    lineHeight: '165%',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Bottom Spacing */}
        <div style={{ height: 'clamp(40px, 5vh, 64px)' }} />
      </div>
    </div>
  );
};

export default TeamOverviewSlide;