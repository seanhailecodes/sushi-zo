import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Omakase from './components/Omakase'
import AboutUs from './components/AboutUs'
import Locations from './components/Locations'
import Press from './components/Press'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Omakase />
      <AboutUs />
      <Locations />
      <Press />
      <Footer />
    </div>
  )
}

export default App
