const db = require('../database');

const Todo = {
  createTodo: (taskId, userId, task, status, callback) => {
    const stmt = db.prepare('INSERT INTO todos (id, userId, task, status) VALUES (?, ?, ?, ?)');
    stmt.run(taskId, userId, task, status, callback);
  },
  getTodosByUserId: (userId, callback) => {
    db.all('SELECT * FROM todos WHERE userId = ?', [userId], callback);
  },
  updateTodoStatus: (taskId, status, callback) => {
    db.run('UPDATE todos SET status = ? WHERE id = ?', [status, taskId], callback);
  },
  deleteTodoById: (taskId, callback) => {
    db.run('DELETE FROM todos WHERE id = ?', [taskId], callback);
  }
};

module.exports = Todo;
