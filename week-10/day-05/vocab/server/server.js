const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

const mongoUser = process.env.mongoUser;
const mongoPassword = process.env.mongoPassword;

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false); // Whatever
mongoose.connect(
  // DO NOT COMMIT THIS CODE
  'mongodb+srv://' + mongoUser + ':' + mongoPassword + '@cluster0-z3xyh.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 3000; // Future proof for deployment
const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

routes(server);
server.listen(PORT);

server.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found`});
});

console.log(`Server started on http://localhost:${ PORT }/`);