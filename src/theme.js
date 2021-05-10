import { createGlobalStyle } from 'styled-components';

const dark = '#1a2236';
const light = 'white';
const primary = '#0a80ff';

const success = '#0abb87';
const warning = '#ffc107';
const error = 'red';

const border100 = '#293145';
const border200 = '#e6e6e6';
const border300 = '#e9ecef';
const boroder400 = '#384054';

const highlight100 = 'rgba(0, 0, 0, 0.5)';
const highlight200 = 'rgba(255, 255, 255, 0.3)';
const highlight300 = '#333b4f';

const font100 = 'black';
const font200 = 'rgba(255, 255, 255, 0.5)';
const font300 = '#212529';
const font400 = 'rgba(255, 255, 255, 0.75)';

const baseColors = {
  dark,
  light,
  primary,
  success,
  warning,
  error,
};

const lightColors = {
  backgroundPrimary: light,

  activeSecondary: primary,

  borderPrimary: border200,
  borderSecondary: border300,

  highlightActive: border200,
  highlightPrimary: border200,
  highlightSecondary: light,
  highlightTertiary: highlight100,

  fontSecondary: font300,
  fontActive: primary,
  fontInactive: font100,
};

const darkColors = {
  backgroundPrimary: dark,

  activeSecondary: font200,

  borderPrimary: border100,
  borderSecondary: boroder400,

  highlightActive: highlight300,
  highlightPrimary: primary,
  highlightSecondary: border100,
  highlightTertiary: highlight200,

  fontSecondary: font400,
  fontActive: light,
  fontInactive: font200,
};

const lightThemeColors = Object.assign(
  {},
  baseColors,
  lightColors,
);
const darkThemeColors = Object.assign(
  {},
  baseColors,
  darkColors,
);

const theme = {
  isDark: false,
};

export const lightTheme = Object.assign(
  {},
  theme,
  { isDark: false },
  { colors: lightThemeColors },
);
export const darkTheme = Object.assign(
  {},
  theme,
  { isDark: true },
  { colors: darkThemeColors },
);

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%:
  }
  body {
    margin:0;
    padding: 0;
    height: 100%;
  }
  .dark {
    background: red;
  }
`;
