import { Box } from '@mui/material';
import { Header, HeroSection, InfoSection, GiftSection, RSVPSection, Footer, GallerySection } from './components';

const LandingPage = () => (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <HeroSection />
        <GallerySection />
        <InfoSection />
        <GiftSection />
        <RSVPSection />
        <Footer />
    </Box>
);

export default LandingPage;