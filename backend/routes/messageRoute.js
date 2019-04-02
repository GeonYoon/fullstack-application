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
                    // resolve(row).them(row=>{return row});
                    resolve(row);
            });
        });
    };

    async function highlight(rows,text){
        var newRows =  rows.map(  function(row) {
            const changed =  split2(row.content,text)
            return {...row,"content":changed }
          });
        return newRows
    }

    function split2 (content,text){
        const res = content.split(new RegExp(`(${text})`, 'ig'))
        var ki = 0;
        const changed = res.map( function(item) {
            if(item.toUpperCase() === text.toUpperCase()) return `<span key={${ki++}} className=\"highlighted-text\">${item}</span>`
            else return item
        })
        return changed
    }
        
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
        const get_sql ='SELECT * FROM messages ORDER BY score DESC '
        const rows = await db.allAsync(get_sql);
        res.send(rows);
    });

    //Text highlighting
    app.get('/api/highlight/:texts',async(req,res) => {
        const text = req.params.texts
        const trimed_text = text.trim();
        const get_sql = 'SELECT * FROM messages'
        const rows = await db.allAsync(get_sql);
        const data =  await highlight(rows,trimed_text)
        res.send(data);
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
    app.put('/api/delete/:id',async(req,res) => {
        var id = req.params.id
        const update_sql = `UPDATE messages SET isTrashed = 1 WHERE id = ${id}`
        const get_sql =`SELECT * FROM messages WHERE id = ${id}`
        await db.runAsync(update_sql);
        const row = await db.getAsync(get_sql)
        res.send({"message" : row});
    });   

    

    
}