import { Typography, Container, Box } from '@mui/material';
import { CameraAlt } from '@mui/icons-material';

const GallerySection = () => {
  const photos = [
    {
      url: "/noivado.jpg",
      alt: "Nosso noivado"
    },
    {
      url: "/perdoes.jpg",
      alt: "Vermelho e Branco"
    },
    {
      url: "/vr.jpg",
      alt: "Nós de branco"
    }
  ];

  return (
    <Container sx={{ py: 6 }} maxWidth="lg">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, gap: 1 }}>
        <CameraAlt color="primary" />
        <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 'bold', fontFamily: '"Playfair Display", serif' }}>
          Nossos Momentos
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          overflowX: { xs: 'auto', md: 'visible' }, 
          scrollSnapType: { xs: 'x mandatory', md: 'none' },
          pb: 2,
          '&::-webkit-scrollbar': { display: 'none' }, 
          scrollbarWidth: 'none',
        }}
      >
        {photos.map((photo, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: '0 0 85%', md: '1 1 0px' },
              scrollSnapAlign: 'center',
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: 3,
              height: { xs: 400, md: 500 }, 
            }}
          >
            <img 
              src={photo.url} 
              alt={photo.alt} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block' 
              }} 
            />
          </Box>
        ))}
      </Box>
      
      <Typography 
        variant="caption" 
        sx={{ 
          display: { xs: 'block', md: 'none' }, 
          textAlign: 'center', 
          color: 'text.secondary',
          mt: 1 
        }}
      >
        Deslize para ver mais →
      </Typography>
    </Container>
  );
};

export default GallerySection;