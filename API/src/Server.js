const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000

var bodyParser = require('body-parser');

app.use(express.json());

// app.use(bodyParser.text());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors({
	origin: 'http://localhost:3000',
}))

const user = require('./api');

app.use( "/", user, (err, req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);

  res.status(404).send({ error: 'URL: '+req.originalUrl+' not found!'});
  next();
})

app.listen(port, () => console.log(`Server started on port ${port}`));
