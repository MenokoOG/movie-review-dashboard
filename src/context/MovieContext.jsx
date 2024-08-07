import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', rating: 5, description: 'A mind-bending thriller.', isFavorite: false },
    { id: 2, title: 'The Matrix', rating: 4.5, description: 'A hacker discovers reality is a simulation.', isFavorite: false },
  ]);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie =>
      movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    ));
    const updatedFavorites = movies.filter(movie => movie.id === id && !movie.isFavorite);
    setFavorites([...favorites, ...updatedFavorites]);
  };

  const addReview = (id, review) => {
    setMovies(movies.map(movie =>
      movie.id === id ? { ...movie, reviews: [...(movie.reviews || []), review] } : movie
    ));
  };

  return (
    <MovieContext.Provider value={{ movies, setMovies, favorites, toggleFavorite, addReview }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;