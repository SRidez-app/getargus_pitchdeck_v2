'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, Target, DollarSign } from 'lucide-react';

interface TamSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TamSlide: React.FC<TamSlideProps> = ({ onNext, onPrevious }) => {
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

  const marketData = [
    {
      vertical: 'Mobility & Navigation',
      tam: 250,
      sam: 80,
      som: 18,
      cagr: 15,
      icon: <TrendingUp size={48} strokeWidth={2.5} />,
      highlight: true,
      salesCycle: 'Weeks - Fast moving, tech-enabled',
    },
    {
      vertical: 'Auto Insurance',
      tam: 1400,
      sam: 250,
      som: 13,
      cagr: 5,
      icon: <DollarSign size={48} strokeWidth={2.5} />,
      highlight: false,
      salesCycle: '6-18 months - POC dependent',
    },
    {
      vertical: "Gov't Public Safety",
      tam: 30,
      sam: 15,
      som: 2,
      cagr: 9,
      icon: <Target size={48} strokeWidth={2.5} />,
      highlight: false,
      salesCycle: '12-24 months - RFP processes',
    },
  ];

  const totalTam = marketData.reduce((acc, m) => acc + m.tam, 0);
  const totalSam = marketData.reduce((acc, m) => acc + m.sam, 0);
  const totalSom = marketData.reduce((acc, m) => acc + m.som, 0);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Global Scrollbar Styles */}
      <style jsx global>{`
        .tam-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .tam-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .tam-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 202, 43, 0.3);
          border-radius: 4px;
        }
        .tam-scroll::-webkit-scrollbar-thumb:hover {
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
        6
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full h-full overflow-y-auto tam-scroll"
        style={{
          padding: 'clamp(24px, 3vh, 48px) clamp(32px, 4vw, 64px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
        }}
      >
        {/* Title Section - More Condensed */}
        <div style={{ marginBottom: 'clamp(20px, 2.5vh, 36px)' }}>
          <div
            style={{
              width: 'fit-content',
              paddingTop: '6px',
              paddingBottom: '6px',
              marginBottom: 'clamp(16px, 2vh, 28px)',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 1.8vw, 32px)',
                lineHeight: '1.2',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              MARKET OPPORTUNITY
            </h2>
            <div 
              style={{
                borderBottom: '3px solid #FFCA2B',
                width: '100%',
                marginTop: '6px',
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
              marginBottom: 'clamp(8px, 1vh, 14px)',
            }}
          >
            Global Market Opportunities
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(16px, 1.3vw, 22px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            TAM, SAM, SOM with Growth Rates (CAGR %)
          </p>
        </div>

        {/* Market Cards Grid - More Condensed */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            marginBottom: 'clamp(28px, 3.5vh, 48px)',
            maxWidth: '100%',
          }}
        >
          {marketData.map((market, index) => (
            <div
              key={index}
              className="transition-all duration-1000"
              style={{
                // OPTION 1: Gold background with black text for Mobility (highlighted card)
                background: market.highlight 
                  ? 'linear-gradient(135deg, #FFCA2B 0%, #F59E0B 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: market.highlight 
                  ? '3px solid #FDE68A'
                  : '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'clamp(12px, 1.2vw, 16px)',
                padding: 'clamp(20px, 2.5vh, 32px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 150 + 200}ms`,
                position: 'relative',
                boxShadow: market.highlight 
                  ? '0 12px 40px rgba(255, 202, 43, 0.4), 0 0 80px rgba(255, 202, 43, 0.2)'
                  : 'none',
              }}
            >
              {/* CAGR Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 'clamp(12px, 1.5vh, 20px)',
                  right: 'clamp(12px, 1.5vw, 20px)',
                  background: market.highlight ? '#000000' : '#FFCA2B',
                  color: market.highlight ? '#FFCA2B' : '#000000',
                  padding: 'clamp(5px, 0.6vh, 7px) clamp(10px, 1.2vw, 14px)',
                  borderRadius: '6px',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  fontWeight: 700,
                }}
              >
                {market.cagr}% CAGR
              </div>

              {/* Icon & Title */}
              <div style={{ marginBottom: 'clamp(18px, 2.2vh, 26px)' }}>
                <div
                  style={{
                    width: 'clamp(50px, 5vw, 70px)',
                    height: 'clamp(50px, 5vw, 70px)',
                    background: market.highlight 
                      ? 'rgba(0, 0, 0, 0.3)' 
                      : 'rgba(255, 202, 43, 0.2)',
                    borderRadius: 'clamp(10px, 1vw, 14px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(12px, 1.5vh, 16px)',
                    border: market.highlight 
                      ? '2px solid rgba(0, 0, 0, 0.4)' 
                      : '2px solid rgba(255, 202, 43, 0.4)',
                    color: market.highlight ? '#000000' : '#FFCA2B',
                  }}
                >
                  {market.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: 'clamp(19px, 1.8vw, 28px)',
                    fontWeight: 700,
                    color: market.highlight ? '#000000' : '#FFFFFF',
                    lineHeight: '1.3',
                    marginBottom: 'clamp(6px, 0.8vh, 10px)',
                  }}
                >
                  {market.vertical}
                </h3>
                <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(14px, 1.15vw, 17px)',
                    fontWeight: 400,
                    color: market.highlight 
                      ? 'rgba(0, 0, 0, 0.7)' 
                      : 'rgba(255, 255, 255, 0.6)',
                    lineHeight: '1.5',
                  }}
                >
                  {market.salesCycle}
                </p>
              </div>

              {/* Market Metrics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 16px)' }}>
                {/* TAM with Earth Emoji */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(16px, 1.3vw, 20px)',
                        fontWeight: 600,
                        color: market.highlight 
                          ? 'rgba(0, 0, 0, 0.8)' 
                          : 'rgba(255, 255, 255, 0.7)',
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      TAM <span style={{ fontSize: 'clamp(20px, 1.6vw, 24px)' }}>🌍</span>
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(18px, 1.8vw, 26px)',
                        fontWeight: 700,
                        color: market.highlight ? '#000000' : '#FFCA2B',
                      }}
                    >
                      ${market.tam}B
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'clamp(6px, 0.7vh, 9px)',
                      background: market.highlight 
                        ? 'rgba(0, 0, 0, 0.2)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="transition-all duration-1000"
                      style={{
                        width: isVisible ? '100%' : '0%',
                        height: '100%',
                        background: market.highlight 
                          ? 'linear-gradient(90deg, #000000 0%, #1a1a1a 100%)'
                          : 'linear-gradient(90deg, #FDE68A 0%, #FBBF24 100%)',
                        transitionDelay: `${index * 150 + 400}ms`,
                      }}
                    />
                  </div>
                </div>

                {/* SAM with USA Flag */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(16px, 1.3vw, 20px)',
                        fontWeight: 600,
                        color: market.highlight 
                          ? 'rgba(0, 0, 0, 0.8)' 
                          : 'rgba(255, 255, 255, 0.7)',
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      SAM <span style={{ fontSize: 'clamp(20px, 1.6vw, 24px)' }}>🇺🇸</span>
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(18px, 1.8vw, 26px)',
                        fontWeight: 700,
                        color: market.highlight ? '#000000' : '#FFCA2B',
                      }}
                    >
                      ${market.sam}B
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'clamp(6px, 0.7vh, 9px)',
                      background: market.highlight 
                        ? 'rgba(0, 0, 0, 0.2)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="transition-all duration-1000"
                      style={{
                        width: isVisible ? `${(market.sam / market.tam) * 100}%` : '0%',
                        height: '100%',
                        background: market.highlight 
                          ? 'linear-gradient(90deg, #1a1a1a 0%, #333333 100%)'
                          : 'linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)',
                        transitionDelay: `${index * 150 + 600}ms`,
                      }}
                    />
                  </div>
                </div>

                {/* SOM */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(16px, 1.3vw, 20px)',
                        fontWeight: 600,
                        color: market.highlight 
                          ? 'rgba(0, 0, 0, 0.8)' 
                          : 'rgba(255, 255, 255, 0.7)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      SOM
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(18px, 1.8vw, 26px)',
                        fontWeight: 700,
                        color: market.highlight ? '#000000' : '#FFCA2B',
                      }}
                    >
                      ${market.som}B
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'clamp(6px, 0.7vh, 9px)',
                      background: market.highlight 
                        ? 'rgba(0, 0, 0, 0.2)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="transition-all duration-1000"
                      style={{
                        width: isVisible ? `${(market.som / market.tam) * 100}%` : '0%',
                        height: '100%',
                        background: market.highlight 
                          ? '#333333'
                          : '#F59E0B',
                        transitionDelay: `${index * 150 + 800}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary Bar - More Condensed */}
        <div
          className="transition-all duration-1000"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid rgba(255, 202, 43, 0.3)',
            borderRadius: 'clamp(10px, 1.2vw, 14px)',
            padding: 'clamp(18px, 2.2vh, 32px) clamp(24px, 3vw, 44px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(16px, 2.5vw, 32px)',
            alignItems: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1000ms',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(16px, 1.4vw, 20px)',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '6px',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              TOTAL TAM <span style={{ fontSize: 'clamp(20px, 1.6vw, 24px)' }}>🌍</span>
            </div>
            <div
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 500,
                color: '#FFCA2B',
              }}
            >
              ${totalTam.toLocaleString()}B
            </div>
          </div>

          <div
            style={{
              width: '2px',
              height: 'clamp(35px, 4vh, 50px)',
              background: 'rgba(255, 255, 255, 0.2)',
              justifySelf: 'center',
            }}
          />

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(16px, 1.4vw, 20px)',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '6px',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              TOTAL SAM <span style={{ fontSize: 'clamp(20px, 1.6vw, 24px)' }}>🇺🇸</span>
            </div>
            <div
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 500,
                color: '#FFCA2B',
              }}
            >
              ${totalSam.toLocaleString()}B
            </div>
          </div>

          <div
            style={{
              width: '2px',
              height: 'clamp(35px, 4vh, 50px)',
              background: 'rgba(255, 255, 255, 0.2)',
              justifySelf: 'center',
            }}
          />

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(16px, 1.4vw, 20px)',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '6px',
                letterSpacing: '0.05em',
              }}
            >
              TOTAL SOM
            </div>
            <div
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 500,
                color: '#FFCA2B',
              }}
            >
              ${totalSom.toLocaleString()}B
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamSlide;
