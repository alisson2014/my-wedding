import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7B1FA2', 
      light: '#AE52D4',
      dark: '#4A0072',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E1BEE7', 
      light: '#FFF1FF',
      dark: '#AF8EB5',
      contrastText: '#4A0072',
    },
    background: {
      default: '#F3E5F5',
      paper: '#ffffff',
    },
    text: {
      primary: '#4A0072',
      secondary: '#757575',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 300, letterSpacing: '0.1em' },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    button: { borderRadius: '20px' }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: '10px 30px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(123, 31, 162, 0.1)',
        },
      },
    },
  },
});

export default theme;