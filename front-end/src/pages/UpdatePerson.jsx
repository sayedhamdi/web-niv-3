import { useEffect, useRef,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdatePerson(){
    let first = useRef('')
    let last = useRef('')

    let [error,setError] = useState("")

    let { id } = useParams()
    let navigate = useNavigate()
    async function getPersonById(id){
            let response = await fetch(`http://localhost:8000/persons/${id}`)
            let data = await response.json()
            first.current.value=data.first
            last.current.value=data.last

    } 
    useEffect(()=>{
        getPersonById(id)
    },[])
    async function updatePerson() {
        
        let person = {
            first : first.current.value,
            last : last.current.value
        }
        console.log(person)
        try {
            let response = await fetch(`http://localhost:8000/persons/${id}`,{
                "content-type":"application/json",
                method:'put',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(person)
            })
            let { msg  }  = await response.json()
            if(msg){
                setError(msg)
                return
            }
            setError("")
            navigate("/persons")
            
        }catch(e){
            console.log(e)
            throw Error(e)
        }
    }
    return (
        <div>
            <h1>Update person {id}</h1>
            { error=='' ?  '' : <span style={{color:"red"}}>{error}</span>}
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text"   name="" id="" ref={first} />
                <input type="text"  name="" id="" ref={last}/>
                <button onClick={updatePerson}>Update Person</button>
            </form>
        </div>
    )
}