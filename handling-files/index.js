const http = require("http");
const fs = require("fs")

const pageHTML = fs.readFileSync("index.html");
const app = http.createServer((req,res)=>{
    let file = ''
    if(req.url =='/'){
        res.end(pageHTML);
    }
    if(req.url=='/upload'){
        req.on("data",(chunk)=>{
            fs.appendFileSync("./uploads/img.png",chunk)
            console.log(chunk)
        })
        res.end("baatht")
        
    }
})


app.listen(8000,()=>{
    console.log("server listeing on 8000")
})
