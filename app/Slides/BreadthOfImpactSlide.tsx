'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Camera, Phone, Clock, XCircle } from 'lucide-react';

interface BreadthOfImpactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const BreadthOfImpactSlide: React.FC<BreadthOfImpactSlideProps> = ({ onNext, onPrevious }) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Handle click to advance
  const handleClick = () => {
    if (currentStep < 8) {
      setCurrentStep(prev => prev + 1);
    } else if (onNext) {
      onNext();
    }
  };

  // Auto-scroll to show new steps
  useEffect(() => {
    if (currentStep >= 3 && containerRef.current) {
      const container = containerRef.current;
      const targetScroll = container.scrollHeight * 0.4;
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  }, [currentStep]);

  const storySteps = [
    {
      time: '2:47 PM',
      title: 'Traffic Congestion Builds',
      icon: <Camera size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: '2:49 PM',
      title: 'DOT - 1000s of Cameras, Zero Eyes',
      icon: <Camera size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: '2:50 PM',
      title: 'Accident is undetected...',
      icon: <XCircle size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: '2:53 PM',
      title: '3 minutes late 911 call',
      icon: <Phone size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: '2:55 PM',
      title: 'DOT still unaware',
      icon: <Camera size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: '3:02 PM',
      title: 'Traffic Piles with no alerts',
      icon: <Clock size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: '3:15 PM',
      title: 'A Life Lost',
      icon: <XCircle size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: 'Days Later',
      title: 'Tragedy turns into a nightmare',
      icon: <XCircle size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
    {
      time: '',
      title: 'Disputed fault = No Justice',
      icon: <XCircle size={40} color="#FFFFFF" strokeWidth={2.5} />,
    },
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
      onClick={handleClick}
    >
      {/* Global Styles */}
      <style jsx global>{`
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
          fontFamily: 'Inter',
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
                fontFamily: 'Inter',
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
            A Preventable Tragedy
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(14px, 1.2vw, 20px)',
              color: '#FFFFFF',
              fontStyle: 'italic',
            }}
          >
            Click to reveal how the system fails, step by step
          </p>
        </div>

        {/* Timeline Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 'clamp(12px, 1.2vw, 16px)',
                  padding: 'clamp(16px, 2vh, 24px)',
                  minHeight: 'clamp(200px, 22vh, 280px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: currentStep === index 
                    ? '0 8px 32px rgba(255, 202, 43, 0.4)'
                    : currentStep > index
                      ? '0 4px 16px rgba(0, 0, 0, 0.3)'
                      : 'none',
                }}
              >
                {/* Time Badge */}
                {step.time && (
                  <div
                    style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      background: '#FFCA2B',
                      color: '#000000',
                      padding: 'clamp(4px, 0.5vh, 6px) clamp(10px, 1.2vw, 14px)',
                      borderRadius: 'clamp(4px, 0.5vw, 6px)',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(11px, 1vw, 14px)',
                      fontWeight: 700,
                      marginBottom: 'clamp(12px, 1.5vh, 16px)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.time}
                  </div>
                )}

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
                    border: '2px solid rgba(255, 255, 255, 0.3)',
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
                    marginBottom: 'clamp(8px, 1vh, 12px)',
                    flex: 1,
                  }}
                >
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Show after all steps - BIGGER BOX */}
        {currentStep >= 8 && (
          <div
            className="pop-in"
            style={{
              textAlign: 'center',
              maxWidth: 'clamp(600px, 85vw, 1400px)',
              margin: '0 auto',
              padding: 'clamp(48px, 6vh, 80px) clamp(32px, 4vw, 64px)',
              background: 'rgba(0, 0, 0, 0.8)',
              border: '4px solid #FFCA2B',
              borderRadius: 'clamp(16px, 2vw, 24px)',
              boxShadow: '0 12px 48px rgba(255, 202, 43, 0.3)',
            }}
          >
            <p
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(36px, 4vw, 72px)',
                fontWeight: 700,
                color: '#FFCA2B',
                lineHeight: '1.2',
                marginBottom: 'clamp(24px, 3vh, 40px)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              ARGUS AI PREVENTS ALL OF THIS
            </p>
            <p
              style={{
                fontFamily: 'Apercu Pro',
                fontSize: 'clamp(18px, 1.8vw, 32px)',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: '1.4',
              }}
            >
              Real-time detection. Instant alerts. Lives saved.
            </p>
          </div>
        )}

        {/* Bottom spacing */}
        <div style={{ height: 'clamp(32px, 4vh, 48px)' }} />
      </div>
    </div>
  );
};

export default BreadthOfImpactSlide;