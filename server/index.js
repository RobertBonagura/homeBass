const express = require("express");
const bodyParser = require('body-parser');
const app = express(); // app takes express library and then runs it
                       // Now app contains all these cool methods to run a server
const cors = require("cors");
const pool = require("./db");


//middlware
app.use(cors());    // app.use() is used to add middleware functions to server.
                    // Only way to get data from client-side is from the request.body object
app.use(
    bodyParser.urlencoded({
        extended: true
    })
); 

app.use(bodyParser.json()); // This allows us to access request.body to get json data from

//ROUTES//

//create a user
// post bc we are adding data
// (req,res) represents request from client and response sent back
// by using async we get alot of cool tools that will allow asynchronous requests easy.
// provides with await which waits for teh function to complete before continuing.
app.post("/users", async(req,res) => {
    try {
        const username = req.body.username;
        const pass = req.body.pass;
        const newUser = await pool.query(
          "INSERT INTO musician (username, pass) VALUES($1, $2) RETURNING *",
          [username, pass]
        );
        res.json(newUser);
        console.log("Successfully added newUser\n" + JSON.stringify(newUser.rows[0]));
    } catch (err) {
        console.error(err.message);
    }
});

//get all users

//get a user

//update a user

//delete a user

// Tells server to listen on port 5000 for connections.                       
// Callback function is used to indicated server has started.
app.listen(5500, () => {
    console.log("server has started on port 5500");
});

