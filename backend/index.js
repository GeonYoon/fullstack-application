const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./database/create_database')

// database.each("SELECT * FROM messages", function(err, row) {
//     console.log(row);
// });

app.use(cors())
app.use(bodyParser.json());

//test
const b = "AA"
const a = "aa"
console.log(a.toUpperCase === b.toUpperCase)
console.log(a)

require('./routes/messageRoute')(app,db);

app.listen(5000, () => {
    console.log('Listening on port 5000')
})