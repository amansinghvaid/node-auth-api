const mongodb =  require('mongodb')
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/auth-app')
    .then(client => {
        console.log('connected');
        _db = client.db()
        cb()
    })
    .catch( err => {
        console.log(err);
        throw err;
    });
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw "No database connected."
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
