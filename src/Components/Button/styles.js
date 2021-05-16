import { css } from 'styled-components';
import { activeSecondary } from 'Styled/colors';
import { colorType, borderColor } from 'Styled/dynamic';

export const transitions = css`
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

export const baseStyle = css`
  outline: none;
  width: auto;
  display: inline-flex;
  background: transparent;
  justify-content: center;
`;

export const sizing = css`
  border-width: 1px;
  border-radius: 0.25rem;
  font-size: 14px;
  line-height: 14px;
  padding: 9px 14px;
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
