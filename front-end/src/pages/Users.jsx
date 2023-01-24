import { useState, useEffect } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
      fetch('http://localhost:8000/users')
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