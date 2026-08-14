import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../core/Header'
import Home from '../components/Home'

export default function Approuter() {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}