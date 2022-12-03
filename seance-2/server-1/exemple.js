const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/favicon.ico") {
    res.statusCode = 401;
    res.end();
  } else if (req.url == "/users/all" && req.method.toLocaleLowerCase() == "get") {
    
    const data=fs.readFileSync('names.txt', 'utf-8')
    res.end(data)
  } 
  else if(req.url == "/users/reset" && req.method == "GET") {
    fs.writeFile("names.txt", "", (err) => {
        if (err) throw err;
        console.log('fassakht kolchay!');
    });
  }
  
  else {

    console.log(req.url);
    let tab = req.url.split("/");
    let name = tab.pop();
    fs.appendFile("names.txt", name + "\n", (err) => {
      if (err) {
        throw err;
      }
      console.log("jawna behi!");
    });
  }


});
server.listen(8000, console.log("listening"));