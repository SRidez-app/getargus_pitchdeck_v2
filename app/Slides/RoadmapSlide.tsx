'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, Zap, DollarSign, Clock, Video, RefreshCw, CheckCircle } from 'lucide-react';

interface RoadmapSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const RoadmapSlide: React.FC<RoadmapSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStates, setAnimatedStates] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    // Start state animation after 2 seconds, add one state every 0.4 seconds
    const startDelay = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setAnimatedStates(count);
        if (count >= 15) {
          clearInterval(interval);
        }
      }, 400); // Faster animation
      
      return () => clearInterval(interval);
    }, 2000); // Start after 2 seconds

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
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

  const states = [
    'Florida', 'New York', 'Michigan', 'California', 'New Jersey',
    'Tennessee', 'Alabama', 'Arkansas', 'Mississippi', 'Nebraska',
    'Virginia', 'Maryland', 'Rhode Island', 'Connecticut', 'Vermont'
  ];

  const q3Highlights = [
    { icon: <Zap size={20} />, text: 'Passive → Real-Time Detection' },
    { icon: <Clock size={20} />, text: '<10 Second Latency' },
    { icon: <Video size={20} />, text: '100K Hours Training Video' },
    { icon: <RefreshCw size={20} />, text: 'Auto Training & Camera Scaling' },
    { icon: <TrendingUp size={20} />, text: '80% Cost Optimization' },
    { icon: <DollarSign size={20} />, text: "Gov't + Commercial Validation" },
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
          fontSize: 'clamp(12px, 1.2vw, 14px)',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        8
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full h-full flex flex-col overflow-y-auto"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(48px, 5vw, 96px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
          maxWidth: '1920px',
          margin: '0 auto',
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
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.1);
            }
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>

        {/* Title Section */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s',
            marginBottom: 'clamp(24px, 3vh, 40px)',
          }}
        >
          <div
            style={{
              width: 'fit-content',
              paddingTop: 'clamp(6px, 0.8vh, 8px)',
              paddingBottom: 'clamp(6px, 0.8vh, 8px)',
              marginBottom: 'clamp(20px, 2.5vh, 32px)',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: 'clamp(28px, 2.5vw, 36px)',
                lineHeight: '1.3',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              THE ROADMAP
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
              marginBottom: 'clamp(8px, 1vh, 12px)',
            }}
          >
            From Product to{' '}
            <span style={{ color: '#FFCA2B' }}>Platform</span>
          </h1>
        </div>

        {/* Main Content - Two Column Layout */}
        <div 
          className="flex gap-6"
          style={{
            gap: 'clamp(24px, 3vw, 48px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.3s',
          }}
        >
          {/* LEFT COLUMN - Q3 Built */}
          <div 
            style={{
              flex: '0 0 auto',
              width: 'clamp(280px, 30%, 400px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(12px, 1.5vh, 20px)',
            }}
          >
            {/* Q3 Header */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: '2px solid rgba(255, 202, 43, 0.4)',
                borderRadius: 'clamp(12px, 1.2vw, 16px)',
                padding: 'clamp(16px, 2vh, 24px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(10px, 1.2vw, 14px)',
                  marginBottom: 'clamp(10px, 1.2vh, 14px)',
                }}
              >
                <div
                  style={{
                    width: 'clamp(10px, 1vw, 12px)',
                    height: 'clamp(10px, 1vw, 12px)',
                    borderRadius: '50%',
                    background: '#00FF87',
                    boxShadow: '0 0 12px rgba(0, 255, 135, 0.6)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: 'clamp(14px, 1.3vw, 18px)',
                    fontWeight: 700,
                    color: '#00FF87',
                    letterSpacing: '0.05em',
                  }}
                >
                  Q3 2025
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: '1.3',
                }}
              >
                Tech Foundation Built
              </h3>
            </div>

            {/* Q3 Highlights */}
            {q3Highlights.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 202, 43, 0.2)',
                  borderRadius: 'clamp(8px, 0.8vw, 12px)',
                  padding: 'clamp(10px, 1.2vh, 14px) clamp(12px, 1.4vw, 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(10px, 1.2vw, 14px)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.6s ease-out ${0.5 + index * 0.1}s`,
                }}
              >
                <div
                  style={{
                    color: '#FFCA2B',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(13px, 1.15vw, 16px)',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.4',
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN - 18 Month Growth with State List */}
          <div 
            style={{
              flex: 1,
              minWidth: 0,
              minHeight: 'clamp(500px, 60vh, 800px)',
              background: 'linear-gradient(135deg, rgba(20, 0, 76, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '3px solid rgba(255, 202, 43, 0.5)',
              borderRadius: 'clamp(16px, 1.5vw, 24px)',
              padding: 'clamp(24px, 3vh, 40px)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(255, 202, 43, 0.2)',
            }}
          >
            {/* Glow effect */}
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '60%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(255, 202, 43, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Header */}
            <div style={{ marginBottom: 'clamp(16px, 2vh, 24px)', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(10px, 1.2vw, 14px)',
                  marginBottom: 'clamp(10px, 1.2vh, 14px)',
                }}
              >
                <div
                  style={{
                    width: 'clamp(10px, 1vw, 14px)',
                    height: 'clamp(10px, 1vw, 14px)',
                    borderRadius: '50%',
                    background: '#FFCA2B',
                    boxShadow: '0 0 16px rgba(255, 202, 43, 0.8)',
                    animation: 'pulse 2s infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: 'clamp(14px, 1.3vw, 18px)',
                    fontWeight: 700,
                    color: '#FFCA2B',
                    letterSpacing: '0.05em',
                  }}
                >
                  NEXT 18 MONTHS
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'Tobias',
                  fontSize: 'clamp(28px, 3.2vw, 48px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: '1.2',
                }}
              >
                Network <span style={{ color: '#FFCA2B' }}>Expansion</span>
              </h3>
            </div>

            {/* State Counter and List Container */}
            <div 
              style={{
                display: 'flex',
                gap: 'clamp(20px, 2.5vw, 40px)',
                position: 'relative',
                zIndex: 1,
                minHeight: 'clamp(300px, 35vh, 500px)',
              }}
            >
              {/* State Counter */}
              <div
                style={{
                  flex: '0 0 auto',
                  background: 'rgba(0, 0, 0, 0.85)',
                  border: '3px solid #FFCA2B',
                  borderRadius: 'clamp(12px, 1.2vw, 16px)',
                  padding: 'clamp(20px, 2.5vh, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'clamp(120px, 15vw, 180px)',
                  minHeight: 'clamp(140px, 18vh, 200px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Tobias',
                    fontSize: 'clamp(48px, 6vw, 80px)',
                    fontWeight: 700,
                    color: '#FFCA2B',
                    lineHeight: '1',
                    textShadow: '0 0 20px rgba(255, 202, 43, 0.5)',
                  }}
                >
                  {animatedStates}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(12px, 1.1vw, 16px)',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginTop: 'clamp(6px, 0.8vh, 10px)',
                    letterSpacing: '0.05em',
                    textAlign: 'center',
                  }}
                >
                  STATE<br/>NETWORKS
                </div>
              </div>

              {/* Animated State List - 3 Columns */}
              <div
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(5, minmax(clamp(36px, 4.5vh, 50px), auto))',
                  gap: 'clamp(8px, 1vh, 12px)',
                  alignContent: 'start',
                  overflowY: 'auto',
                  paddingRight: 'clamp(8px, 1vw, 12px)',
                  maxHeight: 'clamp(300px, 35vh, 500px)',
                }}
              >
                {states.map((state, index) => {
                  const isAnimated = index < animatedStates;
                  return (
                    <div
                      key={state}
                      style={{
                        background: isAnimated ? 'rgba(255, 202, 43, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: isAnimated ? '2px solid #FFCA2B' : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'clamp(6px, 0.8vw, 10px)',
                        padding: 'clamp(8px, 1vh, 12px) clamp(10px, 1.2vw, 14px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(6px, 0.8vw, 10px)',
                        opacity: isAnimated ? 1 : 0.3,
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        height: '100%',
                        minHeight: 'clamp(36px, 4.5vh, 50px)',
                      }}
                    >
                      <CheckCircle
                        size={16}
                        style={{
                          color: isAnimated ? '#FFCA2B' : 'rgba(255, 255, 255, 0.3)',
                          flexShrink: 0,
                          width: 'clamp(14px, 1.4vw, 18px)',
                          height: 'clamp(14px, 1.4vw, 18px)',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          fontWeight: isAnimated ? 600 : 400,
                          color: isAnimated ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                          lineHeight: '1.2',
                        }}
                      >
                        {state}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Investment Equation */}
            <div
              style={{
                background: 'rgba(255, 202, 43, 0.1)',
                border: '2px solid #FFCA2B',
                borderRadius: 'clamp(12px, 1.2vw, 16px)',
                padding: 'clamp(16px, 2vh, 24px)',
                position: 'relative',
                zIndex: 1,
                marginTop: 'clamp(16px, 2vh, 24px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'clamp(12px, 1.5vw, 20px)',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: 'clamp(28px, 3vw, 42px)',
                      fontWeight: 700,
                      color: '#FFCA2B',
                      lineHeight: '1',
                    }}
                  >
                    $10K
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.95vw, 13px)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: 'clamp(3px, 0.4vh, 5px)',
                    }}
                  >
                    per state
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 32px)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                  }}
                >
                  →
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(15px, 1.4vw, 20px)',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: '1.3',
                    }}
                  >
                    Camera Network
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.95vw, 13px)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: 'clamp(3px, 0.4vh, 5px)',
                    }}
                  >
                    Activation
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 32px)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                  }}
                >
                  →
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(15px, 1.4vw, 20px)',
                      fontWeight: 600,
                      color: '#00FF87',
                      lineHeight: '1.3',
                    }}
                  >
                    Enterprise
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.95vw, 13px)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: 'clamp(3px, 0.4vh, 5px)',
                    }}
                  >
                    Revenue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div style={{ height: 'clamp(24px, 3vh, 40px)' }} />
      </div>
    </div>
  );
};

export default RoadmapSlide;