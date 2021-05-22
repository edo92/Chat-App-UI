import { css } from 'styled-components';
import {
  background,
  light,
  success,
  warning,
  error,
  highlightPrimary,
  highlightSecondary,
  highlightActive,
  highlightTertiary,
  borderPrimary,
  activePrimary,
  smooth,
} from 'Styled/colors';

const bgColors = {
  active: highlightActive,
  activePrimary: activePrimary,
  primary: highlightPrimary,
  secondary: highlightSecondary,
  tertiary: highlightTertiary,
  highlight: borderPrimary,
  base: background,
  none: 'none',
  smooth,
  light,
  success,
  warning,
  error,
};

export const bgColorDynamic = css`
  ${({ typebg = 'base' }) => bgColors[typebg]};
`;

export const bgHoverDynamic = css`
  &: hover {
    background: ${({ hoverbg }) =>
      hoverbg && bgColors[hoverbg]};
  }
`;

export const bgDynamic = css`
  background: ${bgColorDynamic};
  ${bgHoverDynamic};
`;
