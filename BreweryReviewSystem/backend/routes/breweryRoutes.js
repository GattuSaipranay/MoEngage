const express = require('express');
const { addReview, getReviews } = require('../controllers/breweryController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/review', authenticateToken, addReview);
router.get('/reviews/:breweryId', getReviews);

module.exports = router;
