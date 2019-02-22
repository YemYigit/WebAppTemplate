//#region Requirements
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

let dburl = 'mongodb://USERNAME:PASSWORD@DBHOST:DBHOSTPORT/DBNAME';//FIXME Change this according to your db info
let dbName = 'DBNAME';//FIXME Change this according to your db info
let db;
//#endregion

//#region Main Code

  /*Write your code here*/

//#endregion

//#region Starting server
MongoClient.connect(dburl, {useNewUrlParser: true}, function (err, client) {
  console.log("Connected successfully to db");

  db = client.db(dbName);

  app.listen(4000, () => {
    console.log("Listening 127.0.0.1:4000 or localhost:4000")
  });
});

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
//#endregion