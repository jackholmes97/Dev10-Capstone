import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Community from './components/Community'
import LoginNav from './components/LoginNav'
import Defaults from './components/Defaults'

import './App.css'
import { Routes, Route, } from 'react-router-dom'

function App() {


  return (
    <>
      <LoginNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/templates" element={<Defaults />} />
      </Routes>
    </>
  )
}

export default App;
