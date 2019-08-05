import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import GlobalStyles from '../styles/GlobalStyles';
import AppRouter from './Router';

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <AppRouter isLoggedIn={!false} />
    </>
  </ThemeProvider>
);
