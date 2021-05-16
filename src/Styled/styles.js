import { css } from 'styled-components';
import {
  highlightActive,
  fontSecondary,
  activePrimary,
} from 'Styled/colors';

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

export const ColorType = css`
  ${({ type, theme }) =>
    type
      ? theme.colors[type] || theme.colors.primary
      : 'none'};
`;
