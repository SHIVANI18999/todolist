const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Create tables for users and todos
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT, email TEXT UNIQUE, password TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS todos (id TEXT PRIMARY KEY, userId TEXT, task TEXT, status TEXT, FOREIGN KEY(userId) REFERENCES users(id))');
});

module.exports = db;
