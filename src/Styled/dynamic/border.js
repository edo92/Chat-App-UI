import { css } from 'styled-components';
import {
  borderPrimary,
  borderSecondary,
  borderTertiary,
  ghost,
} from 'Styled/colors';

export const borderWidth = css`
  ${({ brSize = 1 }) =>
    ({
      1: '1px',
      2: '2px',
      3: '3px',
    }[brSize])};
`;

export const borderColor = css`
  ${({ type = 'primary' }) =>
    ({
      primary: borderPrimary,
      secondary: borderSecondary,
      tertiary: borderTertiary,
      ghost: ghost,
    }[type])};
`;

export const borderRadius = css`
  ${({ radius = 'none' }) =>
    ({
      circle: '50%',
      base: '0.25rem',
      pill: '15px',
      none: 'none',
    }[radius])};
`;

export const borderStyle = css`
  ${({ brStyle = 'solid' }) =>
    ({
      solid: 'solid',
      groove: 'groove',
    }[brStyle])};
`;

export const borderDynamic = css`
  border-width: ${borderWidth};
  border-style: ${borderStyle};
  border-color: ${borderColor};
  border-radius: ${borderRadius};
`;
