import { Container, Box, Typography, Button } from '@mui/material';
import CardGiftcard from '@mui/icons-material/CardGiftcard';

const GiftSection = () => (
  <Box sx={{ bgcolor: 'secondary.light', py: 8, textAlign: 'center' }}>
    <Container maxWidth="sm">
      <CardGiftcard sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
        Lista de Presentes
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Sua presença é nosso maior presente! Mas se quiser nos presentear com algo a mais, preparamos uma lista especial.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        startIcon={<CardGiftcard />}
        title="Ir para lista de presentes"
        href="https://www.mercadolivre.com.br/presentes/alisson-e-tassiany-0spt6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Lista de Presentes
      </Button>
    </Container>
  </Box>
);

export default GiftSection;