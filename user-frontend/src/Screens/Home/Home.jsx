import React from 'react'
import ForYou from '../../components/HeroSection/HeroSection'
import Events from '../../components/UpcomingEvents/UpcomingEvents'
import Movies from '../../components/RecommendedMovies/RecommendedMovies'

const Home = () => {
  return (
    <div>
        <ForYou />
        <Events />
        <Movies />
    </div>
  )
}

export default Home