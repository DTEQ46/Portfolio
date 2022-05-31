import '../styles/globals.css';
import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
      h6: '0.8rem',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
