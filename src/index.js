const express = require('express');
const app = express();
const port = 3000;

const todoController = require('./todoController');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/todos', todoController.getAllTodos);

app.listen(port, () => {
  console.log(`Todo List app listening at http://localhost:${port}`);
});
