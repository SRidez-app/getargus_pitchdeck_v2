'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, Camera, DollarSign, Users } from 'lucide-react';

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

  // Werner Model (per state, ~2500 cameras)
  const camerasPerState = 2500;
  const alertsPerCamera = 5; // per month
  const wernerModel = {
    setupCost: 10000,
    monthlyFlat: 5000,
    alertsPerMonth: camerasPerState * alertsPerCamera, // 12,500
    pricePerAlert: 0.50,
    monthlyRevenue: 11250, // 5k + (12.5k * 0.50)
    annualRevenue: 135000,
    customerSavings: 60000,
    annualSavings: 720000,
  };

  // Camera scaling scenarios
  const cameraScaling = [
    {
      cameras: 10000,
      alerts: 50000, // 10k * 5
      monthlyRevenue: 30000, // 5k + (50k * 0.50)
      annualRevenue: 360000,
      states: 4, // 10k / 2500
    },
    {
      cameras: 20000,
      alerts: 100000,
      monthlyRevenue: 55000,
      annualRevenue: 660000,
      states: 8,
    },
    {
      cameras: 50000,
      alerts: 250000,
      monthlyRevenue: 130000,
      annualRevenue: 1560000,
      states: 20,
    },
  ];

  // Multi-client scenarios (shared camera networks)
  const revenuePerClient = 360000; // Annual revenue for 10K cameras
  const multiClient = [
    { clients: 5, cameras: 50000, annualRevenue: 5 * 5 * revenuePerClient },
    { clients: 10, cameras: 100000, annualRevenue: 10 * 10 * revenuePerClient },
    { clients: 25, cameras: 250000, annualRevenue: 25 * 25 * revenuePerClient },
  ];

  const formatCurrency = (value: number, compact: boolean = false) => {
    if (compact && value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (compact && value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
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
        11
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
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease',
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
        <div style={{ marginBottom: 'clamp(32px, 4vh, 48px)' }}>
          <div
            style={{
              width: 'fit-content',
              paddingTop: 'clamp(6px, 0.8vh, 8px)',
              paddingBottom: 'clamp(6px, 0.8vh, 8px)',
              marginBottom: 'clamp(24px, 3vh, 32px)',
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
              UNIT ECONOMICS
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
              fontSize: 'clamp(40px, 4.5vw, 64px)',
              lineHeight: '1.3',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: 'clamp(8px, 1vh, 12px)',
            }}
          >
            Scalable Model with{' '}
            <span style={{ color: '#FFCA2B' }}>Exponential Growth</span>
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(16px, 1.6vw, 22px)',
              fontWeight: 400,
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            From single-client economics to multi-client compounding
          </p>
        </div>

        {/* Three Cards Side by Side */}
        <div 
          className="flex-1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(20px, 2vw, 32px)',
            alignItems: 'stretch',
          }}
        >
          {/* Werner Model Card */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(255, 202, 43, 0.5)',
              borderRadius: 'clamp(12px, 1.5vw, 20px)',
              padding: 'clamp(20px, 2.5vh, 28px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 12px)', marginBottom: 'clamp(16px, 2vh, 20px)' }}>
              <div
                style={{
                  background: '#FFCA2B',
                  borderRadius: 'clamp(6px, 0.8vw, 8px)',
                  padding: 'clamp(6px, 0.8vw, 8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DollarSign size={24} color="#000" strokeWidth={3} style={{ width: 'clamp(20px, 2vw, 24px)', height: 'clamp(20px, 2vw, 24px)' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  fontWeight: 700,
                  color: '#FFCA2B',
                }}
              >
                Werner Model
              </h3>
            </div>

            <div style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 1.2vw, 15px)' }}>
              <div style={{ 
                background: 'rgba(255, 202, 43, 0.1)', 
                padding: 'clamp(12px, 1.5vh, 16px)', 
                borderRadius: 'clamp(8px, 1vw, 12px)',
                marginBottom: 'clamp(12px, 1.5vh, 16px)',
                border: '1px solid rgba(255, 202, 43, 0.3)'
              }}>
                <p style={{ fontWeight: 600, color: '#FFCA2B', marginBottom: 'clamp(8px, 1vh, 12px)', fontSize: 'clamp(14px, 1.3vw, 16px)' }}>Per State (~2,500 cameras)</p>
                <div style={{ display: 'grid', gap: 'clamp(6px, 0.8vh, 8px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Setup Cost:</span>
                    <span style={{ fontWeight: 600, color: '#FFF' }}>{formatCurrency(wernerModel.setupCost)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Monthly Flat Rate:</span>
                    <span style={{ fontWeight: 600, color: '#FFF' }}>{formatCurrency(wernerModel.monthlyFlat)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Alerts/Month:</span>
                    <span style={{ fontWeight: 600, color: '#FFF' }}>{formatNumber(wernerModel.alertsPerMonth)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Per Alert:</span>
                    <span style={{ fontWeight: 600, color: '#FFF' }}>{formatCurrency(wernerModel.pricePerAlert)}</span>
                  </div>
                </div>
              </div>

              <div style={{ 
                borderTop: '2px solid #FFCA2B', 
                paddingTop: 'clamp(12px, 1.5vh, 16px)',
                marginTop: 'clamp(12px, 1.5vh, 16px)'
              }}>
                <div style={{ display: 'grid', gap: 'clamp(8px, 1vh, 12px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', fontWeight: 600, color: '#FFF' }}>Monthly Revenue:</span>
                    <span style={{ 
                      fontSize: 'clamp(18px, 1.8vw, 22px)', 
                      fontWeight: 700,
                      color: '#FFCA2B'
                    }}>
                      {formatCurrency(wernerModel.monthlyRevenue)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', fontWeight: 600, color: '#FFF' }}>Annual Revenue:</span>
                    <span style={{ 
                      fontSize: 'clamp(18px, 1.8vw, 22px)', 
                      fontWeight: 700,
                      color: '#FFCA2B'
                    }}>
                      {formatCurrency(wernerModel.annualRevenue)}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ 
                background: 'rgba(164, 179, 255, 0.15)', 
                padding: 'clamp(12px, 1.5vh, 16px)', 
                borderRadius: 'clamp(8px, 1vw, 12px)',
                marginTop: 'clamp(12px, 1.5vh, 16px)',
                border: '1px solid rgba(164, 179, 255, 0.3)'
              }}>
                <p style={{ fontWeight: 600, color: '#A4B3FF', marginBottom: 'clamp(6px, 0.8vh, 8px)', fontSize: 'clamp(14px, 1.3vw, 16px)' }}>Customer Value</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Monthly Savings:</span>
                  <span style={{ fontWeight: 700, color: '#A4B3FF', fontSize: 'clamp(16px, 1.5vw, 18px)' }}>
                    {formatCurrency(wernerModel.customerSavings)}
                  </span>
                </div>
                <div style={{ 
                  fontSize: 'clamp(11px, 1vw, 13px)', 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  marginTop: 'clamp(6px, 0.8vh, 8px)',
                  fontStyle: 'italic'
                }}>
                  ROI: Customer saves {formatCurrency(wernerModel.annualSavings)}/year
                </div>
              </div>
            </div>
          </div>

          {/* Camera Scaling Card */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(164, 179, 255, 0.5)',
              borderRadius: 'clamp(12px, 1.5vw, 20px)',
              padding: 'clamp(20px, 2.5vh, 28px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 12px)', marginBottom: 'clamp(16px, 2vh, 20px)' }}>
              <div
                style={{
                  background: 'rgba(164, 179, 255, 0.3)',
                  borderRadius: 'clamp(6px, 0.8vw, 8px)',
                  padding: 'clamp(6px, 0.8vw, 8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Camera size={24} color="#A4B3FF" strokeWidth={2.5} style={{ width: 'clamp(20px, 2vw, 24px)', height: 'clamp(20px, 2vw, 24px)' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  fontWeight: 700,
                  color: '#A4B3FF',
                }}
              >
                Camera Scaling
              </h3>
            </div>

            <div style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 1.2vw, 15px)' }}>
              {cameraScaling.map((scenario, idx) => (
                <div
                  key={idx}
                  style={{
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    padding: 'clamp(12px, 1.5vh, 16px)',
                    borderRadius: 'clamp(8px, 1vw, 12px)',
                    marginBottom: idx < cameraScaling.length - 1 ? 'clamp(10px, 1.2vh, 12px)' : '0',
                    border: '1px solid rgba(164, 179, 255, 0.2)',
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'clamp(8px, 1vh, 12px)'
                  }}>
                    <div>
                      <div style={{ 
                        fontSize: 'clamp(18px, 1.8vw, 22px)', 
                        fontWeight: 700,
                        color: '#FFCA2B'
                      }}>
                        {formatNumber(scenario.cameras)}
                      </div>
                      <div style={{ 
                        fontSize: 'clamp(11px, 1vw, 13px)', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontWeight: 500
                      }}>
                        cameras (~{scenario.states} states)
                      </div>
                    </div>
                    <TrendingUp size={28} color="#FFCA2B" strokeWidth={2.5} style={{ width: 'clamp(24px, 2.2vw, 28px)', height: 'clamp(24px, 2.2vw, 28px)' }} />
                  </div>

                  <div style={{ display: 'grid', gap: 'clamp(4px, 0.6vh, 6px)', color: '#FFF' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Monthly Alerts:</span>
                      <span style={{ fontWeight: 600 }}>{formatNumber(scenario.alerts)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Monthly Revenue:</span>
                      <span style={{ fontWeight: 700, color: '#FFCA2B' }}>
                        {formatCurrency(scenario.monthlyRevenue)}
                      </span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      paddingTop: 'clamp(6px, 0.8vh, 8px)',
                      borderTop: '1px solid rgba(255, 202, 43, 0.3)',
                      marginTop: 'clamp(3px, 0.4vh, 4px)'
                    }}>
                      <span style={{ fontWeight: 600 }}>Annual Revenue:</span>
                      <span style={{ 
                        fontSize: 'clamp(16px, 1.5vw, 18px)',
                        fontWeight: 700,
                        color: '#FFCA2B'
                      }}>
                        {formatCurrency(scenario.annualRevenue, true)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-Client Compounding Card */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(255, 107, 107, 0.5)',
              borderRadius: 'clamp(12px, 1.5vw, 20px)',
              padding: 'clamp(20px, 2.5vh, 28px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 12px)', marginBottom: 'clamp(16px, 2vh, 20px)' }}>
              <div
                style={{
                  background: 'rgba(255, 107, 107, 0.3)',
                  borderRadius: 'clamp(6px, 0.8vw, 8px)',
                  padding: 'clamp(6px, 0.8vw, 8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Users size={24} color="#FF6B6B" strokeWidth={2.5} style={{ width: 'clamp(20px, 2vw, 24px)', height: 'clamp(20px, 2vw, 24px)' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  fontWeight: 700,
                  color: '#FF6B6B',
                }}
              >
                Multi-Client Growth
              </h3>
            </div>

            <p style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(13px, 1.2vw, 15px)',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: 'clamp(16px, 2vh, 20px)',
              lineHeight: '1.5'
            }}>
              Shared camera networks unlock exponential growth
            </p>

            <div style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 1.2vw, 15px)', flex: 1 }}>
              {multiClient.map((scenario, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 107, 107, 0.1)',
                    padding: 'clamp(16px, 2vh, 20px)',
                    borderRadius: 'clamp(8px, 1vw, 12px)',
                    marginBottom: idx < multiClient.length - 1 ? 'clamp(12px, 1.5vh, 16px)' : '0',
                    border: '2px solid rgba(255, 107, 107, 0.3)',
                  }}
                >
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'clamp(12px, 1.5vw, 16px)',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ 
                        fontSize: 'clamp(32px, 3.5vw, 42px)', 
                        fontWeight: 700,
                        color: '#FF6B6B',
                        lineHeight: '1'
                      }}>
                        {scenario.clients}
                      </div>
                      <div style={{ 
                        fontSize: 'clamp(13px, 1.2vw, 15px)', 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontWeight: 500,
                        marginTop: 'clamp(3px, 0.4vh, 4px)'
                      }}>
                        clients
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontSize: 'clamp(11px, 1vw, 13px)', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: 'clamp(3px, 0.4vh, 4px)'
                      }}>
                        {formatNumber(scenario.cameras)} cameras
                      </div>
                      <div style={{ 
                        fontSize: 'clamp(22px, 2.2vw, 28px)', 
                        fontWeight: 700,
                        color: '#FFCA2B',
                        lineHeight: '1'
                      }}>
                        {formatCurrency(scenario.annualRevenue, true)}
                      </div>
                      <div style={{ 
                        fontSize: 'clamp(10px, 0.95vw, 12px)', 
                        color: 'rgba(255, 255, 255, 0.5)',
                        marginTop: 'clamp(3px, 0.4vh, 4px)',
                        fontStyle: 'italic'
                      }}>
                        annual revenue
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: 'clamp(16px, 2vh, 20px)',
                padding: 'clamp(12px, 1.5vh, 16px)',
                background: 'rgba(255, 202, 43, 0.15)',
                borderRadius: 'clamp(8px, 1vw, 12px)',
                border: '1px solid rgba(255, 202, 43, 0.4)',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: 'clamp(12px, 1.1vw, 14px)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 600,
                  lineHeight: '1.5'
                }}>
                  <span style={{ color: '#FFCA2B' }}>Exponential scaling:</span> Multiple clients on shared networks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitEconomicsSlide;