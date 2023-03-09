import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from './config/vars.js'
import connectToDb from './config/db.js'
import UserModel from './models/User.js'
import authRouter from './router/auth.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


/*
async function Authorise(req, res, next){
    
        // -----------------------------------------------------------------------
        // authentication middleware
      
        const auth = {login: 'admin', password: 'admin'} // change this
      
        // parse login and password from headers
        const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
        const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
        console.log(b64auth,{login,password})
        // Verify login and password are set and correct
        if (login && password && login === auth.login && password === auth.password) {
          // Access granted...
          return next()
        }
      
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"') // change this
        res.status(401).send('Authentication required.') // custom message
      
        // -----------------------------------------------------------------------
}

app.get('/admin/dashboard',Authorise,(req,res)=>{
    res.end("<h1>Admin dashboard</h1>")
})*/

app.use("/api/auth",authRouter)


app.listen(config.port,()=>{
    connectToDb()
    console.log(`listening on port ${config.port}`)
})