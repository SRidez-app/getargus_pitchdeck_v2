'use client';

import React, { useEffect, useState } from 'react';
import { Zap, Rocket, Target } from 'lucide-react';

interface TimelineSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TimelineSlide: React.FC<TimelineSlideProps> = ({ onNext, onPrevious }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const phases = [
    {
      quarter: 'Q2 2025',
      title: 'Fight for PMF - Lyft Breakthrough',
      emotion: 'The Struggle - Passive AI Model Detection',
      story: "Had conversations with dozens of insurance customers. They only wanted data for disputed claims. Lyft Insurance Meeting - The Breakthrough.",
      icon: <Zap size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'REAL TIME - INSTANT DETECTION - True IP & Value identified',
        'Traffic Alerting is a massive data market',
        'Save lives by notifying 911 instantly',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.5)',
      highlight: true,
    },
    {
      quarter: 'Q3 2025',
      title: 'Passive Detection -> Real-Time with Alert < 10 seconds',
      emotion: 'ACTION: The Mission Begins',
      story: "Massive lift in architecture. Tagging annotation software.",
      icon: <Rocket size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'Automatically retrained every two weeks on updated streams and data',
        'NVIDIA Pipeline Cost Optimizations - 80% cost reduction',
        'Traffic API Application build',
        'V2 Launch: Argus AI (Real-Time Detection)',
      ],
      color: 'rgba(255, 202, 43, 0.12)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
    },
    {
      quarter: 'Q4 2025',
      title: 'Momentum & Traction',
      emotion: 'Market Validation & Growth',
      story: "Marketing started September 15th. DOTs/ITS partnerships: MDOT, NDOT, FDOT. Mobility integrations: Werner, DoorDash, Bringg.com, Sygic.",
      icon: <Target size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        '15 PI Firms Joined - 200 searches',
        'Two signed Insurance Pilot',
        'Feature Build - Wrong-Way Driving, Pedestrians on Highway Detection',
        'Advanced multi-variant model - 10% time savings per commute in Atlanta',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.6)',
      highlight: true,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // RIGHT ARROW: Move forward through phases, then to next slide
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        
        // If we're not at the last phase (Q4), move to next phase
        if (currentPhase < phases.length - 1) {
          setCurrentPhase(prev => prev + 1);
        } 
        // If we're at the last phase (Q4) and onNext exists, go to next slide
        else if (onNext) {
          onNext();
        }
      } 
      // LEFT ARROW: Move backward through phases, then to previous slide
      else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        
        // If we're not at the first phase (Q2), move to previous phase
        if (currentPhase > 0) {
          setCurrentPhase(prev => prev - 1);
        } 
        // If we're at the first phase (Q2) and onPrevious exists, go to previous slide
        else if (onPrevious) {
          onPrevious();
        }
      } 
      // SPACE or ENTER: Same as right arrow
      else if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        
        if (currentPhase < phases.length - 1) {
          setCurrentPhase(prev => prev + 1);
        } else if (onNext) {
          onNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPhase, onNext, onPrevious, phases.length]);

  const currentContent = phases[currentPhase];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden timeline-slide"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Global Styles */}
      <style jsx global>{`
        .timeline-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .timeline-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .timeline-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 202, 43, 0.3);
          border-radius: 4px;
        }
        .timeline-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 202, 43, 0.5);
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
      `}</style>

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
        6
      </div>

      {/* Main Content Container */}
      <div 
        className="relative w-full h-full flex flex-col overflow-y-auto timeline-scroll"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(40px, 5vw, 80px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
        }}
      >
        {/* Header Section */}
        <div 
          className="mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s',
            marginBottom: 'clamp(32px, 4vh, 48px)',
          }}
        >
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
              OUR JOURNEY
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
              lineHeight: '1.1',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            From Breakthrough to{' '}
            <span style={{ color: '#FFCA2B' }}>Momentum</span>
          </h1>
        </div>

        {/* Timeline Progress Indicator */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(12px, 1.5vw, 16px)',
            marginBottom: 'clamp(32px, 4vh, 48px)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s 0.2s',
          }}
        >
          {phases.map((phase, index) => (
            <div
              key={index}
              onClick={() => setCurrentPhase(index)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(8px, 1vh, 12px)',
                flex: 1,
                maxWidth: '200px',
                cursor: 'pointer',
              }}
            >
              {/* Dot */}
              <div
                style={{
                  width: 'clamp(12px, 1.2vw, 16px)',
                  height: 'clamp(12px, 1.2vw, 16px)',
                  borderRadius: '50%',
                  background: index === currentPhase 
                    ? '#FFCA2B' 
                    : index < currentPhase 
                      ? 'rgba(255, 202, 43, 0.5)' 
                      : 'rgba(255, 255, 255, 0.2)',
                  border: index === currentPhase ? '2px solid #FFFFFF' : 'none',
                  transition: 'all 0.3s',
                  boxShadow: index === currentPhase ? '0 0 12px rgba(255, 202, 43, 0.6)' : 'none',
                }}
              />
              {/* Quarter Label */}
              <span
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(12px, 1vw, 14px)',
                  fontWeight: 600,
                  color: index === currentPhase ? '#FFCA2B' : 'rgba(255, 255, 255, 0.6)',
                  transition: 'color 0.3s',
                }}
              >
                {phase.quarter}
              </span>
            </div>
          ))}
        </div>

        {/* Phase Content Card */}
        <div
          key={currentPhase}
          className="fade-in-scale"
          style={{
            background: currentContent.color,
            border: `3px solid ${currentContent.borderColor}`,
            borderRadius: 'clamp(16px, 1.5vw, 24px)',
            padding: 'clamp(32px, 4vh, 48px)',
            marginBottom: 'clamp(32px, 4vh, 48px)',
            boxShadow: currentContent.highlight 
              ? '0 8px 32px rgba(255, 202, 43, 0.3)'
              : '0 4px 16px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Quarter & Icon */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(16px, 2vw, 24px)',
              marginBottom: 'clamp(20px, 2.5vh, 28px)',
            }}
          >
            <div
              style={{
                width: 'clamp(60px, 6vw, 80px)',
                height: 'clamp(60px, 6vw, 80px)',
                background: 'rgba(255, 202, 43, 0.2)',
                borderRadius: 'clamp(12px, 1.2vw, 16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 202, 43, 0.4)',
              }}
            >
              {currentContent.icon}
            </div>
            <div>
              <h2
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: 700,
                  color: '#FFCA2B',
                  marginBottom: 'clamp(4px, 0.5vh, 6px)',
                }}
              >
                {currentContent.quarter}
              </h2>
              <h3
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontStyle: 'italic',
                }}
              >
                {currentContent.emotion}
              </h3>
            </div>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'Tobias',
              fontSize: 'clamp(32px, 3.5vw, 52px)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: '1.2',
              marginBottom: 'clamp(20px, 2.5vh, 28px)',
            }}
          >
            {currentContent.title}
          </h3>

          {/* Story */}
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(16px, 1.4vw, 22px)',
              fontWeight: 400,
              lineHeight: '160%',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 'clamp(28px, 3.5vh, 40px)',
            }}
          >
            {currentContent.story}
          </p>

          {/* Milestones */}
          <div>
            <h4
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(18px, 1.6vw, 24px)',
                fontWeight: 600,
                color: '#FFCA2B',
                marginBottom: 'clamp(16px, 2vh, 20px)',
              }}
            >
              Key Milestones
            </h4>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 1.5vh, 16px)',
              }}
            >
              {currentContent.milestones.map((milestone, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(12px, 1.5vw, 16px)',
                    padding: 'clamp(12px, 1.5vh, 16px)',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderLeft: '3px solid #FFCA2B',
                    borderRadius: '4px',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(6px, 0.6vw, 8px)',
                      height: 'clamp(6px, 0.6vw, 8px)',
                      borderRadius: '50%',
                      background: '#FFCA2B',
                      marginTop: 'clamp(6px, 0.8vh, 8px)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(14px, 1.2vw, 18px)',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '140%',
                    }}
                  >
                    {milestone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'Apercu Pro',
            fontSize: 'clamp(12px, 1vw, 14px)',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic',
            marginTop: 'auto',
            paddingTop: 'clamp(16px, 2vh, 24px)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s 0.4s',
          }}
        >
          {currentPhase < phases.length - 1 
            ? `→ Press arrow key for ${phases[currentPhase + 1].quarter}` 
            : '→ Press arrow key to continue to next slide'}
        </div>
      </div>
    </div>
  );
};

export default TimelineSlide;