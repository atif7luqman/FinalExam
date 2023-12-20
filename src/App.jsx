import Header from './components/Header'
// import Welcome from './components/Welcom'
import Hero from './components/Hero'
import Footer from './components/Footer'
// import { Route, Routes } from 'react-router-dom'
import './App.css'



function App() {
  return (
    <div  className='root'>
      <Header />

      {/* <Routes>        
        <Route path={'/'} element={<Welcome />} />        
      </Routes> */}

      <Hero></Hero>
      {/* <ContactUs />  */}
      <Footer />
    </div>
  )
}

export default App
