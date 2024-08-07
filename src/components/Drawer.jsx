import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

const DrawerComponent = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/" onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/movies" onClick={onClose}>
          <ListItemText primary="Movies" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/favorites" onClick={onClose}>
          <ListItemText primary="Favorites" />
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
);

export default DrawerComponent;
