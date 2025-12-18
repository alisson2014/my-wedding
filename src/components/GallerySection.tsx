import { useState } from 'react';
import imgNoivado from '/noivado.webp';
import imgPerdoes from '../assets/perdoes.webp';
import imgVR from '../assets/vr.webp';
import { Typography, Container, Box, Skeleton } from '@mui/material';
import { CameraAlt } from '@mui/icons-material';

interface Photo {
  url: string;
  alt: string;
};

const GallerySection = () => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setTimeout(() => {
      setImagesLoaded((prev) => ({
        ...prev,
        [index]: true,
      }));
    }, 250);
  };

  const photos: Photo[] = [
    {
      url: imgNoivado, 
      alt: "Nosso noivado"
    },
    {
      url: imgPerdoes,
      alt: "Vermelho e Branco"
    },
    {
      url: imgVR,
      alt: "Nós de branco"
    }
  ];

  return (
    <Box sx={{ bgcolor: 'secondary.light', py: 8, textAlign: 'center' }}>
      <Container sx={{ py: 3 }} maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, gap: 1 }}>
          <CameraAlt color="primary" />
          <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 'bold' }}>
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
                backgroundColor: 'grey.100' 
              }}
            >
              {!imagesLoaded[index] && (
                <Skeleton 
                  variant="rectangular" 
                  width="100%" 
                  height="100%" 
                  animation="wave" 
                  sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                />
              )}

              <img
                src={photo.url}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                onLoad={() => handleImageLoad(index)} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: imagesLoaded[index] ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
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
    </Box>
  );
};

export default GallerySection;