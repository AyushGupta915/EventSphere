import logo from './logo.png';
import techMeet from './techMeet.jpg';
import concertsLive from './concertsLive.jpeg';
import artExpo from './artExpo.jpg';
import foodFestival from './foodFestival.jpg';
import art from './art.png';
import food from './food.png';
import music from './music.png';
import tech from './tech.png';
import comedy from './comedy.png';
import sports from './sports.png';
import workshops from './workshops.png';
import artt from './artt.jpg';
import mussic from './mussic.jpg';
import techh from './techh.png';
import commedy from './commedy.jpg';
import cross_icon from './cross_icon.png';
import bhoolchukmaaf from './bhoolchukmaaf.jpg';
import housefull5 from './housefull5.jpg';
import finaldestination from './finaldestination.jpg';
import ss2 from './ss2.jpg';
import raid2 from './raid2.jpg';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import linkedin_icon from './linkedin_icon.png';
import war2 from './war2.jpg';
import avatar from './avatar.jpg';
import hari from './hari.jpg';
import f1 from './f1.jpg';

export const assets= {
    logo,
    techMeet,
    concertsLive,
    artExpo,
    foodFestival,
    art,
    food,
    music,
    tech,
    comedy,
    sports,
    workshops,
    artt,
    mussic,
    techh,
    commedy,
    cross_icon,
    bhoolchukmaaf,
    housefull5,
    finaldestination,
    ss2,
    raid2,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    war2,
    avatar,
    hari,
    f1
}


export const categories = [
    {name: 'Music', image: assets.music},
    {name: 'Art', image: assets.art},
    {name: 'Food', image: assets.food},
    {name: 'Tech', image: assets.tech},
    {name: 'Comedy', image: assets.comedy},
    {name: 'Sports', image: assets.sports},
    {name: 'Workshops', image: assets.workshops},
]

export const upcomingevents = [
  {
    title: 'React Conf 2025',
    image: assets.techh,
    date: 'July 15, 2025',
    time: '10:00 AM',
    location: 'Bangalore, IN'
  },
  {
    title: 'Stand-Up Comedy Night',
    image: assets.commedy,
    date: 'June 20, 2025',
    time: '7:00 PM',
    location: 'Mumbai, IN'
  },
  {
    title: 'Art & Craft Expo',
    image: assets.artt,
    date: 'June 25, 2025',
    time: '11:00 AM',
    location: 'Delhi, IN'
  },
  {
    title: 'Live Music Festival',
    image: assets.mussic,
    date: 'July 5, 2025',
    time: '6:00 PM',
    location: 'Pune, IN'
  },
];

export const recommendedmovies = [
    {
        title: "Housefull 5",
        image: assets.housefull5,
        genre: "Comedy/Thriller",
    },
    {
        title: "BHOOL CHUK MAAF",
        image: assets.bhoolchukmaaf,
        genre: "Comedy/Romantic",
    },
    {
        title: "FINAL DESTINATION BLOODLINES",
        image: assets.finaldestination,
        genre: "Horror/Thriller/SuperNatural",
    },
    {
        title: "SAUNKAN SAUNKANAY 2",
        image: assets.ss2,
        genre: "Comedy/Drama/Romantic",
    },
    {
        title: "RAID 2",
        image: assets.raid2,
        genre: "Drama/Thriller",
    },
]

export const events = [
  { id: 1, title: 'Jazz Night', category: 'Music', date: '2025-06-10', Venue: 'City Hall' },
  { id: 2, title: 'Art Expo 2025', category: 'Art', date: '2025-06-12', Venue: 'Gallery 9' },
  { id: 3, title: 'Food Truck Fiesta', category: 'Food', date: '2025-06-15', Venue: 'Downtown Park' },
  { id: 4, title: 'Tech Innovators Meetup', category: 'Tech', date: '2025-06-20', Venue: 'Tech Hub' },
  { id: 5, title: 'Stand-up Comedy Night', category: 'Comedy', date: '2025-06-22', Venue: 'Comedy Club' },
  { id: 6, title: 'City Marathon', category: 'Sports', date: '2025-06-25', Venue: 'City Streets' },
  { id: 7, title: 'Photography Workshop', category: 'Workshops', date: '2025-06-28', Venue: 'Studio A' },
  { id: 8, title: 'Rock Concert', category: 'Music', date: '2025-07-01', Venue: 'Open Arena' },
  { id: 9, title: 'Sculpture Exhibit', category: 'Art', date: '2025-07-03', Venue: 'Museum' },
  { id: 10, title: 'Gourmet Food Fair', category: 'Food', date: '2025-07-05', Venue: 'Convention Center' },
  { id: 11, title: 'AI & Robotics Talk', category: 'Tech', date: '2025-07-07', Venue: 'Tech Hub' },
  { id: 12, title: 'Improv Comedy Show', category: 'Comedy', date: '2025-07-09', Venue: 'Comedy Club' },
  { id: 13, title: 'Soccer Tournament', category: 'Sports', date: '2025-07-11', Venue: 'Sports Complex' },
  { id: 14, title: 'Painting Workshop', category: 'Workshops', date: '2025-07-13', Venue: 'Art Studio' },
  { id: 15, title: 'Classical Music Evening', category: 'Music', date: '2025-07-15', Venue: 'Concert Hall' },
]

export const eventsDetails = [
  {
    id: 1,
    title: 'Jazz Night',
    category: 'Music',
    date: '2025-06-10',
    time: '20:00',
    description: 'Experience a soulful night with the best Jazz musicians in town.',
    tags: ['Jazz', 'Music', 'Live'],
    organizer: 'Jazz Society',
    duration: '3 hours',
    language: 'English',
    price: 500,
    availability: 100,
    image: '/images/jazz-night.jpg',
    rating: 4.6,
    reviews: 210,
  },
  {
    id: 2,
    title: 'Art Expo 2025',
    category: 'Art',
    date: '2025-06-12',
    time: '10:00',
    Venue: 'Gallery 9',
    description: 'A showcase of contemporary art from emerging and established artists.',
    tags: ['Art', 'Exhibition', 'Contemporary'],
    organizer: 'City Arts Council',
    duration: '6 hours',
    language: 'English',
    price: 250,
    availability: 50,
    image: '/images/art-expo.jpg',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    title: 'Food Truck Fiesta',
    category: 'Food',
    date: '2025-06-15',
    time: '12:00',
    Venue: 'Downtown Park',
    description: 'Taste delicious meals from a variety of local food trucks.',
    tags: ['Food', 'Festival', 'Outdoor'],
    organizer: 'Foodies United',
    duration: '8 hours',
    language: 'English',
    price: 300,
    availability: 300,
    image: '/images/food-truck-fiesta.jpg',
    rating: 4.4,
    reviews: 340,
  },
  {
    id: 4,
    title: 'Tech Innovators Meetup',
    category: 'Tech',
    date: '2025-06-20',
    time: '18:00',
    Venue: 'Tech Hub',
    description: 'Network and learn from tech leaders and innovators in the industry.',
    tags: ['Tech', 'Networking', 'Innovation'],
    organizer: 'InnovateX',
    duration: '4 hours',
    language: 'English',
    price: 0,
    availability: 200,
    image: '/images/tech-innovators.jpg',
    rating: 4.9,
    reviews: 150,
  },
  {
    id: 5,
    title: 'Stand-up Comedy Night',
    category: 'Comedy',
    date: '2025-06-22',
    time: '20:30',
    Venue: 'Comedy Club',
    description: 'Laugh out loud with the funniest stand-up comedians.',
    tags: ['Comedy', 'Stand-up', 'Live'],
    organizer: 'Laugh Riot',
    duration: '3 hours',
    language: 'English',
    price: 499,
    availability: 80,
    image: '/images/standup-comedy.jpg',
    rating: 4.5,
    reviews: 180,
  },
  {
    id: 6,
    title: 'City Marathon',
    category: 'Sports',
    date: '2025-06-25',
    time: '06:00',
    Venue: 'City Streets',
    description: 'Run for health and charity in the annual city marathon event.',
    tags: ['Sports', 'Marathon', 'Outdoor'],
    organizer: 'City Sports Authority',
    duration: '5 hours',
    language: 'English',
    price: 0,
    availability: 500,
    image: '/images/city-marathon.jpg',
    rating: 4.3,
    reviews: 220,
  },
  {
    id: 7,
    title: 'Photography Workshop',
    category: 'Workshops',
    date: '2025-06-28',
    time: '09:00',
    Venue: 'Studio A',
    description: 'Learn photography skills with hands-on sessions from professionals.',
    tags: ['Photography', 'Workshop', 'Creative'],
    organizer: 'Creative Lens',
    duration: '7 hours',
    language: 'English',
    price: 150,
    availability: 25,
    image: '/images/photography-workshop.jpg',
    rating: 4.8,
    reviews: 75,
  },
  {
    id: 8,
    title: 'Rock Concert',
    category: 'Music',
    date: '2025-07-01',
    time: '19:00',
    Venue: 'Open Arena',
    description: 'Get ready to rock with the best local and international bands.',
    tags: ['Rock', 'Music', 'Live'],
    organizer: 'RockNation',
    duration: '5 hours',
    language: 'English',
    price: 800,
    availability: 250,
    image: '/images/rock-concert.jpg',
    rating: 4.7,
    reviews: 300,
  },
  {
    id: 9,
    title: 'Sculpture Exhibit',
    category: 'Art',
    date: '2025-07-03',
    time: '11:00',
    Venue: 'Museum',
    description: 'Explore stunning sculptures from around the world.',
    tags: ['Sculpture', 'Art', 'Exhibition'],
    organizer: 'Museum Society',
    duration: '6 hours',
    language: 'English',
    price: 200,
    availability: 70,
    image: '/images/sculpture-exhibit.jpg',
    rating: 4.6,
    reviews: 65,
  },
  {
    id: 10,
    title: 'Gourmet Food Fair',
    category: 'Food',
    date: '2025-07-05',
    time: '13:00',
    Venue: 'Convention Center',
    description: 'A gathering of gourmet food vendors offering the finest dishes.',
    tags: ['Food', 'Gourmet', 'Fair'],
    organizer: 'Food Lovers Club',
    duration: '6 hours',
    language: 'English',
    price: 150,
    availability: 180,
    image: '/images/gourmet-food-fair.jpg',
    rating: 4.5,
    reviews: 110,
  },
  {
    id: 11,
    title: 'AI & Robotics Talk',
    category: 'Tech',
    date: '2025-07-07',
    time: '10:00',
    Venue: 'Tech Hub',
    description: 'Discuss the latest trends in AI and robotics with leading experts.',
    tags: ['AI', 'Robotics', 'Tech'],
    organizer: 'FutureTech',
    duration: '4 hours',
    language: 'English',
    price: 400,
    availability: 120,
    image: '/images/ai-robotics-talk.jpg',
    rating: 4.9,
    reviews: 130,
  },
  {
    id: 12,
    title: 'Improv Comedy Show',
    category: 'Comedy',
    date: '2025-07-09',
    time: '19:30',
    Venue: 'Comedy Club',
    description: 'Enjoy a night of spontaneous comedy and improvisation.',
    tags: ['Comedy', 'Improv', 'Live'],
    organizer: 'Improv Nights',
    duration: '2.5 hours',
    language: 'English',
    price: 725,
    availability: 90,
    image: '/images/improv-comedy-show.jpg',
    rating: 4.4,
    reviews: 85,
  },
  {
    id: 13,
    title: 'Soccer Tournament',
    category: 'Sports',
    date: '2025-07-11',
    time: '14:00',
    Venue: 'Sports Complex',
    description: 'Watch exciting soccer matches featuring local teams.',
    tags: ['Soccer', 'Sports', 'Tournament'],
    organizer: 'City Sports League',
    duration: '6 hours',
    language: 'English',
    price: 300,
    availability: 300,
    image: '/images/soccer-tournament.jpg',
    rating: 4.2,
    reviews: 200,
  },
  {
    id: 14,
    title: 'Painting Workshop',
    category: 'Workshops',
    date: '2025-07-13',
    time: '09:00',
    Venue: 'Art Studio',
    description: 'Improve your painting skills with expert guidance.',
    tags: ['Painting', 'Workshop', 'Creative'],
    organizer: 'Artists Collective',
    duration: '6 hours',
    language: 'English',
    price: 120,
    availability: 30,
    image: '/images/painting-workshop.jpg',
    rating: 4.7,
    reviews: 70,
  },
  {
    id: 15,
    title: 'Classical Music Evening',
    category: 'Music',
    date: '2025-07-15',
    time: '19:00',
    Venue: 'Concert Hall',
    description: 'An elegant evening featuring classical music performances.',
    tags: ['Classical', 'Music', 'Live'],
    organizer: 'City Philharmonic',
    duration: '3 hours',
    language: 'English',
    price: 600,
    availability: 120,
    image: '/images/classical-music-evening.jpg',
    rating: 4.8,
    reviews: 160,
  },
];

export const sampleMovies = [
  {
    id: 1,
    title: 'Saunkan Saunkanay 2',
    language: 'Punjabi',
    genre: "Comedy/Romantic/Drama",
    rating: '8.0',
    votes: '2.6K',
    age: 'UA13+',
    image: assets.ss2,
  },
  {
    id: 2,
    title: 'Housefull 5',
    language: 'Hindi',
    genre: "Comedy/Thriller",
    likes: '165.5K',
    age: 'UA16+',
    image: assets.housefull5,
  },
  {
    id: 3,
    title: 'Raid 2',
    language: 'Hindi',
    genre: "Drama/Thriller",
    rating: '8.3',
    votes: '73K',
    age: 'UA13+',
    image: assets.raid2,
  },
  {
    id: 4,
    title: 'Final Destination: Bloodlines',
    language: 'English, Hindi, Tamil, Telugu',
    genre: "Horror/Thriller/Supernatural",
    rating: '8.5',
    votes: '41.2K',
    age: 'A',
    image: assets.finaldestination,
  },
];


export const upcomingMovies = [
  {
    id: 1,
    title: 'Avatar: Fire and Ash',
    language: 'English, Hindi',
    genre: 'Action/Fantasy/Adventure',
    rating: '9.1',
    votes: '115K',
    age: 'UA13+',
    image: assets.avatar,
  },
  {
    id: 2,
    title: 'F1',
    language: 'English',
    genre: 'Sports/Drama',
    rating: 'TBD',
    votes: '',
    age: 'UA13+',
    image: assets.f1,
  },
  {
    id: 3,
    title: 'War 2',
    language: 'Hindi',
    genre: 'Action/Thriller',
    likes: '211.9K',
    age: 'UA16+',
    image: assets.war2,
  },
  {
    id: 4,
    title: 'Hari Hara Veera Mallu',
    language: 'Telugu, Hindi, Tamil, Malayalam',
    genre: 'Action/Historical/Adventure',
    rating: '8.7',
    votes: '89.7K',
    age: 'UA13+',
    image: assets.hari,
  }
];

export const cinemas = [
  {
    name: 'Cinepolis: Pacific NSP2, Delhi',
    shows: [
      { time: '02:35 PM', format: '2K LASER DOLBY 7.1', status: 'fast' },
      { time: '03:05 PM', format: '2K LASER DOLBY 7.1', status: 'fast' },
      { time: '04:05 PM', format: 'DOLBY ATMOS', status: 'fast' },
      { time: '05:25 PM', format: 'DOLBY ATMOS', status: 'available' },
      { time: '06:10 PM', format: '2K LASER DOLBY 7.1', status: 'fast' },
      { time: '06:40 PM', format: '2K LASER DOLBY 7.1', status: 'fast' },
      { time: '07:45 PM', format: 'DOLBY ATMOS', status: 'fast' },
      { time: '09:00 PM', format: '', status: 'fast' },
      { time: '09:45 PM', format: '2K LASER DOLBY 7.1', status: 'fast' },
      { time: '10:15 PM', format: '2K LASER DOLBY 7.1', status: 'fast' },
      { time: '11:20 PM', format: 'DOLBY ATMOS', status: 'available' }
    ]
  },
  {
    name: 'PVR: Vegas Dwarka',
    shows: [
      { time: '01:20 PM', format: '', status: 'fast' },
      { time: '02:20 PM', format: '', status: 'available' },
      { time: '03:10 PM', format: '', status: 'available' },
      { time: '04:30 PM', format: 'KOTAK LUXE', status: 'available' },
      { time: '04:50 PM', format: '', status: 'available' },
      { time: '05:50 PM', format: '', status: 'available' },
      { time: '06:40 PM', format: '', status: 'fast' },
      { time: '08:00 PM', format: 'KOTAK LUXE', status: 'fast' },
      { time: '08:20 PM', format: '', status: 'available' },
      { time: '09:20 PM', format: '', status: 'available' },
      { time: '10:10 PM', format: '', status: 'available' },
      { time: '11:30 PM', format: 'KOTAK LUXE', status: 'available' },
      { time: '11:50 PM', format: '', status: 'available' }
    ]
  },
  {
    name: 'INOX: Nehru Place, Delhi',
    shows: [
      { time: '11:00 AM', format: '', status: 'available' },
      { time: '01:45 PM', format: '', status: 'fast' },
      { time: '04:15 PM', format: '', status: 'available' },
      { time: '06:45 PM', format: 'DOLBY ATMOS', status: 'fast' },
      { time: '09:30 PM', format: '', status: 'available' },
      { time: '11:50 PM', format: '', status: 'available' }
    ]
  },
  {
    name: 'PVR: Select Citywalk, Saket',
    shows: [
      { time: '12:00 PM', format: '', status: 'fast' },
      { time: '03:00 PM', format: 'DOLBY ATMOS', status: 'fast' },
      { time: '06:00 PM', format: '', status: 'available' },
      { time: '09:00 PM', format: 'DOLBY ATMOS', status: 'available' },
      { time: '11:45 PM', format: '', status: 'fast' }
    ]
  },
  {
    name: 'Carnival Cinemas: Janakpuri',
    shows: [
      { time: '10:30 AM', format: '', status: 'available' },
      { time: '01:00 PM', format: '', status: 'available' },
      { time: '03:30 PM', format: '2K LASER', status: 'fast' },
      { time: '06:15 PM', format: '', status: 'available' },
      { time: '08:45 PM', format: '', status: 'fast' },
      { time: '11:15 PM', format: '', status: 'available' }
    ]
  },
  {
    name: 'PVR ICON: Ambience Mall Gurgaon',
    shows: [
      { time: '01:10 PM', format: 'KOTAK LUXE', status: 'fast' },
      { time: '03:40 PM', format: '', status: 'available' },
      { time: '06:20 PM', format: '', status: 'available' },
      { time: '08:50 PM', format: 'KOTAK LUXE', status: 'fast' },
      { time: '11:30 PM', format: '', status: 'available' }
    ]
  },
  {
    name: 'Movietime Cinemas: Rohini',
    shows: [
      { time: '10:45 AM', format: '', status: 'available' },
      { time: '01:30 PM', format: '', status: 'fast' },
      { time: '04:15 PM', format: '', status: 'available' },
      { time: '07:00 PM', format: 'DOLBY ATMOS', status: 'available' },
      { time: '09:50 PM', format: '', status: 'fast' }
    ]
  }
];

export const seatLayout = [
  {
    category: "Rs. 790 RECLINER",
    rows: [
      { row: "Q", seats: [1, 2, 3, 4, 5, null, 8, 9, 10] }
    ]
  },
  {
    category: "Rs. 360 PRIME",
    rows: [
      { row: "P", seats: [1, 2, 3, 4, 5, 6, 7, 8, null, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
      { row: "N", seats: [1, 2, 3, 4, 5, 6, 7, 8, null, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
      { row: "M", seats: [1, 2, 3, 4, 5, 6, 7, 8, null, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
      { row: "L", seats: [1, 2, 3, 4, 5, 6, 7, 8, null, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
      { row: "K", seats: [1, 2, 3, 4, 5, 6, 7, 8, null, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
      { row: "J", seats: [1, 2, 3, 4, 5, 6, 7, 8, null, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] }
    ]
  },
  {
    category: "Rs. 320 CLASSIC",
    rows: [
      { row: "H", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      { row: "G", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      { row: "F", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      { row: "E", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      { row: "D", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      { row: "C", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      { row: "B", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      { row: "A", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] }
    ]
  }
];
