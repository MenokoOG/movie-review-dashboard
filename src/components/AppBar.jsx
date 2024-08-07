import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const AppBarComponent = ({ onMenuClick }) => (
  <AppBar position="fixed">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Movie Review Dashboard
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/movies">Movies</Button>
      <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;
