// importer les dependencies // built in  modules
const fs = require("fs");
const http = require("http");


//declare server constants 
const PORT = 8000

const htmlResponse = (title,body)=>`<!DOCTYPE html>
            <html>
                <head>
                    <title>${title}</title>
                </head>
                <body>
                    ${body}
                </body>
            </html>
            `

// declarer le serveur
const server = http.createServer((req,res)=>{
    let urlToArray = req.url.split('/')
    let addUserPath = urlToArray[1]+'/'+urlToArray[2]
    console.log(urlToArray)
    if (req.method =="GET" && req.url =="/users"){
        const file = fs.readFileSync('names.txt', 'utf-8')
        const fileToArray = file.split("\n");
        let arrayToHtmlTable = '';
        arrayToHtmlTable+="<table border='1'>";
        arrayToHtmlTable+="<tr><th>Names</th></tr>";
        fileToArray.forEach(name=>{
            arrayToHtmlTable+=`<tr><td>${name}</td></tr>`;
        })
        arrayToHtmlTable+='</table>';
        res.end(htmlResponse("List of users",arrayToHtmlTable))
        return
    }if(req.method=="GET" && addUserPath=='users/ajouter'){
        let user = urlToArray[3]
        fs.appendFile('names.txt', user + '\n', function (err) {
            if (err) throw err;
            res.setHeader("content-type","text/html")
            res.end("<div>ajoutina el user see the list at <a href='http://localhost:8000/users'>list of users</a><div>")
        });
        return
    }else{
        res.end("3ammar 404 not found")
        return
    }
});





//listen to requests
server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}...`)
})
