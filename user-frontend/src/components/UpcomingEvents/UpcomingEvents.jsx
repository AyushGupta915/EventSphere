import React from 'react'
import './UpcomingEvents.css'
import { upcomingevents } from '../../assets/assets';


const UpcomingEvents = () => {
  return (
    <div className='events-section'>
        <h2>Events near you</h2>
        <div className="events-container">
            {upcomingevents.map((event, index) => (
                <div className="event-card" key={index}>
                    <img src={event.image} alt={event.title} className="event-image" />
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-date">{event.date}</p>
                    <p className="event-time">{event.time}</p>
                    <p className="event-location">{event.location}</p>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default UpcomingEvents