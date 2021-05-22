import { css } from 'styled-components';
import {
  background,
  borderPrimary,
  borderSecondary,
  borderTertiary,
  fontSecondary,
  ghost,
} from 'Styled/colors';

const sizes = {
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  none: 'none',
};

const brColors = {
  primary: borderPrimary,
  secondary: borderSecondary,
  tertiary: borderTertiary,
  highlight: fontSecondary,
  ghost,
  background,
};

export const borderWidthDynamic = css`
  border-width: ${({ sizebr = 1 }) => sizes[sizebr]};
`;

export const borderColorDynamic = css`
  border-color: ${({ typebr = 'primary' }) =>
    brColors[typebr]};
`;

export const borderRadiusDynamic = css`
  border-radius: ${({ radiusbr = 'none' }) =>
    ({
      circle: '50%',
      base: '0.25rem',
      pill: '15px',
      none: 'none',
    }[radiusbr])};
`;

export const borderStyleDynamic = css`
  border-style: ${({ stylebr = 'solid' }) =>
    ({
      solid: 'solid',
      groove: 'groove',
      none: 'none',
    }[stylebr])};
`;

export const borderFocusDynamic = css`
  &: focus {
    border-color: ${({ focusbr }) =>
      focusbr && brColors[focusbr]};
  }
`;

export const borderDynamic = css`
  ${borderFocusDynamic};
  ${borderWidthDynamic};
  ${borderColorDynamic};
  ${borderStyleDynamic};
  ${borderRadiusDynamic};
`;
