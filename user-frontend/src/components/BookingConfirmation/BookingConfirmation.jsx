import { useEffect, useContext } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { eventsDetails } from '../../assets/assets';
import { QrCode } from 'lucide-react';
import { StoreContext } from '../../Context/StoreContext';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { addBooking } = useContext(StoreContext);

  const queryParams = new URLSearchParams(location.search);
  const tickets = parseInt(queryParams.get('tickets')) || 1;

  const event = eventsDetails.find((e) => e.id === parseInt(id));

  const handleSaveBooking = () => {
    if (!event) return;
    const newBooking = {
      id: event.id.toString(),
      title: event.title,
      date: event.date,
      time: event.time,
      venue: event.Venue,
      location: event.location || 'N/A',
      tickets: tickets,
      price: event.price,
      type: 'event',
    };
    const success = addBooking(newBooking);
    if (!success) {
      console.warn('Duplicate booking not added:', newBooking);
    }
  };

  useEffect(() => {
    handleSaveBooking();
  }, [id, tickets]);

  if (!event) return <p>Event not found</p>;

  return (
    <div className="booking-confirmation">
      <div className="confirmation-card">
        <h1>🎟️ Booking Confirmed!</h1>
        <p className="qr-instruction">Show this QR code at the venue</p>

        <div className="qr-box">
          <QrCode size={128} />
        </div>

        <div className="ticket-info">
          <h2>{event.title}</h2>
          <p>
            <strong>Date & Time:</strong> {event.date} at {event.time}
          </p>
          <p>
            <strong>Venue:</strong> {event.Venue}
          </p>
          <p>
            <strong>Tickets:</strong> {tickets}
          </p>
          <p>
            <strong>Total Paid:</strong> ₹{tickets * event.price}
          </p>
        </div>

        <div className="email-info">
          <p>📬 Ticket sent to your email</p>
          <p className="note">Check your inbox for the detailed ticket with event information</p>
        </div>

        <div className="actions">
          <button onClick={() => navigate('/events')}>Back to Events</button>
          <button onClick={() => navigate('/booking')}>My Bookings</button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;