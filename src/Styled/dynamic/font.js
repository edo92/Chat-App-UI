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

export const fontColorDynamic = css`
  ${({ active, fontColor = 'fontActive' }) =>
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

export const fontSizeDynamic = css`
  ${({ fontSize = 'md' }) =>
    ({
      xs: '14px',
      sm: '15px',
      md: '16px',
      lg: '17px',
    }[fontSize])};
`;

export const fontDynamic = css`
  color: ${fontColorDynamic};
  font-size: ${fontSizeDynamic};
`;
