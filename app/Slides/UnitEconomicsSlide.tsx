'use client';

import React, { useEffect, useState } from 'react';

interface UnitEconomicsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const UnitEconomicsSlide: React.FC<UnitEconomicsSlideProps> = ({ onNext, onPrevious }) => {
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

  const yearData = [
    {
      year: 'Year 1',
      period: 'Current',
      cogs: 150000,
      government: 0,
      mobility: 500000,
    },
    {
      year: 'Year 2',
      period: '2025 (E)',
      cogs: 200000,
      government: 500000,
      mobility: 20000000,
    },
    {
      year: 'Year 4',
      period: '2027 (E)',
      cogs: 250000,
      government: 1500000,
      mobility: 50000000,
    },
  ];

  // Process data for each year
  // First, find the maximum values across all years for scaling
  const maxCogs = Math.max(...yearData.map(y => y.cogs));
  const maxGov = Math.max(...yearData.map(y => y.government));
  const maxMobility = Math.max(...yearData.map(y => y.mobility));
  const maxTotal = Math.max(...yearData.map(y => y.government + y.mobility + y.cogs));

  const processedData = yearData.map(year => {
    const totalRevenue = year.government + year.mobility;
    const grossProfit = totalRevenue - year.cogs;
    const grossMarginPercent = ((grossProfit / totalRevenue) * 100).toFixed(0);
    
    // Calculate segment heights as percentage of max total
    // This makes segments proportional to their actual values
    const cogsPercent = (year.cogs / maxTotal) * 100;
    const govPercent = (year.government / maxTotal) * 100;
    const mobilityPercent = (year.mobility / maxTotal) * 100;
    
    // Margin fills the remaining space to make total = 100%
    const usedPercent = cogsPercent + govPercent + mobilityPercent;
    const marginPercent = 100 - usedPercent;

    return {
      ...year,
      totalRevenue,
      grossProfit,
      grossMarginPercent,
      cogsPercent,
      govPercent,
      mobilityPercent,
      marginPercent,
    };
  });

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
        9
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
        <div 
          className="mb-20"
          style={{
            marginBottom: 'clamp(80px, 10vh, 120px)',
          }}
        >
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
              FINANCIAL PROJECTIONS
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
            Revenue Breakdown{' '}
            <span style={{ color: '#FFCA2B' }}>& Margins</span>
          </h1>
        </div>

        {/* Vertical Bar Charts */}
        <div 
          className="flex justify-center items-end gap-16 w-full max-w-6xl mx-auto transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
            height: 'clamp(400px, 50vh, 600px)',
          }}
        >
          {processedData.map((yearItem, index) => {            
            return (
              <div 
                key={index}
                className="flex flex-col items-center transition-all duration-1000"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 200 + 400}ms`,
                  width: 'clamp(140px, 15vw, 220px)',
                }}
              >
                {/* Gross Margin Label at Top */}
                <div
                  className="text-center mb-4"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(16px, 1.3vw, 22px)',
                    fontWeight: 700,
                    color: '#FFCA2B',
                  }}
                >
                  {yearItem.grossMarginPercent}% Margin
                </div>

                {/* Vertical Stacked Bar - ALL BARS ARE 100% HEIGHT */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '2px solid rgba(164, 179, 255, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* COGS Segment (Bottom) - Uses percentage of total */}
                  <div
                    style={{
                      flex: `0 0 ${yearItem.cogsPercent}%`,
                      backgroundColor: '#6B7280',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '16px 8px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      minHeight: '80px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 'clamp(11px, 1vw, 14px)',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        marginBottom: '6px',
                      }}
                    >
                      COGS
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 'clamp(13px, 1.1vw, 16px)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                      }}
                    >
                      ${yearItem.cogs >= 1000000 
                        ? `${(yearItem.cogs / 1000000).toFixed(1)}M`
                        : `${(yearItem.cogs / 1000).toFixed(0)}K`}
                    </span>
                  </div>

                  {/* Government Segment */}
                  {yearItem.government > 0 && (
                    <div
                      style={{
                        flex: `0 0 ${yearItem.govPercent}%`,
                        backgroundColor: '#B8860B',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16px 8px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        minHeight: '70px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: 'clamp(10px, 0.9vw, 13px)',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          marginBottom: '6px',
                        }}
                      >
                        Government
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: 'clamp(13px, 1.1vw, 16px)',
                          fontWeight: 700,
                          color: '#FFFFFF',
                        }}
                      >
                        ${yearItem.government >= 1000000 
                          ? `${(yearItem.government / 1000000).toFixed(1)}M`
                          : `${(yearItem.government / 1000).toFixed(0)}K`}
                      </span>
                    </div>
                  )}

                  {/* Mobility Segment */}
                  <div
                    style={{
                      flex: `0 0 ${yearItem.mobilityPercent}%`,
                      backgroundColor: '#FFD700',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '16px 8px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 'clamp(11px, 1vw, 14px)',
                        fontWeight: 600,
                        color: '#1F2937',
                        marginBottom: '6px',
                      }}
                    >
                      Mobility
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 'clamp(13px, 1.1vw, 16px)',
                        fontWeight: 700,
                        color: '#1F2937',
                      }}
                    >
                      ${yearItem.mobility >= 1000000 
                        ? `${(yearItem.mobility / 1000000).toFixed(1)}M`
                        : `${(yearItem.mobility / 1000).toFixed(0)}K`}
                    </span>
                  </div>

               
                </div>

                {/* Year Labels */}
                <div className="text-center mt-6">
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(20px, 1.5vw, 28px)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '4px',
                    }}
                  >
                    {yearItem.year}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1vw, 18px)',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    {yearItem.period}
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(13px, 0.95vw, 16px)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    ${yearItem.totalRevenue >= 1000000 
                      ? `${(yearItem.totalRevenue / 1000000).toFixed(1)}M`
                      : `${(yearItem.totalRevenue / 1000).toFixed(0)}K`} Revenue
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div
          className="w-full max-w-6xl mx-auto mt-8 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: '1200ms',
          }}
        >
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#6B7280',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(13px, 0.9vw, 16px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                COGS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#B8860B',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(13px, 0.9vw, 16px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                Government
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#FFD700',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(13px, 0.9vw, 16px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                Mobility
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#10B981',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(13px, 0.9vw, 16px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                Gross Margin
              </span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className="text-center w-full mt-8 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: '1400ms',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(12px, 0.8vw, 14px)',
              color: 'rgba(255, 255, 255, 0.5)',
              fontStyle: 'italic',
            }}
          >
            COGS = Cost of Goods Sold | (E) = Estimated
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnitEconomicsSlide;