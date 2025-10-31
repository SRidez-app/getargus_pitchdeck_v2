'use client';

import React, { useEffect, useState } from 'react';
import { AlertCircle, TrendingDown, Shield } from 'lucide-react';

interface SolutionsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const SolutionsSlide: React.FC<SolutionsSlideProps> = ({ onNext, onPrevious }) => {
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

  const solutions = [
    {
      icon: AlertCircle,
      category: "GOV'T PUBLIC SAFETY",
      before: {
        stat: '42K',
        label: 'Auto Deaths Annually',
        impact: 'Delayed emergency response',
      },
      after: {
        stat: '1-2K',
        label: 'Deaths Prevented (US Scale)',
        subLabel: '<10 sec alerts',
        metrics: [
          { value: '50K', label: 'Less Serious Injuries Annually' },
          { value: '30-40%', label: 'Urban Accident Detection' },
        ],
      },
      color: '#A4B3FF',
    },
    {
      icon: TrendingDown,
      category: 'MOBILITY & NAVIGATION',
      before: {
        stat: '5-15 min',
        label: 'Traffic Alert Delays',
        impact: 'Billions in congestion costs',
      },
      after: {
        stat: '$11-18B',
        label: 'Annual Savings',
        subLabel: '<10 sec detection',
        metrics: [
          { value: '15-25%', label: 'Reduce Travel Times' },
          { value: '$1,000', label: 'Saved Per Driver/Year' },
        ],
      },
      color: '#FFCA2B',
      highlight: true,
    },
    {
      icon: Shield,
      category: 'INSURANCE CLAIMS',
      before: {
        stat: '4.2M',
        label: 'Disputed/Fraudulent Claims',
        impact: 'Billions in fraud & litigation',
      },
      after: {
        stat: '$5-13B',
        label: 'Annual Savings',
        subLabel: 'Video evidence',
        metrics: [
          { value: '50-70%', label: 'Faster Resolution' },
          { value: '270K-600K', label: 'Claims w/ Video Evidence' },
        ],
      },
      color: '#A4B3FF',
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
          fontSize: 'clamp(12px, 1.2vw, 14px)',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        5
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
        `}</style>

        {/* Title Section */}
        <div 
          style={{
            marginBottom: 'clamp(32px, 4vh, 56px)',
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
              THE SOLUTION
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
              lineHeight: '1.3',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: 'clamp(12px, 1.5vh, 16px)',
            }}
          >
            Real-Time Intelligence,{' '}
            <span style={{ color: '#FFCA2B' }}>Measurable Impact</span>
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(18px, 1.6vw, 24px)',
              fontWeight: 400,
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            Transforming traffic camera data into life-saving alerts and billions in savings
          </p>
        </div>

        {/* Vertical Cards Side-by-Side */}
        <div 
          className="flex-1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(24px, 2.5vw, 40px)',
            alignItems: 'stretch',
          }}
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${(index + 1) * 150}ms`,
                background: solution.highlight 
                  ? 'linear-gradient(180deg, rgba(255, 202, 43, 0.15) 0%, rgba(255, 202, 43, 0.05) 100%)'
                  : 'rgba(0, 0, 0, 0.4)',
                border: solution.highlight 
                  ? '3px solid rgba(255, 202, 43, 0.6)'
                  : '2px solid rgba(164, 179, 255, 0.3)',
                borderRadius: 'clamp(12px, 1.5vw, 20px)',
                padding: 'clamp(20px, 2.5vh, 32px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category Header */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'clamp(8px, 1vh, 12px)',
                  marginBottom: 'clamp(20px, 2.5vh, 32px)',
                  textAlign: 'center',
                }}
              >
                <solution.icon 
                  size={40}
                  style={{ 
                    color: solution.color,
                    width: 'clamp(32px, 3vw, 40px)',
                    height: 'clamp(32px, 3vw, 40px)',
                  }} 
                />
                <h3
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(14px, 1.3vw, 18px)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: solution.color,
                    lineHeight: '1.3',
                  }}
                >
                  {solution.category}
                </h3>
                {solution.highlight && (
                  <div
                    style={{
                      padding: 'clamp(4px, 0.5vh, 6px) clamp(10px, 1.2vw, 14px)',
                      background: 'rgba(255, 202, 43, 0.25)',
                      border: '2px solid #FFCA2B',
                      borderRadius: '20px',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.9vw, 12px)',
                      fontWeight: 700,
                      color: '#FFCA2B',
                      letterSpacing: '0.05em',
                    }}
                  >
                    PRIMARY REVENUE
                  </div>
                )}
              </div>

              {/* Before/After Vertical Stack */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(16px, 2vh, 24px)',
                  flex: 1,
                }}
              >
                {/* BEFORE */}
                <div
                  style={{
                    padding: 'clamp(16px, 2vh, 24px)',
                    background: 'rgba(255, 0, 0, 0.1)',
                    border: '2px solid rgba(255, 107, 107, 0.3)',
                    borderRadius: 'clamp(8px, 1vw, 12px)',
                    textAlign: 'center',
                    minHeight: 'clamp(140px, 16vh, 180px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.9vw, 12px)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: 'rgba(255, 107, 107, 0.8)',
                      marginBottom: 'clamp(10px, 1.2vh, 14px)',
                    }}
                  >
                    WITHOUT ARGUS
                  </div>
                  <div
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: 600,
                      color: '#FF6B6B',
                      marginBottom: 'clamp(6px, 0.8vh, 8px)',
                      lineHeight: '1.1',
                    }}
                  >
                    {solution.before.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(12px, 1.1vw, 15px)',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: 'clamp(8px, 1vh, 12px)',
                      lineHeight: '1.3',
                    }}
                  >
                    {solution.before.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.95vw, 13px)',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontStyle: 'italic',
                      lineHeight: '1.4',
                    }}
                  >
                    {solution.before.impact}
                  </div>
                </div>

                {/* ARROW */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(24px, 2.5vw, 32px)',
                      color: solution.color,
                      fontWeight: 700,
                      transform: 'rotate(90deg)',
                    }}
                  >
                    →
                  </div>
                </div>

                {/* AFTER */}
                <div
                  style={{
                    padding: 'clamp(16px, 2vh, 24px)',
                    background: `linear-gradient(135deg, ${solution.color}20 0%, ${solution.color}08 100%)`,
                    border: `2px solid ${solution.color}`,
                    borderRadius: 'clamp(8px, 1vw, 12px)',
                    textAlign: 'center',
                    minHeight: 'clamp(320px, 36vh, 400px)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.9vw, 12px)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: solution.color,
                      marginBottom: 'clamp(10px, 1.2vh, 14px)',
                    }}
                  >
                    WITH ARGUS
                  </div>
                  <div
                    style={{
                      fontFamily: 'Tobias',
                      fontSize: 'clamp(32px, 3.5vw, 48px)',
                      fontWeight: 600,
                      color: solution.color,
                      marginBottom: 'clamp(4px, 0.5vh, 6px)',
                      lineHeight: '1.1',
                    }}
                  >
                    {solution.after.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(12px, 1.1vw, 15px)',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: 'clamp(4px, 0.5vh, 6px)',
                      lineHeight: '1.3',
                    }}
                  >
                    {solution.after.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(10px, 0.95vw, 13px)',
                      fontWeight: 500,
                      color: solution.color,
                      marginBottom: 'clamp(12px, 1.5vh, 20px)',
                      fontStyle: 'italic',
                    }}
                  >
                    {solution.after.subLabel}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(6px, 0.8vh, 10px)',
                      flex: 1,
                    }}
                  >
                    {solution.after.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: 'clamp(8px, 1vh, 12px) clamp(8px, 1vw, 12px)',
                          background: 'rgba(0, 0, 0, 0.3)',
                          borderRadius: '6px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'clamp(2px, 0.3vh, 4px)',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Inter',
                            fontSize: 'clamp(18px, 1.6vw, 24px)',
                            fontWeight: 700,
                            color: solution.color,
                            lineHeight: '1.1',
                          }}
                        >
                          {metric.value}
                        </span>
                        <span
                          style={{
                            fontFamily: 'Inter',
                            fontSize: 'clamp(10px, 0.95vw, 13px)',
                            fontWeight: 500,
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: '1.3',
                          }}
                        >
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsSlide;