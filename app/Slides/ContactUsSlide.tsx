'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ContactUsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const ContactUsSlide: React.FC<ContactUsSlideProps> = ({ onNext, onPrevious }) => {
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

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
      const designWidth = 1920;
      const designHeight = 1080;
      
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      const newScale = Math.min(scaleX, scaleY, 1);
      
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Generate fireworks
  useEffect(() => {
    const generateFireworks = () => {
      const newFireworks = [];
      for (let i = 0; i < 12; i++) {
        newFireworks.push({
          id: i,
          x: Math.random() * 100,
          y: 20 + Math.random() * 40,
          delay: i * 600,
        });
      }
      setFireworks(newFireworks);
    };

    const timer = setTimeout(generateFireworks, 1500);
    return () => clearTimeout(timer);
  }, []);

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
        12
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
        {/* Fireworks */}
        {fireworks.map((firework) => (
          <div
            key={firework.id}
            style={{
              position: 'absolute',
              left: `${firework.x}%`,
              top: `${firework.y}%`,
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              animation: `firework 2s ease-out ${firework.delay}ms`,
              pointerEvents: 'none',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: i % 3 === 0 ? '#FFCA2B' : i % 3 === 1 ? '#FFD700' : '#FFA500',
                  animation: `particle 2s ease-out ${firework.delay}ms`,
                  transform: `rotate(${i * 30}deg) translateX(0)`,
                  opacity: 0,
                }}
              />
            ))}
          </div>
        ))}

        <style jsx>{`
          @keyframes firework {
            0% {
              opacity: 0;
              transform: translateY(200px);
            }
            20% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0);
            }
          }
          
          @keyframes particle {
            0% {
              opacity: 1;
              transform: rotate(var(--rotation, 0deg)) translateX(0);
            }
            100% {
              opacity: 0;
              transform: rotate(var(--rotation, 0deg)) translateX(120px);
            }
          }
        `}</style>

        {/* Content Container */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-12">
          {/* Logo */}
         {/* Logo */}
          <div 
            className="mb-16 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transitionDelay: '200ms',
            }}
          >
            <Image
              src="/whitelogo.png"
              alt="Argus Logo"
              width={240}
              height={240}
              style={{ width: '240px', height: 'auto' }}
              priority
            />
          </div>

          {/* Main Headline */}
          <div 
            className="text-center mb-16 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms',
            }}
          >
            <h1 
              style={{
                fontFamily: 'Tobias',
                fontWeight: 500,
                fontSize: '80px',
                lineHeight: '110%',
                letterSpacing: '0px',
                color: '#FFFFFF',
                marginBottom: '20px',
              }}
            >
              Let's Build the Future Together
            </h1>
            <p
              style={{
                fontFamily: 'Apercu Pro',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '140%',
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '1100px',
                margin: '0 auto',
              }}
            >
              We're not just detecting accidents—we're preventing tragedies. Real-time intelligence that reduces congestion, alerts 911 before the first call, and saves lives in the moments that matter most.
            </p>
          </div>

          
      
          {/* Divider Line */}
          <div 
            className="transition-all duration-1000"
            style={{
              width: '700px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #FFCA2B, transparent)',
              marginBottom: '36px',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '800ms',
            }}
          />

          {/* Contact Section */}
          <div 
            className="text-center transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '1000ms',
            }}
          >
            <h2
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '140%',
                letterSpacing: '0.05em',
                color: '#FFCA2B',
                marginBottom: '28px',
              }}
            >
              JOIN THE MISSION
            </h2>

            {/* Contact Cards Grid */}
            <div 
              className="flex gap-6 justify-center"
              style={{
                maxWidth: '1200px',
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(255, 202, 43, 0.3)',
                  borderRadius: '16px',
                  padding: '28px 36px',
                  minWidth: '260px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 202, 43, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 202, 43, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:support@getargus.ai"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: '22px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFCA2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  support@getargus.ai
                </a>
              </div>

              {/* Phone Card */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(255, 202, 43, 0.3)',
                  borderRadius: '16px',
                  padding: '28px 36px',
                  minWidth: '260px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 202, 43, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 202, 43, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Phone
                </div>
                <a
                  href="tel:+15551234567"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: '22px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFCA2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  (402) 480-6092
                </a>
              </div>

              {/* Website Card */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(255, 202, 43, 0.3)',
                  borderRadius: '16px',
                  padding: '28px 36px',
                  minWidth: '260px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 202, 43, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 202, 43, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Website
                </div>
                <a
                  href="https://getargus.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: '22px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFCA2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  getargus.ai
                </a>
              </div>
            </div>
          </div>

          {/* Closing Tagline */}
          <div 
            className="text-center mt-12 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: '1200ms',
            }}
          >
            <p
              style={{
                fontFamily: 'Tobias',
                fontSize: '38px',
                fontWeight: 500,
                color: '#FFCA2B',
                letterSpacing: '0.02em',
                marginBottom: '8px',
              }}
            >
              Every Second Counts. Every Life Matters.
            </p>
            <p
              style={{
                fontFamily: 'Apercu Pro',
                fontSize: '20px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.7)',
                fontStyle: 'italic',
              }}
            >
              The next emergency we prevent could be someone you love
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSlide;