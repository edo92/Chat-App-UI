import { css } from 'styled-components';
import {
  success,
  warning,
  error,
  activePrimary,
} from 'Styled/colors';

export * from './font';
export * from './border';
export * from './background';

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

// spacing
export const spaceing = css`
  padding: ${({ size = 'md' }) =>
    ({
      sm: '9px 14px',
      md: '10px 15px',
      lg: '11px 16px',
    }[size])};
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

export const visibleDynamic = css`
  ${({ visible }) => `
    visibility: ${visible ? 'visible' : 'hidden'}
  `};
`;

export const alignDynamic = css`
  ${({ align = 'center' }) => `
      text-align: ${align}
  `};
`;
