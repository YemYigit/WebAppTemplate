//#region Requirements
const config = require('./config');
const express = require('express');
const app = express();
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const dburl = `mongodb://${config.dbserver.userName}:${config.dbserver.password}@${config.dbserver.ip}/${config.dbserver.dbName}`;
let db;
//#endregion

//#region Main Code

  /*Write your code here*/

//#endregion

//#region Starting server
MongoClient.connect(dburl, {useNewUrlParser: true}, (err, client) => {
  console.log("Connected successfully to db");

  db = client.db(config.dbserver.dbName);

  app.listen(config.app.port, () => {
    console.log(`Listening ${config.app.host}:${config.app.port}`);
  });
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
//#endregion