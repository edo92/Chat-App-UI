import { css } from 'styled-components';
import { activeSecondary } from 'Styled/colors';
import {
  colorTypeDynamic,
  borderColorDynamic,
} from 'Styled/dynamic';

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
    box-shadow: rgb(133, 133, 133);
    border-color: ${activeSecondary};
  }
`;

export const onHover = css`
  &: hover {
    background-color: ${({ type }) =>
      type !== 'primary' && borderColorDynamic};
`;

export const backgroundColor = css`
  background: ${colorTypeDynamic};
`;
