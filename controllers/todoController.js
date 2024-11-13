const Todo = require('../models/todoModel');
const { v4: uuidv4 } = require('uuid');

const createTodo = (req, res) => {
  const { task, status } = req.body;
  const userId = req.user.userId;
  const taskId = uuidv4();

  Todo.createTodo(taskId, userId, task, status, (err) => {
    if (err) return res.status(500).json({ message: 'Error creating task' });
    res.status(201).json({ message: 'Task created' });
  });
};

const getTodos = (req, res) => {
  const userId = req.user.userId;

  Todo.getTodosByUserId(userId, (err, todos) => {
    if (err) return res.status(500).json({ message: 'Error fetching tasks' });
    res.json(todos);
  });
};

const updateTodoStatus = (req, res) => {
  const { taskId, status } = req.body;

  Todo.updateTodoStatus(taskId, status, (err) => {
    if (err) return res.status(500).json({ message: 'Error updating task status' });
    res.json({ message: 'Task status updated' });
  });
};

const deleteTodo = (req, res) => {
  const { taskId } = req.params;

  Todo.deleteTodoById(taskId, (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting task' });
    res.json({ message: 'Task deleted' });
  });
};

module.exports = { createTodo, getTodos, updateTodoStatus, deleteTodo };
