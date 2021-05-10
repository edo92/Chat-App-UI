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
  ${({ theme }) => theme.colors.primary};
`;

export const fontSecondary = css`
  ${({ theme }) => theme.colors.fontSecondary};
`;

export const fontActive = css`
  ${({ theme }) => theme.colors.fontActive};
`;

export const fontInactive = css`
  ${({ theme }) => theme.colors.fontInactive};
`;

export const statuses = css`
  ${({ status, theme: { colors } }) =>
    ({
      success: colors.success,
      warning: colors.warning,
      error: colors.error,
    }[status])};
`;
