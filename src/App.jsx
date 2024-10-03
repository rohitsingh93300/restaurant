import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularDishes from './components/PopularDishes'
import Partners from './components/Partners'
import KeyFeatures from './components/KeyFeatures'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PopularDishes/>
      <Partners/>
      <KeyFeatures/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
