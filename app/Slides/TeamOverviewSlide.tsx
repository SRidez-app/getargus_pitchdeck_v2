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
      company: 'Amazon',
      companyLogo: '/amazon.png',
      hasExit: false,
      description: 'Proven track record in scaling startups within logistics and building high-performing data science teams at Amazon, Spreetail, and Literati.',
    },
    {
      name: 'Torrey Powell',
      title: 'Founder & Chief Technology Officer',
      image: '/torrey.png',
      expertise: ['Government Tech', '911 Systems', 'Public Safety'],
      company: 'eForce Software',
      companyLogo: '/eforce.png',
      hasExit: true,
      description: 'Deep expertise in government technology, previously served as CTO leading cutting-edge 911 dispatch software that enhanced emergency response systems nationwide.',
    },
    {
      name: 'Ben Cook',
      title: 'Chief Architecture Officer',
      image: '/ben.png',
      expertise: ['Machine Learning', 'Computer Vision', 'AI Architecture'],
      company: 'Hudl',
      companyLogo: '/hudl.png',
      hasExit: true,
      description: 'Harvard alumnus and founder of Sparrow Computing. 8 years as founding lead of Hudl\'s machine learning team, pioneering computer vision solutions that transformed sports analytics.',
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
        13
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

        {/* Team Cards */}
        <div 
          className="grid gap-8 transition-all duration-1000"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            maxWidth: '100%',
            marginBottom: 'clamp(40px, 5vh, 64px)',
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
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Image Container with Exit Badge */}
              <div className="relative w-full bg-gray-200" style={{ height: 'clamp(240px, 22vw, 380px)' }}>
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
                className="flex-1 flex flex-col"
                style={{
                  padding: 'clamp(24px, 2.8vh, 36px)',
                }}
              >
                {/* Name */}
                <h3 
                  className="text-black"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2vw, 30px)',
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
                    fontSize: 'clamp(14px, 1.2vw, 18px)',
                    lineHeight: '130%',
                    marginBottom: 'clamp(16px, 2vh, 20px)',
                    opacity: 0.7,
                  }}
                >
                  {member.title}
                </p>
                
                {/* Company Exit Info */}
                <div 
                  className="flex items-center gap-3"
                  style={{
                    marginBottom: 'clamp(18px, 2.2vh, 24px)',
                    paddingBottom: 'clamp(16px, 2vh, 20px)',
                    borderBottom: '1px solid #E5E7EB',
                  }}
                >
                  <div 
                    className="relative flex items-center justify-center"
                    style={{
                      width: 'clamp(48px, 4.5vw, 64px)',
                      height: 'clamp(48px, 4.5vw, 64px)',
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      border: '2px solid #F3F4F6',
                      padding: '8px',
                    }}
                  >
                    <Image
                      src={member.companyLogo}
                      alt={member.company}
                      width={48}
                      height={48}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'Apercu Pro',
                        fontWeight: 600,
                        fontSize: 'clamp(13px, 1.1vw, 16px)',
                        color: '#6B7280',
                        marginBottom: '2px',
                      }}
                    >
                      {member.hasExit ? 'Exit:' : 'Previously:'}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Apercu Pro',
                        fontWeight: 600,
                        fontSize: 'clamp(15px, 1.3vw, 19px)',
                        color: '#111827',
                      }}
                    >
                      {member.company}
                    </p>
                  </div>
                </div>
                
                {/* Expertise Tags */}
                <div 
                  className="flex flex-wrap gap-2"
                  style={{ marginBottom: 'clamp(18px, 2.2vh, 24px)' }}
                >
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        fontFamily: 'Apercu Pro',
                        fontWeight: 500,
                        fontSize: 'clamp(11px, 1vw, 14px)',
                        padding: 'clamp(5px, 0.6vh, 7px) clamp(12px, 1.1vw, 16px)',
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        borderRadius: '20px',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(14px, 1.1vw, 17px)',
                    fontWeight: 400,
                    lineHeight: '165%',
                    color: '#4B5563',
                  }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div style={{ height: 'clamp(40px, 5vh, 64px)' }} />
      </div>
    </div>
  );
};

export default TeamOverviewSlide;