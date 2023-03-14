import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Global, ThemeProvider } from '@emotion/react';
import CustomRouter from './router/CustomRouter';
import queryClient from './query/queryClient';

import Header from './layout/Header/Header';
import { theme } from './style/theme';
import { reset } from './style/reset';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Global styles={reset} />
        <ThemeProvider theme={theme}>
          <Header />
          <CustomRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
