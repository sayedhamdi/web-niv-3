import { useRef,useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreatePerson(){
    let first = useRef()
    let last = useRef()

    let [error,setError] = useState("")


    let navigate = useNavigate()
    async function createPerson() {
        
        let person = {
            first : first.current.value,
            last : last.current.value
        }
        console.log(person)
        try {
            let response = await fetch("http://localhost:8000/persons",{
                "content-type":"application/json",
                method:'post',
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
            <h1>Create new person</h1>
            { error=='' ?  '' : <span style={{color:"red"}}>{error}</span>}
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" name="" id="" ref={first} />
                <input type="text" name="" id="" ref={last}/>
                <button onClick={createPerson}>Create Person</button>
            </form>
        </div>
    )
}