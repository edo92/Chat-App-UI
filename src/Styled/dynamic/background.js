import { css } from 'styled-components';
import {
  background,
  light,
  highlightPrimary,
  highlightSecondary,
} from 'Styled/colors';

import { activeDynamic } from './index';

const bgColors = {
  light: light,
  base: background,
  primary: highlightPrimary,
  secondary: highlightSecondary,
};

export const bgColorDynamic = css`
  ${({ typebg = 'base', activebg }) =>
    activebg ? activeDynamic : bgColors[typebg]};
`;

export const bgHoverDynamic = css`
  ${({ hover }) => hover && bgColors[hover]};
`;

export const bgDynamic = css`
  background: ${bgColorDynamic};
  &: hover {
    background-color: ${bgHoverDynamic};
  }
`;
