import Header from './components/Header.jsx'
// import Welcome from './components/Welcom'
import Footer from './components/Footer.jsx'
// import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero.jsx'
import Future from './components/Future.jsx'
import Section2 from './components/Section2.jsx'
// import AppBar from './components/AppBar.jsx'



function App() {
  return (
    <div  className='root'>
      <Header />

      {/* <Routes>        
        <Route path={'/'} element={<Welcome />} />        
      </Routes> */}
      <Hero />
      {/* <AppBar /> */}
      <Section2 />
      <Future />
      {/* <ContactUs />  */}
      <Footer />
    </div>
  )
}

export default App
