import { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { colors } from './colors';
import { media } from './media';
import { GlobalResetStyles } from './GlobalResetStyles';
import { GlobalCommonStyles } from './GlobalCommonStyles';

const theme = {
  colors,
  media,
};

export const ThemeProvider: FC = ({ children }) => (
  <EmotionThemeProvider {...{ theme }}>
    <GlobalResetStyles />
    <GlobalCommonStyles {...{ theme }} />
    {children}
  </EmotionThemeProvider>
);
