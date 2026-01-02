import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <StyledWrapper>
      <button
        className="floating-button"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="button-inner">
          <MessageCircle size={28} strokeWidth={2.5} />
        </div>
        {isHovered && (
          <div className="tooltip">Chat with us</div>
        )}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .floating-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #e8e8e8;
    border: 3px solid #d0d0d0;
    box-shadow: 
      8px 8px 16px #bebebe,
      -8px -8px 16px #ffffff,
      inset 2px 2px 4px rgba(255, 255, 255, 0.8),
      inset -2px -2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse 2s ease-in-out infinite;
  }

  .floating-button:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 
      12px 12px 24px #bebebe,
      -12px -12px 24px #ffffff,
      inset 2px 2px 4px rgba(255, 255, 255, 0.9),
      inset -2px -2px 4px rgba(0, 0, 0, 0.15);
    border-color: #3B82F6;
  }

  .floating-button:active {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      4px 4px 8px #bebebe,
      -4px -4px 8px #ffffff,
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  }

  .button-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1b1c1fff;
    transition: all 0.3s ease;
  }

  .floating-button:hover .button-inner {
    color: #2f3137ff;
    transform: scale(1.1);
  }

  .tooltip {
    position: absolute;
    right: 80px;
    background: #111111;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s ease;
  }

  .tooltip::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid #111111;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 
        8px 8px 16px #bebebe,
        -8px -8px 16px #ffffff,
        inset 2px 2px 4px rgba(255, 255, 255, 0.8),
        inset -2px -2px 4px rgba(0, 0, 0, 0.1),
        0 0 0 0 rgba(59, 130, 246, 0.4);
    }
    50% {
      box-shadow: 
        8px 8px 16px #bebebe,
        -8px -8px 16px #ffffff,
        inset 2px 2px 4px rgba(255, 255, 255, 0.8),
        inset -2px -2px 4px rgba(0, 0, 0, 0.1),
        0 0 0 10px rgba(59, 130, 246, 0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .floating-button {
      bottom: 1.5rem;
      right: 1.5rem;
      width: 60px;
      height: 60px;
    }

    .button-inner svg {
      width: 24px;
      height: 24px;
    }

    .tooltip {
      font-size: 12px;
      padding: 6px 12px;
      right: 70px;
    }
  }
`;

export default FloatingContactButton;
