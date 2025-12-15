import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { LocationOn, CardGiftcard } from '@mui/icons-material';
import ChurchIcon from '@mui/icons-material/Church';

const InfoSection = () => (
  <Container sx={{ py: 8 }} maxWidth="lg">
    <Typography variant="h4" align="center" color="primary" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
      Detalhes do Grande Dia
    </Typography>
    <Grid container spacing={4} alignItems="stretch" justifyContent="center">
      {/* Card da Cerimônia */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'secondary.light', color: 'primary.main' }}>
                <ChurchIcon sx={{ fontSize: 40 }} />
              </Box>
            </Box>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              Cerimônia
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              A cerimônia será realizada na Igreja Apostólica. Contamos com sua presença neste momento abençoado.
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1} mt={2} mb={1}>
              <LocationOn color="primary" />
              <Typography variant="body2" fontWeight="bold">
                Igreja Apostólica
              </Typography>
            </Box>
            <Typography variant="caption" display="block" gutterBottom>
              Estr. Mun. Nelson Tavares da Silva, 1560 - Bom Retiro
            </Typography>
          </CardContent>
          
          {/* Mapa Cerimônia */}
          <Box sx={{ height: { xs: 300, md: 400 }, width: '100%' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1072979538217!2d-45.7678332!3d-23.202759999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4d4963ea0e0b%3A0x1b686ba77f3757c5!2sEstr.%20Mun.%20Nelson%20Tavares%20da%20Silva%2C%201560%20-%20Bom%20Retiro%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012226-202!5e0!3m2!1spt-BR!2sbr!4v1765836239583!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Cerimônia"
            />
          </Box>
        </Card>
      </Grid>

      {/* Card da Festa */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'secondary.light', color: 'primary.main' }}>
                <CardGiftcard sx={{ fontSize: 40 }} />
              </Box>
            </Box>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              Festa
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Logo após a cerimônia, vamos comemorar juntos no Rosa de Sarom Buffet.
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1} mt={2} mb={1}>
              <LocationOn color="primary" />
              <Typography variant="body2" fontWeight="bold">
                Rosa de Sarom Buffet
              </Typography>
            </Box>
            <Typography variant="caption" display="block" gutterBottom>
              R. Padre Eugênio - Jardim Jacinto, Jacareí - SP
            </Typography>
          </CardContent>

          {/* Mapa Festa */}
          <Box sx={{ height: { xs: 300, md: 400 }, width: '100%' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.3981678590176!2d-45.98954192489936!3d-23.301308078979424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb1f38a640d3%3A0xbe45b793d6968acc!2sRosa%20De%20Sarom%20Buffet!5e0!3m2!1spt-BR!2sbr!4v1765836473396!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Festa"
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default InfoSection;