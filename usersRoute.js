const userController = require('../controllers/usersController')


const router = require('express').Router()
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.post('/signup', userController.signup)
router.post('/login', userController.login)
// router.get('/getData', userController.findData)
module.exports = router
