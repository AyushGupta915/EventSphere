import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Home from './Screens/Home/Home'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Login from './components/LoginPopup/Login'
import Events from './Screens/Events/Events'
import EventDetails from './components/EventDetails/EventDetails'
import BookingConfirmation from './components/BookingConfirmation/BookingConfirmation'
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies'
import Movies from './Screens/Movies/Movies'
import MovieConfirmation from './components/MovieConfirmation/MovieConfirmation'
import SeatSelection from './components/SeatSelection/SeatSelection'
import Footer from './components/Footer/Footer'
import Profile from './Screens/Profile/Profile'
import BookMovie from './components/MovieBooking/MovieBooking'
import Booking from './Screens/Booking/Booking'
import MovieTicketPage from './components/MovieTicketPage/MovieTicketPage'
import EventTicketPage from './components/EventTicketPage/EventTicketPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'  
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/>:<></>}
      <div >
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/booking/:id" element={<BookingConfirmation />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/upcomingmovies' element={<UpcomingMovies />} />
        <Route path="/book" element={<BookMovie />} />
        <Route path="/moviebooking/:id" element={<MovieTicketPage />} />
        <Route path="/eventbooking/:id" element={<EventTicketPage />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path='/movieConfirmation' element={<MovieConfirmation />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </div>
      <Footer />
    </>
  )
}

export default App