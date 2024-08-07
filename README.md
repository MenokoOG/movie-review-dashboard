
# Movie Review Dashboard

This is a Movie Review Dashboard application built with React, Vite, and Material UI. The app allows users to browse, rate, and review their favorite movies.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Components](#components)
- [Pages](#pages)
- [Context](#context)
- [Routing](#routing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a list of movies
- View detailed information about each movie
- Add reviews for movies
- Rate movies
- Mark movies as favorites

## Project Structure

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

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-review-dashboard.git
   cd movie-review-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

## Components

### `AppBar.js`
Defines the top navigation bar with links to different pages.

### `Drawer.js`
Defines the side drawer navigation with links to different pages.

### `MovieList.js`
Displays a list of movies with the ability to toggle favorites.

### `MovieDetail.js`
Displays detailed information about a specific movie.

### `ReviewForm.js`
Form component for submitting movie reviews.

### `RatingComponent.js`
Component for displaying and changing the movie rating.

## Pages

### `Home.js`
The home page content.

### `Movies.js`
Page to display the list of movies and add reviews.

### `MovieDetail.js`
Page to display the details of a specific movie.

### `Favorites.js`
Page to display the user's favorite movies.

## Context

### `MovieContext.js`
Manages movie data, including favorites and reviews. Provides a context for sharing state across components.

## Routing

### `App.js`
Sets up routing for the application using `react-router-dom`. Defines the routes for Home, Movies, MovieDetail, and Favorites pages.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



