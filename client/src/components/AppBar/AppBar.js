import { Outlet } from 'react-router-dom';
import { Div, HLink, Name, H } from './AppBar.styled';
import { Container } from '@mui/material';

const AppBar = () => {
  return (
    <Container maxWidth="xl">
      <header>
        <H>Delivery</H>
        <Div>
          <HLink to="/devoveryApp/home">Home</HLink>
          <HLink to="/devoveryApp/card">Shop Card</HLink>
        </Div>
      </header>
      <Outlet />
    </Container>
  );
};

export default AppBar;
