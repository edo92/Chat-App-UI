import { css } from 'styled-components';

export const statuses = css`
  ${({ status, theme: { colors } }) =>
    ({
      success: colors.success,
      warning: colors.warning,
      error: colors.error,
    }[status])};
`;

export const fontSecondary = css`
  ${({ theme }) => theme.colors.fontSecondary};
`;

export const background = css`
  ${({ theme }) => theme.colors.background};
`;

export const border = css`
  ${({ theme }) => theme.colors.highlight};
`;

export const borderSecondary = css`
  ${({ theme }) => theme.colors.borderSecondary};
`;

export const borderTertiary = css`
  ${({ theme }) => theme.colors.borderTertiary};
`;

export const fontNeutral = css`
  ${({ theme }) => theme.colors.fontNeutral};
`;

export const primary = css`
  ${({ theme }) => theme.colors.primary}
`;

export const activePrimary = css`
  ${({ theme }) => theme.colors.active};
`;

export const fontActive = css`
  ${({ theme }) => theme.colors.fontActive};
`;

export const fontInactive = css`
  ${({ theme }) => theme.colors.fontInactive};
`;

export const highlightBG = css`
  ${({ theme }) => theme.colors.highlightSecondary};
`;

export const activeSecondary = css`
  ${({ theme }) => theme.colors.activeSecondary};
`;

export const highlight = css`
  ${({ theme }) => theme.colors.highlight};
`;

export const highlightSecondary = css`
  ${({ theme }) => theme.colors.highlightSecondary};
`;

export const highlightItem = css`
  ${({ theme }) => theme.colors.highlightItem};
`;

export const highlightItemSecondary = css`
  ${({ theme }) => theme.colors.highlightItemSecondary};
`;

export const highlightPrimary = css`
  ${({ theme }) => theme.colors.highlightPrimary};
`;

export const textHighlight = css`
  ${({ theme }) => theme.colors.textHighlight};
`;

export const highlightBackground = css`
  ${(props) => props.theme.colors.highlightBackground}
`;
