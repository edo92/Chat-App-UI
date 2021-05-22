import { css } from 'styled-components';
import { icons, sizes } from './styles';

export const sizeDynamic = css`
  ${({ socialSize }) => `
  height: ${sizes[socialSize]};
  width: ${sizes[socialSize]};
`};
`;

export const socialBgDynamic = css`
  ${({ icon = 'default' }) => `
  background: ${
    icons[icon]?.background ||
    icons['default'].background
  };
`};
`;
