'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Handshake, Building2, Camera, Network, TrendingUp, Zap, Clock } from 'lucide-react';

interface CameraAcquisitionSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const CameraAcquisitionSlide: React.FC<CameraAcquisitionSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChannel, setActiveChannel] = useState<number | null>(null);

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

  const freeStates = ['GA', 'FL', 'NY', 'NJ', 'PA', 'WI', 'CA', 'AL', 'MS'];
  const paidStates = ['TX', 'OH', 'IL', 'NC', 'MI', 'VA', 'WA', 'AZ', 'MA', 'TN', 'IN', 'MO', 'MD', 'SC', 'LA', 'KY', 'OK', 'CT', 'IA', 'UT', 'NV', 'AR', 'KS', 'OR', 'NE', 'WV', 'ID', 'HI', 'NH', 'ME', 'RI', 'MT', 'DE', 'SD', 'ND', 'AK', 'VT', 'WY', 'NM'];

  const channels = [
    {
      icon: Camera,
      title: 'FREE/AVAILABLE',
      subtitle: 'Public DOT Cameras',
      total: '25-30K',
      viable: '15-20K viable',
      active: '3-5K recording TODAY',
      timeline: 'IMMEDIATE',
      color: '#4ADE80',
      gradient: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0.05))',
      states: freeStates,
      showStates: true,
    },
    {
      icon: Handshake,
      title: 'PAID PARTNERSHIPS',
      subtitle: 'Private Vendor Network',
      total: '100-150K',
      viable: 'Active negotiations',
      active: 'Cross-sell access',
      timeline: 'NEAR-TERM',
      color: '#FFCA2B',
      gradient: 'linear-gradient(135deg, rgba(255, 202, 43, 0.2), rgba(255, 202, 43, 0.05))',
      states: paidStates,
      showStates: true,
    },
    {
      icon: Building2,
      title: 'HARDWARE PARTNERSHIPS',
      subtitle: 'City, County & Intersection Cameras',
      total: '1M+ cameras',
      viable: '22 states targeted',
      active: '3-4 major vendors',
      timeline: 'LONG-TERM',
      color: '#A4B3FF',
      gradient: 'linear-gradient(135deg, rgba(164, 179, 255, 0.2), rgba(164, 179, 255, 0.05))',
      states: [],
      showStates: false,
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

      {/* Scrollable Content Container */}
      <div 
        className="relative w-full h-full overflow-y-auto"
        style={{
          padding: 'clamp(28px, 3.5vh, 48px) clamp(40px, 4vw, 80px)',
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
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .state-icon {
            animation: pulse 3s ease-in-out infinite;
          }
        `}</style>

        {/* Title Section */}
        <div style={{ marginBottom: 'clamp(32px, 4vh, 48px)' }}>
          <div
            style={{
              width: 'fit-content',
              paddingTop: 'clamp(4px, 0.5vh, 8px)',
              paddingBottom: 'clamp(4px, 0.5vh, 8px)',
              marginBottom: 'clamp(16px, 2vh, 28px)',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: 'clamp(22px, 2vw, 32px)',
                lineHeight: '1.3',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              OUR MOAT
            </h2>
            <div 
              style={{
                borderBottom: '3px solid #FFCA2B',
                width: '100%',
                marginTop: 'clamp(4px, 0.5vh, 8px)',
              }}
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'clamp(16px, 2vw, 32px)', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
              <h1 
                style={{
                  fontFamily: 'Tobias',
                  fontWeight: 500,
                  fontSize: 'clamp(32px, 3.5vw, 56px)',
                  lineHeight: '1.2',
                  letterSpacing: '0px',
                  color: '#FFFFFF',
                  marginBottom: 'clamp(12px, 1.5vh, 20px)',
                }}
              >
                The Camera Network{' '}
                <span style={{ color: '#FFCA2B' }}>No One Can Replicate</span>
              </h1>
              <p
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                We provide value to states → priority access → multiple monetization → lower costs → more partners. <strong style={{ color: '#FFCA2B' }}>Once built, impossible to replicate.</strong>
              </p>
            </div>

            {/* Flock Safety Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 1vw, 12px)',
                padding: 'clamp(10px, 1.2vh, 16px) clamp(14px, 1.5vw, 24px)',
                background: 'rgba(255, 202, 43, 0.15)',
                border: '2px solid rgba(255, 202, 43, 0.4)',
                borderRadius: '10px',
                alignSelf: 'flex-start',
                flex: '0 0 auto',
              }}
            >
              <TrendingUp size={clamp(20, 24)} color="#FFCA2B" style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(14px, 1.3vw, 20px)',
                  fontWeight: 600,
                  color: '#FFCA2B',
                  whiteSpace: 'nowrap',
                }}
              >
                Flock Safety&apos;s $7.5B Playbook
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col gap-6" style={{ gap: 'clamp(24px, 3vh, 40px)' }}>
          
          {/* Acquisition Channels Section */}
          <div>
            <h3
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(18px, 1.6vw, 24px)',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 'clamp(16px, 2vh, 24px)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Camera Acquisition Channels
            </h3>
            
            <div 
              className="grid gap-4"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                gap: 'clamp(12px, 1.5vh, 20px)',
              }}
            >
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                const TimelineIcon = index === 0 ? Zap : index === 1 ? Handshake : Clock;
                return (
                  <div
                    key={index}
                    className="fade-in-up"
                    onMouseEnter={() => setActiveChannel(index)}
                    onMouseLeave={() => setActiveChannel(null)}
                    style={{
                      background: activeChannel === index ? channel.gradient : 'rgba(0, 0, 0, 0.4)',
                      border: `2px solid ${activeChannel === index ? channel.color : 'rgba(164, 179, 255, 0.2)'}`,
                      borderRadius: 'clamp(10px, 1vw, 14px)',
                      padding: 'clamp(16px, 2vh, 24px) clamp(18px, 2vw, 28px)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      animationDelay: `${index * 0.11}s`,
                      transform: activeChannel === index ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: activeChannel === index ? `0 5px 24px ${channel.color}40` : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 'clamp(12px, 1.5vw, 18px)', alignItems: 'flex-start' }}>
                      {/* Icon */}
                      <div
                        style={{
                          background: `${channel.color}20`,
                          border: `2px solid ${channel.color}`,
                          borderRadius: '8px',
                          padding: 'clamp(8px, 1vh, 12px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={clamp(24, 32)} color={channel.color} />
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 12px)', marginBottom: 'clamp(6px, 0.8vh, 10px)', flexWrap: 'wrap' }}>
                          <h4
                            style={{
                              fontFamily: 'Inter',
                              fontSize: 'clamp(18px, 1.6vw, 24px)',
                              fontWeight: 700,
                              color: channel.color,
                              letterSpacing: '0.3px',
                            }}
                          >
                            {channel.title}
                          </h4>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: 'clamp(3px, 0.4vh, 5px) clamp(8px, 1vw, 12px)',
                              background: `${channel.color}25`,
                              borderRadius: '5px',
                              border: `1px solid ${channel.color}50`,
                            }}
                          >
                            <TimelineIcon size={clamp(12, 16)} color={channel.color} />
                            <span
                              style={{
                                fontFamily: 'Inter',
                                fontSize: 'clamp(11px, 1vw, 14px)',
                                fontWeight: 600,
                                color: channel.color,
                              }}
                            >
                              {channel.timeline}
                            </span>
                          </div>
                        </div>
                        
                        <p
                          style={{
                            fontFamily: 'Apercu Pro',
                            fontSize: 'clamp(14px, 1.2vw, 18px)',
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginBottom: 'clamp(10px, 1.2vh, 14px)',
                            lineHeight: '1.4',
                          }}
                        >
                          {channel.subtitle}
                        </p>

                        {/* Stats Grid */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr',
                            gap: 'clamp(4px, 0.6vh, 8px) clamp(10px, 1.2vw, 16px)',
                            alignItems: 'center',
                            marginBottom: channel.showStates ? 'clamp(10px, 1.2vh, 14px)' : '0',
                          }}
                        >
                          <span style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 1.1vw, 16px)', color: 'rgba(255, 255, 255, 0.5)' }}>
                            Total:
                          </span>
                          <span style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.3vw, 20px)', fontWeight: 700, color: '#FFFFFF' }}>
                            {channel.total}
                          </span>

                          <span style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 1.1vw, 16px)', color: 'rgba(255, 255, 255, 0.5)' }}>
                            Status:
                          </span>
                          <span style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.3vw, 20px)', fontWeight: 600, color: channel.color }}>
                            {channel.viable}
                          </span>

                          <span style={{ fontFamily: 'Inter', fontSize: 'clamp(13px, 1.1vw, 16px)', color: 'rgba(255, 255, 255, 0.5)' }}>
                            Access:
                          </span>
                          <span style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.3vw, 20px)', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
                            {channel.active}
                          </span>
                        </div>

                        {/* State Icons */}
                        {channel.showStates && (
                          <div style={{ marginTop: 'clamp(10px, 1.2vh, 14px)', paddingTop: 'clamp(10px, 1.2vh, 14px)', borderTop: `1px solid ${channel.color}30` }}>
                            <div
                              style={{
                                fontSize: 'clamp(11px, 1vw, 13px)',
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                color: 'rgba(255, 255, 255, 0.5)',
                                marginBottom: 'clamp(6px, 0.8vh, 10px)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                              }}
                            >
                              Target States
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(5px, 0.6vw, 8px)' }}>
                              {channel.states.slice(0, 12).map((state, stateIndex) => (
                                <div
                                  key={stateIndex}
                                  className="state-icon"
                                  style={{
                                    width: 'clamp(34px, 3vw, 44px)',
                                    height: 'clamp(34px, 3vw, 44px)',
                                    background: `${channel.color}25`,
                                    border: `1.5px solid ${channel.color}`,
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: 'clamp(11px, 1vw, 14px)',
                                    fontWeight: 700,
                                    color: channel.color,
                                    transition: 'all 0.2s ease',
                                    animationDelay: `${stateIndex * 0.05}s`,
                                  }}
                                >
                                  {state}
                                </div>
                              ))}
                              {channel.states.length > 12 && (
                                <div
                                  style={{
                                    width: 'clamp(34px, 3vw, 44px)',
                                    height: 'clamp(34px, 3vw, 44px)',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1.5px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: 'clamp(11px, 1vw, 13px)',
                                    fontWeight: 700,
                                    color: 'rgba(255, 255, 255, 0.6)',
                                  }}
                                >
                                  +{channel.states.length - 12}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Flock Safety Playbook Section */}
          <div>
            <div
              className="fade-in-up"
              style={{
                background: 'rgba(255, 202, 43, 0.1)',
                border: '2px solid rgba(255, 202, 43, 0.4)',
                borderRadius: 'clamp(10px, 1vw, 14px)',
                padding: 'clamp(14px, 1.8vh, 20px) clamp(18px, 2vw, 28px)',
                marginBottom: 'clamp(16px, 2vh, 24px)',
                animationDelay: '0.1s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 1.2vw, 16px)', marginBottom: 'clamp(6px, 0.8vh, 10px)' }}>
                <TrendingUp size={clamp(22, 28)} color="#FFCA2B" />
                <h3
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(20px, 1.8vw, 28px)',
                    fontWeight: 700,
                    color: '#FFCA2B',
                    letterSpacing: '0.3px',
                  }}
                >
                  FLOCK SAFETY&apos;S $7.5B PLAYBOOK
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.5',
                }}
              >
                How they scaled to 5,000+ communities in 42 states
              </p>
            </div>

            {/* Strategy Cards */}
            <div 
              className="grid gap-4"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: 'clamp(12px, 1.5vh, 20px)',
                marginBottom: 'clamp(16px, 2vh, 24px)',
              }}
            >
              <div
                className="fade-in-up"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(74, 222, 128, 0.3)',
                  borderRadius: 'clamp(10px, 1vw, 14px)',
                  padding: 'clamp(16px, 2vh, 24px) clamp(18px, 2vw, 28px)',
                  animationDelay: '0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(12px, 1.5vw, 18px)' }}>
                  <div
                    style={{
                      background: 'rgba(74, 222, 128, 0.2)',
                      border: '2px solid #4ADE80',
                      borderRadius: '8px',
                      padding: 'clamp(8px, 1vh, 12px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Zap size={clamp(24, 32)} color="#4ADE80" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 'clamp(16px, 1.4vw, 22px)',
                        fontWeight: 700,
                        color: '#4ADE80',
                        marginBottom: 'clamp(8px, 1vh, 12px)',
                      }}
                    >
                      Phase 1 (Months 1-3)
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 'clamp(13px, 1.1vw, 17px)',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.6',
                      }}
                    >
                      Hire Gov Affairs Director with political networks, register lobbyists in key states
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="fade-in-up"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(255, 202, 43, 0.3)',
                  borderRadius: 'clamp(10px, 1vw, 14px)',
                  padding: 'clamp(16px, 2vh, 24px) clamp(18px, 2vw, 28px)',
                  animationDelay: '0.3s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(12px, 1.5vw, 18px)' }}>
                  <div
                    style={{
                      background: 'rgba(255, 202, 43, 0.2)',
                      border: '2px solid #FFCA2B',
                      borderRadius: '8px',
                      padding: 'clamp(8px, 1vh, 12px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Network size={clamp(24, 32)} color="#FFCA2B" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 'clamp(16px, 1.4vw, 22px)',
                        fontWeight: 700,
                        color: '#FFCA2B',
                        marginBottom: 'clamp(8px, 1vh, 12px)',
                      }}
                    >
                      Phase 2 (Months 3-6)
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 'clamp(13px, 1.1vw, 17px)',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.6',
                      }}
                    >
                      Deploy at aggressive pricing, build customer base, create grassroots advocates
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="fade-in-up"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(164, 179, 255, 0.3)',
                  borderRadius: 'clamp(10px, 1vw, 14px)',
                  padding: 'clamp(16px, 2vh, 24px) clamp(18px, 2vw, 28px)',
                  animationDelay: '0.4s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(12px, 1.5vw, 18px)' }}>
                  <div
                    style={{
                      background: 'rgba(164, 179, 255, 0.2)',
                      border: '2px solid #A4B3FF',
                      borderRadius: '8px',
                      padding: 'clamp(8px, 1vh, 12px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Shield size={clamp(24, 32)} color="#A4B3FF" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 'clamp(16px, 1.4vw, 22px)',
                        fontWeight: 700,
                        color: '#A4B3FF',
                        marginBottom: 'clamp(8px, 1vh, 12px)',
                      }}
                    >
                      Phase 3 (Months 6-12)
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 'clamp(13px, 1.1vw, 17px)',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.6',
                      }}
                    >
                      Multi-pronged advocacy: direct lobbying + grassroots campaigns + Congressional relationships
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Comparison */}
            <div
              className="fade-in-up"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 202, 43, 0.15), rgba(164, 179, 255, 0.15))',
                border: '2px solid rgba(255, 202, 43, 0.4)',
                borderRadius: 'clamp(10px, 1vw, 14px)',
                padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2.5vw, 32px)',
                animationDelay: '0.5s',
              }}
            >
              <h4
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  fontWeight: 700,
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: 'clamp(16px, 2vh, 24px)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textAlign: 'center',
                }}
              >
                Flock Safety vs Our Projection
              </h4>
              
              <div 
                className="grid gap-6"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 'clamp(16px, 2vw, 28px)',
                }}
              >
                {/* Flock Stats */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(12px, 1vw, 15px)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: 'clamp(12px, 1.5vh, 18px)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Flock Safety
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', gap: 'clamp(12px, 1.5vw, 20px)' }}>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(24px, 2.5vw, 36px)',
                          fontWeight: 700,
                          color: '#4ADE80',
                          marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        }}
                      >
                        $7.5B
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          color: 'rgba(255, 255, 255, 0.5)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Valuation
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(24px, 2.5vw, 36px)',
                          fontWeight: 700,
                          color: '#FFCA2B',
                          marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        }}
                      >
                        8 YRS
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          color: 'rgba(255, 255, 255, 0.5)',
                          textTransform: 'uppercase',
                        }}
                      >
                        To Scale
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(24px, 2.5vw, 36px)',
                          fontWeight: 700,
                          color: '#A4B3FF',
                          marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        }}
                      >
                        42
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          color: 'rgba(255, 255, 255, 0.5)',
                          textTransform: 'uppercase',
                        }}
                      >
                        States
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ width: '2px', background: 'rgba(255, 202, 43, 0.3)', justifySelf: 'center' }} />

                {/* Our Projection */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(12px, 1vw, 15px)',
                      color: '#FFCA2B',
                      marginBottom: 'clamp(12px, 1.5vh, 18px)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: 700,
                    }}
                  >
                    Our Projection
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', gap: 'clamp(12px, 1.5vw, 20px)' }}>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(24px, 2.5vw, 36px)',
                          fontWeight: 700,
                          color: '#4ADE80',
                          marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        }}
                      >
                        $10B
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          color: 'rgba(255, 255, 255, 0.5)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Valuation
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(24px, 2.5vw, 36px)',
                          fontWeight: 700,
                          color: '#FFCA2B',
                          marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        }}
                      >
                        8 YRS
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          color: 'rgba(255, 255, 255, 0.5)',
                          textTransform: 'uppercase',
                        }}
                      >
                        To Scale
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(24px, 2.5vw, 36px)',
                          fontWeight: 700,
                          color: '#A4B3FF',
                          marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        }}
                      >
                        25
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          color: 'rgba(255, 255, 255, 0.5)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Countries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div style={{ height: 'clamp(32px, 4vh, 56px)' }} />
      </div>
    </div>
  );
};

// Helper function for clamping icon sizes
function clamp(min: number, max: number): number {
  return Math.min(Math.max(min, window.innerWidth / 60), max);
}

export default CameraAcquisitionSlide;