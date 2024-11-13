const db = require('../database');

const User = {
  createUser: (userId, name, email, password, callback) => {
    const stmt = db.prepare('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)');
    stmt.run(userId, name, email, password, callback);
  },
  getUserByEmail: (email, callback) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], callback);
  },
  updateProfile: (userId, name, email, password, callback) => {
    const stmt = db.prepare('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?');
    stmt.run(name, email, password, userId, callback);
  }
};

module.exports = User;
