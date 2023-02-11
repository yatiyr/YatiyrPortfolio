const express = require('express');
const router = express.Router();

const { createView } = require('../controllers/views');

router.post('/', createView);

module.exports = router;