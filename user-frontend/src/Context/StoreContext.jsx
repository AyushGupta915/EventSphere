import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    const venueKey = newBooking.type === 'movie' ? 'cinema' : 'venue';

    const exists = bookings.some(
      (b) =>
        b.id === newBooking.id &&
        b.title === newBooking.title &&
        b.date === newBooking.date &&
        b.time === newBooking.time &&
        b[venueKey] === newBooking[venueKey] &&
        b.type === newBooking.type
    );

    if (!exists) {
      setBookings((prev) => [...prev, newBooking]);
      return true;
    }
    return false;
  };

  return (
    <StoreContext.Provider value={{ bookings, addBooking }}>
      {children}
    </StoreContext.Provider>
  );
};
