import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, events } from '../../assets/assets';
import './EventCategories.css';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const filteredEvents = selectedCategory
    ? events.filter(event => event.category.toLowerCase() === selectedCategory.toLowerCase())
    : events;

  return (
    <div className="events">
      <div className="event-categories">
        <h2>Explore by Categories</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-card ${selectedCategory === category.name ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
              style={{ cursor: 'pointer' }}
            >
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </div>
          ))}
          {selectedCategory && (
            <button onClick={() => setSelectedCategory(null)} className="clear-filter-btn">
              Show All
            </button>
          )}
        </div>
      </div>

      <div className="event-list">
        <h2>Events {selectedCategory ? `in ${selectedCategory}` : 'near you'}</h2>
        <div className="events-container">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div
                key={event.id}
                className="event-card"
                onClick={() => navigate(`/events/${event.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{event.title}</h3>
                <p><strong>Category:</strong> {event.category}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            ))
          ) : (
            <p>No events found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
