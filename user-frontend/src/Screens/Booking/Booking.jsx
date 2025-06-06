import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './Booking.css';
import { useNavigate } from 'react-router-dom';

const MyBookings = () => {
  const navigate = useNavigate();
  const { bookings } = useContext(StoreContext);

  const handleViewTicket = (booking) => {
    if (booking.type === 'movie') {
      navigate(`/moviebooking/${booking.id}`);
    } else if (booking.type === 'event') {
      navigate(`/eventbooking/${booking.id}`);
    }
  };

  return (
    <div className="my-bookings">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings made yet.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => {
            const isMovie = booking.type === 'movie';
            return (
              <div
                className="booking-card"
                key={booking.id || `${booking.title}-${booking.date}-${booking.time}-${booking.venue || booking.cinema || 'unknown'}`}
              >
                <h2>{booking.title || 'Untitled Booking'}</h2>
                <p>
                  <strong>Date & Time:</strong> {booking.date || 'N/A'} at {booking.time || 'N/A'}
                </p>
                <p>
                  <strong>{isMovie ? 'Cinema' : 'Venue'}:</strong> {booking.cinema || booking.venue || 'N/A'}
                </p>
                <p>
                  <strong>Tickets:</strong> {booking.tickets || 0}
                </p>
                <p>
                  <strong>Total Paid:</strong> ₹
                  {(booking.tickets && (booking.pricePerTicket ?? booking.price))
                    ? (booking.tickets * (booking.pricePerTicket ?? booking.price)).toFixed(2)
                    : '0.00'}
                </p>
                <button
                  className="view-ticket-btn"
                  onClick={() => handleViewTicket(booking)}
                >
                  View Ticket
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
