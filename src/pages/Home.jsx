import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Welcome to the Movie Review Dashboard
    </Typography>
    <Typography variant="body1">
      Browse, rate, and review your favorite movies.
    </Typography>
  </Container>
);

export default Home;