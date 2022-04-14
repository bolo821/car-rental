const csvtojson = require('csvtojson');
const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/car_rental';

var dbConn;
mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true,
}).then((client) => {
    console.log('DB Connected!');
    dbConn = client.db();
}).catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

const fileName = './airports.csv';
var arrayToInsert = [];
csvtojson().fromFile(fileName).then(source => {
    for (var i = 0; i < source.length; i++) {
        var oneRow = {
            code: source[i]['code'],
            display_loc: source[i]['display_loc'],
            full_loc: source[i]['full_loc'],
            name: source[i]['name'],
            city: source[i]['city'],
            state: source[i]['state'],
            country: source[i]['country'],
            tz: source[i]['tz'],
            latitude: source[i]['latitude'],
            longitude: source[i]['longitude'],
            ctid: source[i]['ctid'],
            train: source[i]['train'],
        };
        console.log('old row: ', oneRow.display_loc);
        console.log('new row: ', oneRow.display_loc.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        arrayToInsert.push(oneRow);
    }
    
    var collectionName = 'airports';
    var collection = dbConn.collection(collectionName);
    collection.insertMany(arrayToInsert, (err, result) => {
        if (err) console.log(err);
        if(result){
            console.log('Import CSV into database successfully.');
        }
    });
});