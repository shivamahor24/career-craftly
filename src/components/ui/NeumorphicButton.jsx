import React from 'react';
import styled from 'styled-components';

const NeumorphicButton = ({ text = "Press me", onClick }) => {
    return (
        <StyledWrapper>
            <button className="neu-button" onClick={onClick}>
                {text}
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .neu-button {
    background-color: #e0e0e0;
    border-radius: 50px;
    box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
    color: #4d4d4d;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 40px;
    transition: all 0.2s ease-in-out;
    border: 2px solid rgb(206, 206, 206);
    font-family: 'Inter', sans-serif;
  }

  .neu-button:hover {
    box-shadow: 
      inset 2px 2px 5px #bcbcbc, 
      inset -2px -2px 5px #ffffff, 
      2px 2px 5px #bcbcbc, 
      -2px -2px 5px #ffffff;
    transform: translateY(-2px);
  }

  .neu-button:active {
    transform: translateY(0);
    box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
  }

  .neu-button:focus {
    outline: none;
    box-shadow: 
      inset 2px 2px 5px #bcbcbc, 
      inset -2px -2px 5px #ffffff, 
      2px 2px 5px #bcbcbc, 
      -2px -2px 5px #ffffff,
      0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export default NeumorphicButton;
