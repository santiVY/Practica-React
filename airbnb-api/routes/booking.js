
const router = require('express').Router()
const  booking  = require('../controllers/bookingCtrl')

router.post('/', booking)

module.exports = router