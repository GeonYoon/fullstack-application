module.exports = (app,db) => {
    
    // async call
    db.getAsync = function (sql) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.all(sql, function (err, row) {
                if (err)
                    reject(err);
                else
                    resolve(row);
            });
        });
    };

    function jsonParser(stringValue) {
        var string = JSON.stringify(stringValue);
        var objectValue = JSON.parse(string);
        return objectValue['Count(*)'];
     }

    // A GET request that returns all data as modeled in messages
    // Display length of messages starred
    app.get('/api/messages',async(req,res) => {
        const length_sql = 'SELECT Count(*) FROM messages WHERE isStarred = 1'
        const get_sql = 'SELECT * FROM messages'
        const length = await db.getAsync(length_sql);
        const rows = await db.getAsync(get_sql);
        res.send({"messages" : rows, "length": jsonParser(length[0])});
    });

  
    // Allows a user to sort messages by score
    app.get('/api/sort',async(req,res) => {
        res.send();
    });

    //Text highlighting
    app.get('/api/highlight',async(req,res) => {
        res.send();
    });

    // Able to toggle starring messages
    app.put('/api/star/:id',async(req,res) => {
        res.send();
    });  

    // Able to delete messages
    app.delete('/api/messages/:id',async(req,res) => {
        res.send();
    });   

    

    
}