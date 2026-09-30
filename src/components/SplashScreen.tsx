import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onDismiss?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Automatically fade out after 1.1s
    const timer = setTimeout(() => {
      setFading(true);
      const dismissTimer = setTimeout(() => {
        setVisible(false);
        onDismiss?.();
      }, 450);
      return () => clearTimeout(dismissTimer);
    }, 1100);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const handleManualDismiss = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      id="splash-screen"
      role="button"
      tabIndex={0}
      aria-label="Loading screen. Tap anywhere to continue."
      onClick={handleManualDismiss}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleManualDismiss();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <div
        style={{
          width: 'clamp(140px, 40vw, 200px)',
          height: 'clamp(140px, 40vw, 200px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 24,
          overflow: 'hidden',
        }}
      >
        <video
          src="/loading_animation.mp4"
          poster="/loading_animation_poster.webp"
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: '#f1f5f9',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #0f172a, #6366f1, #06b6d4)',
            animation: 'splashProgressBar 1.8s ease-in-out infinite',
          }}
        />
      </div>
      <style>{`
        @keyframes splashProgressBar {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
