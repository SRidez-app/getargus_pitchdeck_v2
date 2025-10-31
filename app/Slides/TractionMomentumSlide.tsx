'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TractionMomentumWaveProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TractionMomentumWave: React.FC<TractionMomentumWaveProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);

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

  useEffect(() => {
    const updateScale = () => {
      const designWidth = 1920;  // Figma canvas width
      const designHeight = 1080; // Figma canvas height
      
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      const newScale = Math.min(scaleX, scaleY, 1); // Cap at 1 to avoid upscaling
      
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
          width: '200px', 
          height: '200px',
          fontSize: '22px',
        };
      case 'medium':
        return { 
          width: '160px', 
          height: '160px',
          fontSize: '18px',
        };
      case 'small':
        return { 
          width: '130px', 
          height: '130px',
          fontSize: '16px',
        };
      default:
        return { 
          width: '170px', 
          height: '170px',
          fontSize: '18px',
        };
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number - Outside scaling wrapper */}
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

      {/* Scaling wrapper */}
      <div 
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          width: '1920px',
          height: '1080px',
          position: 'relative',
        }}
      >
        {/* Content Container */}
        <div 
          className="relative w-full h-full flex flex-col items-start justify-center px-24 py-16"
        >
        {/* Title Section */}
        <div 
          className="mb-12 w-full"
          style={{
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: 'fit-content',
              paddingTop: '8px',
              paddingBottom: '8px',
              marginBottom: '32px',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: '36px',
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
                marginTop: '8px',
              }}
            />
          </div>
          
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '64px',
              lineHeight: '1.3',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            Pipeline <span style={{ color: '#FFCA2B' }}>Momentum</span>{' '}
            Building to Market Opportunity
          </h1>
        </div>

        {/* Wave Container */}
        <div className="w-full flex items-center justify-between" style={{ height: '600px' }}>
          {/* Left Side - Flowing Partners */}
          <div 
            className="flex-1 relative"
            style={{
              height: '600px',
              maxWidth: '65%',
            }}
          >
            {/* Arrow positioned above the bubbles */}
            <div
              className="absolute transition-all duration-1000"
              style={{
                right: '-80px',
                top: '50px',
                opacity: isVisible ? 1 : 0,
                transitionDelay: '1500ms',
                zIndex: 10,
              }}
            >
              <ArrowRight 
                size={100} 
                color="#FFCA2B" 
                strokeWidth={3}
                style={{
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
              className="absolute inset-0 flex flex-wrap items-center justify-start gap-6"
              style={{
                padding: '20px',
              }}
            >
              {partners.map((partner, index) => {
                const sizeStyles = getSizeStyles(partner.size);
                // Create wave effect by varying vertical position
                const verticalOffset = index % 2 === 0 ? '0px' : '60px';
                
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
                        ...sizeStyles,
                        borderRadius: '50%',
                        background: `radial-gradient(circle at 30% 30%, ${partner.color}40 0%, ${partner.color}20 50%, ${partner.color}10 100%)`,
                        border: `3px solid ${partner.color}80`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '20px',
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
                          fontSize: '12px',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.8)',
                          marginTop: '6px',
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
              width: '35%',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transitionDelay: '1800ms',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 202, 43, 0.2) 0%, rgba(255, 202, 43, 0.05) 100%)',
                border: '4px solid #FFCA2B',
                borderRadius: '28px',
                padding: '56px 48px',
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
                  borderRadius: '50px',
                  padding: '10px 28px',
                  marginBottom: '36px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
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
                  fontSize: '48px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '36px',
                  lineHeight: '1.2',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Wave Builds to{' '}
                <span style={{ color: '#FFCA2B' }}>Opportunity</span>
              </h2>

              {/* ACV Breakdown */}
              <div className="space-y-4 relative z-10">
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '16px',
                    padding: '22px',
                    border: '2px solid rgba(255, 99, 71, 0.5)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '8px',
                    }}
                  >
                    Government
                  </p>
                  <p
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: '42px',
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
                    borderRadius: '16px',
                    padding: '22px',
                    border: '2px solid rgba(255, 215, 0, 0.5)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '8px',
                    }}
                  >
                    Mobility
                  </p>
                  <p
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: '42px',
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
                    borderRadius: '20px',
                    padding: '28px',
                    marginTop: '20px',
                    boxShadow: '0 8px 32px rgba(255, 202, 43, 0.5)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Total ACV
                  </p>
                  <p
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: '64px',
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
      </div>
      {/* Closing scaling wrapper */}
      </div>

      <style jsx>{`
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
    </div>
  );
};

export default TractionMomentumWave;
