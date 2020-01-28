# homeBass-backend
## Running The server website
Create initial backend server with `express-generator`.

    express homeBass-backend --view=pug

Then run:

    DEBUG=homeBass-backend:* npm start

`npm start` would also run the program on localhost://3000 however setting the `DEBUG` variable as shown above enables console logging and debugging.

## Enable server restart on file changes using Nodemon
First just install nodemon to the project using `npm install nodemon`.<br>
Then, inside the `package.json` file, add scripts for both using nodemon, and also using nodemon with the `DEBUG` variable set.
```
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=homeBass-backend:* npm run devstart"
  },
```
## Looking at the overall skeleton of our project
**package.json** - Defines the application dependencies and some other information.<br>
**/bin/www** - JavaScript file defined as the entry point by package.json, which handles some errors and then loads app.js .<br>
**app.js** - The main method so to speak of the application. Responsible or adding middleware functions and a router to handle the rest of the work.<br>
**routes/** - Folder holding each of the different route files to call the appropriate controller function.<br>
**views/** - Templates used to render output.<br>

# homeBass-client
Create the client application using `npm nano-react-app homeBass-client`.

# MongoDB Database
Install mongoose to the project with `npm install mongoose`.<br>Then, inside the **/app.js** file, right beneath where the express application object is declared, connect to a mongoDB Atlas server:
```
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'insert_your_database_url_here';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true  });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```
This creates the default connection to the database and binds any errors generated to the error event so that an that occur will be logged to console.

## Defining the schema
Next create a models folder to begin creating the Schema for the project.<br>Each individial model will have its own file within this folder.

Our initial Schema for a user account will look like this:
```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: {type: String, required: true},
    password: {type: String, required: true}
  }
);

//Export model
module.exports = mongoose.model('User', UserSchema);
```
The above code will live inside our newly created **/models/user.js**.

[insert information about mongoose and mongoDB Schema and Models.]
