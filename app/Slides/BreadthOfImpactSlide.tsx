'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AlertCircle, Camera, Phone, Users, Clock, XCircle, AlertTriangle } from 'lucide-react';

interface TheImpactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TheImpactSlide: React.FC<TheImpactSlideProps> = ({ onNext, onPrevious }) => {
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 so first step is 0
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Manual click-through only - removed auto-advance
  const handleClick = () => {
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
    } else if (onNext) {
      onNext();
    }
  };

  // Auto-scroll to show steps 4-7 on smaller screens
  useEffect(() => {
    if (currentStep >= 3 && containerRef.current) {
      const container = containerRef.current;
      const targetScroll = container.scrollHeight * 0.4; // Scroll to show bottom half
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  }, [currentStep]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'Enter') {
        if (currentStep < 7) {
          setCurrentStep(prev => prev + 1);
        } else if (onNext) {
          onNext();
        }
      } else if (event.key === 'ArrowLeft') {
        if (currentStep > 0) {
          setCurrentStep(prev => prev - 1);
        } else if (onPrevious) {
          onPrevious();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, onNext, onPrevious]);

  const storySteps = [
    {
      time: '2:47 PM',
      title: 'Traffic Congestion Builds',
      description: '',
      icon: <AlertTriangle size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(220, 53, 69, 0.12)',
      borderColor: 'rgba(220, 53, 69, 0.5)',
      pulse: false,
    },
    {
      time: '2:49 PM',
      title: 'DOT - 1000s of Cameras, Zero Eyes',
      description: '',
      icon: <Camera size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(220, 53, 69, 0.15)',
      borderColor: 'rgba(220, 53, 69, 0.5)',
      pulse: false,
    },
    {
      time: '2:50 PM',
      title: 'Accident is undetected.....',
      description: '',
      icon: <XCircle size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(220, 53, 69, 0.18)',
      borderColor: 'rgba(220, 53, 69, 0.6)',
      pulse: false,
    },
    {
      time: '2:53 PM',
      title: '3 minutes late 911 call',
      description: '',
      icon: <Phone size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(220, 53, 69, 0.22)',
      borderColor: 'rgba(220, 53, 69, 0.6)',
      pulse: false,
    },
    {
      time: '2:55 PM',
      title: 'DOT still unaware.',
      description: '',
      icon: <AlertCircle size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(220, 53, 69, 0.25)',
      borderColor: 'rgba(220, 53, 69, 0.6)',
      pulse: false,
    },
    {
      time: '3:02 PM',
      title: 'Traffic Piles with no alerts',
      description: '',
      icon: <Clock size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(220, 53, 69, 0.28)',
      borderColor: 'rgba(220, 53, 69, 0.6)',
      pulse: false,
    },
    {
      time: '3:15 PM',
      title: 'A Life Lost',
      description: '',
      icon: <Users size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(0, 0, 0, 0.7)',
      borderColor: 'rgba(220, 53, 69, 0.8)',
      pulse: false,
    },
    {
      time: 'Days Later',
      title: 'Tragedy turns into a nightmare',
      description: 'Disputed fault = No Justice',
      icon: <XCircle size={40} color="#FFFFFF" strokeWidth={2.5} />,
      color: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      pulse: false,
    },
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={handleClick}
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse-red {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.03);
          }
        }
        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          60% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .pulse-box {
          animation: pulse-red 2s ease-in-out infinite;
        }
        .pop-in {
          animation: pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        /* Scrollbar Styles */
        .impact-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .impact-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .impact-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 202, 43, 0.3);
          border-radius: 4px;
        }
        .impact-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 202, 43, 0.5);
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
        3
      </div>

      {/* Scrollable Content Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full overflow-y-auto impact-scroll"
        style={{
          padding: 'clamp(24px, 3vh, 48px) clamp(24px, 3vw, 64px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
        }}
      >

        {/* Title Section */}
        <div 
          style={{ 
            marginBottom: 'clamp(32px, 4vh, 56px)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s',
          }}
        >
          <div
            style={{
              width: 'fit-content',
              paddingTop: 'clamp(6px, 0.8vh, 8px)',
              paddingBottom: 'clamp(6px, 0.8vh, 8px)',
              marginBottom: 'clamp(16px, 2vh, 24px)',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 1.8vw, 36px)',
                lineHeight: '1.2',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              THE REALITY TODAY
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
              fontSize: 'clamp(32px, 4vw, 64px)',
              lineHeight: '1.1',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: 'clamp(8px, 1vh, 12px)',
            }}
          >
            A Preventable <span style={{ color: '#DC3545' }}>Tragedy</span>
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(14px, 1.2vw, 20px)',
              color: 'rgba(255, 255, 255, 0.7)',
              fontStyle: 'italic',
            }}
          >
            Click to watch how the system fails, step by step
          </p>
        </div>

        {/* Timeline Grid - 4 Icons Per Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(16px, 2vw, 24px)',
            maxWidth: '100%',
            marginBottom: 'clamp(32px, 4vh, 48px)',
          }}
        >
          {storySteps.map((step, index) => (
            <div
              key={index}
              className={currentStep >= index ? 'pop-in' : ''}
              style={{
                opacity: currentStep >= index ? 1 : 0.2,
                transform: currentStep >= index ? 'scale(1)' : 'scale(0.95)',
                transition: 'opacity 0.3s, transform 0.3s',
              }}
            >
              <div
                className={step.pulse && currentStep === index ? 'pulse-box' : ''}
                style={{
                  background: step.color,
                  border: `3px solid ${step.borderColor}`,
                  borderRadius: 'clamp(12px, 1.2vw, 16px)',
                  padding: 'clamp(16px, 2vh, 24px)',
                  minHeight: 'clamp(200px, 22vh, 280px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: currentStep === index 
                    ? '0 8px 32px rgba(220, 53, 69, 0.4)'
                    : currentStep > index
                      ? '0 4px 16px rgba(0, 0, 0, 0.3)'
                      : 'none',
                }}
              >
                {/* Active Indicator */}
                {currentStep === index && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'clamp(12px, 1.5vh, 16px)',
                      right: 'clamp(12px, 1.5vw, 16px)',
                      width: 'clamp(8px, 1vw, 12px)',
                      height: 'clamp(8px, 1vw, 12px)',
                      borderRadius: '50%',
                      background: '#FFCA2B',
                      boxShadow: '0 0 12px rgba(255, 202, 43, 0.8)',
                      animation: 'pulse-red 1.5s ease-in-out infinite',
                    }}
                  />
                )}

                {/* Time Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    background: '#FFCA2B',
                    color: '#000000',
                    padding: 'clamp(4px, 0.5vh, 6px) clamp(10px, 1.2vw, 14px)',
                    borderRadius: 'clamp(4px, 0.5vw, 6px)',
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: 'clamp(11px, 1vw, 14px)',
                    fontWeight: 700,
                    marginBottom: 'clamp(12px, 1.5vh, 16px)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {step.time}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 'clamp(50px, 5vw, 70px)',
                    height: 'clamp(50px, 5vw, 70px)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(12px, 1.5vh, 16px)',
                    border: `2px solid ${step.borderColor}`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(16px, 1.5vw, 22px)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    marginBottom: step.description ? 'clamp(8px, 1vh, 12px)' : '0',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                {step.description && (
                  <p
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(13px, 1.1vw, 16px)',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: '1.4',
                      flex: 1,
                    }}
                  >
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Show after all steps - BIGGER BOX */}
        {currentStep >= 7 && (
          <div
            className="pop-in"
            style={{
              textAlign: 'center',
              maxWidth: '100%',
              margin: '0 auto',
              padding: 'clamp(48px, 6vh, 80px) clamp(32px, 4vw, 64px)',
              background: 'rgba(0, 0, 0, 0.8)',
              border: '4px solid rgba(255, 202, 43, 0.6)',
              borderRadius: 'clamp(16px, 2vw, 24px)',
              boxShadow: '0 8px 40px rgba(255, 202, 43, 0.3)',
            }}
          >
            <p
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(36px, 4vw, 72px)',
                fontWeight: 600,
                color: '#FFCA2B',
                lineHeight: '1.2',
                marginBottom: 'clamp(16px, 2vh, 24px)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              ARGUS AI PREVENTS ALL OF THIS
            </p>
          </div>
        )}

        {/* Bottom spacing */}
        <div style={{ height: 'clamp(32px, 4vh, 48px)' }} />
      </div>
    </div>
  );
};

export default TheImpactSlide;