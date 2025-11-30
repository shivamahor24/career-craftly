// CLEAN VERSION — LOGO ADDED INSIDE ORB WITH HOME PAGE COLOR PALETTE

import React, { useEffect, useState } from 'react';

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
        background:
          'linear-gradient(135deg, #9ca3af 0%, #b8bdc7 25%, #d1d5db 50%, #b8bdc7 75%, #9ca3af 100%)',
      }}
    >

      {/* Background Waves */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-full h-full animate-wave-slow"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(100,100,120,0.15) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute w-full h-full animate-wave-medium"
          style={{
            background:
              'radial-gradient(ellipse at 30% 70%, rgba(120,120,140,0.12) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-300/50 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN GLOSSY ORB WITH LOGO */}
      <div className="relative flex items-center justify-center mb-16">
        <div className="relative w-60 h-60 rounded-full animate-float z-10">

          {/* Base Sphere */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, #e5e7eb 0%, #d1d5db 30%, #b8bdc7 55%, #9ca3af 100%)',
              boxShadow: `
                inset -12px -12px 35px rgba(0,0,0,0.25),
                inset 15px 15px 40px rgba(255,255,255,0.6),
                0 25px 70px rgba(0,0,0,0.35),
                0 10px 40px rgba(100,100,120,0.3)
              `,
            }}
          />

          {/* Outer Rim Glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: '0 0 45px 15px rgba(100,100,120,0.35)',
              border: '2px solid rgba(120,120,140,0.4)',
            }}
          />

          {/* Soft glow behind logo */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ filter: 'blur(28px)' }}
          >
            <div
              className="w-28 h-28 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(110,110,130,0.4), transparent 70%)',
              }}
            />
          </div>

          {/* Company Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <img
              src="/asssets/loadingpagelogo.png"
              alt="Company Logo"
              className="w-40 h-40 object-contain"
              style={{
                filter:
                  'drop-shadow(0 0 6px rgba(100,100,120,0.5)) drop-shadow(0 0 12px rgba(255,255,255,0.7))',
              }}
            />
          </div>

          {/* Highlight */}
          <div
            className="absolute top-8 left-10 w-24 h-12 rounded-full opacity-90 blur-[3px]"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.25), transparent)',
            }}
          />

          {/* Soft Gray Tint */}
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gray-200/25 rounded-full blur-2xl" />
        </div>
      </div>

      {/* Text + Progress */}
      <div className="flex flex-col items-center space-y-4 z-10 mt-8">
        <h1
          className="text-5xl font-bold tracking-tight animate-fade-up"
          style={{ color: '#111111' }}
        >
          CareerCraftly
        </h1>

        <p
          className="text-sm opacity-80 animate-fade-up max-w-md text-center px-4"
          style={{ color: '#2E2E2E', animationDelay: '0.2s' }}
        >
          Intelligent solutions for the future of work
        </p>

        <div
          className="relative w-64 mt-6 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="h-1 bg-blue-100/30 rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer-fast" />
            </div>
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

        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-fade-up { animation: fade-up 1s ease-out forwards; opacity:0; }
        .animate-particle { animation: particle 6s ease-in-out infinite; }
        .animate-wave-slow { animation: wave-slow 8s ease-in-out infinite; }
        .animate-wave-medium { animation: wave-medium 6s ease-in-out infinite; }
        .animate-shimmer-fast { animation: shimmer-fast 1.2s linear infinite; }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
