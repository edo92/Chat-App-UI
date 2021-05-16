import { css } from 'styled-components';
import {
  border,
  borderSecondary,
  borderTertiary,
} from 'Styled/colors';

export const borderWidth = css`
  ${({ size = 1 }) =>
    ({
      1: '1px',
      2: '2px',
      3: '3px',
    }[size])};
`;

export const borderColor = css`
  ${({ color = 'primary' }) =>
    ({
      primary: border,
      secondary: borderSecondary,
      tertiary: borderTertiary,
    }[color])};
`;

export const borderStyle = css`
  ${({ style = 'solid' }) =>
    ({
      solid: 'solid',
      groove: 'groove',
    }[style])};
`;

export const borderDynamic = css`
  border-width: ${borderWidth};
  border-style: ${borderStyle};
  border-color: ${borderColor};
`;
