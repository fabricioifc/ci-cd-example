const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Adicione mais rotas conforme necessário

module.exports = router;
