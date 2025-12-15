import { Typography, Button, AppBar, Toolbar } from '@mui/material';

const Header = () => {
  const onConfirmPresence = () => {
    const rsvp = document.getElementById('rsvp');
    return rsvp?.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'white' }}>
      <Toolbar>
          <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontFamily: '"Playfair Display", serif', fontWeight: 'bold' }}>
              T & A
          </Typography>
          <Button color="inherit" onClick={onConfirmPresence} title="Confirme sua presença preenchendo o formulário">
              Confirme sua Presença
          </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;