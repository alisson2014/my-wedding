import { ThemeProvider, CssBaseline } from '@mui/material';
import LandingPage from './LandingPage';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
};