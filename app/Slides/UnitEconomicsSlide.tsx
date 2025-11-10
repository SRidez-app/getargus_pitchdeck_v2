'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, Camera, DollarSign, Users } from 'lucide-react';

interface UnitEconomicsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const UnitEconomicsSlide: React.FC<UnitEconomicsSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);

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
      const designWidth = 1920;  // Figma canvas width
      const designHeight = 1080; // Figma canvas height
      
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      const newScale = Math.min(scaleX, scaleY, 1); // Cap at 1 to avoid upscaling
      
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
  // Revenue = Clients × (Cameras ÷ 10K) × $360K per 10K camera segment
  const revenuePerClient = 360000; // Annual revenue for 10K cameras
  const multiClient = [
    { clients: 5, cameras: 50000, annualRevenue: 5 * 5 * revenuePerClient },      // 5 clients × 5 (10K groups) × $360K = $9M
    { clients: 10, cameras: 100000, annualRevenue: 10 * 10 * revenuePerClient },  // 10 × 10 × $360K = $36M
    { clients: 25, cameras: 250000, annualRevenue: 25 * 25 * revenuePerClient },  // 25 × 25 × $360K = $225M
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
        9
      </div>

      {/* Scaling wrapper */}
      <div 
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          width: '1920px',
          height: '1080px',
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      >
        {/* Content Container */}
        <div className="relative w-full h-full flex flex-col items-start justify-start px-24 pt-16 pb-16">
          {/* Title Section */}
          <div className="mb-12">
            <div
              style={{
                width: 'fit-content',
                paddingTop: '8px',
                paddingBottom: '8px',
                marginBottom: '32px',
              }}
            >
              <h2 
                className="text-white"
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontWeight: 600,
                  fontSize: '36px',
                  lineHeight: '44px',
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
                  marginTop: '8px',
                }}
              />
            </div>
            
            <h1 
              style={{
                fontFamily: 'Tobias',
                fontWeight: 500,
                fontSize: '64px',
                lineHeight: '76px',
                letterSpacing: '0px',
                color: '#FFFFFF',
                marginBottom: '8px',
              }}
            >
              Scalable Model with{' '}
              <span style={{ color: '#FFCA2B' }}>Exponential Growth</span>
            </h1>
            <p
              style={{
                fontFamily: 'Apercu Pro',
                fontSize: '22px',
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
            className="flex justify-between items-stretch w-full"
            style={{
              gap: '32px',
              maxWidth: '1680px',
            }}
          >
          {/* Werner Model Card */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(255, 202, 43, 0.5)',
              borderRadius: '20px',
              padding: '28px',
              flex: '1',
              minWidth: '520px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  background: '#FFCA2B',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DollarSign size={24} color="#000" strokeWidth={3} />
              </div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#FFCA2B',
                }}
              >
                Werner Model
              </h3>
            </div>

            <div style={{ fontFamily: 'Inter', fontSize: '15px', color: '#FFF' }}>
              <div style={{ 
                background: 'rgba(255, 202, 43, 0.1)', 
                padding: '16px', 
                borderRadius: '12px',
                marginBottom: '16px',
                border: '1px solid rgba(255, 202, 43, 0.3)'
              }}>
                <p style={{ fontWeight: 600, color: '#FFCA2B', marginBottom: '12px', fontSize: '16px' }}>Per State (~2,500 cameras)</p>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Setup Cost:</span>
                    <span style={{ fontWeight: 600 }}>{formatCurrency(wernerModel.setupCost)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Monthly Flat Rate:</span>
                    <span style={{ fontWeight: 600 }}>{formatCurrency(wernerModel.monthlyFlat)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Alerts/Month:</span>
                    <span style={{ fontWeight: 600 }}>{formatNumber(wernerModel.alertsPerMonth)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Per Alert:</span>
                    <span style={{ fontWeight: 600 }}>{formatCurrency(wernerModel.pricePerAlert)}</span>
                  </div>
                </div>
              </div>

              <div style={{ 
                borderTop: '2px solid #FFCA2B', 
                paddingTop: '16px',
                marginTop: '16px'
              }}>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '17px', fontWeight: 600 }}>Monthly Revenue:</span>
                    <span style={{ 
                      fontSize: '22px', 
                      fontWeight: 700,
                      color: '#FFCA2B'
                    }}>
                      {formatCurrency(wernerModel.monthlyRevenue)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '17px', fontWeight: 600 }}>Annual Revenue:</span>
                    <span style={{ 
                      fontSize: '22px', 
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
                padding: '16px', 
                borderRadius: '12px',
                marginTop: '16px',
                border: '1px solid rgba(164, 179, 255, 0.3)'
              }}>
                <p style={{ fontWeight: 600, color: '#A4B3FF', marginBottom: '8px', fontSize: '16px' }}>Customer Value</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Monthly Savings:</span>
                  <span style={{ fontWeight: 700, color: '#A4B3FF', fontSize: '18px' }}>
                    {formatCurrency(wernerModel.customerSavings)}
                  </span>
                </div>
                <div style={{ 
                  fontSize: '13px', 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  marginTop: '8px',
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
              borderRadius: '20px',
              padding: '28px',
              flex: '1',
              minWidth: '520px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  background: 'rgba(164, 179, 255, 0.3)',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Camera size={24} color="#A4B3FF" strokeWidth={2.5} />
              </div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#A4B3FF',
                }}
              >
                Camera Scaling
              </h3>
            </div>

            <div style={{ fontFamily: 'Inter', fontSize: '15px' }}>
              {cameraScaling.map((scenario, idx) => (
                <div
                  key={idx}
                  style={{
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    padding: '16px',
                    borderRadius: '12px',
                    marginBottom: idx < cameraScaling.length - 1 ? '12px' : '0',
                    border: '1px solid rgba(164, 179, 255, 0.2)',
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <div>
                      <div style={{ 
                        fontSize: '22px', 
                        fontWeight: 700,
                        color: '#FFCA2B'
                      }}>
                        {formatNumber(scenario.cameras)}
                      </div>
                      <div style={{ 
                        fontSize: '13px', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontWeight: 500
                      }}>
                        cameras (~{scenario.states} states)
                      </div>
                    </div>
                    <TrendingUp size={28} color="#FFCA2B" strokeWidth={2.5} />
                  </div>

                  <div style={{ display: 'grid', gap: '6px', color: '#FFF' }}>
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
                      paddingTop: '8px',
                      borderTop: '1px solid rgba(255, 202, 43, 0.3)',
                      marginTop: '4px'
                    }}>
                      <span style={{ fontWeight: 600 }}>Annual Revenue:</span>
                      <span style={{ 
                        fontSize: '18px',
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
              borderRadius: '20px',
              padding: '28px',
              flex: '1',
              minWidth: '520px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  background: 'rgba(255, 107, 107, 0.3)',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Users size={24} color="#FF6B6B" strokeWidth={2.5} />
              </div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#FF6B6B',
                }}
              >
                Multi-Client Growth
              </h3>
            </div>

            <p style={{
              fontFamily: 'Apercu Pro',
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Shared camera networks unlock exponential growth
            </p>

            <div style={{ fontFamily: 'Inter', fontSize: '15px' }}>
              {multiClient.map((scenario, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 107, 107, 0.1)',
                    padding: '20px',
                    borderRadius: '12px',
                    marginBottom: idx < multiClient.length - 1 ? '16px' : '0',
                    border: '2px solid rgba(255, 107, 107, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ 
                        fontSize: '42px', 
                        fontWeight: 700,
                        color: '#FF6B6B',
                        lineHeight: '1'
                      }}>
                        {scenario.clients}
                      </div>
                      <div style={{ 
                        fontSize: '15px', 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontWeight: 500,
                        marginTop: '4px'
                      }}>
                        clients
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontSize: '13px', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '4px'
                      }}>
                        {formatNumber(scenario.cameras)} cameras
                      </div>
                      <div style={{ 
                        fontSize: '28px', 
                        fontWeight: 700,
                        color: '#FFCA2B',
                        lineHeight: '1'
                      }}>
                        {formatCurrency(scenario.annualRevenue, true)}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: 'rgba(255, 255, 255, 0.5)',
                        marginTop: '4px',
                        fontStyle: 'italic'
                      }}>
                        annual revenue
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: '20px',
                padding: '16px',
                background: 'rgba(255, 202, 43, 0.15)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 202, 43, 0.4)',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: '14px',
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
  </div>
  );
};

export default UnitEconomicsSlide;
