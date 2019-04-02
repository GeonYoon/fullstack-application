module.exports = {
    // async all
    all: function all (db, sql) {
        var that = db;
        return new Promise(function (resolve, reject) {
            that.all(sql, function (err, row) {
                if (err) reject(err);
                else resolve(row);
            });
        });
    },
    // async get
    get: function get (db,sql) {
        var that = db;
        return new Promise(function (resolve, reject) {
            that.get(sql, function (err, row) {
                if (err) reject(err);
                else resolve(row);
            });
        });
    },
    // async run
    run: function run (db, sql) {
        var that = db;
        return new Promise(function (resolve, reject) {
            that.run(sql, function (err, row) {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }
}