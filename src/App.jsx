import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Toolbar } from '@mui/material';
import AppBarComponent from './components/AppBar';
import DrawerComponent from './components/Drawer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';
import MovieProvider from './context/MovieContext';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <MovieProvider>
      <Router>
        <CssBaseline />
        <AppBarComponent onMenuClick={handleDrawerToggle} />
        <DrawerComponent open={drawerOpen} onClose={handleDrawerToggle} />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
