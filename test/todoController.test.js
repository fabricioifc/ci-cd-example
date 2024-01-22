const todoController = require('../src/todoController');

describe('TodoController', () => {
  describe('getAllTodos', () => {
    it('should return an array of todos', () => {
      const req = {};
      const res = {
        json: data => {
          expect(data.todos).toBeInstanceOf(Array);
        },
      };
      todoController.getAllTodos(req, res);
    });
  });
});
