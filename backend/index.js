const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();

const mongoose = require("mongoose");
const db_string = process.env.MONGO_URL;
const MODE = process.env.DEPLOY_MODE;

require('./models/Airport');
require('./models/City');
require('./models/Log');
require('./models/Abbreviation');
require('./models/Email');

mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => {
  	console.log("MongoDB connected...");
}).catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

const search = require('./routes/searchRoutes');
const log = require('./routes/logRoutes');
const abbreviation = require('./routes/abbreviationRoutes');
const email = require('./routes/emailRoutes');
app.use('/api/search', search);
app.use('/api/log', log);
app.use('/api/abbreviation', abbreviation);
app.use('/api/email', email);

let PORT = process.env.PORT;
if (MODE === 'production') {
	const httpsServer = https.createServer({
		key: fs.readFileSync('./save268.com.key'),
		cert: fs.readFileSync('./save268.com.crt'),
		ca: [
			fs.readFileSync('./save268.com.ca.crt'),
		]
	}, app);

	httpsServer.listen(PORT, () => {
		console.log(`HTTPS Server running on port ${PORT}`);
	});
} else if (MODE === 'development') {
	const server = http.createServer(app);

	server.listen(PORT, () => {
		console.log(`Server is listening at port ${PORT}`);
	})
}