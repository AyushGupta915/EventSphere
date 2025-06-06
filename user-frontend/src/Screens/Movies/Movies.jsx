import React, { useState } from 'react';
import './Movies.css';
import { sampleMovies } from '../../assets/assets';
import { Link } from 'react-router-dom';

const languageOptions = ['English', 'Hindi', 'Tamil', 'English 7D', 'Malayalam', 'Punjabi', 'Telugu', 'Bengali', 'Assamese'];
const genreOptions = ['Drama', 'Thriller', 'Family', 'Sci-Fi', 'Adventure', 'Action', 'Animation', 'Comedy', 'Romantic', 'Crime', 'Fantasy', 'Horror', 'Mystery Superhero', 'Biography', 'Classic', 'Supernatural', 'Sports', 'Suspense'];

const Movies = () => {
  const [languageFilter, setLanguageFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

  const filteredMovies = sampleMovies.filter((movie) => {
    const languageMatch = languageFilter ? movie.language.includes(languageFilter) : true;
    const genreMatch = genreFilter ? movie.genre.includes(genreFilter) : true;
    return languageMatch && genreMatch;
  });

  const renderFilterButtons = (options, selected, setSelected) => (
    options.map((option) => (
      <button
        key={option}
        className={selected === option ? 'active' : ''}
        onClick={() => setSelected(selected === option ? '' : option)}
      >
        {option}
      </button>
    ))
  );

  return (
    <div className="movies-container">
      <div className="filters">
        <h2>Filters</h2>

        <div className="filter-section">
          <p>Languages</p>
          <div className="filter-buttons">{renderFilterButtons(languageOptions, languageFilter, setLanguageFilter)}</div>
        </div>

        <div className="filter-section">
          <p>Genres</p>
          <div className="filter-buttons">{renderFilterButtons(genreOptions, genreFilter, setGenreFilter)}</div>
        </div>
      </div>

      <div className="movies-main">
        <div className="movies-header">
          <h1>Movies Now Showing</h1>
          <Link to="/upcomingmovies">Explore Upcoming Movies... </Link>
        </div>
        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Link
                to="/book"
                state={{ movie }}
                className="movie-card-link"
                key={movie.id}>
                <div className="movie-card">
                  <img src={movie.image} alt={movie.title} />
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className="movie-meta">
                      <p>{movie.age}</p>
                      {movie.rating && <p className="rating">⭐ {movie.rating}/10</p>}
                      {movie.votes && <p>{movie.votes} Votes</p>}
                      {movie.likes && <p className="likes">👍 {movie.likes} Likes</p>}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-results">No movies match your filter selection.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
