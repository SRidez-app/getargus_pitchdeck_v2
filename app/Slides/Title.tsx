'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface TitleSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ onNext, onPrevious }) => {
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
        }}
      >
        1
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
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Logo */}
          <div style={{ width: '768px', height: '768px', marginBottom: '40px' }}>
            <Image
              src="/whitelogo.png"
              alt="Argus Logo"
              width={768}
              height={768}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Gold Bar */}
          <div 
            style={{
              width: '1300px',
              height: '0px',
              borderTop: '4px solid #FFCA2B',
              marginBottom: '32px',
            }}
          />

          {/* Title Text */}
          <h1 
            className="text-center"
            style={{
              fontFamily: 'Abhaya Libre ExtraBold, var(--font-abhaya-libre)',
              fontWeight: 800,
              fontSize: '96px',
              lineHeight: '32px',
              letterSpacing: '0.08em',
              textTransform: 'capitalize',
              color: '#FFD700',
              width: '1538px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Smart Cities start with Vision
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;