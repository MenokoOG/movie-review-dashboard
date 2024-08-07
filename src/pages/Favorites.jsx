import React, { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import { MovieContext } from '../context/MovieContext';

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Favorite Movies
      </Typography>
      {/* Add code to display favorite movies */}
    </Container>
  );
};

export default Favorites;