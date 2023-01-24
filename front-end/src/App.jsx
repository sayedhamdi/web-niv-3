import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Users from './pages/Users'
import User from './pages/User'

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Router>
  )
}

export default App
