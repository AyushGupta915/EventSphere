import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventsDetails } from '../../assets/assets';
import './EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventsDetails.find(ev => ev.id === parseInt(id));
  const [tickets, setTickets] = useState(1);

  if (!event) {
    return <p>Event not found.</p>;
  }

  const handleBookNow = () => {
    navigate(`/booking/${event.id}?tickets=${tickets}`);
  };

  return (
    <div className="event-details-container">
      <h1>{event.title}</h1>
      <p>{new Date(event.date).toLocaleDateString()} at {event.time}</p>
      <p>{event.location}</p>

      <section className="description">
        <h2>About This Event</h2>
        <p>{event.description}</p>
        <div className="tags">
          {event.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </section>

      <section className="event-info">
        <h2>Event Details</h2>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Organizer:</strong> {event.organizer}</p>
        <p><strong>Duration:</strong> {event.duration}</p>
        <p><strong>Language:</strong> {event.language}</p>
      </section>

      <section className="booking-info">
        <p><strong>₹{event.price}</strong> per ticket</p>
        <p><strong>Availability:</strong> {event.availability} left</p>

        <label>
          Number of Tickets:
          <select value={tickets} onChange={e => setTickets(parseInt(e.target.value))}>
            {[...Array(Math.min(event.availability, 10)).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1} ticket{ i > 0 ? 's' : '' }</option>
            ))}
          </select>
        </label>

        <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>
        <p className="secured">Secured by Stripe</p>
      </section>

      <section className="reviews">
        <p>⭐ {event.rating} Based on {event.reviews} reviews</p>
      </section>
    </div>
  );
};

export default EventDetails;
