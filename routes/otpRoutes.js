const express = require('express')
const router = express.Router()

const OtpController = require('../controllers/otpController')

router.post('/code', OtpController.getCode)
router.post('/verify', OtpController.verify)

module.exports = router

