import { css } from 'styled-components';
import { sizes } from './styles';

// Colors // *** use dyanmic styled
export const backgroundStyle = css`
  background: ${({ status }) =>
    status ? '#fff' : '#adb5bd'};
`;

// Spaceing
export const labelStyle = css`
  ${({ size }) => `
    font-size: ${sizes[size].label.size};
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

export const labelAfterStyle = css`
  ${({ size }) => `
    margin-left: ${sizes[size].after.left};
    margin-top: ${sizes[size].after.top};

    width: ${sizes[size].after.size};
    height: ${sizes[size].after.size};
  `};
`;

export const inputAfter = css`
  ${({ size }) =>
    size &&
    `
    margin-left: ${sizes[size].input.left};
    margin-top: ${sizes[size].input.top};
  `};
`;
