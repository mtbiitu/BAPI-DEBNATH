import React, { useState, useEffect, useRef } from 'react';

interface ContactMascotProps {
  className?: string;
}

export const ContactMascot: React.FC<ContactMascotProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [posX, setPosX] = useState(50);
  const [posY, setPosY] = useState(50);
  const [isReacting, setIsReacting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - mascotCenterX;
      const deltaY = e.clientY - mascotCenterY;
      const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (dist === 0) return;

      const normX = deltaX / Math.max(window.innerWidth / 2, 300);
      const normY = deltaY / Math.max(window.innerHeight / 2, 300);

      // 3x3 grid determination
      let targetX = 50;
      if (normX < -0.15) targetX = 0;
      else if (normX > 0.15) targetX = 100;

      let targetY = 50;
      if (normY < -0.15) targetY = 0;
      else if (normY > 0.15) targetY = 100;

      setPosX(targetX);
      setPosY(targetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerReaction = () => {
    setIsReacting(true);
    setTimeout(() => {
      setIsReacting(false);
    }, 900);
  };

  return (
    <div
      ref={containerRef}
      className={`mascot-avatar-container ${className}`}
      onClick={triggerReaction}
      style={{
        width: 220,
        height: 220,
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      }}
      title="Bapi Debnath - Let's collaborate! (Click me)"
    >
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: 'absolute', overflow: 'hidden', pointerEvents: 'none' }}
      >
        <defs>
          <clipPath id="mascot-popout-svg" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 H 1 V 0.514 H 0.889 A 0.389 0.389 0 0 1 0.111 0.514 H 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        style={{
          width: '128.57%',
          height: '128.57%',
          position: 'absolute',
          left: '-14.28%',
          top: '-16.07%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          clipPath: 'url(#mascot-popout-svg)',
          transformOrigin: '50% 90%',
          transition: 'transform 0.25s ease-out',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformOrigin: '50% 90%',
            filter: 'drop-shadow(0px 8px 18px rgba(0, 0, 0, 0.14))',
          }}
        >
          {/* Tracking sprite */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/mascots/kabya-directions.webp)',
              backgroundSize: '300% 300%',
              backgroundPosition: `${posX}% ${posY}%`,
              backgroundRepeat: 'no-repeat',
              opacity: isReacting ? 0 : 1,
              transition: 'background-position 120ms ease-out, opacity 100ms ease',
            }}
          />

          {/* Reaction sprite */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/mascots/kabya-reactions.webp)',
              backgroundSize: '300% 300%',
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
              opacity: isReacting ? 1 : 0,
              transform: isReacting ? 'scale(1.05)' : 'scale(0.97)',
              transformOrigin: '50% 85%',
              transition: 'opacity 90ms ease-out, transform 160ms cubic-bezier(0.34, 1.3, 0.64, 1)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};
