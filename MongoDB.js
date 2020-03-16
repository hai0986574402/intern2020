var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
    if (err) throw err;
    console.log('Ket noi thanh cong');
    db.close();
    console.log('close thanh cong');
});