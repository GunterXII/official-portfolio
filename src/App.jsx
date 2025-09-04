import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import "./index.css"
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    duration: 5000, // dura 5 secondi invece di default 4000
    style: {
      background: '#1E1E2F', // sfondo in tema spaziale
      color: '#fff',
      fontWeight: 'bold',
      border: '1px solid #7F5AF0',
      borderRadius: '8px',
    },
    success: {
      iconTheme: {
        primary: '#7F5AF0',
        secondary: '#fff',
      },
    },
    error: {
      iconTheme: {
        primary: '#FF6B6B',
        secondary: '#fff',
      },
    },
  }}
/>

      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
