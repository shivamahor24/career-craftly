import React, { useState } from 'react';
import styled from 'styled-components';

const GlassRadio = ({ options = ['All', 'Technical', 'Career'], onChange, defaultValue = 'All' }) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <StyledWrapper>
      <div className="radio-input">
        <div className="selector">
          {options.map((option, index) => (
            <div className="choice" key={option}>
              <div>
                <input
                  className="choice-circle"
                  type="radio"
                  name="filter-selector"
                  id={`option-${index}`}
                  value={option}
                  checked={selected === option}
                  onChange={() => handleChange(option)}
                />
                <div className="ball" />
              </div>
              <label htmlFor={`option-${index}`} className="choice-name">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-input {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
  }

  .selector {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .choice {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  .choice > div {
    position: relative;
    width: 41px;
    height: 41px;
    margin-right: 15px;
    z-index: 0;
  }

  .choice-circle {
    appearance: none;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    border-width: 9px;
    border-style: solid;
    border-color: rgba(245, 245, 245, 0.45);
    cursor: pointer;
    box-shadow: 0px 0px 20px -13px gray, 0px 0px 20px -14px gray inset;
    transition: all 0.3s ease;
  }

  .choice-circle:hover {
    border-color: rgba(59, 130, 246, 0.3);
  }

  .ball {
    z-index: 1;
    position: absolute;
    inset: 0px;
    transform: translateX(-95px);
    box-shadow: 
      rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -15px 15px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -40px 20px 0px inset, 
      rgba(0, 0, 0, 0.06) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px, 
      rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px, 
      rgba(0, 0, 0, 0.09) 0px 32px 16px,
      0px -1px 15px -8px rgba(0, 0, 0, 0.09);
    border-radius: 100%;
    transition: transform 800ms cubic-bezier(1, -0.4, 0, 1.4);
    background-color: rgb(232, 232, 232);
  }

  .choice-circle:checked + .ball {
    transform: translateX(0px);
    background-color: #3B82F6;
  }

  .choice-name {
    color: rgb(100, 100, 100);
    font-size: 18px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .choice-circle:checked ~ .choice-name {
    color: #3B82F6;
  }
`;

export default GlassRadio;
