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
app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM musician");
        res.json(allUsers);
        console.log("Succesfully received all users\n" + JSON.stringify(allUsers.rows));
    } catch (error) {
      console.error(error.message);  
    }
})

//get a user
app.get("/users/:id", async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await pool.query("SELECT * FROM  musician WHERE username = $1",[id]);
        res.json(user.rows[0]);
        console.log(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//update a user
app.put("/users/:id", async(req,res) => {
   try {
      const {id} = req.params;
      const {username, pass} = req.body;
      const updateUser = await pool.query("UPDATE musician SET username = $1, pass = $2 WHERE username = $3",
        [username, pass, id]
      );
      res.json("User was updated");
   } catch (error) {
      console.error(error.message); 
   } 
})

//delete a user
app.delete("/users/:id", async(req,res) => {
    try {
       const {id} = req.params;
       const deleteUser = await pool.query("DELETE FROM musician WHERE username = $1",
         [id]
       );
       res.json("User was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

// Tells server to listen on port 5000 for connections.                       
// Callback function is used to indicated server has started.
app.listen(5500, () => {
    console.log("server has started on port 5500");
});

