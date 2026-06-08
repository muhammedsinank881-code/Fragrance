import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-30'>
        <Navbar />
      </div>
      <div className='pt-48 md:pt-40'>
        <HomePage />
        <Footer />
      </div>
    </>
  )
} 

export default App