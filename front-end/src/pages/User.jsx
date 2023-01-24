import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    let { id } = useParams()
    const [user, setUser] = useState([])
    useEffect(()=>{
      fetch(`http://localhost:8000/users/${id}`)
      .then(res=>res.json())
      .then(setUsers)
    })
    return (
        <ul>
        {users.map(user=>(
          <li key={user.id}>
            <img src={reactLogo} alt="react logo" />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    )
}