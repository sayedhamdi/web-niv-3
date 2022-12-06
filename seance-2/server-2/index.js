const http = require("http");



const server = http.createServer(function(req,res){
    let data = ''
    console.log("url is : "+req.url)
    console.log("\n")
    console.log("body is : ")
    console.log("\n")
    console.log(req.body)
    res.end("9rit el body")

    req.on('data', function (chunk) {
        data+=chunk
        console.log(chunk)
        console.log(typeof(chunk))
        console.log(data)
    });
 

})








server.listen(8000)