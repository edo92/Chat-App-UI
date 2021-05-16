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
const border400 = '#384054';
const border500 = '#adb5bd';
const border600 = '#424a5e';

const highlight100 = 'rgba(0, 0, 0, 0.5)';
const highlight200 = 'rgba(255, 255, 255, 0.3)';
const highlight300 = '#333b4f';

const font100 = '#000000d1';
const font200 = 'rgba(255, 255, 255, 0.5)';
const font300 = '#212529';
const font400 = 'rgba(255, 255, 255, 0.75)';
const font500 = '#6c757d';
const font600 = '#969696';
const font700 = '#ebebeb';
const font800 = 'rgba(255, 255, 255, 0.4)';

const active100 = '#f0f0f0';
const active200 = '#1f273b';

const soloColor = {
  smooth: highlight200,
  font: font500,
};

const baseColors = {
  ...soloColor,
  dark,
  light,
  primary,
  success,
  warning,
  error,
};

const lightColors = {
  backgroundPrimary: light,

  activePrimary: primary,
  activeSecondary: primary,
  activeTertiary: active100,

  borderPrimary: border200,
  borderSecondary: border300,
  borderTertiary: border500,

  highlightActive: border200,
  highlightPrimary: border200,
  highlightSecondary: light,
  highlightTertiary: highlight100,

  fontPrimary: font600,
  fontSecondary: font300,
  fontTertiary: font500,

  fontHighlight: font700,
  fontActive: primary,
  fontInactive: font100,
};

const darkColors = {
  backgroundPrimary: dark,

  activePrimary: primary,
  activeSecondary: font200,
  activeTertiary: active200,

  borderPrimary: border100,
  borderSecondary: border400,
  borderTertiary: border600,

  highlightActive: highlight300,
  highlightPrimary: primary,
  highlightSecondary: border100,
  highlightTertiary: highlight200,

  fontPrimary: font500,
  fontSecondary: font400,
  fontTertiary: font800,

  fontHighlight: border100,
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
