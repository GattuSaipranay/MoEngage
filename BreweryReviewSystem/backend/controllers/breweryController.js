const Review = require('../models/Review');

const addReview = (req, res) => {
    const { rating, description, userName, breweryId } = req.body;
    
    Review.create(rating, description, userName, breweryId, (err, reviewId) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ reviewId });
    });
};

const getReviews = (req, res) => {
    const breweryId = req.params.breweryId;
    
    Review.findByBreweryId(breweryId, (err, reviews) => {
        if (err) return res.status(500).send(err);
        res.send(reviews);
    });
};

module.exports = { addReview, getReviews };
