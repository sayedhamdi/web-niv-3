import express from "express";
import { addUser, getAllUsers , getUserById} from "./controllers/user.controller.js"
const app = express();


app.use(express.json())

app.use(function(req,res,next){
    console.log("taadit mena")
    next()    
})

app.get("/users",getAllUsers)
app.post("/users",addUser)
app.get("/users/:id",getUserById)

app.listen(8000,()=>{
    console.log("nasmaa ala port 8000")
})
