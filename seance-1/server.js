const http = require("http");
const fs = require('fs');

let users = [
    {
        id:'16',
        name:'Dahmen'
    },
    {
        id:'2',
        name:'IFA'
    },
    {
        id:'3',
        name:'TALBI'
    },
    {
        id:'4',
        name:'MERIEH'
    },
    {
        id:'7',
        name:'MSEKNI'
    }
]
const server = http.createServer((req,res)=>{
    if(req.url =='/favicon.ico'){
        res.statusCode = 401
        res.end()
    }else if(req.url=='/users' && req.method.toLocaleLowerCase()=="get"){
        res.setHeader("content-type",'text/html')
        res.write("<ul>")
        users.forEach(user=>{
            res.write(`<li>${user.name}</li>`)
        })
        res.write("</ul>")
        res.end();
    }else {
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

server.listen(8000)