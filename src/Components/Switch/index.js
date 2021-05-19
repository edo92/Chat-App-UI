import React, { memo, useState } from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { waveAnimation } from 'Styled/anim';
import {
  bgDynamic,
  fontDynamic,
  cursorDynamic,
  borderDynamic,
} from 'Styled/dynamic';

import {
  backgroundStyle,
  sliderSize,
  sliderAfterSize,
  afterMargin,
  inputAfter,
  sliderSpaceing,
} from './styles';

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const Lable = styled.span`
  ${fontDynamic};
  ${sliderSpaceing};
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  margin-left: 14px;
  white-space: nowrap;
`;

const labelAfter = css`
  ${afterMargin};
  ${sliderAfterSize};
  ${backgroundStyle};
  content: '';
  display: block;
  border-radius: 50%;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  box-shadow: 1px 3px 3px 1px rgb(0 0 0 / 10%);
`;

const sliderBase = css`
  position: absolute;
  top: 0;
  left: 0;
`;

const Slider = styled.label.attrs(({ status }) => ({
  radius: 'pill',
  typebg: 'secondary',
  typebr: status ? 'ghost' : 'tertiary',
}))`
  ${bgDynamic};
  ${sliderBase};
  ${sliderSize};
  ${borderDynamic};
  ${cursorDynamic};

  &::after {
    ${labelAfter};
  }
  &::before {
    ${({ anim }) => anim && waveAnimation};
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

const Switch = memo(
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

export default Switch;
