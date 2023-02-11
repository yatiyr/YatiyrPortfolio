const express = require('express');
const router  = express.Router();
const { getBlogs,
        getHighlightedBlogs,
        getBlogBySlug,
        getBlogsByPostType,} = require('../controllers/blogs');

router.get('', getBlogs);
router.get('/highlighted', getHighlightedBlogs);
router.get('/s/:slug', getBlogBySlug);
router.get('/t/:type', getBlogsByPostType);

module.exports = router;