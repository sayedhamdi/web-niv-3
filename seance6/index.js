//dependencies
const express = require("express")
const { PrismaClient }  =  require('@prisma/client')
const cors = require("cors")
const config = require("./config")
const prisma = new PrismaClient()
const morgan = require("morgan")
const fs = require("fs")
const path = require("path")
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// handlers
const flightsRouter = require("./routes/flights")

// db connexion
prisma.$connect().then(()=>{
    console.log("db connected succesfully")
}).catch(err=>{
    console.log("error connecting to my db")
})


// server init
const app = express()

const corsOptions = {
    origin: config.env ==='prod'? config.clientUrl : config.clientUrl  ,
    optionsSuccessStatus: 200
}


// middlewares

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan("dev"))



app.use("/flights",flightsRouter)


app.listen(config.port,()=>{
    console.log(`listening on port ${config.port}`);
})

