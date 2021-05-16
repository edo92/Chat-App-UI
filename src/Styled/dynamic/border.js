import { css } from 'styled-components';
import {
  border,
  borderSecondary,
  borderTertiary,
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
  ${({ brColor = 'primary' }) =>
    ({
      primary: border,
      secondary: borderSecondary,
      tertiary: borderTertiary,
    }[brColor])};
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
`;
