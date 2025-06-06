import React, { useState, useMemo } from 'react';
import './SeatSelection.css';
import { seatLayout } from '../../assets/assets';
import { useLocation, Link } from 'react-router-dom';

const SeatSelection = () => {
  const location = useLocation();
  const { movie, cinema, date, time } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  const getPriceFromCategory = (category) => {
    const match = category.match(/Rs\.\s*(\d+)/);
    return match ? Number(match[1]) : 0;
  };

  const calculateTotalPrice = (selectedSeats, seatLayout) => {
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

  const totalPrice = useMemo(() => calculateTotalPrice(selectedSeats, seatLayout), [selectedSeats]);

  const pricePerTicket = useMemo(() => {
    if (selectedSeats.length === 0) return 0;
    const firstRow = selectedSeats[0][0];
    const categoryObj = seatLayout.find(section =>
      section.rows.some(row => row.row === firstRow)
    );
    return categoryObj ? getPriceFromCategory(categoryObj.category) : 0;
  }, [selectedSeats]);

  const toggleSeat = (seatId) => {
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div className="seat-selection">
      <div className="selection-header">
        <h2>{movie}</h2>
        <p>{cinema}</p>
        <p>{date} | {time}</p>
      </div>

      {seatLayout.map((section, i) => (
        <div key={i} className="seat-section">
          <h3>{section.category}</h3>
          {section.rows.map((row, rowIdx) => (
            <div key={rowIdx} className="seat-row">
              <span className="row-label">{row.row}</span>
              {row.seats.map((seatNum, colIdx) => {
                if (seatNum === null) return <div key={colIdx} className="seat gap"></div>;

                const seatId = `${row.row}${seatNum}`;
                const isSelected = selectedSeats.includes(seatId);

                return (
                  <div
                    key={colIdx}
                    className={`seat ${isSelected ? 'selected' : 'available'}`}
                    onClick={() => toggleSeat(seatId)}
                  >
                    {seatNum}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}

      <div className="seat-legend">
        <span className="dot available"></span> Available
        <span className="dot selected"></span> Selected
        <span className="dot booked"></span> Booked
      </div>

      <div className="selected-info">
        <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
        <Link
          to="/movieconfirmation"
          state={{ movie, cinema, date, time, selectedSeats, pricePerTicket, totalPrice }}
          className={selectedSeats.length === 0 ? 'disabled-link' : ''}
          style={{ pointerEvents: selectedSeats.length === 0 ? 'none' : 'auto' }}
        >
          <button disabled={selectedSeats.length === 0}>Continue to Payment</button>
        </Link>
      </div>
    </div>
  );
};

export default SeatSelection;
