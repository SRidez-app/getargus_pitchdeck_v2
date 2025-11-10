'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, Zap, DollarSign, Clock, Video, RefreshCw } from 'lucide-react';

interface RoadmapSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const RoadmapSlide: React.FC<RoadmapSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStates, setAnimatedStates] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    // Start state animation after 5 seconds, add one state every 2 seconds
    const startDelay = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setAnimatedStates(count);
        if (count >= 15) {
          clearInterval(interval);
        }
      }, 2000); // 2 seconds between each state
      
      return () => clearInterval(interval);
    }, 5000); // Start after 5 seconds

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
    { code: 'FL', name: 'Florida', x: 84, y: 82, labelOffset: { x: 0, y: 3 } },
    { code: 'NY', name: 'New York', x: 88, y: 30, labelOffset: { x: 0, y: -3 } },
    { code: 'MI', name: 'Michigan', x: 76, y: 28, labelOffset: { x: 0, y: -3 } },
    { code: 'CA', name: 'California', x: 8, y: 48, labelOffset: { x: -3, y: 0 } },
    { code: 'NJ', name: 'New Jersey', x: 90, y: 34, labelOffset: { x: 3, y: 0 } },
    { code: 'TN', name: 'Tennessee', x: 74, y: 52, labelOffset: { x: 0, y: 0 } },
    { code: 'AL', name: 'Alabama', x: 76, y: 64, labelOffset: { x: 0, y: 0 } },
    { code: 'AR', name: 'Arkansas', x: 64, y: 56, labelOffset: { x: 0, y: 0 } },
    { code: 'MS', name: 'Mississippi', x: 68, y: 63, labelOffset: { x: 0, y: 0 } },
    { code: 'NE', name: 'Nebraska', x: 52, y: 38, labelOffset: { x: 0, y: 0 } },
    { code: 'VA', name: 'Virginia', x: 84, y: 46, labelOffset: { x: 0, y: 0 } },
    { code: 'MD', name: 'Maryland', x: 88, y: 42, labelOffset: { x: 3, y: 0 } },
    { code: 'RI', name: 'Rhode Island', x: 92, y: 31, labelOffset: { x: 3, y: 0 } },
    { code: 'CT', name: 'Connecticut', x: 91, y: 33, labelOffset: { x: 3, y: 0 } },
    { code: 'VT', name: 'Vermont', x: 90, y: 26, labelOffset: { x: 0, y: -3 } },
  ];

  const q3Highlights = [
    { icon: <Zap size={24} />, text: 'Passive → Real-Time Detection' },
    { icon: <Clock size={24} />, text: '<10 Second Latency' },
    { icon: <Video size={24} />, text: '100K Hours Training Video' },
    { icon: <RefreshCw size={24} />, text: 'Auto Training & Camera Scaling' },
    { icon: <TrendingUp size={24} />, text: '80% Cost Optimization' },
    { icon: <DollarSign size={24} />, text: "Gov't + Commercial Validation"  },// ✅ Double quotes, so apostrophe is just text },
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
        7
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full h-full flex flex-col"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(48px, 5vw, 96px)',
        }}
      >
        {/* Title Section */}
        <div 
          className="mb-6"
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
                fontSize: 'clamp(24px, 2vw, 36px)',
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
              fontSize: 'clamp(36px, 4vw, 64px)',
              lineHeight: '1.2',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            From Product to{' '}
            <span style={{ color: '#FFCA2B' }}>Platform</span>
          </h1>
        </div>

        {/* Main Content - Two Column Layout */}
        <div 
          className="flex gap-6 flex-1"
          style={{
            gap: 'clamp(24px, 3vw, 48px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.3s',
          }}
        >
          {/* LEFT COLUMN - Q3 Built (Compact) */}
          <div 
            style={{
              flex: '0 0 28%',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(16px, 2vh, 24px)',
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
                  gap: 'clamp(12px, 1.5vw, 16px)',
                  marginBottom: 'clamp(12px, 1.5vh, 16px)',
                }}
              >
                <div
                  style={{
                    width: 'clamp(8px, 0.8vw, 12px)',
                    height: 'clamp(8px, 0.8vw, 12px)',
                    borderRadius: '50%',
                    background: '#00FF87',
                    boxShadow: '0 0 12px rgba(0, 255, 135, 0.6)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: 'clamp(14px, 1.2vw, 18px)',
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
                  fontSize: 'clamp(20px, 1.8vw, 28px)',
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
                  padding: 'clamp(12px, 1.5vh, 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(12px, 1.5vw, 16px)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.6s ease-out ${0.5 + index * 0.1}s`,
                }}
              >
                <div
                  style={{
                    color: '#FFCA2B',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(14px, 1.2vw, 16px)',
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

          {/* RIGHT COLUMN - 18 Month Growth (Dominant) */}
          <div 
            style={{
              flex: 1,
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
            <div style={{ marginBottom: 'clamp(20px, 2.5vh, 32px)', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(12px, 1.5vw, 16px)',
                  marginBottom: 'clamp(12px, 1.5vh, 16px)',
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
                    fontSize: 'clamp(16px, 1.4vw, 20px)',
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
                  fontSize: 'clamp(32px, 3.5vw, 52px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: '1.2',
                }}
              >
                Network <span style={{ color: '#FFCA2B' }}>Expansion</span>
              </h3>
            </div>

            {/* US Map Visualization */}
            <div 
              style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'clamp(20px, 2.5vh, 32px)',
              }}
            >
              {/* Simplified US Map Outline */}
              <svg
                viewBox="0 0 100 65"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '450px',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                {/* USA Base Map in Light Gray */}
                <path
                  d="M 8 12 L 14 8 L 22 10 L 28 8 L 35 12 L 42 10 L 48 12 L 54 10 L 62 14 L 68 12 L 74 16 L 78 14 L 82 18 L 86 16 L 90 20 L 92 24 L 93 28 L 92 32 L 90 36 L 88 40 L 90 44 L 88 48 L 86 52 L 82 54 L 86 58 L 84 62 L 88 66 L 86 72 L 82 76 L 78 80 L 72 82 L 66 84 L 60 86 L 54 84 L 48 86 L 42 84 L 36 86 L 30 84 L 24 82 L 18 78 L 14 72 L 10 66 L 8 60 L 6 54 L 4 48 L 2 42 L 4 36 L 6 30 L 8 24 Z"
                  fill="rgba(200, 200, 200, 0.15)"
                  stroke="rgba(200, 200, 200, 0.4)"
                  strokeWidth="0.3"
                />

                {/* Individual State Shapes that fill with gold */}
                {states.map((state, index) => {
                  const isAnimated = index < animatedStates;
                  return (
                    <g key={state.code}>
                      {/* State marker circle */}
                      <circle
                        cx={state.x}
                        cy={state.y}
                        r="2"
                        fill={isAnimated ? '#FFCA2B' : 'transparent'}
                        stroke={isAnimated ? '#FFCA2B' : 'transparent'}
                        strokeWidth="0.5"
                        style={{
                          opacity: isAnimated ? 1 : 0,
                          transform: isAnimated ? 'scale(1)' : 'scale(0)',
                          transformOrigin: `${state.x}px ${state.y}px`,
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          filter: isAnimated ? 'drop-shadow(0 0 4px rgba(255, 202, 43, 0.8))' : 'none',
                        }}
                      />
                      {/* State Label - positioned with offset to avoid overlap */}
                      <text
                        x={state.x + state.labelOffset.x}
                        y={state.y + state.labelOffset.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: '3px',
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fill: '#FFCA2B',
                          opacity: isAnimated ? 1 : 0,
                          transition: 'opacity 0.3s ease-out',
                          pointerEvents: 'none',
                        }}
                      >
                        {state.code}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* State Counter Overlay - Moved to Upper Right */}
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '5%',
                  background: 'rgba(0, 0, 0, 0.85)',
                  border: '2px solid #FFCA2B',
                  borderRadius: 'clamp(12px, 1.2vw, 16px)',
                  padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2.5vw, 32px)',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Tobias',
                    fontSize: 'clamp(48px, 5vw, 72px)',
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
                    fontSize: 'clamp(12px, 1vw, 16px)',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginTop: 'clamp(4px, 0.5vh, 8px)',
                    letterSpacing: '0.05em',
                  }}
                >
                  STATE NETWORKS
                </div>
              </div>
            </div>

            {/* Investment Equation */}
            <div
              style={{
                background: 'rgba(255, 202, 43, 0.1)',
                border: '2px solid #FFCA2B',
                borderRadius: 'clamp(12px, 1.2vw, 16px)',
                padding: 'clamp(20px, 2.5vh, 32px)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'clamp(16px, 2vw, 24px)',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: 'clamp(32px, 3.5vw, 48px)',
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
                      fontSize: 'clamp(12px, 1vw, 14px)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '4px',
                    }}
                  >
                    per state
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(24px, 2.5vw, 36px)',
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
                      fontSize: 'clamp(18px, 1.6vw, 24px)',
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
                      fontSize: 'clamp(12px, 1vw, 14px)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '4px',
                    }}
                  >
                    Activation
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(24px, 2.5vw, 36px)',
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
                      fontSize: 'clamp(18px, 1.6vw, 24px)',
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
                      fontSize: 'clamp(12px, 1vw, 14px)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '4px',
                    }}
                  >
                    Revenue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default RoadmapSlide;