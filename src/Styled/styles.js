import { css } from 'styled-components';
import {
  highlightActive,
  fontSecondary,
  activePrimary,
} from 'Styled/colors';

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

export const TextBase = css`
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
`;

export const TextPrimary = css`
  ${TextBase};
  color: ${(props) =>
    props.active ? activePrimary : fontSecondary};
`;

export const TextSecondary = css`
  ${TextBase};
  color: ${fontSecondary};
`;
