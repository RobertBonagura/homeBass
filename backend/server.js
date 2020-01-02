const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
//const db = require('./db');
const app = express();
const apiPort = 3001;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://robert-bonagura:eIh0X0LvoVLXAYT9@cluster0-ithhn.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.log(err)
    db = client.db('database')
    app.listen(apiPort, () => console.log('Server is running on port %s', apiPort));
})

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());
//app.use(bodyParser.json());

//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    db.collection('database').find().toArray((err, result) => {
        if (err) console.log(err);
        res.render("index.ejs", {users: result});
    })
});

app.post('/addUser', (req, res) => {
    db.collection('database').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    })
});
