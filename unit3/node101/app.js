const http = require("http");

//fs = filesystem
const fs = require("fs")

//req = what the browser is asking for
//res = the thing that talks back to the browser

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        console.log("someone requested a page", req.url);
        // res.end("<h1>Sanity</h1>");
        res.writeHead(200, {"content-tyle": "text/html"});
        const homePageHTML = fs.readFileSync("homepage.html");
        res.end(homePageHTML);
    }else if(req.url === "/scripts.js"){
        res.writeHead(200, {"content-type": "text/javascript"});
        const scriptFile = fs.readFileSync("scripts.js");
        res.end(scriptFile);
    }else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("page not availalble");
    }
})

server.listen(3030);