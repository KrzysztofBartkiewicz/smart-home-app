import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyles';
import { mainTheme } from '../themes/mainTheme';

const GlobalStyleTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalStyleTemplate;
