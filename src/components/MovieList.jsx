import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const MovieList = ({ movies, onFavoriteToggle }) => (
  <List>
    {movies.map(movie => (
      <ListItem key={movie.id} button component={Link} to={`/movies/${movie.id}`}>
        <ListItemText primary={movie.title} secondary={`Rating: ${movie.rating}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => onFavoriteToggle(movie.id)}>
            {movie.isFavorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default MovieList;