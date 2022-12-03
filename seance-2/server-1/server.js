//importer les modules
const http = require("http");

// file system module
const fs = require('fs');

//hedhom les users
const { USERS } = require("./users.data")

// creation du serveur
const server = http.createServer((req,res)=>{
    if(req.url =='/favicon.ico'){
        res.statusCode = 401
        res.end()
    }else if(req.url=='/users' && req.method.toLocaleLowerCase()=="get"){
        res.setHeader("content-type",'text/html')
        res.write("<ul>")
        USERS.forEach(user=>{
            res.write(`<li>${user.name}</li>`)
        })
        res.write("</ul>")
        res.end();
    }else if(req.url =='/users.'){
        let [_,name] = req.url.split("/")
        fs.appendFile('names.txt', name + '\n', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
       // console.log("jet requete")
        //console.log(req.url)
        //console.log(req.method)
        //console.log(req.body)
        res.write(`ajoutina ${name} fel fichier`)
        res.end()
    }
    
})

server.listen(8000,()=>{
    console.log('listening on port 8000');
})