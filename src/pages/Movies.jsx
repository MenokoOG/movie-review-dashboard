import React, { useContext } from 'react';
import { Container, Button } from '@mui/material';
import MovieList from '../components/MovieList';
import { MovieContext } from '../context/MovieContext';
import ReviewForm from '../components/ReviewForm';

const Movies = () => {
  const { movies, toggleFavorite, addReview } = useContext(MovieContext);

  const handleAddReview = (id, review) => {
    addReview(id, review);
  };

  return (
    <Container>
      <Button variant="contained" color="primary">
        Add Review
      </Button>
      <MovieList movies={movies} onFavoriteToggle={toggleFavorite} />
      <ReviewForm onSubmit={handleAddReview} />
    </Container>
  );
};

export default Movies;