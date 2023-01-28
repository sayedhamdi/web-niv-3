import { useState, useEffect } from 'react'

export default function Flights() {
    const [flights, setFlights] = useState([])
    // cDM cDU
    useEffect(()=>{
      fetch('http://localhost:8000/flights')
      .then(res=>res.json())
      .then((flights)=>{
        setFlights(flights)
        console.log(flights)
      })
    },[])

    return (
        <ul>
        {flights.map(flight=>(
          <li key={flight.id}>
            <span>{flight.id}</span>
          </li>
        ))}
      </ul>
    )
}