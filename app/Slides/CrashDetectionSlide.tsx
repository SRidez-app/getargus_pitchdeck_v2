import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface CrashDetectionSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const CrashDetectionSlide: React.FC<CrashDetectionSlideProps> = ({ onNext, onPrevious }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (event.key === 'ArrowLeft' && onPrevious) {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
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

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: '#00000080',
        }}
      />

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
        4
      </div>

      {/* Scaling wrapper */}
      <div 
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          width: '1920px',
          height: '1080px',
          position: 'relative',
        }}
      >
        {/* Content Container */}
        <div className="relative w-full h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
          {/* Title Section */}
          <div className="mb-8">
            <div
              style={{
                width: '761px',
                paddingTop: '8px',
                paddingBottom: '8px',
                marginBottom: '24px',
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
                  color: '#FFCA2B',
                }}
              >
                ARGUS<sup></sup> CRASH & INCIDENT DETECTION
              </h2>
              {/* Gold bar underneath */}
              <div 
                style={{
                  borderBottom: '3px solid #FFCA2B',
                  width: '100%',
                  marginTop: '8px',
                }}
              />
            </div>
          </div>

          {/* Description Box with Gradient */}
          <div 
            className="mb-8 flex items-center"
            style={{
              width: '1646px',
              minHeight: '218px',
              gap: '14px',
              paddingTop: '32px',
              paddingRight: '32px',
              paddingBottom: '34px',
              paddingLeft: '32px',
              borderRadius: '12px',
              border: '1px solid #FFCA2B',
              background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
              boxShadow: '0px 4px 14px 0px #00000040',
            }}
          >
            {/* Icon Bullet */}
            <div style={{ flexShrink: 0, width: '40px', height: '40px' }}>
              <Image
                src="/icon.png"
                alt="Bullet icon"
                width={40}
                height={40}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            
            {/* Description Text */}
            <p 
              className="text-white"
              style={{
                fontFamily: 'Apercu Pro',
                fontWeight: 400,
                fontSize: '38px',
                lineHeight: '100%',
                letterSpacing: '0.02em',
                flex: 1,
                color: '#FFFFFF',
              }}
            >
              Argus AI streams, detects and alerts instantly on live traffic steams.  Our IP and technology can notify 911/PSAPS before cars come to rest!  This is revolutionary and unparalleled in the market.
            </p>
          </div>

          {/* Video Container */}
          <div 
            style={{
              width: '1722px',
              height: '640px',
            }}
          >
            <video
              autoPlay
              muted
              loop
              controls
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            >
              <source src="/accidentdetection.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrashDetectionSlide;