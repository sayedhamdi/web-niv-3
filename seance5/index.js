const express = require("express")
const app = express()
const path = require("path")
const sqlite3 = require("sqlite3")
const { getFlightsWithDetails,getFlightById,getPassengersByFlightId ,getNotPassengers} = require("./queries/select")
let db = new sqlite3.Database("./db.db",(err)=>{
    if(err){
        console.log("could not connect to db")
        return
    }
    console.log("connected to sqlite3 db")
})

async function db_all(query){
    return new Promise(function(resolve,reject){
        db.all(query, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}

app.set("views",path.join(__dirname,"./views"))
app.set("view engine","pug")

app.get("/flights",(req,res)=>{
    db.all(getFlightsWithDetails,(err,rows)=>{
        console.log(rows)
        if(!err){
            res.render("pages/flights",flights=rows)        
        }
    })
})

app.get("/flights/:id",async (req,res)=>{
    let id = req.params.id
    let sql_getFlightInfo = getFlightById(id);
    let sql_getPassengers = getPassengersByFlightId(id);
    let sql_getNotPassengers = getNotPassengers(id)
    let [flight] = await db_all(sql_getFlightInfo)
    let passengers = await db_all(sql_getPassengers) 
    let not_passengers = await db_all(sql_getNotPassengers)
    console.log(not_passengers)
    res.render("pages/flight",context={flight,passengers,not_passengers})
})
app.listen(8000,()=>{
    console.log("listening on port 8000")
})