import React, { useContext } from 'react';
import './Profile.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { bookings } = useContext(StoreContext);

  const user = {
    name: 'Ayush Gupta',
    email: 'ayush@example.com',
    profileImage: 'https://i.pravatar.cc/150?img=12',
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.profileImage} alt="Profile" className="profile-img" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button className="edit-btn">Edit Profile</button>
      </div>

      <div className="profile-section">
        <h3>Recent Bookings</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul className="booking-list">
            {bookings.slice(0, 3).map((b, i) => (
              <li key={i}>
                <strong>{b.title}</strong> - {b.date} at {b.time}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => navigate('/booking')} className="view-all-btn">
          View All Bookings
        </button>
      </div>

      <div className="profile-section">
        <h3>Account Settings</h3>
        <button className="settings-btn">Change Password</button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
