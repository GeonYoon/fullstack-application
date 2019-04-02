const helper = require('../utils/helper');
const query = require('../utils/query');

module.exports = (app,db) => {
    // A GET request that returns all data as modeled in messages & Display length of messages starred
    app.get('/api/messages',async(req,res) => {
        const length_sql = 'SELECT Count(*) FROM messages WHERE isStarred = 1'
        const get_sql = 'SELECT * FROM messages'
        const length = await query.all(db,length_sql);
        const rows = await query.all(db,get_sql);
        res.send({"messages" : rows, "length": helper.jsonParser(length[0])});
    });
  
    // Allows a user to sort messages by score
    app.get('/api/sort',async(req,res) => {
        const get_sql ='SELECT * FROM messages ORDER BY score DESC '
        const rows = await query.all(db,get_sql);
        res.send(rows);
    });

    // Text highlighting
    app.get('/api/highlight/:texts',async(req,res) => {
        const text = req.params.texts
        const trimed_text = text.trim();
        const get_sql = 'SELECT * FROM messages'
        const rows = await query.all(db,get_sql);
        const data =  await helper.highlight(rows,trimed_text)
        res.send(data);
    });

    // Able to toggle starring messages
    app.put('/api/star/:id',async(req,res) => {
        const {value}  = req.body;
        var id = req.params.id
        const update_sql = `UPDATE messages SET isStarred = ${1-value} WHERE id = ${id}`
        const get_sql =`SELECT * FROM messages WHERE id = ${id}`
        await query.run(db,update_sql);
        const row = await query.get(db,get_sql)
        res.send({"message" : row});
    });  

    // Able to delete messages
    app.put('/api/delete/:id',async(req,res) => {
        var id = req.params.id
        const update_sql = `UPDATE messages SET isTrashed = 1 WHERE id = ${id}`
        const get_sql =`SELECT * FROM messages WHERE id = ${id}`
        await query.run(db,update_sql);
        const row = await query.get(db,get_sql)
        res.send({"message" : row});
    });       
}