import { PaletteOptions, ThemeOptions } from '@mui/material/styles';

export interface ExtendedPaletteOption extends PaletteOptions {
  white: string;
  light: string;
  medium: string;
  dark: string;
}

export interface ExtendedThemeOptions extends ThemeOptions {
  palette: ExtendedPaletteOption;
}
