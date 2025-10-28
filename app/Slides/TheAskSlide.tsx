'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface TheAskSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TheAskSlide: React.FC<TheAskSlideProps> = ({ onNext, onPrevious }) => {
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

  const objectives = [
    {
      text: "Execute on pilots in motion. \"Chicken or Egg\""
    },
    {
      text: "Scale go-to-market, strategic partnerships, and customer acquisition across mobility and government sectors"
    },
    {
      text: "Invest in camera networks ahead of our growth to scale."
    }
  ];

  // Coverage timeline data
  const coverageData = [
    {
      year: '2025',
      states: ['GA', 'NV'],
      mapImage: '/coverage_map_2025.png'
    },
    {
      year: '2026',
      states: ['GA', 'NV', 'FL', 'NY', 'MI', 'CA', 'NJ', 'TN', 'AL', 'AR', 'MS', 'NE'],
      mapImage: '/coverage_map_2026.png'
    },
    {
      year: '2027',
      states: ['GA', 'NV', 'FL', 'NY', 'MI', 'CA', 'NJ', 'TN', 'AL', 'AR', 'MS', 'NE', 
               'MN', 'SC', 'VA', 'MD', 'RI', 'CT', 'VT', 'ME', 'NH', 'PA', 'KY', 'HI', 
               'WA', 'IL', 'IN', 'WI'],
      mapImage: '/coverage_map_2027.png'
    }
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-y-auto overflow-x-hidden"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
        scrollbarWidth: 'thin',
        scrollbarColor: '#FFCA2B #1a1a1a',
      }}
    >
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        div::-webkit-scrollbar-thumb {
          background: #FFCA2B;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #FFD84D;
        }
      `}</style>

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
        11
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full max-w-[1920px] mx-auto flex flex-col items-start justify-start"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(48px, 5vw, 96px)',
        }}
      >
        {/* Title Section */}
        <div 
          className="mb-8 w-full"
          style={{
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
                fontSize: 'clamp(28px, 2.5vw, 36px)',
                lineHeight: '1.3',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              BRIDGE TO SEED ROUND
            </h2>
            <div 
              style={{
                borderBottom: '3px solid #FFCA2B',
                width: '100%',
                marginTop: 'clamp(6px, 0.8vh, 8px)',
              }}
            />
          </div>
          
          {/* Main Statement */}
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: 'clamp(40px, 4.5vw, 64px)',
              lineHeight: '1.2',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: 'clamp(32px, 4vh, 48px)',
            }}
          >
            We're raising $500k on $6M post money valuation
          </h1>

          {/* Key Objectives Header */}
          <h3
            style={{
              fontFamily: 'Apercu Pro',
              fontWeight: 500,
              fontSize: 'clamp(32px, 3vw, 44px)',
              lineHeight: '1.3',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              marginBottom: 'clamp(24px, 3vh, 40px)',
            }}
          >
            Key Objectives / Use of Funding:
          </h3>
        </div>

        {/* Objectives List */}
        <div 
          className="w-full flex flex-col"
          style={{
            gap: 'clamp(20px, 2.5vh, 32px)',
            marginBottom: 'clamp(48px, 6vh, 72px)',
          }}
        >
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start"
              style={{
                width: '100%',
                maxWidth: 'clamp(1200px, 87.5vw, 1680px)',
                gap: 'clamp(24px, 2.5vw, 40px)',
                padding: 'clamp(24px, 2.5vh, 32px) clamp(40px, 4vw, 60px)',
                borderRadius: 'clamp(16px, 1.5vw, 20px)',
                border: '2px solid #A4B3FF',
                background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                boxShadow: '0px 4px 14px 0px #00000040',
              }}
            >
              {/* Bullet Point Icon */}
              <div 
                style={{ 
                  flexShrink: 0, 
                  width: 'clamp(32px, 2.5vw, 40px)', 
                  height: 'clamp(32px, 2.5vw, 40px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 'clamp(4px, 0.5vh, 8px)',
                }}
              >
                <Image
                  src="/double_arrow.png"
                  alt="Bullet point"
                  width={40}
                  height={40}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain',
                    filter: 'brightness(0) saturate(100%) invert(81%) sepia(68%) saturate(543%) hue-rotate(359deg) brightness(103%) contrast(101%)',
                  }}
                />
              </div>
              
              {/* Objective Text */}
              <p 
                className="text-white flex-1"
                style={{
                  fontFamily: 'Apercu Pro',
                  fontWeight: 400,
                  fontSize: 'clamp(18px, 1.8vw, 28px)',
                  lineHeight: '1.5',
                  letterSpacing: '0.01em',
                  color: '#FFFFFF',
                }}
              >
                {objective.text}
              </p>
            </div>
          ))}
        </div>

        {/* Coverage Maps Section */}
        <div className="w-full">
          <h3
            style={{
              fontFamily: 'Apercu Pro',
              fontWeight: 500,
              fontSize: 'clamp(32px, 3vw, 44px)',
              lineHeight: '1.3',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              marginBottom: 'clamp(32px, 4vh, 48px)',
            }}
          >
            Geographic Expansion Timeline:
          </h3>

          {/* Maps Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 w-full"
            style={{
              gap: 'clamp(24px, 3vw, 48px)',
            }}
          >
            {coverageData.map((data, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 'clamp(20px, 2.5vh, 32px)',
                  borderRadius: 'clamp(16px, 1.5vw, 20px)',
                  border: '2px solid #A4B3FF',
                  background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                  boxShadow: '0px 4px 14px 0px #00000040',
                }}
              >
                {/* Year Label */}
                <h4
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontWeight: 600,
                    fontSize: 'clamp(24px, 2.2vw, 32px)',
                    color: '#FFCA2B',
                    marginBottom: 'clamp(16px, 2vh, 24px)',
                  }}
                >
                  {data.year}
                </h4>

                {/* Map Image */}
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    marginBottom: 'clamp(16px, 2vh, 24px)',
                    borderRadius: 'clamp(8px, 1vw, 12px)',
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <Image
                    src={data.mapImage}
                    alt={`${data.year} Coverage Map`}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* State Count */}
                <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.4vw, 18px)',
                    color: '#FFFFFF',
                    opacity: 0.8,
                    textAlign: 'center',
                  }}
                >
                  {data.states.length} States
                </p>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div 
            className="flex items-center justify-center w-full"
            style={{
              marginTop: 'clamp(32px, 4vh, 48px)',
              gap: 'clamp(32px, 4vw, 64px)',
            }}
          >
            <div className="flex items-center" style={{ gap: 'clamp(8px, 1vw, 12px)' }}>
              <div
                style={{
                  width: 'clamp(20px, 2vw, 28px)',
                  height: 'clamp(20px, 2vw, 28px)',
                  background: '#FFCA2B',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.4vw, 18px)',
                  color: '#FFFFFF',
                }}
              >
                New Coverage
              </span>
            </div>

            <div className="flex items-center" style={{ gap: 'clamp(8px, 1vw, 12px)' }}>
              <div
                style={{
                  width: 'clamp(20px, 2vw, 28px)',
                  height: 'clamp(20px, 2vw, 28px)',
                  background: '#14004C',
                  borderRadius: '4px',
                  border: '1px solid #A4B3FF',
                }}
              />
              <span
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.4vw, 18px)',
                  color: '#FFFFFF',
                }}
              >
                Existing Coverage
              </span>
            </div>

            <div className="flex items-center" style={{ gap: 'clamp(8px, 1vw, 12px)' }}>
              <div
                style={{
                  width: 'clamp(20px, 2vw, 28px)',
                  height: 'clamp(20px, 2vw, 28px)',
                  background: '#D3D3D3',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.4vw, 18px)',
                  color: '#FFFFFF',
                }}
              >
                Not Covered
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheAskSlide;