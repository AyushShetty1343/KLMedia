module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'ayush1343',
    DB: 'ShowBooking',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }


}