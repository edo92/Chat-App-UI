import { css } from 'styled-components';
import { TextBase } from 'Styled/base';
import {
  success,
  warning,
  error,
  activePrimary,
} from 'Styled/colors';

export const colorType = css`
  ${({ type = 'default' }) =>
    ({
      success,
      warning,
      error,
      primary: activePrimary,
      default: 'none',
    }[type])};
`;

export const fontDynamic = css`
  ${TextBase};
  ${({ size = 'md' }) =>
    ({
      sm: '15px',
      md: '16px',
      lg: '17px',
    }[size])};
`;
