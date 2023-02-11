const express = require('express');
const router  = express.Router();
const { checkJwt, checkRole } = require('../controllers/auth');
const {
    getImage,
    getGIF
} = require('../controllers/media');

router.get('/images/:mediaPath', getImage);
router.get('/gifs/:mediaPath', getGIF);

module.exports = router;