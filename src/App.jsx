import React from 'react'
import { Route, Routes } from 'react-router'
import MenuDetail from './components/MenuDetail'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/meal/:mealType" element={<MenuDetail />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
