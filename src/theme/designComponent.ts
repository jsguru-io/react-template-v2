import { grey, blue, common } from '@mui/material/colors';
import { palette } from './palette';

export const getThemedComponents = (mode: any) => ({
  components: {
    ...(mode === 'light'
      ? {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: grey[800]
            }
          }
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              color: common.white,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2
              }
            }
          },
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                fontFamily:
                  'Roboto'
              }
            },
            {
              props: { variant: 'outlined' },
              style: {
                color: palette.light.primary.main
              }
            },
            {
              props: { variant: 'primary', color: 'primary' },
              style: {
                border: '4px dashed blue'
              }
            }
          ]
        },
        MuiList: {
          styleOverrides: {
            root: {}
          }
        },
        MuiMenuItem: {
          styleOverrides: {
            root: {
              color: common.white,
              alignItems: 'stretch',
              fontFamily:
                'Oswald, Roboto, \'Helvetica Neue\', Arial, sans-serif'
            }
          }
        },
        MuiAccordion: {
          styleOverrides: {
            root: {
              color: common.white,
              fontFamily:
                'Oswald, Roboto, \'Helvetica Neue\', Arial, sans-serif'
            }
          }
        }
      }
      : {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: blue[800]
            }
          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
              input: {
                '&:-webkit-autofill': {
                  WebkitBoxShadow: `0 0 0 1000px ${palette.dark.primary.light} inset`
                }
              }
            }
          }
        }

      })
  }
});
