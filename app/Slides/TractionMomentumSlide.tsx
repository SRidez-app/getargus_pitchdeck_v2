'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TractionMomentumWaveProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TractionMomentumWave: React.FC<TractionMomentumWaveProps> = ({ onNext, onPrevious }) => {
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

  const partners = [
    { name: 'State DOT', type: 'govt', size: 'medium', color: '#FF6347' },
    { name: 'State DOT', type: 'govt', size: 'small', color: '#FF6347' },
    { name: 'Sygic', type: 'mobility', size: 'large', color: '#FFD700' },
    { name: 'State DOT', type: 'govt', size: 'medium', color: '#FF6347' },
    { name: 'Werner', type: 'mobility', size: 'large', color: '#FFD700' },
    { name: 'City', type: 'govt', size: 'small', color: '#FF6347' },
    { name: 'DoorDash', type: 'mobility', size: 'large', color: '#FFD700' },
    { name: 'State DOT', type: 'govt', size: 'medium', color: '#FF6347' },
    { name: 'Bringg', type: 'mobility', size: 'medium', color: '#FFD700' },
  ];

  const getSizeStyles = (size: string) => {
    switch (size) {
      case 'large':
        return { 
          width: 'clamp(160px, 16vw, 200px)', 
          height: 'clamp(160px, 16vw, 200px)',
          fontSize: 'clamp(18px, 1.8vw, 22px)',
        };
      case 'medium':
        return { 
          width: 'clamp(130px, 13vw, 160px)', 
          height: 'clamp(130px, 13vw, 160px)',
          fontSize: 'clamp(15px, 1.5vw, 18px)',
        };
      case 'small':
        return { 
          width: 'clamp(100px, 10vw, 130px)', 
          height: 'clamp(100px, 10vw, 130px)',
          fontSize: 'clamp(13px, 1.3vw, 16px)',
        };
      default:
        return { 
          width: 'clamp(140px, 14vw, 170px)', 
          height: 'clamp(140px, 14vw, 170px)',
          fontSize: 'clamp(15px, 1.5vw, 18px)',
        };
    }
  };

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
        10
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
          @keyframes shine {
            0%, 100% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            50% {
              transform: translate(-40%, -40%) rotate(180deg);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 0.3;
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              opacity: 0.6;
              transform: translate(-50%, -50%) scale(1.1);
            }
          }
        `}</style>

        {/* Title Section */}
        <div 
          style={{
            marginBottom: 'clamp(32px, 4vh, 48px)',
          }}
        >
          <div
            style={{
              width: 'fit-content',
              paddingTop: 'clamp(6px, 0.8vh, 8px)',
              paddingBottom: 'clamp(6px, 0.8vh, 8px)',
              marginBottom: 'clamp(24px, 3vh, 32px)',
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
              BUILDING MOMENTUM
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
              lineHeight: '1.3',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: 'clamp(8px, 1vh, 12px)',
            }}
          >
            Pipeline <span style={{ color: '#FFCA2B' }}>Momentum</span>{' '}
            Building to Market Opportunity
          </h1>
        </div>

        {/* Wave Container */}
        <div 
          className="w-full flex gap-8" 
          style={{ 
            minHeight: 'clamp(400px, 50vh, 600px)',
            gap: 'clamp(24px, 3vw, 48px)',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Side - Flowing Partners */}
          <div 
            className="relative"
            style={{
              flex: '1 1 60%',
              minWidth: '300px',
              minHeight: 'clamp(400px, 50vh, 600px)',
            }}
          >
            {/* Arrow positioned above the bubbles */}
            <div
              className="absolute transition-all duration-1000"
              style={{
                right: 'clamp(-40px, -6vw, -80px)',
                top: 'clamp(30px, 4vh, 50px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: '1500ms',
                zIndex: 10,
              }}
            >
              <ArrowRight 
                style={{
                  width: 'clamp(60px, 8vw, 100px)',
                  height: 'clamp(60px, 8vw, 100px)',
                  color: '#FFCA2B',
                  strokeWidth: 3,
                  filter: 'drop-shadow(0 0 20px rgba(255, 202, 43, 0.6))',
                }}
              />
            </div>

            {/* Curved path visualization */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ opacity: 0.15 }}
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFCA2B" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#FFCA2B" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M 0 250 Q 200 100, 400 200 T 800 250"
                stroke="url(#waveGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,8"
              />
              <path
                d="M 0 270 Q 200 350, 400 280 T 800 270"
                stroke="url(#waveGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,8"
              />
            </svg>

            {/* Floating partner bubbles */}
            <div 
              className="absolute inset-0 flex flex-wrap items-center justify-start"
              style={{
                padding: 'clamp(16px, 2vw, 20px)',
                gap: 'clamp(16px, 2vw, 24px)',
              }}
            >
              {partners.map((partner, index) => {
                const sizeStyles = getSizeStyles(partner.size);
                // Create wave effect by varying vertical position
                const verticalOffset = index % 2 === 0 ? '0px' : 'clamp(40px, 5vh, 60px)';
                
                return (
                  <div
                    key={index}
                    className="transition-all duration-700"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible 
                        ? `translate(0, ${verticalOffset})` 
                        : `translate(-50px, ${verticalOffset})`,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <div
                      style={{
                        width: sizeStyles.width,
                        height: sizeStyles.height,
                        borderRadius: '50%',
                        background: `radial-gradient(circle at 30% 30%, ${partner.color}40 0%, ${partner.color}20 50%, ${partner.color}10 100%)`,
                        border: `3px solid ${partner.color}80`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 'clamp(16px, 2vw, 20px)',
                        boxShadow: `0 8px 32px ${partner.color}30, inset 0 0 20px ${partner.color}15`,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                      }}
                      className="hover:scale-110"
                    >
                      {/* Shine effect */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-50%',
                          left: '-50%',
                          width: '200%',
                          height: '200%',
                          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                          animation: 'shine 3s infinite',
                        }}
                      />
                      
                      <p
                        style={{
                          fontFamily: 'Inter',
                          fontSize: sizeStyles.fontSize,
                          fontWeight: 700,
                          color: '#FFFFFF',
                          position: 'relative',
                          zIndex: 1,
                          textShadow: `0 2px 8px ${partner.color}60`,
                        }}
                      >
                        {partner.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(10px, 1vw, 12px)',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.8)',
                          marginTop: 'clamp(4px, 0.5vh, 6px)',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {partner.type === 'govt' ? 'Government' : 'Mobility'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Market Opportunity */}
          <div 
            className="transition-all duration-1000"
            style={{
              flex: '1 1 35%',
              minWidth: '300px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transitionDelay: '1800ms',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 202, 43, 0.2) 0%, rgba(255, 202, 43, 0.05) 100%)',
                border: 'clamp(3px, 0.3vw, 4px) solid #FFCA2B',
                borderRadius: 'clamp(20px, 2.5vw, 28px)',
                padding: 'clamp(36px, 4.5vh, 56px) clamp(32px, 4vw, 48px)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 60px rgba(255, 202, 43, 0.3), inset 0 0 40px rgba(255, 202, 43, 0.1)',
              }}
            >
              {/* Animated rings */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '200%',
                  height: '200%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, transparent 30%, rgba(255, 202, 43, 0.1) 31%, transparent 32%, transparent 50%, rgba(255, 202, 43, 0.1) 51%, transparent 52%)',
                  animation: 'pulse 4s infinite',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid #FFCA2B',
                  borderRadius: 'clamp(25px, 3vw, 50px)',
                  padding: 'clamp(8px, 1vh, 10px) clamp(20px, 2.5vw, 28px)',
                  marginBottom: 'clamp(24px, 3vh, 36px)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(12px, 1.2vw, 14px)',
                    fontWeight: 700,
                    color: '#FFCA2B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                  }}
                >
                  Immediate Market
                </p>
              </div>

              <h2
                style={{
                  fontFamily: 'Tobias',
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: 'clamp(24px, 3vh, 36px)',
                  lineHeight: '1.2',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Wave Builds to{' '}
                <span style={{ color: '#FFCA2B' }}>Opportunity</span>
              </h2>

              {/* ACV Breakdown */}
              <div 
                className="space-y-4 relative z-10" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 'clamp(12px, 1.5vh, 16px)' 
                }}
              >
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: 'clamp(12px, 1.5vw, 16px)',
                    padding: 'clamp(16px, 2vh, 22px)',
                    border: '2px solid rgba(255, 99, 71, 0.5)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(13px, 1.3vw, 15px)',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: 'clamp(6px, 0.8vh, 8px)',
                    }}
                  >
                    Government
                  </p>
                  <p
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: 'clamp(32px, 3.5vw, 42px)',
                      fontWeight: 700,
                      color: '#FF6347',
                      lineHeight: '1',
                    }}
                  >
                    $2M
                  </p>
                </div>

                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: 'clamp(12px, 1.5vw, 16px)',
                    padding: 'clamp(16px, 2vh, 22px)',
                    border: '2px solid rgba(255, 215, 0, 0.5)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(13px, 1.3vw, 15px)',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: 'clamp(6px, 0.8vh, 8px)',
                    }}
                  >
                    Mobility
                  </p>
                  <p
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: 'clamp(32px, 3.5vw, 42px)',
                      fontWeight: 700,
                      color: '#FFD700',
                      lineHeight: '1',
                    }}
                  >
                    $7-10M
                  </p>
                </div>

                <div
                  style={{
                    background: 'linear-gradient(135deg, #FFCA2B 0%, #FFB000 100%)',
                    borderRadius: 'clamp(16px, 2vw, 20px)',
                    padding: 'clamp(20px, 2.5vh, 28px)',
                    marginTop: 'clamp(12px, 1.5vh, 20px)',
                    boxShadow: '0 8px 32px rgba(255, 202, 43, 0.5)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 1.4vw, 16px)',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: 'clamp(8px, 1vh, 12px)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Total ACV
                  </p>
                  <p
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: 'clamp(48px, 5vw, 64px)',
                      fontWeight: 800,
                      color: '#000000',
                      lineHeight: '1',
                    }}
                  >
                    $9-12M
                  </p>
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

export default TractionMomentumWave;