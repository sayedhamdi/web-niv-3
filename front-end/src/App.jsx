import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Flights,User,Users } from './pages'

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </Router>
  )
}

export default App
