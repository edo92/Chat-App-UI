import { css } from 'styled-components';
import { activeSecondary } from 'Styled/colors';
import { colorType, borderColor } from 'Styled/dynamic';

// btn dynamic sizing
export const spaceing = css`
  padding: ${({ size = 'md' }) =>
    ({
      sm: '9px 14px',
      md: '10px 15px',
      lg: '11px 16px',
    }[size])};
`;

// btn styels
export const baseStyle = css`
  outline: none;
  width: auto;
  display: inline-flex;
  background: transparent;
  justify-content: center;
`;

export const transitions = css`
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

export const onFocus = css`
  &: focus {
    border-width: 1px;
    box-shadow: rgb(133, 133, 133);
    border-color: ${activeSecondary};
  }
`;

export const onHover = css`
  &: hover {
    background-color: ${borderColor};
  }
`;

export const backgroundColor = css`
  background: ${colorType};
`;
