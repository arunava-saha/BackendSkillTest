const express = require('express');

const router = express.Router();
const { home } = require('../controller/home');


router.get('/', home);
router.use('/project', require('./project'));

module.exports = router;