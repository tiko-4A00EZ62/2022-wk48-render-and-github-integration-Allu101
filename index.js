const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const electricityRouter = require('./routes/electricity');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/electricity', electricityRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend is listening on PORT ${PORT}`);
});
