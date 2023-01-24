const express = require("express")
const { PrismaClient }  =  require('@prisma/client')
const cors = require("cors")

const prisma = new PrismaClient()
prisma.$connect().then(()=>{
    console.log("db connected succesfully")
}).catch(err=>{
    console.log("error connecting to my db")
})

const app = express()
app.use(cors())
app.use(express.json())
app.get("/users",async (req,res)=>{
    let users = await prisma.user.findMany()
    res.json(users)
})


app.listen(8000,()=>{
    console.log("listening on port 8000");
})

