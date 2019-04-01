module.exports = (app,db) => {
    
    // async all
    db.allAsync = function (sql) {
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
    
    // async get
    db.getAsync = function (sql) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.get(sql, function (err, row) {
                if (err)
                    reject(err);
                else
                    resolve(row);
            });
        });
    };

     // async run
     db.runAsync = function (sql) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.run(sql, function (err, row) {
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
        const length = await db.allAsync(length_sql);
        const rows = await db.allAsync(get_sql);
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

    //Able to toggle starring messages
    app.put('/api/star/:id',async(req,res) => {
        const {value}  = req.body;
        var id = req.params.id
    
        const update_sql = `UPDATE messages SET isStarred = ${1-value} WHERE id = ${id}`
        const get_sql =`SELECT * FROM messages WHERE id = ${id}`
        await db.runAsync(update_sql);
        const row = await db.getAsync(get_sql)
        res.send({"message" : row});
    });  

    // Able to delete messages
    app.delete('/api/messages/:id',async(req,res) => {
        res.send();
    });   

    

    
}