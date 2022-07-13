import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';
import { Typography } from './Typography';
import { NavLink } from 'react-router-dom';

function MainHeader() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap>
            LOGO
          </Typography>
          <NavLink
            to="/leagues"
            className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}
          >
            Лиги
          </NavLink>
          <NavLink
            to="/teams"
            className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}
          >
            Команды
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainHeader;
