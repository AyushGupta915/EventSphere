import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QrCode } from 'lucide-react';
import { StoreContext } from '../../Context/StoreContext';
import './EventTicketPage.css';

const EventTicketPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookings } = useContext(StoreContext);

  const booking = bookings.find((b) => b.id === id && b.type === 'event');

  if (!booking) return <p>Event ticket not found.</p>;

  return (
    <div className="ticket-page">
      <div className="ticket-card">
        <h1>🎟️ Event Ticket</h1>
        <div className="qr-box">
          <QrCode size={128} />
        </div>
        <h2>{booking.title}</h2>
        <p><strong>Date & Time:</strong> {booking.date} at {booking.time}</p>
        <p><strong>Venue:</strong> {booking.venue}</p>
        <p><strong>Tickets:</strong> {booking.tickets}</p>
        <p><strong>Total Paid:</strong> ₹{(booking.tickets * booking.price).toFixed(2)}</p>

        <button className='btn' onClick={() => navigate('/booking')}>Back to My Bookings</button>
      </div>
    </div>
  );
};

export default EventTicketPage;
