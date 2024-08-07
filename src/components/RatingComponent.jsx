import React from 'react';
import { Rating } from '@mui/material';

const RatingComponent = ({ value, onChange }) => (
  <Rating
    value={value}
    onChange={(e, newValue) => onChange(newValue)}
  />
);

export default RatingComponent;