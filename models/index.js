const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
}
)
sequelize.authenticate()
    .then(() => {
        console.log("Database is connected")
    })
    .catch((err) => console.log("ERROR" + err))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.admins = require('./adminModel.js')(sequelize, DataTypes)
db.users = require('./usersModel.js')(sequelize, DataTypes)
db.shows = require('./showModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes resync success')
    })

module.exports = db
