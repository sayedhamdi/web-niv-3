/*import PropTypes from 'prop-types';*/

import { useNavigate } from "react-router-dom"



export default function PersonsList({persons,setLoading}){
    let navigate = useNavigate()
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                
                {
                persons.length ===0 ? <tr><td>No data to display </td></tr> 
                : 
                persons.map(person=>(
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.first}</td>
                        <td>{person.last}</td>
                        <td><button style={{background:"blue",color:"white"}} onClick={()=>{navigate(`/persons/${person.id}/update`)}}>update</button></td>
                        <td><button style={{background:"red",color:"white"}} onClick={async ()=>{ await fetch(`http://localhost:8000/persons/${person.id}`,{method:'delete'});setLoading(true) }}>delete</button></td>
                    </tr>
                    ))}
            </tbody>
        </table>
    )
}

/*PersonsList.propTypes = {
    persons: React.PropTypes.arrayOf(React.PropTypes.shape({
        first: React.PropTypes.string.isRequired,
        last: React.PropTypes.string.isRequired,
      })).isRequired,
};*/