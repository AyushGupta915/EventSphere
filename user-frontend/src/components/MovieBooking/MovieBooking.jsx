import React, { useState } from 'react';
import './MovieBooking.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { cinemas } from '../../assets/assets';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.movie;

  const [selectedDate, setSelectedDate] = useState(0);
  const dates = ['06 JUN', '07 JUN', '08 JUN', '09 JUN', '10 JUN', '11 JUN', '12 JUN'];

  const handleShowClick = (cinemaName, time, format) => {
    navigate('/seats', {
      state: {
        movie: movie.title,
        cinema: cinemaName,
        time,
        format,
        date: dates[selectedDate],
      },
    });
  };

  if (!movie) {
    return <div className="booking-page"><p>No movie selected.</p></div>;
  }

  return (
    <div className="booking-page">
      <div className="movie-details">
        <div className="info">
          <h2>{movie.title}</h2>
          <p>{movie.genre} | {movie.duration} | {movie.rating}</p>
        </div>
      </div>

      <div className="date-bar">
        {dates.map((date, idx) => (
          <div
            key={idx}
            className={`date ${idx === selectedDate ? 'active' : ''}`}
            onClick={() => setSelectedDate(idx)}
          >
            <p>{date.split(' ')[0]}</p>
            <p>{date.split(' ')[1]}</p>
          </div>
        ))}
      </div>

      <div className="legend">
        <span className="dot available"></span> AVAILABLE
        <span className="dot fast"></span> FAST FILLING
      </div>

      {cinemas.map((cinema, i) => (
        <div key={i} className="cinema">
          <h3>{cinema.name}</h3>
          <div className="meta">
            <span>M-Ticket</span> | <span>Food & Beverage</span>
          </div>
          <div className="showtimes">
            {cinema.shows.map((show, idx) => (
              <div
                key={idx}
                className={`showtime ${show.status}`}
                onClick={() => handleShowClick(cinema.name, show.time, show.format)}
              >
                <p>{show.time}</p>
                <small>{show.format}</small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingPage;
