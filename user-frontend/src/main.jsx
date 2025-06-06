import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { BookingProvider } from './Context/StoreContext.jsx'
import App from './App.jsx'
import { Book, Store } from 'lucide-react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BookingProvider>
      <App />
    </BookingProvider>
  </BrowserRouter>
)
