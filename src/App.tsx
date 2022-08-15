import React, { useEffect } from 'react';
import './App.css';
import { createTheme, CssBaseline, PaletteMode, responsiveFontSizes, ThemeProvider, useMediaQuery } from '@mui/material';
import { ColorModeContext } from './theme/colorModeContext';
import { getThemedComponents } from './theme/designComponent';
import { deepmerge } from '@mui/utils';
import { getDesignTokens } from './theme/designToken';
import AppRouter from './routing/AppRouter';
import { useAppSelector } from './store/storehooks';
import ErrorBoundary from './utils/utilComponent/errorBoundary';


function App() {
  const {user} = useAppSelector((state) => state.auth);
  const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<PaletteMode>('light');



  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      }
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );
  theme = responsiveFontSizes(theme);
  return (
    <div className='App'>
      <ErrorBoundary>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter user={user}/>
        </ThemeProvider>
      </ColorModeContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
