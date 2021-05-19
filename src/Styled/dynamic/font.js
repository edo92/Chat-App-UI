import { css } from 'styled-components';
import {
  activePrimary,
  fontHighlight,
  fontPrimary,
  fontSecondary,
  fontTertiary,
  fontActive,
  fontInactive,
} from 'Styled/colors';

export const fontSizeDynamic = css`
  ${({ size = 'md' }) =>
    ({
      xs: '14px',
      sm: '15px',
      md: '16px',
      lg: '17px',
      h1: '22px',
    }[size])};
`;

export const fontColorDynamic = css`
  ${({ active, fontColor = 'active' }) =>
    active
      ? activePrimary
      : {
          highlight: fontHighlight,
          primary: fontPrimary,
          secondary: fontSecondary,
          tertiary: fontTertiary,
          active: fontActive,
          inactive: fontInactive,
        }[fontColor]};
`;

export const fontDynamic = css`
  color: ${fontColorDynamic};
  font-size: ${fontSizeDynamic};
`;
