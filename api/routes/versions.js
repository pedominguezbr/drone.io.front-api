const express = require('express')
const router = express.Router()

const VersionController = require('../controllers/version')

router.get('/',VersionController.getVersion);