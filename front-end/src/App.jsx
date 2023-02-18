import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Flights,User,Users,Person,CreatePerson,UpdatePerson } from './pages'

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/persons" element={<Person/>} />  
        <Route path="/persons/create" element={<CreatePerson/>} />  
        <Route path="/persons/:id/update" element={<UpdatePerson/>} />  
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </Router>
  )
}

export default App
