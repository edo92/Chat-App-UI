import { css } from 'styled-components';

export const sizes = {
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
      height: '14.5px',
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
export const backgroundStyle = css`
  background: ${({ status }) =>
    status ? '#fff' : '#adb5bd'};
`;

// Spaceing
export const sliderSpaceing = css`
  ${({ size }) => `
    left: ${sizes[size].slider.width};
    top: ${sizes[size].label.top};
  `};
`;

// Sizeing based on passed props
export const sliderSize = css`
  ${({ size }) => `
    width: ${sizes[size].slider.width};
    height: ${sizes[size].slider.height};
  `};
`;

export const sliderAfterSize = css`
  ${({ size }) => `
    width: ${sizes[size].after.size};
    height: ${sizes[size].after.size};
  `};
`;

export const afterMargin = css`
  ${({ size }) => `
    margin-left: ${sizes[size].after.left};
    margin-top: ${sizes[size].after.top};
  `};
`;

export const inputAfter = css`
  ${({ size }) => `
    margin-left: ${sizes[size].input.left};
    margin-top: ${sizes[size].input.top};
  `};
`;
