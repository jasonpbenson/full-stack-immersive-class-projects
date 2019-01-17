//http is native, don't need to install via npm
const http = require('http');
console.log(http);

// createServer takes 1 argument:
// a function to run when someone makes an 
// http connection to this program

const server = http.createServer((req, res)=>{
    console.log("Someone hit our http server");
    res.end('<h1>goodnight moon</h1>');
});

server.listen(3000);

