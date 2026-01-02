import React from 'react';
import styled from 'styled-components';

const FooterAnimation = () => {
    return (
        <StyledWrapper>
            <div className="animated-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    animation: float 20s ease-in-out infinite;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #e8e8e8 0%, #9da7c4 100%);
    top: -100px;
    left: -100px;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 350px;
    height: 350px;
    background: linear-gradient(135deg, #f3f3f3 0%, #3B82F6 100%);
    bottom: -80px;
    right: 10%;
    animation-delay: 7s;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #e8e8e8 0%, #f3f3f3 100%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 14s;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  @media (max-width: 768px) {
    .orb-1, .orb-2, .orb-3 {
      width: 250px;
      height: 250px;
    }
  }
`;

export default FooterAnimation;
