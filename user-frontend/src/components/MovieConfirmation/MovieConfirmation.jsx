import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QrCode } from 'lucide-react';
import { StoreContext } from '../../Context/StoreContext';
import { seatLayout } from '../../assets/assets';

const MovieBookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addBooking } = useContext(StoreContext);

  const { movie, cinema, date, time, format, selectedSeats } = location.state || {};

  const getPriceFromCategory = (category) => {
    const match = category.match(/Rs\.\s*(\d+)/);
    return match ? Number(match[1]) : 0;
  };

  const calculateTotalPrice = (selectedSeats) => {
    let total = 0;
    selectedSeats.forEach(seatId => {
      const rowLetter = seatId[0];
      const categoryObj = seatLayout.find(section =>
        section.rows.some(row => row.row === rowLetter)
      );
      if (categoryObj) {
        total += getPriceFromCategory(categoryObj.category);
      }
    });
    return total;
  };

  const totalPaid = calculateTotalPrice(selectedSeats);

  useEffect(() => {
    if (!movie || !selectedSeats) return;

    const newBooking = {
      id: `${movie}-${cinema}-${date}-${time}`,
      title: movie,
      date,
      time,
      cinema,
      format,
      seats: selectedSeats,
      tickets: selectedSeats.length,
      pricePerTicket: totalPaid / selectedSeats.length,
      type: 'movie',
    };

    const success = addBooking(newBooking);
    if (!success) {
      console.warn('Duplicate movie booking not added:', newBooking);
    }
  }, [movie, cinema, date, time, selectedSeats, totalPaid]);

  if (!movie || !cinema || !selectedSeats) return <p>Booking data missing</p>;

  return (
    <div className="booking-confirmation">
      <div className="confirmation-card">
        <h1>🎬 Movie Booking Confirmed!</h1>
        <p className="qr-instruction">Show this QR code at the cinema</p>

        <div className="qr-box">
          <QrCode size={128} />
        </div>

        <div className="ticket-info">
          <h2>{movie}</h2>
          <p>
            <strong>Date & Time:</strong> {date} at {time}
          </p>
          <p>
            <strong>Cinema:</strong> {cinema}
          </p>
          <p>
            <strong>Seats:</strong> {selectedSeats.join(', ')}
          </p>
          <p>
            <strong>Total Paid:</strong> ₹{totalPaid}
          </p>
        </div>

        <div className="email-info">
          <p>📬 Ticket sent to your email</p>
          <p className="note">Check your inbox for your movie ticket</p>
        </div>

        <div className="actions">
          <button onClick={() => navigate('/movies')}>Back to Movies</button>
          <button onClick={() => navigate('/booking')}>My Bookings</button>
        </div>
      </div>
    </div>
  );
};

export default MovieBookingConfirmation;
