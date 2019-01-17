const express = require("express");
// console.log(express);
const app = express();
const port = process.argv[2]

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>")
})

app.get("/class", (req, res) => {
    res.send("<p>hello class</p>");
})

app.listen(port);