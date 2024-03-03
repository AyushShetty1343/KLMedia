const showController = require('../controllers/showController.js')

const router = require('express').Router();

router.post("/addEvent", showController.addEvent);
router.delete('/:showid', showController.removeEvent);
router.patch("/bookTicket", showController.bookTicket);


module.exports = router