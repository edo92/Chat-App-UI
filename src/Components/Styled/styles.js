import { css } from 'styled-components';
import { highlightActive } from 'Components/Styled/colors';

export const button = css`
  display: flex;
  justify-content: center;
  border-radius: 7px;
  transition: all 0.23s;
  position: relative;
  cursor: pointer;
`;

export const HighlightOnHover = css`
  &: hover {
    background-color: ${highlightActive};
  }
`;
