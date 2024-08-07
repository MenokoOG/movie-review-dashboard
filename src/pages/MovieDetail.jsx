import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { MovieContext } from '../context/MovieContext';

const MovieDetail = () => {
  const { id } = useParams();
  const { movies } = useContext(MovieContext);
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <Typography variant="h5">Movie not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{movie.title}</Typography>
      <Typography variant="body1" gutterBottom>{movie.description}</Typography>
      <Typography variant="h6">Rating: {movie.rating}</Typography>
      <Button variant="contained" color="primary">Add Review</Button>
    </Container>
  );
};

export default MovieDetail;