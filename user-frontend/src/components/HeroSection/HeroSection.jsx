import React from 'react'
import Slider from 'react-slick'
import './HeroSection.css'
import {assets} from '../../assets/assets'

const sampleSlides = [
    {
        title: 'Tech Meetup 2025',
        description: 'Join us for the biggest tech meetup of the year!',
        image: assets.techMeet,
    },
    {
        title: 'Live Concert Night',
        description: 'Feel the vibe with electrifying live performances.',
        image: assets.concertsLive,
    },
    {
        title: 'Art Expo',
        description: 'Explore creativity and innovation from local artists.',
        image: assets.artExpo,
    },
    {
        title: 'Food Festival',
        description: 'Taste the world at our annual food festival.',
        image: assets.foodFestival,
    }
];

const HeroSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {sampleSlides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={slide.title} />
            <div className="hero-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button>Explore Events</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;