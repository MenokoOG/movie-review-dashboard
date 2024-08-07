import React, { useState } from 'react';
import { Container, TextField, Button, Rating } from '@mui/material';

const ReviewForm = ({ onSubmit }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ review, rating });
    setReview('');
    setRating(0);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Review"
          multiline
          rows={4}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Rating
          value={rating}
          onChange={(e, newValue) => setRating(newValue)}
        />
        <Button type="submit" variant="contained" color="primary">Submit Review</Button>
      </form>
    </Container>
  );
};

export default ReviewForm;