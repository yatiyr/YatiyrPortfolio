const express = require('express');
const router  = express.Router();
var cors = require('cors');

const { checkJwt, checkRole } = require('../controllers/auth');
const {
    getImage,
    getGIF,
    getCSS
} = require('../controllers/media');

router.get('/images/:mediaPath', getImage);
router.get('/gifs/:mediaPath', getGIF);
router.get('/styles/:mediaPath', cors(), getCSS);
module.exports = router;