const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();

const mongoose = require("mongoose");
const config = require('./config/config');
const db_string = process.env.MONGO_URL;
const MODE = process.env.DEPLOY_MODE;

require("./models/User");

mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => {
  	console.log("MongoDB connected...");
})
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

const user = require('./routes/userRoutes');
const search = require('./routes/searchRoutes');
app.use('/api/user', user);
app.use('/api/search', search);

let PORT;
if (MODE === 'production') {
	PORT = 8443;
	const httpsServer = https.createServer({
		key: fs.readFileSync('./www.re-24.com.key'),
		cert: fs.readFileSync('./www_re-24_com.crt'),
		ca: [
			fs.readFileSync('./USERTrustRSAAAACA.crt'),
			fs.readFileSync('./AAACertificateServices.crt'),
		]
	}, app);

	httpsServer.listen(PORT, () => {
		console.log(`HTTPS Server running on port ${PORT}`);
	});
} else if (MODE === 'development') {
	PORT = 8081;
	const server = http.createServer(app);

	server.listen(PORT, () => {
		console.log(`Server is listening at port ${PORT}`);
	})
}