import { css } from 'styled-components';
import {
  success,
  warning,
  error,
  activePrimary,
} from 'Styled/colors';

export * from './font';
export * from './border';

export const colorType = css`
  ${({ type = 'none' }) =>
    ({
      success,
      warning,
      error,
      primary: activePrimary,
      none: 'none',
    }[type])};
`;

// Cursor
export const cursorDynamic = css`
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'};
`;

export const activeDynamic = css`
  ${({ active }) =>
    active ? activePrimary : 'inherit'};
`;
