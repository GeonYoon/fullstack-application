const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const database = require('./database/create_database')

// Database Init
// Database.database.init();


database.each("SELECT * FROM messages", function(err, row) {
    console.log(row);
});

app.use(cors())
app.use(bodyParser.json());



// require('./routes/messageRoute')(app);


app.listen(5000, () => {
    console.log('Listening on port 5000')
})