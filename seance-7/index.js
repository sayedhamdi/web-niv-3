import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import jwt from 'jsonwebtoken';
const app = express();

const secret = 'slighskjghksjdghksjdg';


app.use(express.json())
app.use(morgan("dev"))
app.use(cors())


const existingUser = {
    _id:'123456789',
    fullname:'monji slim',
    email : 'monjislim@gmail.com',
    password : '12345678',
    role : 'admin'
} 

app.post("/generateAccessToken",async (req,res)=>{
    
    
    // get the user
    
    let payload = {
        _id : existingUser._id,
        role : existingUser.role,
    }
    //generate the access token
    let accessToken = jwt.sign(payload,secret,{expiresIn : '1m'})

    res.status(200).json({accessToken})
})

app.get("/adminStuff",async (req,res)=>{
    let token  = req.headers.authorization.split(" ")[1]
    console.log(token)
    //nekhou el token mel headers (authorization)
    try {
        var decoded = jwt.verify(token, secret);
        if (decoded._id != existingUser._id){
            res.status(400).json({error : 'invalid token',msg:'please ...'})
        }
        let barchaFlous = 'miliar w noss';
        res.json(barchaFlous)
      } catch(err) {
        res.status(400).json({error : 'invalid token',msg:'please ...'})
      }

    
})

app.listen(8000,()=>{
    console.log("listening on port 8000")
})