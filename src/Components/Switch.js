import React, { memo, useState } from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { waveAnimation } from 'Styled/anim';
import {
  fontSecondary,
  highlightSecondary,
  borderTertiary,
} from 'Styled/colors';

const sizes = {
  md: {
    slider: {
      width: '43px',
      height: '21px',
    },
    after: {
      size: '15px',
      left: '3px',
      top: '2.5px',
    },
    input: {
      left: '25px',
      top: '2.5px',
    },
    label: {
      top: '1.5px',
    },
  },
  sm: {
    slider: {
      width: '27px',
      height: '15px',
    },
    after: {
      size: '12.5px',
      left: '1px',
      top: '1px',
    },
    input: {
      left: '13px',
      top: '1px',
    },
    label: {
      top: '0px',
    },
  },
};

// Colors
const borderStyle = css`
  ${({ status }) =>
    status ? '#0e9bff' : borderTertiary};
`;
const backgroundStyle = css`
  ${({ status }) => (status ? '#fff' : '#adb5bd')};
`;

// Sizeing based on passed props
const sliderSize = css`
  width: ${({ size }) => sizes[size].slider.width};
  height: ${({ size }) => sizes[size].slider.height};
`;

const sliderAfterSize = css`
  width: ${({ size }) => sizes[size].after.size};
  height: ${({ size }) => sizes[size].after.size};
`;

const afterMargin = css`
  margin-left: ${({ size }) => sizes[size].after.left};
  margin-top: ${({ size }) => sizes[size].after.top};
`;

const inputAfter = css`
  margin-left: ${({ size }) => sizes[size].input.left};
  margin-top: ${({ size }) => sizes[size].input.top};
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const Lable = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  margin-left: 14px;
  white-space: nowrap;
  color: ${fontSecondary};
  left: ${({ size }) => sizes[size].slider.width};
  top: ${({ size }) => sizes[size].label.top};
`;

const Slider = styled.label`
  ${sliderSize};
  border: 1px solid ${borderStyle};
  background: ${highlightSecondary};

  position: absolute;
  cursor: pointer;
  border-radius: 15px;

  top: 0;
  left: 0;

  &::before {
    ${({ anim }) => anim && waveAnimation};
  }

  &::after {
    content: '';
    display: block;
    border-radius: 50%;

    -webkit-transition: 0.1s;
    transition: 0.1s;

    ${afterMargin};
    ${sliderAfterSize};
    background: ${backgroundStyle};
    box-shadow: 1px 3px 3px 1px rgb(0 0 0 / 20%);
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;

  &:checked + ${Slider} {
    background: #0a80ff;

    &::after {
      ${inputAfter};

      content: '';
      transition: 0.15s;
      display: block;
    }
  }
`;

const App = memo(
  ({ size = 'md', label, id = uuidv4() }) => {
    const [status, setStatus] = useState(false);
    const [anim, setAnimate] = useState(false);

    // status & anim state
    const onChange = () => {
      setStatus(!status);
      setAnimate(true);

      // Triggers wave animation for .ms
      setTimeout(() => {
        anim && setAnimate(false);
      }, 600);
    };

    return (
      <CheckBoxWrapper>
        <Input
          onClick={onChange}
          id={id}
          size={size}
          type="checkbox"
        />
        <Slider
          status={status}
          anim={anim}
          size={size}
          htmlFor={id}
        />
        {label && <Lable size={size}>{label}</Lable>}
      </CheckBoxWrapper>
    );
  },
);

export default App;
