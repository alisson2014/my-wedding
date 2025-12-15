import { Container, Box, Typography, Stack, Fade } from '@mui/material';
import { CalendarToday, AccessTime } from '@mui/icons-material';

const HeroSection = () => (
  <Box
    sx={{
      bgcolor: 'primary.main',
      color: 'white',
      py: { xs: 8, md: 12 },
      textAlign: 'center',
      backgroundImage: 'linear-gradient(135deg, #4A0072 0%, #7B1FA2 50%, #AB47BC 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Box sx={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
    <Box sx={{ position: 'absolute', bottom: -50, right: -50, width: 300, height: 300, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)' }} />

    <Container maxWidth="md">
      <Fade in timeout={1000}>
        <Box>
          <Typography variant="overline" sx={{ fontSize: '1.2rem', letterSpacing: 4 }}>
            Save the Date
          </Typography>
          <Typography variant="h2" component="h1" sx={{ my: 4, fontSize: { xs: '3rem', md: '5rem' } }}>
            Tassiany & Alisson
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center" 
            alignItems="center"
            sx={{ mt: 4 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarToday sx={{ fontSize: 24 }} />
              <Typography variant="h5">07 de Março de 2026</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <AccessTime sx={{ fontSize: 24 }} />
              <Typography variant="h5">16:30h</Typography>
            </Box>
          </Stack>
        </Box>
      </Fade>
    </Container>
  </Box>
);

export default HeroSection;