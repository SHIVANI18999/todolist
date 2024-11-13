const express = require('express');
const router = express.Router();
const { createTodo, getTodos, updateTodoStatus, deleteTodo } = require('../controllers/todoController');
const verifyToken = require('../middleware/verifyToken');

router.post('/todos', verifyToken, createTodo);
router.get('/todos', verifyToken, getTodos);
router.put('/todos/status', verifyToken, updateTodoStatus);
router.delete('/todos/:taskId', verifyToken, deleteTodo);

module.exports = router;
