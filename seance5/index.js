const express = require("express")
const app = express()
const path = require("path")
const sqlite3 = require("sqlite3")

let db = new sqlite3.Database("./db.db",(err)=>{
    if(err){
        console.log("could not connect to db")
        return
    }
    console.log("connected to sqlite3 db")
})

app.set("views",path.join(__dirname,"./views"))
app.set("view engine","pug")

app.get("/flights",(req,res)=>{
    db.all("select * from flights",(err,rows)=>{
        if(!err){
            res.render("pages/flights",flights=rows)        }
        })
})

app.listen(8000,()=>{
    console.log("listening on port 8000")
})