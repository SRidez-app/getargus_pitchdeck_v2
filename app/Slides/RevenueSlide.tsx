'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RevenueProjectionSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const RevenueProjectionSlide: React.FC<RevenueProjectionSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const chartRef = useRef<any>(null);

  const data = [
    { year: '1', mobility: 100000, government: 20000, insurance: 20000 },
    { year: '2', mobility: 5000000, government: 3346667, insurance: 244949 },
    { year: '3', mobility: 19000000, government: 6673334, insurance: 3000000 },
    { year: '4', mobility: 50000000, government: 10000001, insurance: 4500000 },
    { year: '5', mobility: 65000000, government: 17000002, insurance: 7650000 },
    { year: '6', mobility: 84500000, government: 28900003, insurance: 13005000 },
    { year: '7', mobility: 109850000, government: 49130005, insurance: 22108500 },
    { year: '8', mobility: 142805000, government: 83521008, insurance: 37584450 },
    { year: '9', mobility: 185646500, government: 141984714, insurance: 63894565 },
    { year: '10', mobility: 241340450, government: 241374012, insurance: 108621761 },
  ];

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

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(0)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value}`;
  };

  const formatTooltip = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(2)}K`;
    }
    return `$${value.toLocaleString()}`;
  };

  // Custom tooltip component that shows total
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
      
      return (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            border: '2px solid #FFCA2B',
            borderRadius: '12px',
            padding: '16px 20px',
            fontFamily: 'Inter',
          }}
        >
          <p
            style={{
              color: '#FFCA2B',
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.2vw, 20px)',
              marginBottom: '12px',
              borderBottom: '1px solid rgba(255, 202, 43, 0.3)',
              paddingBottom: '8px',
            }}
          >
            Year {label}
          </p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              style={{
                color: entry.color,
                fontSize: 'clamp(14px, 1vw, 16px)',
                margin: '6px 0',
                fontWeight: 500,
              }}
            >
              <span style={{ fontWeight: 600 }}>{entry.name}:</span> {formatTooltip(entry.value)}
            </p>
          ))}
          <div
            style={{
              borderTop: '2px solid #FFCA2B',
              marginTop: '10px',
              paddingTop: '10px',
            }}
          >
            <p
              style={{
                color: '#FFCA2B',
                fontSize: 'clamp(15px, 1.1vw, 18px)',
                fontWeight: 700,
              }}
            >
              Total Revenue: {formatTooltip(total)}
            </p>
          </div>
        </div>
      );
    }
    return null;
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
        8
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full h-full flex flex-col items-start justify-start overflow-y-auto"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(48px, 5vw, 96px)',
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
          className="mb-8 w-full"
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
              REVENUE GROWTH
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
            10-Year Revenue{' '}
            <span style={{ color: '#FFCA2B' }}>Projection</span>
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
            Structured Sales Growth Across Key Verticals
          </p>
          {!hasUserInteracted && isAutoPlaying && (
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                fontWeight: 500,
                lineHeight: '1.5',
                color: 'rgba(255, 202, 43, 0.7)',
                marginTop: 'clamp(12px, 1.5vh, 16px)',
                fontStyle: 'italic',
                transition: 'opacity 0.5s ease',
              }}
            >
              💡 Hover over the chart to explore each year&apos;s revenue breakdown
            </p>
          )}
        </div>

        {/* Chart Container */}
        <div 
          className="w-full transition-all duration-1000"
          style={{
            maxWidth: '100%',
            height: 'clamp(500px, 60vh, 700px)',
            maxHeight: '700px',
            minHeight: '500px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '2px solid rgba(164, 179, 255, 0.3)',
            borderRadius: 'clamp(16px, 1.5vw, 20px)',
            padding: 'clamp(32px, 3vh, 50px) clamp(32px, 3vw, 60px)',
          }}
          onMouseEnter={() => {
            setIsAutoPlaying(false);
            setHasUserInteracted(true);
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={data} 
              margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
            >
              <defs>
                {/* Gradient for Mobility */}
                <linearGradient id="colorMobility" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFD700" stopOpacity={0.3}/>
                </linearGradient>
                {/* Gradient for Government */}
                <linearGradient id="colorGovernment" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6347" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FF6347" stopOpacity={0.3}/>
                </linearGradient>
                {/* Gradient for Insurance */}
                <linearGradient id="colorInsurance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFB6C1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFB6C1" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.15)" />
              <XAxis 
                dataKey="year" 
                stroke="rgba(255, 255, 255, 0.8)"
                style={{ fontSize: 'clamp(13px, 1vw, 16px)', fontFamily: 'Inter', fontWeight: 500 }}
                label={{ 
                  value: 'Year', 
                  position: 'insideBottom', 
                  offset: -10, 
                  fill: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 'clamp(15px, 1.2vw, 18px)',
                  fontWeight: 600
                }}
                tick={{ fill: 'rgba(255, 255, 255, 0.8)' }}
              />
              <YAxis 
                stroke="rgba(255, 255, 255, 0.8)"
                style={{ fontSize: 'clamp(13px, 1vw, 16px)', fontFamily: 'Inter', fontWeight: 500 }}
                tickFormatter={formatYAxis}
                label={{ 
                  value: 'Sales Volume', 
                  angle: -90, 
                  position: 'insideCenter', 
                  fill: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 'clamp(15px, 1.2vw, 18px)',
                  fontWeight: 600,
                      dx: -45
             
                }}
                tick={{ fill: 'rgba(255, 255, 255, 0.8)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ 
                  fontFamily: 'Inter',
                  fontSize: 'clamp(14px, 1.1vw, 18px)',
                  fontWeight: 600,
                  paddingTop: '30px',
                }}
                iconType="square"
                iconSize={14}
              />
              <Area 
                type="monotone" 
                dataKey="mobility" 
                stackId="1"
                stroke="#FFD700" 
                strokeWidth={3}
                fill="url(#colorMobility)"
                name="Mobility"
              />
              <Area 
                type="monotone" 
                dataKey="government" 
                stackId="1"
                stroke="#FF6347" 
                strokeWidth={3}
                fill="url(#colorGovernment)"
                name="Gov't"
              />
              <Area 
                type="monotone" 
                dataKey="insurance" 
                stackId="1"
                stroke="#FFB6C1" 
                strokeWidth={3}
                fill="url(#colorInsurance)"
                name="Insurance/PI Firms"
              />
            </AreaChart>
            
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueProjectionSlide;