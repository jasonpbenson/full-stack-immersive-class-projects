const fs = require("fs"); //to read binary (pertinent to uploaded files)

const express = require("express");
let app = express();

const multer  = require("multer")
const upload = multer({ dest: "public/" })

const mysql = require("mysql");
const config = require("./config");

const bcrypt = require("bcrypt-nodejs");
const helmet = require("helmet");
var expressSession = require('express-session');
app.use(helmet());
//app.use = middleware (any function with access to req & res)

let connection = mysql.createConnection(config.db);
connection.connect();

const sessionOptions = {  
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,  
    };
app.use(expressSession(sessionOptions));

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("*", (req, res, next) => {
    if(req.session.loggedIn){
        res.locals.name = req.session.name;
        res.locals.id = req.session.id;
        res.locals.email = req.session.email;
        res.locals.loggedIn = true;
    }else{
        res.locals.name = "";
        res.locals.id = "";
        res.locals.email = "";
        res.locals.loggedIn= false;    
    }
    next();
})

app.get("/",(req, res, next)=>{
    if(!req.session.loggedIn){
        res.redirect("/login?msg=mustLogin");
    }else{
        const animalQuery = `SELECT * FROM animals WHERE id NOT IN(
            SELECT aid FROM votes WHERE uid = ?
        );`;
        connection.query(animalQuery,[req.session.uid],(error,results)=>{
            if(error){throw error}
            let msg;
            if(req.query.msg == "regSuccess"){
                msg = "You have successfully registered!";
                console.log(msg);
            }else if(req.query.msg == "loginSuccess"){
                msg = "You have successfully logged in!";
            }

            if(results.length === 0){
                // user has voted on all animals.
                res.render("index",{
                    animal: null,
                    msg: `You have voted on all the animals! Please upload a new one, 
                    or check out the <a href="/standings">standings</a> page.`
                });
            }else{
                const rand = Math.floor(Math.random() * results.length);
                res.render("index",{
                    animal: results[rand],
                    msg
                });    
            };
        });
    };
});

app.get("/standings", (req, res, next) => {
    const selectQuery = `SELECT SUM(IF(value = 'domestic', 1, -1)) 
    AS domesticCount, MAX(animals.species) AS species FROM votes
    INNER JOIN animals ON votes.aid = animals.id
    GROUP BY animals.species;`;
    connection.query(selectQuery, (error, results) => {
        if(error) {throw error};
        res.render("standings", {results});
    });
});

app.get('/vote/:value/:id', (req, res, next) => {
    const value = req.params.value;
    const aid = req.params.id;
    const insertQuery = `INSERT INTO votes (id, aid, value, uid)
        VALUES
        (DEFAULT, ?, ?, ?);`;
    connection.query(insertQuery, [aid, value, req.session.uid], (error, results)=> {
        if(error) {throw error;}
        res.redirect('/')
    });
});

app.get('/register',(req, res)=>{
    let msg;
    if(req.query.msg == 'register'){
        msg = 'This email adress is already registered.';
    }
    res.render('register',{msg})
})

app.post('/registerProcess',(req, res, next)=>{
    const hashedPass = bcrypt.hashSync(req.body.password);
    const checkUserQuery = `SELECT * FROM users WHERE email = ?`;
    connection.query(checkUserQuery,[req.body.email],(error,results)=>{
        if(error){throw error;}
        if(results.length != 0){
            res.redirect('/register?msg=register');
        }else{
            const insertUserQuery = `INSERT INTO users (name, email, hash)
                VALUES
            (?,?,?)`;
            connection.query(insertUserQuery,[req.body.name, req.body.email, hashedPass],(error2, results2)=>{
                if(error2){throw error2;}
                res.redirect('/?msg=regSuccess');
            });
        };
    });
});

app.get('/login', (req, res, next)=>{
    let msg;
    if(req.query.msg == 'noUser'){
        msg = '<h2 class="text-danger">This email is not registered in our system. Please try again or register!</h2>'
    }else if(req.query.msg == 'badPass'){
        msg = '<h2 class="text-warning">This password is not associated with this email. Please enter again</h2>'
    }
	res.render('login',{msg});
});

app.post('/loginProcess',(req, res, next)=>{
    const email =  req.body.email;
    const password = req.body.password;
    const checkPasswordQuery = `SELECT * FROM users WHERE email = ?`;
    connection.query(checkPasswordQuery,[email],(error, results)=>{
        if(error){throw error;}
        if(results.length == 0 ){
            res.redirect('/?msg=noUser');
        }else{
            const passwordsMatch = bcrypt.compareSync(password,results[0].hash);
            if(!passwordsMatch){
                res.redirect('/login?msg=badPass');
            }else{
                console.log(results[0].id)
                req.session.name = results[0].name;
                req.session.email = results[0].email;
                req.session.uid = results[0].id;
                req.session.loggedIn = true;
                res.redirect('/?msg=loginSuccess');
            };
        };
    });
});

app.get('/logout',(req, res, next)=>{
    req.session.destroy();
    res.redirect('/login?msg=loggedOut')
})

app.get('/uploadAnimal', (req, res, next) => {
    res.render("upload", {});
});

app.post("/formSubmit", upload.single("imageToUpload"), (req, res) => {
    res.json(req.file);
    // the file is here in req.file. But, it's in binary.
    // 1. get the temp path / location of our file on this server
    const tempPath = req.file.path;
    // 2. set up the new target path / where we actually want it
    // (i.e., original name might be usefull here ...)
    const targetPath = `public/${req.file.originalname}`
    // 3. we can't read binary... but fs can! Have fs read that sucker
    fs.readFile(tempPath, (error, fileContents) => {
        if(error){throw error};
          // 4. Once binary is read, write it to target
        fs.writeFile(targetPath, fileContents, (error2) => {
            if(error2){throw error2};
            // 5. Insert the name of the file into the db
            const insertQuery = `INSERT INTO animals (id, species, image)
                VALUES
            (DEFAULT, ?, ?);`;
            connection.query(insertQuery, 
                [req.body.animalName, req.file.originalname], 
                (dbError, dbResults) =>{
                if(dbError){
                    throw dbError;
                }else{
                    fs.unlink(tempPath);
                    res.redirect("/");
                }
            })
        });
    });
    // 6. Send them to /
});

app.listen(8282);