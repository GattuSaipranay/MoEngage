const db = require('../db/config');

class Review {
    static create(rating, description, userName, breweryId, callback) {
        const stmt = db.prepare("INSERT INTO reviews (rating, description, userName, breweryId) VALUES (?, ?, ?, ?)");
        stmt.run(rating, description, userName, breweryId, function(err) {
            callback(err, this.lastID);
        });
        stmt.finalize();
    }

    static findByBreweryId(breweryId, callback) {
        db.all("SELECT * FROM reviews WHERE breweryId = ?", [breweryId], (err, rows) => {
            callback(err, rows);
        });
    }
}

module.exports = Review;
