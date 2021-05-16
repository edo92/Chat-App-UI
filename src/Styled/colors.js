import { css } from 'styled-components';

export const background = css`
  ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const border = css`
  ${({ theme }) => theme.colors.borderPrimary};
`;

export const borderSecondary = css`
  ${({ theme }) => theme.colors.borderSecondary};
`;

export const borderTertiary = css`
  ${({ theme }) => theme.colors.borderTertiary};
`;

export const highlightActive = css`
  ${({ theme }) => theme.colors.highlightActive};
`;

export const highlightPrimary = css`
  ${({ theme }) => theme.colors.highlightPrimary};
`;

export const highlightSecondary = css`
  ${({ theme }) => theme.colors.highlightSecondary};
`;

export const highlightTertiary = css`
  ${({ theme }) => theme.colors.highlightTertiary};
`;

export const activePrimary = css`
  ${({ theme }) => theme.colors.activePrimary};
`;

export const activeSecondary = css`
  ${({ theme }) => theme.colors.activeSecondary};
`;

export const activeTertiary = css`
  ${({ theme }) => theme.colors.activeTertiary};
`;

export const fontHighlight = css`
  ${({ theme }) => theme.colors.fontHighlight};
`;

export const fontPrimary = css`
  ${({ theme }) => theme.colors.fontPrimary};
`;

export const fontSecondary = css`
  ${({ theme }) => theme.colors.fontSecondary};
`;

export const fontTertiary = css`
  ${({ theme }) => theme.colors.fontTertiary};
`;

export const fontActive = css`
  ${({ theme }) => theme.colors.fontActive};
`;

export const fontInactive = css`
  ${({ theme }) => theme.colors.fontInactive};
`;

export const smooth = css`
  ${({ theme }) => theme.colors.smooth};
`;

export const success = css`
  ${({ theme }) => theme.colors.success};
`;

export const warning = css`
  ${({ theme }) => theme.colors.warning};
`;

export const error = css`
  ${({ theme }) => theme.colors.error};
`;
