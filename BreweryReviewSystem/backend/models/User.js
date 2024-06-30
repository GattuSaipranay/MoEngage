const db = require('../db/config');

class User {
    static create(email, password, callback) {
        const stmt = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)");
        stmt.run(email, password, function(err) {
            callback(err, this.lastID);
        });
        stmt.finalize();
    }

    static findByEmail(email, callback) {
        db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
            callback(err, row);
        });
    }
}

module.exports = User;
