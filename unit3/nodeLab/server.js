const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200,{"content-style": "text/html"});
        const homePageHTML = fs.readFileSync("index.html");
        res.end(homePageHTML);
    }else if(req.url === "/styles.css"){
        res.writeHead(200, {"content-type": "text/css"});
        const stylesFile = fs.readFileSync("styles.css");
        res.end(stylesFile);
    }else if(req.url === "/scripts.js"){
        res.writeHead(200, {"content-type": "text/javascript"});
        const scriptsFile = fs.readFileSync("scripts.js");
        res.end(scriptsFile);
    }else if(req.url === "/page-missing"){
        res.writeHead(404, {"content-type": "text/html"});
        const errorFile = fs.readFileSync("404.html");
        res.end(errorFile);
    }
})

server.listen(3080);