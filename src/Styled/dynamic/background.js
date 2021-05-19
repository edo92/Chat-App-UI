import { css } from 'styled-components';
import {
  background,
  light,
  highlightPrimary,
  highlightSecondary,
  highlightActive,
  highlightTertiary,
} from 'Styled/colors';

const bgColors = {
  active: highlightActive,
  primary: highlightPrimary,
  secondary: highlightSecondary,
  tertiary: highlightTertiary,
  light: light,
  base: background,
  none: 'none',
};

export const bgColorDynamic = css`
  ${({ typebg = 'base' }) => bgColors[typebg]};
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
