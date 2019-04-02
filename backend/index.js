const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./database/create_database')

app.use(cors())
app.use(bodyParser.json());
require('./routes/messageRoute')(app,db);

app.listen(5000, () => {
    console.log('Listening on port 5000')
})