import { useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';
import { MapPin, Search, User } from 'lucide-react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ showLogin, setShowLogin }) => {
  const [city, setCity] = useState('Loading...');
  const [state, setState] = useState('');
  const [menu, setMenu] = useState("forYou");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          setCity(data.address.city || data.address.town || "Your City");
          setState(data.address.state || "");
        } catch (error) {
          setCity("Unknown");
          setState("");
        }
      });
    } else {
      setCity("Unavailable");
      setState("");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

    const handleLogin = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={assets.logo} alt="logo" />
          </div>
          <div className="location">
            <MapPin size={16} color="#6C2BD9" />
            <div className="location-text">
              <div className="city">{city}</div>
              <div className="state">{state}</div>
            </div>
          </div>
        </div>

        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Movies
              </NavLink>
            </li>
          </ul>
        </div>

      <div className="navbar-right">
        <div className="search-box">
            <Search size={16} color="#6C2BD9" />
            <input type="text" placeholder="Search for events and more" />
          </div>
        {isLoggedIn ? (
          <div className="profile-icon-wrapper" ref={dropdownRef}>
            <div className="profile-icon" onClick={() => setShowDropdown(prev => !prev)}>
              <User size={18} />
            </div>
            {showDropdown && (
              <div className="profile-dropdown">
                <li>
                  <NavLink
                    to="/profile"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/booking"
                    onClick={() => setShowDropdown(false)}
                  >
                    Booking
                  </NavLink>
                </li>
                <button
                  onClick={() => {
                    handleLogout();
                    setShowDropdown(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}

          </div>
        ) : (
          <button onClick={handleLogin} className="signin-btn">Sign In</button>
        )}
      </div>
    </div>
      </div>
  );
};

export default Navbar;
