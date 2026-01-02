import React, { useState, useId } from 'react';
import styled from 'styled-components';

const NeumorphicSwitch = ({ onChange, defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);
  const uniqueId = useId();

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <StyledWrapper>
      <div className="container">
        <input
          type="checkbox"
          name="checkbox"
          id={uniqueId}
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={uniqueId} className="label">
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    transform: scale(0.6);
  }

  .label {
    height: 60px;
    width: 120px;
    background-color: #a59f9f;
    border-radius: 30px;
    -webkit-box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
      inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),
      inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
      inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),
      inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    -webkit-transition: -webkit-transform 0.4s;
    transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
  }

  .label:hover {
    -webkit-transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
    transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
  }

  input:checked ~ .label:hover {
    -webkit-transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
    transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
  }

  input {
    display: none;
  }

  input:checked ~ .label::before {
    left: 70px;
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 70%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .label::before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #000000;
    background-image: linear-gradient(
      130deg,
      #757272 10%,
      #ffffff 11%,
      #726f6f 62%
    );
    left: 10px;
    -webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 10px 10px 10px rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 10px 10px 10px rgba(0, 0, 0, 0.3);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export default NeumorphicSwitch;
