import { css } from 'styled-components';
import {
  background,
  borderPrimary,
  borderSecondary,
  borderTertiary,
  ghost,
} from 'Styled/colors';

export const borderWidthDynamic = css`
  ${({ sizebr = 1 }) =>
    ({
      1: '1px',
      2: '2px',
      3: '3px',
      none: 'none',
    }[sizebr])};
`;

export const borderColorDynamic = css`
  ${({ typebr = 'primary' }) =>
    ({
      primary: borderPrimary,
      secondary: borderSecondary,
      tertiary: borderTertiary,
      ghost,
      background,
    }[typebr])};
`;

export const borderRadiusDynamic = css`
  ${({ radius = 'none' }) =>
    ({
      circle: '50%',
      base: '0.25rem',
      pill: '15px',
      none: 'none',
    }[radius])};
`;

export const borderStyleDynamic = css`
  ${({ styleBr = 'solid' }) =>
    ({
      solid: 'solid',
      groove: 'groove',
    }[styleBr])};
`;

export const borderDynamic = css`
  border-width: ${borderWidthDynamic};
  border-color: ${borderColorDynamic};
  border-style: ${borderStyleDynamic};
  border-radius: ${borderRadiusDynamic};
`;
