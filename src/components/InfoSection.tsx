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
              R. Bernardino Manoel de Freitas, 165 - Vila Santa Isabel, Caçapava - SP
            </Typography>
          </CardContent>
          
          {/* Mapa Cerimônia */}
          <Box sx={{ height: { xs: 300, md: 400 }, width: '100%' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.561869274138!2d-45.707427424957345!3d-23.11312914527753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc53d76228b405%3A0xb1b20ca7e62db415!2sR.%20Bernardino%20Manoel%20de%20Freitas%2C%20165%20-%20Vila%20Santa%20Isabel%2C%20Ca%C3%A7apava%20-%20SP%2C%2012284-410!5e0!3m2!1spt-BR!2sbr!4v1771632763623!5m2!1spt-BR!2sbr" 
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