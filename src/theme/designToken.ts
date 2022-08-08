import { amber, deepOrange, green, grey, yellow } from '@mui/material/colors';
import { palette } from './palette';

export const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: palette.light.primary.main,
          light: palette.light.primary.light,
          dark: palette.light.primary.dark
        },
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800]
        }
      }
      : {
        primary: palette.dark.primary,
        secondary:yellow,
        info:green,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900]
        },
        text: {
          primary: '#fff',
          secondary: grey[500]
        }
      })
  },
  typography: {
    fontFamily: [
      'Oswald',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    body1: {
      fontFamily: 'Poppins, Arial, sans-serif'
    }
  }
});
