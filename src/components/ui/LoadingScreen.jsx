import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      style={{
        background: 'linear-gradient(135deg, #E3E6EB 0%, #D6D9DE 100%)',
      }}
    >
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Corner Accents for Technical Feel */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-gray-400/30" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-gray-400/30" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-gray-400/30" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-gray-400/30" />

      {/* Floating Sphere Container */}
      <div className="relative flex flex-col items-center justify-center mb-12">

        {/* Badge - Added to match Hero Section */}
        <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-2.5 mb-12 shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <Sparkles className="w-4 h-4" style={{ color: '#3B82F6' }} />
          <span className="text-sm font-semibold tracking-wide" style={{ color: '#606060' }}>AI SOLUTIONS FOR MODERN BUSINESSES</span>
        </div>

        {/* The Glossy Sphere */}
        <div
          className="relative w-48 h-48 rounded-full z-20 flex items-center justify-center animate-float"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #e6e6e6 40%, #bfbfbf 85%, #8c8c8c 100%)',
            boxShadow: `
              inset -10px -10px 20px rgba(0,0,0,0.1),
              inset 10px 10px 20px rgba(255,255,255,1),
              0 20px 50px rgba(0,0,0,0.3)
            `
          }}
        >
          {/* Sharp Window Reflection */}
          <div
            className="absolute top-6 right-10 w-16 h-12 bg-white rounded-md opacity-90 blur-[1px] transform rotate-[15deg]"
            style={{
              background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
              boxShadow: '0 0 10px rgba(255,255,255,0.8)'
            }}
          />

          {/* Inner Glow/Highlight */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 40%)',
              filter: 'blur(2px)'
            }}
          />

          {/* Logo Inside */}
          <img
            src="/asssets/loadingpagelogo.png"
            alt="Logo"
            className="w-24 h-24 object-contain z-30 relative opacity-90"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(77, 124, 255, 0.2)) mix-blend-mode: multiply'
            }}
          />
        </div>

        {/* Liquid Ripple Effect */}
        <div className="absolute -bottom-16 w-64 h-24 flex items-center justify-center perspective-[500px]">
          {/* Main Dark Ripple Shadow */}
          <div
            className="absolute w-full h-full rounded-[100%] animate-ripple"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 60%)',
              transform: 'scaleY(0.2)',
              animationDelay: '0s'
            }}
          />
          {/* Outer Ring 1 */}
          <div
            className="absolute w-[120%] h-[120%] rounded-[100%] border border-gray-300/30 animate-ripple"
            style={{
              transform: 'scaleY(0.2)',
              animationDelay: '0.5s'
            }}
          />
          {/* Outer Ring 2 */}
          <div
            className="absolute w-[150%] h-[150%] rounded-[100%] border border-gray-300/20 animate-ripple"
            style={{
              transform: 'scaleY(0.2)',
              animationDelay: '1s'
            }}
          />
        </div>

      </div>

      {/* Neumorphic Loading Bar */}
      <div className="flex flex-col items-center space-y-6 z-10 mt-4">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 animate-fade-up"
          style={{
            textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(0,0,0,0.1)',
            animationDelay: '0.2s'
          }}
        >
          CAREER CRAFTLY
        </h1>

        <p
          className="text-lg opacity-80 animate-fade-up max-w-md text-center px-4"
          style={{ color: '#2E2E2E', animationDelay: '0.3s' }}
        >
          Where intelligent automation meets real-world execution
        </p>

        <div
          className="relative w-64 h-4 rounded-full overflow-hidden animate-fade-up"
          style={{
            background: '#E3E6EB',
            boxShadow: `
              inset 3px 3px 6px rgba(0,0,0,0.15),
              inset -3px -3px 6px rgba(255,255,255,0.8),
              2px 2px 4px rgba(0,0,0,0.05)
            `,
            animationDelay: '0.4s'
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-300 ease-out relative"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #4D7CFF 0%, #7aa0ff 100%)',
              boxShadow: '0 0 10px rgba(77, 124, 255, 0.4)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast" />
          </div>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes particle {
          0%,100%{opacity:0;transform:translateY(0) scale(0)}
          10%{opacity:1;transform:translateY(-10px) scale(1)}
          90%{opacity:1;transform:translateY(-100px) scale(1)}
        }
        @keyframes fade-up {
          0%{opacity:0;transform:translateY(15px)}
          100%{opacity:1;transform:translateY(0)}
        }
        @keyframes wave-slow {
          0%,100%{transform:translateY(0);opacity:.3}
          50%{transform:translateY(-20px);opacity:.2}
        }
        @keyframes wave-medium {
          0%,100%{transform:translateX(0);opacity:.25}
          50%{transform:translateX(30px);opacity:.15}
        }
        @keyframes shimmer-fast {
          0%{transform:translateX(-100%)}
          100%{transform:translateX(200%)}
        }
        @keyframes ripple {
          0% { transform: scale(0.8) scaleY(0.2); opacity: 0.6; }
          50% { transform: scale(1.2) scaleY(0.2); opacity: 0.3; }
          100% { transform: scale(0.8) scaleY(0.2); opacity: 0.6; }
        }

        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-fade-up { animation: fade-up 1s ease-out forwards; opacity:0; }
        .animate-particle { animation: particle 6s ease-in-out infinite; }
        .animate-wave-slow { animation: wave-slow 8s ease-in-out infinite; }
        .animate-wave-medium { animation: wave-medium 6s ease-in-out infinite; }
        .animate-shimmer-fast { animation: shimmer-fast 1.2s linear infinite; }
        .animate-ripple { animation: ripple 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
