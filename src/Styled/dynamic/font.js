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

const fontColors = {
  highlight: fontHighlight,
  primary: fontPrimary,
  secondary: fontSecondary,
  tertiary: fontTertiary,
  active: fontActive,
  inactive: fontInactive,
};

export const fontSizeDynamic = css`
  ${({ sizefont = 'md' }) =>
    ({
      xs: '14px',
      sm: '15px',
      md: '16px',
      lg: '17px',
      h1: '22px',
    }[sizefont])};
`;

export const fontColorDynamic = css`
  ${({ active, typefont = 'active' }) =>
    active ? activePrimary : fontColors[typefont]};
`;

export const fontHoverDynamic = css`
  &: hover {
    color: ${({ hoverfont }) =>
      hoverfont && fontColors[hoverfont]};
  }
`;

export const fontDynamic = css`
  ${fontHoverDynamic};
  color: ${fontColorDynamic};
  font-size: ${fontSizeDynamic};
`;
