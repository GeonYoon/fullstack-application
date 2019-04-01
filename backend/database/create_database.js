// create database
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:',{ Promise });
const obj = require('./messages.json').messages

console.log("Start to create Database")
db.serialize(function() {
    db.run("CREATE TABLE messages (id INTEGER PRIMARY KEY,handle TEXT,avatar TEXT,timestamp TEXT,source TEXT, content TEXT, score INTEGER,isStarred BOOLEAN,isTrashed BOOLEAN)");
    var stmt = db.prepare("INSERT INTO messages VALUES (?,?,?,?,?,?,?,?,?)");
    obj.forEach(function(message){
        stmt.run(message.id,
                message.handle, 
                message.avatar,
                message.timestamp,
                message.source,
                message.content,
                message.score,
                message.meta.isStarred,
                message.meta.isTrashed);
    })
    stmt.finalize();
    }
);
console.log("Database Created")

module.exports = db
