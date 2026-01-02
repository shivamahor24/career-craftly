import React from 'react';
import styled from 'styled-components';

const NeumorphicCard = ({ icon: Icon, title, description, metric }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="icon-container">
          {Icon && <Icon className="icon" />}
        </div>
        {metric && <div className="metric-badge">{metric}</div>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    min-height: 280px;
    background: rgb(223, 225, 235);
    border-radius: 50px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 
      rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
      rgba(0, 0, 0, 0.06) 0px 2px 1px, 
      rgba(0, 0, 0, 0.09) 0px 4px 2px, 
      rgba(0, 0, 0, 0.09) 0px 8px 4px, 
      rgba(0, 0, 0, 0.09) 0px 16px 8px, 
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: all 0.3s ease;
    position: relative;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 
      rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, 
      rgba(0, 0, 0, 0.18) 0px -36px 30px 0px inset, 
      rgba(0, 0, 0, 0.12) 0px -79px 40px 0px inset, 
      rgba(0, 0, 0, 0.08) 0px 2px 1px, 
      rgba(0, 0, 0, 0.12) 0px 8px 4px, 
      rgba(0, 0, 0, 0.12) 0px 16px 8px, 
      rgba(0, 0, 0, 0.12) 0px 24px 12px, 
      rgba(0, 0, 0, 0.12) 0px 40px 20px;
  }

  .icon-container {
    width: 80px;
    height: 80px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .icon {
    width: 40px;
    height: 40px;
    color: #3B82F6;
  }

  .metric-badge {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: #000000;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111111;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .card-description {
    font-size: 0.875rem;
    color: #2E2E2E;
    line-height: 1.6;
  }
`;

export default NeumorphicCard;
