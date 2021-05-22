import { css } from 'styled-components';
import {
  success,
  warning,
  error,
  activePrimary,
  activeSecondary,
} from 'Styled/colors';

export * from './font';
export * from './border';
export * from './background';

const actions = {
  secondary: activeSecondary,
};

const colors = {
  success,
  warning,
  error,
  primary: activePrimary,
  none: 'none',
};

const spaceSize = {
  sm: '9px 14px',
  md: '10px 15px',
  lg: '11px 16px',
};

export const colorTypeDynamic = css`
  ${({ type }) => type && colors[type]};
`;

// spacing
export const spaceDynamic = css`
  padding: ${({ size = 'md' }) => spaceSize[size]};
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
    visibility: ${visible ? 'visible' : 'hidden'};
  `};
`;

export const alignDynamic = css`
  ${({ align = 'center' }) => `
      text-align: ${align};
  `};
`;

export const focusDynamic = css`
  ${({ focus }) => focus && actions[focus]};
`;
