import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 4, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
      Tassiany & Alisson
    </Typography>

    <Typography variant="body2" sx={{ opacity: 0.7 }}>
      Feito com amor ❤️ 2026
    </Typography>

    <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
      Desenvolvido por{' '}
      <Link 
        href="https://site-pessoal-rose.vercel.app/" 
        color="inherit" 
        target="_blank" 
        rel="noopener"
        underline="hover"
        sx={{ fontWeight: 'bold' }}
      >
        Alisson
      </Link>
    </Typography>

  </Box>
);

export default Footer;