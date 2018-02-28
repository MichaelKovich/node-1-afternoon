const express = require('express');
const bodyParser = require('body-parser');
const messageController = require(`${__dirname}/controllers/messages_controller`);

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const baseUrl = "/api/messages";
app.post(baseUrl, messageController.create);
app.get(baseUrl, messageController.read);
app.put(`${baseUrl}/:id`, messageController.update);
app.delete(`${baseUrl}/:id`, messageController.delete);

app.listen((process.env.PORT || 3000), () => {console.log(`Server listening on port ${port}.`);});