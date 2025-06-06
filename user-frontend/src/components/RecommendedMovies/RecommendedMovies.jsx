import React from 'react'
import './RecommendedMovies.css'
import { recommendedmovies } from '../../assets/assets'



const RecommendedMovies = () => {
  return (
    <div className='recommendedmovies-section'>
        <h2>Recommended Movies</h2>
        <div className="recommendedmovies-container">
            {recommendedmovies.map((movie, index) => (
                <div className="recommendedmovies-card" key={index}>
                    <img src={movie.image} alt={movie.title} className="recommendedmovies-image" />
                    <h3 className="recommendedmovies-title">{movie.title}</h3>
                    <p className="recommendedmovies-genre">{movie.genre}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecommendedMovies