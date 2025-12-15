import { Container, Box, Typography, Button, Card } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

const RSVPSection = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScgwPXpmu8kKWCenEGC1UTSxApf74PuIEMEW4HbUxfe308_xg/viewform?embedded=true"; 
  const googleFormLinkDireto = "https://docs.google.com/forms/d/e/1FAIpQLScgwPXpmu8kKWCenEGC1UTSxApf74PuIEMEW4HbUxfe308_xg/viewform?usp=sharing&ouid=112818791547597598328";

  return (
    <Container sx={{ py: 10 }} maxWidth="md" id="rsvp">
      <Typography variant="h3" align="center" color="primary" gutterBottom sx={{ mb: 1, fontFamily: '"Playfair Display", serif' }}>
        Confirmação de Presença
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
        Por favor, preencha o formulário abaixo para confirmar sua presença.
      </Typography>

      <Card sx={{ overflow: 'hidden', boxShadow: 3 }}>
        <Box sx={{ 
          width: '100%', 
          height: { xs: '600px', md: '800px' }, 
          bgcolor: '#f0f0f0',
          position: 'relative'
        }}>
           <iframe 
             src={googleFormUrl} 
             width="100%" 
             height="100%" 
             frameBorder="0" 
             marginHeight={0} 
             marginWidth={0}
             title="Formulário de Presença"
           >
             Carregando…
           </iframe>
        </Box>
        
        <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Não conseguiu visualizar o formulário acima?
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            href={googleFormLinkDireto}
            target="_blank"
            endIcon={<OpenInNew />}
            sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: '#f5f5f5' } }}
          >
            Abrir Formulário em Nova Janela
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default RSVPSection;