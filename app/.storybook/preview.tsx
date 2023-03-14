import type { Preview } from '@storybook/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';
import { theme } from '../src/style/theme';
import { reset } from '../src/style/reset';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Global styles={reset} />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
