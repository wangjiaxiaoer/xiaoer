const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const dbName = "xiaoer"

// 数据库方法封装
function connect(callback) {
    MongoClient.connect(url, {
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            throw err
        } else {
            let db = client.db(dbName)
            callback && callback(db)
            // client.close()
        }
    })
}

module.exports = {
    connect
}