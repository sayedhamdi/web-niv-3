import { useEffect, useState } from "react";
import PersonsList from "../components/PersonsList";
import { useNavigate } from "react-router-dom";
export default function Person() {
    let [persons,setPersons] = useState([])
    let [loading,setLoading] = useState(true)
    let navigate = useNavigate()
    async function getPersons(){
        if(loading){
            let response = await fetch("http://localhost:8000/persons")
            let data = await response.json()
            console.log(data)
            setPersons(data)
            setLoading(false)
        }
    } 

    useEffect(()=>{
        getPersons()
    },[loading])
    return (
        <div>
            <h1>Person</h1>
            <button onClick={()=>{navigate('/persons/create')}}>Create new Person</button>
            <PersonsList persons={persons} setLoading={setLoading}/>
        </div>
    )

}