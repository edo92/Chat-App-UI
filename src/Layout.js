import React, { memo } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import {
  darkTheme,
  lightTheme,
  GlobalStyle,
} from './theme';

const Layout = memo(({ isDarkTheme, children }) => {
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <>{children}</>
    </ThemeProvider>
  );
});

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.ui.theme.isDarkTheme,
  };
};

export default connect(mapStateToProps, null)(Layout);
