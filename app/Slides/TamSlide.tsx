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
      som: 4,
      cagr: 15,
      icon: <TrendingUp size={48} strokeWidth={2.5} />,
      highlight: true,
      salesCycle: 'Weeks - Fast moving, tech-enabled',
    },
    {
      vertical: 'Auto Insurance',
      tam: 1400,
      sam: 250,
      som: 2.5,
      cagr: 5,
      icon: <DollarSign size={48} strokeWidth={2.5} />,
      highlight: false,
      salesCycle: '6-18 months - POC dependent',
    },
    {
      vertical: 'Government',
      tam: 30,
      sam: 15,
      som: 0.5,
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
        5
      </div>

      {/* Content Container - NO SCALING WRAPPER */}
      <div 
        className="relative w-full h-full overflow-y-auto tam-scroll"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(40px, 5vw, 80px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
        }}
      >
        {/* Title Section */}
        <div style={{ marginBottom: 'clamp(32px, 4vh, 56px)' }}>
          <div
            style={{
              width: 'fit-content',
              paddingTop: '8px',
              paddingBottom: '8px',
              marginBottom: 'clamp(24px, 3vh, 40px)',
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
              MARKET OPPORTUNITY
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
              fontSize: 'clamp(40px, 5vw, 96px)',
              lineHeight: '1.1',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: 'clamp(12px, 1.5vh, 20px)',
            }}
          >
            Global Market Opportunities
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(18px, 1.5vw, 28px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            TAM, SAM, SOM with Growth Rates (CAGR %)
          </p>
        </div>

        {/* Market Cards Grid */}
        <div 
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            marginBottom: 'clamp(48px, 6vh, 72px)',
            maxWidth: '100%',
          }}
        >
          {marketData.map((market, index) => (
            <div
              key={index}
              className="transition-all duration-1000"
              style={{
                background: market.highlight 
                  ? 'linear-gradient(135deg, rgba(255, 202, 43, 0.15) 0%, rgba(255, 202, 43, 0.05) 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: market.highlight 
                  ? '3px solid rgba(255, 202, 43, 0.6)'
                  : '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(24px, 3vh, 40px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 150 + 200}ms`,
                position: 'relative',
                boxShadow: market.highlight 
                  ? '0 8px 32px rgba(255, 202, 43, 0.2)'
                  : 'none',
              }}
            >
              {/* CAGR Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 'clamp(16px, 2vh, 24px)',
                  right: 'clamp(16px, 2vw, 24px)',
                  background: '#FFCA2B',
                  color: '#000000',
                  padding: 'clamp(6px, 0.8vh, 8px) clamp(12px, 1.5vw, 16px)',
                  borderRadius: '8px',
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: 'clamp(16px, 1.3vw, 20px)',
                  fontWeight: 700,
                }}
              >
                {market.cagr}% CAGR
              </div>

              {/* Icon & Title */}
              <div style={{ marginBottom: 'clamp(24px, 3vh, 32px)' }}>
                <div
                  style={{
                    width: 'clamp(60px, 6vw, 80px)',
                    height: 'clamp(60px, 6vw, 80px)',
                    background: 'rgba(255, 202, 43, 0.2)',
                    borderRadius: 'clamp(12px, 1.2vw, 16px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(16px, 2vh, 20px)',
                    border: '2px solid rgba(255, 202, 43, 0.4)',
                    color: '#FFCA2B',
                  }}
                >
                  {market.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: 'clamp(22px, 2vw, 32px)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '1.3',
                    marginBottom: 'clamp(8px, 1vh, 12px)',
                  }}
                >
                  {market.vertical}
                </h3>
                <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(13px, 1vw, 16px)',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.6)',
                    lineHeight: '1.5',
                  }}
                >
                  {market.salesCycle}
                </p>
              </div>

              {/* Market Metrics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vh, 20px)' }}>
                {/* TAM */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(13px, 1vw, 16px)',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.7)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      TAM
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(20px, 2vw, 28px)',
                        fontWeight: 700,
                        color: '#FFCA2B',
                      }}
                    >
                      ${market.tam}B
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'clamp(8px, 0.8vh, 10px)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '5px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="transition-all duration-1000"
                      style={{
                        width: isVisible ? '100%' : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #FDE68A 0%, #FBBF24 100%)',
                        transitionDelay: `${index * 150 + 400}ms`,
                      }}
                    />
                  </div>
                </div>

                {/* SAM */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(13px, 1vw, 16px)',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.7)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      SAM
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(20px, 2vw, 28px)',
                        fontWeight: 700,
                        color: '#FFCA2B',
                      }}
                    >
                      ${market.sam}B
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'clamp(8px, 0.8vh, 10px)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '5px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="transition-all duration-1000"
                      style={{
                        width: isVisible ? `${(market.sam / market.tam) * 100}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)',
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
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(13px, 1vw, 16px)',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.7)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      SOM
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(20px, 2vw, 28px)',
                        fontWeight: 700,
                        color: '#FFCA2B',
                      }}
                    >
                      ${market.som}B
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'clamp(8px, 0.8vh, 10px)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '5px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="transition-all duration-1000"
                      style={{
                        width: isVisible ? `${(market.som / market.tam) * 100}%` : '0%',
                        height: '100%',
                        background: '#F59E0B',
                        transitionDelay: `${index * 150 + 800}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary Bar */}
        <div
          className="transition-all duration-1000"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid rgba(255, 202, 43, 0.3)',
            borderRadius: 'clamp(12px, 1.5vw, 16px)',
            padding: 'clamp(24px, 3vh, 40px) clamp(32px, 4vw, 56px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(24px, 3vw, 40px)',
            alignItems: 'center',
            marginBottom: 'clamp(56px, 7vh, 80px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1000ms',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(16px, 1.3vw, 20px)',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '8px',
                letterSpacing: '0.05em',
              }}
            >
              TOTAL TAM
            </div>
            <div
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
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
              height: 'clamp(40px, 5vh, 60px)',
              background: 'rgba(255, 255, 255, 0.2)',
              justifySelf: 'center',
            }}
          />

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(16px, 1.3vw, 20px)',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '8px',
                letterSpacing: '0.05em',
              }}
            >
              TOTAL SAM
            </div>
            <div
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
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
              height: 'clamp(40px, 5vh, 60px)',
              background: 'rgba(255, 255, 255, 0.2)',
              justifySelf: 'center',
            }}
          />

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(16px, 1.3vw, 20px)',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '8px',
                letterSpacing: '0.05em',
              }}
            >
              TOTAL SOM
            </div>
            <div
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 500,
                color: '#FFCA2B',
              }}
            >
              ${totalSom.toLocaleString()}B
            </div>
          </div>
        </div>

        {/* Data Source */}
        {/* <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(12px, 1vw, 14px)',
            color: 'rgba(255, 255, 255, 0.4)',
            marginBottom: 'clamp(24px, 3vh, 32px)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s',
            transitionDelay: '1200ms',
            fontStyle: 'italic',
          }}
        >
          Data sources: Global Market Insights, Statista, Verified Market Research (2024)
        </div> */}

        {/* Sales Cycle Notes Section */}
        {/* <div 
          className="transition-all duration-1000"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1400ms',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(255, 202, 43, 0.3)',
              borderRadius: 'clamp(12px, 1.5vw, 16px)',
              padding: 'clamp(32px, 4vh, 48px)',
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(24px, 2.2vw, 32px)',
                fontWeight: 600,
                color: '#FFCA2B',
                marginBottom: 'clamp(28px, 3.5vh, 40px)',
                letterSpacing: '0.01em',
              }}
            >
              Sales Cycle Notes
            </h3> */}

            {/* <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(24px, 3vh, 32px)',
              }}
            > */}
              {/* Insurance */}
              {/* <div style={{ marginBottom: 'clamp(4px, 0.5vh, 8px)' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(18px, 1.5vw, 22px)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: 'clamp(8px, 1vh, 12px)',
                  }}
                >
                  Insurance
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 1.1vw, 17px)',
                    fontWeight: 400,
                    lineHeight: '160%',
                    color: 'rgba(255, 255, 255, 0.85)',
                  }}
                >
                  Dependent on POC resources extends - Sales cycles to 6-18 months.
                </p>
              </div> */}

              {/* Government */}
              {/* <div style={{ marginBottom: 'clamp(4px, 0.5vh, 8px)' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(18px, 1.5vw, 22px)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: 'clamp(8px, 1vh, 12px)',
                  }}
                >
                  Government
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 1.1vw, 17px)',
                    fontWeight: 400,
                    lineHeight: '160%',
                    color: 'rgba(255, 255, 255, 0.85)',
                  }}
                >
                  Lengthy RFP/Q processes and slow to adopt - Sales cycles of 12-24 months.
                </p>
              </div> */}

              {/* Mobility */}
              {/* <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(18px, 1.5vw, 22px)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: 'clamp(8px, 1vh, 12px)',
                  }}
                >
                  Mobility
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 1.1vw, 17px)',
                    fontWeight: 400,
                    lineHeight: '160%',
                    color: 'rgba(255, 255, 255, 0.85)',
                  }}
                >
                  Fast moving, Tech Enabled, ICP is Data Scientist - Sales cycles are measured in weeks. Huge budgets for data.
                </p>
              </div>
            </div> */}
          {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default TamSlide;