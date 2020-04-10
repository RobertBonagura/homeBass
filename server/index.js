const express = require("express");
const app = express(); // app takes express library and then runs it
                       // Now app contains all these cool methods to run a server
const cors = require("cors");
const pool = require("./db");


//middlware
app.use(cors());    // app.use() is used to add middleware functions to server.
                    // Only way to get data from client-side is from the request.body object
app.use(express.json());    // This allows us to access request.body to get json data from



// Tells server to listen on port 5000 for connections.                       
// Callback function is used to indicated server has started.
app.listen(5000, () => {
    console.log("server has started on port 5000");
});

