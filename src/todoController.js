const getAllTodos = (req, res) => {
    // Lógica para obter todos os itens da lista de tarefas
    const todos = ['Buy groceries', 'Complete homework', 'Go for a run'];
    res.json({ todos });
  };
  
  module.exports = { getAllTodos };
  