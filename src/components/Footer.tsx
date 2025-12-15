import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 4, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
      Tassiany & Alisson
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.7 }}>
      Feito com amor ❤️ 2026
    </Typography>
  </Box>
);

export default Footer;