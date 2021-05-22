import { css } from 'styled-components';

const iconSize = css`
  ${({ sizeicon = 'md' }) =>
    ({
      sm: '16px',
      md: '19px',
      lg: '24px',
    }[sizeicon])};
`;

export const iconColorDynamic = css`
  ${({ fill }) =>
    fill &&
    `
    fill: ${fill};
  `};
  ${({ coloricon }) =>
    coloricon &&
    `
    color: ${coloricon};
  `};
`;

export const iconSizeDynamic = css`
  width: ${iconSize};
  height: ${iconSize};
`;
