'use client';

import React, { useEffect, useState } from 'react';

interface WhyArgusStandsAloneSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const WhyArgusStandsAloneSlide: React.FC<WhyArgusStandsAloneSlideProps> = ({ onNext, onPrevious }) => {
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

  const competitors = [
    {
      name: 'Rekkor ',
      storage: 'N/A',
      apiSearch: false,
      aiDetection: true,
      dotCapability: true,
      aiForecast: false,
      isArgus: false,
      apiAlert: false,
    },
    {
      name: 'Road Proof',
      storage: '90 days',
      apiSearch: false,
      aiDetection: false,
      dotCapability: false,
      aiForecast: false,
      isArgus: false,
      apiAlert: false,
    },
    {
      name: 'ARGUS AI',
      storage: 'Unlimited',
      apiSearch: true,
      aiDetection: true,
      dotCapability: true,
      aiForecast: true,
      isArgus: true,
      apiAlert: true,
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
        7
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full h-full flex flex-col items-start justify-start px-12 pt-8 pb-12 overflow-y-auto"
        style={{
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
        <div className="mb-8">
          <div
            style={{
              width: 'fit-content',
              paddingTop: '8px',
              paddingBottom: '8px',
              marginBottom: '40px',
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
              COMPETITIVE ADVANTAGE
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
              fontSize: 'clamp(36px, 4vw, 72px)',
              lineHeight: '1.2',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            Why <span style={{ color: '#FFCA2B' }}>ARGUS AI</span> Stands Alone
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(16px, 1.3vw, 24px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.8)',
              marginTop: '16px',
            }}
          >
            The Only Complete AI-Powered Traffic Intelligence Platform
          </p>
        </div>

        {/* Comparison Table */}
        <div 
          className="w-full transition-all duration-1000"
          style={{
            maxWidth: '100%',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid rgba(255, 255, 255, 1)', }}>
            <thead>
              <tr style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                <th style={{ 
                  padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', 
                  textAlign: 'left', 
                  color: '#FFCA2B',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(14px, 1vw, 18px)',
                  fontWeight: 700,
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  SOLUTION
                </th>
                <th style={{ 
                  padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', 
                  textAlign: 'center', 
                  color: 'white',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(12px, 0.9vw, 16px)',
                  fontWeight: 600,
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  Storage Length
                </th>
                <th style={{ 
                  padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', 
                  textAlign: 'center', 
                  color: 'white',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(12px, 0.9vw, 16px)',
                  fontWeight: 600,
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  API Auto Search
                </th>
                <th style={{ 
                  padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', 
                  textAlign: 'center', 
                  color: 'white',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(12px, 0.9vw, 16px)',
                  fontWeight: 600,
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  AI Accident Detection
                </th>
                <th style={{ 
                  padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', 
                  textAlign: 'center', 
                  color: 'white',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(12px, 0.9vw, 16px)',
                  fontWeight: 600,
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  DOT/911 Capability
                </th>
                <th style={{ 
                  padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', 
                  textAlign: 'center', 
                  color: 'white',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(12px, 0.9vw, 16px)',
                  fontWeight: 600,
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  AI Traffic Forecast
                </th>
                 
                <th style={{ 
                  padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', 
                  textAlign: 'center', 
                  color: 'white',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(12px, 0.9vw, 16px)',
                  fontWeight: 600,
                }}>
                  Traffic Alert API
                </th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, index) => (
                <tr
                  key={index}
                  style={{
                    background: competitor.isArgus ? 'rgba(255, 202, 43, 0.1)' : 'rgba(0, 0, 0, 0.3)',
                    borderLeft: competitor.isArgus ? '5px solid #FFCA2B' : 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <td style={{ 
                    padding: 'clamp(16px, 1.5vw, 24px)', 
                    textAlign: 'left',
                    fontFamily: 'Apercu Pro',
                    fontSize: competitor.isArgus ? 'clamp(18px, 1.3vw, 24px)' : 'clamp(16px, 1.1vw, 20px)',
                    fontWeight: competitor.isArgus ? 800 : 600,
                    color: competitor.isArgus ? '#FFCA2B' : '#FFFFFF',
                  }}>
                    {competitor.name}
                  </td>
                  <td style={{ 
                    padding: 'clamp(16px, 1.5vw, 24px)', 
                    textAlign: 'center',
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(14px, 1vw, 18px)',
                    fontWeight: competitor.storage === 'Unlimited' ? 800 : 500,
                    color: competitor.storage === 'Unlimited' ? '#FFCA2B' : 'rgba(255, 255, 255, 0.7)',
                    textTransform: competitor.storage === 'Unlimited' ? 'uppercase' : 'none',
                  }}>
                    {competitor.storage}
                  </td>
                  <td style={{ 
                    padding: 'clamp(16px, 1.5vw, 24px)', 
                    textAlign: 'center',
                    fontSize: 'clamp(24px, 1.8vw, 32px)',
                    fontWeight: 900,
                    color: competitor.apiSearch ? '#0AEB2C' : '#DC3545',
                  }}>
                    {competitor.apiSearch ? '✓' : '✗'}
                  </td>
                  <td style={{ 
                    padding: 'clamp(16px, 1.5vw, 24px)', 
                    textAlign: 'center',
                    fontSize: 'clamp(24px, 1.8vw, 32px)',
                    fontWeight: 900,
                    color: competitor.aiDetection ? '#0AEB2C' : '#DC3545',
                  }}>
                    {competitor.aiDetection ? '✓' : '✗'}
                  </td>
                  <td style={{ 
                    padding: 'clamp(16px, 1.5vw, 24px)', 
                    textAlign: 'center',
                    fontSize: 'clamp(24px, 1.8vw, 32px)',
                    fontWeight: 900,
                    color: competitor.dotCapability ? '#0AEB2C' : '#DC3545',
                  }}>
                    {competitor.dotCapability ? '✓' : '✗'}
                  </td>
                  <td style={{ 
                    padding: 'clamp(16px, 1.5vw, 24px)', 
                    textAlign: 'center',
                    fontSize: 'clamp(24px, 1.8vw, 32px)',
                    fontWeight: 900,
                    color: competitor.aiForecast ? '#0AEB2C' : '#DC3545',
                  }}>
                    {competitor.aiForecast ? '✓' : '✗'}
                  </td>
                  {/* Traffic Alert API Column - FIXED */}
                  <td style={{ 
                    padding: 'clamp(16px, 1.5vw, 24px)', 
                    textAlign: 'center',
                    fontSize: 'clamp(24px, 1.8vw, 32px)',
                    fontWeight: 900,
                    color: competitor.apiAlert ? '#0AEB2C' : '#DC3545',
                  }}>
                    {competitor.apiAlert ? '✓' : '✗'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Callout */}
          <div
            className="mt-16 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '400ms',
            }}
          >
            <p
              style={{
                fontFamily: 'Tobias',
                fontWeight: 500,
                fontSize: 'clamp(36px, 4vw, 40px)',
                lineHeight: '1.2',
                letterSpacing: '0px',
                color: '#FFFFFF',
              }}
            >
              <span style={{ color: '#FFCA2B' }}>ARGUS AI</span> is the only solution offering unlimited storage with full AI-powered capabilities — a 10X competitive advantage in the <span style={{ color: '#FFCA2B' }}>$2B+</span> traffic intelligence market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyArgusStandsAloneSlide;