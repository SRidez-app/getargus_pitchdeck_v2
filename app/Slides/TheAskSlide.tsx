'use client';

import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

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
      text: "Invest in camera networks ahead of our growth to scale."
    }
  ];

  // Pre-Seed funding allocation
  const preSeedData = [
    { name: 'AI Dev. / Modeling Training', value: 90, color: '#FF6347' },
    { name: 'Marketing/Sales', value: 10, color: '#FFCA2B' }
  ];

  // Bridge Round funding allocation
  const bridgeRoundData = [
    { name: 'Marketing/Sales', value: 45, color: '#FFCA2B' },
    { name: 'AI Dev. / Modeling Training', value: 35, color: '#FF6347' },
    { name: "Gov't Relations", value: 20, color: '#A4B3FF' }
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        style={{
          fontSize: 'clamp(16px, 1.4vw, 20px)',
          fontWeight: 700,
          fontFamily: 'Inter',
        }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            border: '2px solid #FFCA2B',
            borderRadius: '12px',
            padding: '12px 16px',
            fontFamily: 'Inter',
          }}
        >
          <p
            style={{
              color: payload[0].payload.color,
              fontWeight: 600,
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              margin: 0,
            }}
          >
            {payload[0].name}: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

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
            marginBottom: 'clamp(56px, 7vh, 80px)',
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
              {/* Bullet Point */}
              <div 
                style={{ 
                  flexShrink: 0, 
                  width: 'clamp(12px, 1.2vw, 16px)', 
                  height: 'clamp(12px, 1.2vw, 16px)',
                  borderRadius: '50%',
                  background: '#FFCA2B',
                  marginTop: 'clamp(8px, 1vh, 12px)',
                }}
              />
              
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

        {/* Funding Allocation Section */}
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
            Funding Allocation:
          </h3>

          {/* Pie Charts Container */}
          <div 
            className="grid grid-cols-2 w-full"
            style={{
              gap: 'clamp(32px, 4vw, 64px)',
            }}
          >
            {/* Pre-Seed Chart */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 'clamp(32px, 3vh, 48px) clamp(24px, 2.5vw, 40px)',
                borderRadius: 'clamp(16px, 1.5vw, 20px)',
                border: '2px solid #A4B3FF',
                background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                boxShadow: '0px 4px 14px 0px #00000040',
              }}
            >
              <h4
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontWeight: 600,
                  fontSize: 'clamp(24px, 2.2vw, 32px)',
                  color: '#FFFFFF',
                  marginBottom: 'clamp(8px, 1vh, 12px)',
                  textAlign: 'center',
                }}
              >
                $350k Pre-Seed
              </h4>
              <p
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.3vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: 'clamp(24px, 3vh, 32px)',
                  textAlign: 'center',
                }}
              >
                Previous Funding Allocation
              </p>
              
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={preSeedData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {preSeedData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={80}
                    wrapperStyle={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(13px, 1.2vw, 16px)',
                      fontWeight: 500,
                      paddingTop: '20px',
                    }}
                    iconType="square"
                    iconSize={12}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bridge Round Chart */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 'clamp(32px, 3vh, 48px) clamp(24px, 2.5vw, 40px)',
                borderRadius: 'clamp(16px, 1.5vw, 20px)',
                border: '2px solid #FFCA2B',
                background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                boxShadow: '0px 4px 14px 0px #00000040',
              }}
            >
              <h4
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontWeight: 600,
                  fontSize: 'clamp(24px, 2.2vw, 32px)',
                  color: '#FFCA2B',
                  marginBottom: 'clamp(8px, 1vh, 12px)',
                  textAlign: 'center',
                }}
              >
                $500k Bridge Round
              </h4>
              <p
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.3vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: 'clamp(24px, 3vh, 32px)',
                  textAlign: 'center',
                }}
              >
                Proposed Funding Allocation
              </p>
              
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={bridgeRoundData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {bridgeRoundData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={80}
                    wrapperStyle={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(13px, 1.2vw, 16px)',
                      fontWeight: 500,
                      paddingTop: '20px',
                    }}
                    iconType="square"
                    iconSize={12}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheAskSlide;
