import React, { useEffect, useState } from 'react';

interface ProblemSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const ProblemSlide: React.FC<ProblemSlideProps> = ({ onNext, onPrevious }) => {
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

  const cards = [
    {
      image: '/city.png',
      title: 'Extreme Fragmentation - 300+ unique camera network',
      data: '42,514 deaths annually',
    },
    {
      image: '/crash.png',
      title: "911 calls, Waze, Cell Phone Data, DOT data don't talk.",
      data: 'traffic alerts delayed 5-15 min.',
    },
    {
      image: '/medic.png',
      title: 'Accidents and congestion notifications are slow',
      data: '4.2m claims disputed or fraudulent',
    },
  ];

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
        2
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
          <div className="mb-16">
            <div
              style={{
                width: '262px',
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
                  fontSize: '36px',
                  lineHeight: '44px',
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                THE PROBLEM
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
            
            <h1 
              className="text-white"
              style={{
                fontFamily: 'Tobias',
                fontWeight: 500,
                fontSize: '72px',
                lineHeight: '86px',
                letterSpacing: '0px',
                width: '1680px',
              }}
            >
              There are over 1m+ traffic cameras nationwide,{' '}
              but data is <span style={{ color: '#FFCA2B' }}>vanishing</span>.
            </h1>
          </div>

          {/* Cards Container */}
          <div 
            className="flex justify-center items-stretch w-full"
            style={{
              gap: '40px',
              maxWidth: '1640px',
            }}
          >
            {cards.map((card, index) => (
              <div 
                key={index}
                className="bg-white overflow-hidden flex flex-col"
                style={{
                  width: '512px',
                  height: '576px',
                  borderRadius: '20px',
                }}
              >
                {/* Card Title - Now at Top */}
                <div 
                  className="flex items-center justify-center"
                  style={{
                    paddingTop: '24px',
                    paddingRight: '24px',
                    paddingBottom: '20px',
                    paddingLeft: '24px',
                    flexShrink: 0,
                  }}
                >
                  <p 
                    className="text-center text-black"
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontWeight: 500,
                      fontSize: '28px',
                      lineHeight: '120%',
                      letterSpacing: '2%',
                    }}
                  >
                    {card.title}
                  </p>
                </div>

                {/* Image Container */}
                <div className="relative w-full flex-1 bg-gray-200" style={{ minHeight: 0 }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Yellow accent bar at bottom of image */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: '#FFCA2B' }}
                  />
                </div>
                
                {/* Data Statistic - Now at Bottom */}
                <div 
                  className="flex items-center justify-center"
                  style={{
                    paddingTop: '20px',
                    paddingRight: '20px',
                    paddingBottom: '20px',
                    paddingLeft: '20px',
                    backgroundColor: '#FFCA2B',
                    flexShrink: 0,
                  }}
                >
                  <p 
                    className="text-center text-black"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '130%',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {card.data}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;