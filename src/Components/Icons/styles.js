import { css } from 'styled-components';

const iconSize = css`
  ${({ size = 'md' }) =>
    ({
      sm: '16px',
      md: '19px',
      lg: '24px',
    }[size])};
`;

export const iconColorDynamic = css`
  ${({ fill }) =>
    fill &&
    `
    fill: ${fill};
  `};
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `};
`;

export const iconSizeDynamic = css`
  width: ${iconSize};
  height: ${iconSize};
`;
