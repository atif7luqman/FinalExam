import Header from './components/Header'
import Welcome from './components/Welcom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactUs from './components/ContactUs'



function App() {
  return (
    <div className='SFPRO'>
      <Header />

      <Routes>        
        <Route path={'/'} element={<Welcome />} />        
      </Routes>

      <Hero />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
