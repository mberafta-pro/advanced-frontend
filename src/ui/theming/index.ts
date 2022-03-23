import { createTheme } from '@mui/material';
import { ExtendedThemeOptions } from './customization';

const fontFamilies = ['"Source sans pro"'];

export const theme = createTheme({
  palette: {
    primary: {
      main: '#303D4A',
      dark: '#091722',
      light: '#5a6776',
    },
    secondary: {
      main: '#53868d',
      dark: '#245960',
      light: '#82b6bd',
    },
    white: '#FFFFFF',
    dark: '#8E8E8E',
    light: '#F2F2F2',
    medium: '#E2E2E2',
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 18,
    },
    h4: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    h6: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 16,
    },
    caption: {
      fontSize: 10,
    },
    fontFamily: fontFamilies.join(','),
  },
} as ExtendedThemeOptions);
