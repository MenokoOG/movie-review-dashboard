# **Movie Review Dashboard with Material UI**

## **Project Setup and Structure**

### 1. **Initialize the Project**

Start by creating a new React project using Vite.

```bash
# Create a new Vite project
npm create vite@latest movie-review-dashboard --template react

# Change directory to the project folder
cd movie-review-dashboard

# Install dependencies
npm install
```

### 2. **Install Dependencies**

Install `react-router-dom` and Material UI packages.

```bash
# Install react-router-dom for routing
npm install react-router-dom

# Install Material UI core and icons
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### 3. **Project Structure**

Organize your project files as follows:

```
movie-review-dashboard/
├── src/
│   ├── components/
│   │   ├── AppBar.js
│   │   ├── Drawer.js
│   │   ├── MovieList.js
│   │   ├── MovieDetail.js
│   │   ├── ReviewForm.js
│   │   └── RatingComponent.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Movies.js
│   │   ├── MovieDetail.js
│   │   └── Favorites.js
│   ├── App.js
│   ├── index.js
│   └── context/
│       └── MovieContext.js
└── package.json
```

### 4. **Create Layout Components**

#### **AppBar.js**

```jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBarComponent = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Movie Review Dashboard
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/movies">Movies</Button>
      <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;
```

#### **Drawer.js**

```jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const DrawerComponent = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <List>
      <ListItem button component={Link} to="/" onClick={onClose}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/movies" onClick={onClose}>
        <ListItemText primary="Movies" />
      </ListItem>
      <ListItem button component={Link} to="/favorites" onClick={onClose}>
        <ListItemText primary="Favorites" />
      </ListItem>
    </List>
  </Drawer>
);

export default DrawerComponent;
```

### 5. **Create Pages**

#### **Home.js**

```jsx
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
```

#### **Movies.js**

```jsx
import React, { useContext } from 'react';
import { Container, Button } from '@mui/material';
import MovieList from '../components/MovieList';
import { MovieContext } from '../context/MovieContext';

const Movies = () => {
  const { movies } = useContext(MovieContext);

  return (
    <Container>
      <Button variant="contained" color="primary">
        Add Review
      </Button>
      <MovieList movies={movies} />
    </Container>
  );
};

export default Movies;
```

#### **Favorites.js**

```jsx
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
```

### 6. **Create Context**

#### **MovieContext.js**

```jsx
import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    // Sample movies
    { id: 1, title: 'Inception', rating: 5, description: 'A mind-bending thriller.' },
    { id: 2, title: 'The Matrix', rating: 4.5, description: 'A hacker discovers reality is a simulation.' },
  ]);

  const [favorites, setFavorites] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, favorites, setFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
```

### 7. **Setup Routing**

#### **App.js**

```jsx
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
```

### 8. **Index File**

#### **index.js**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 9. **Create Additional Components**

You can now create the remaining components such as `MovieList.js`, `MovieDetail.js`, `ReviewForm.js`, and `RatingComponent.js` as per the project requirements. 

Each of these components will use Material UI components and follow a similar pattern to the examples provided above.

This structure should give you a solid foundation for your movie review dashboard using Material UI and `react-router-dom`. Happy coding!