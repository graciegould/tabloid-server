const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db')();
const app = express();
const port = process.env.PORT || 4001; 
const host = process.env.HOST || 'localhost';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000'
}));

const models = require('./models/base-schema');

const streams = require('./routes/streams');
const users = require('./routes/users');
app.use('/streams', streams);
app.use('/users', users);


app.listen(port, () => console.log(`Server is running on http://${host}:${port}`));
