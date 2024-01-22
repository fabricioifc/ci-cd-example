# Criando uma aplicação web com NodeJS e Express

## Descrição do Projeto
Aplicação de exemplo para testar Integração Contínua e Entrega Contínua com o GitHub Actions e GitHub Pages.

## Como criar uma aplicação NodeJS

```bash
npm init -y
```

## Como instalar o Express

```bash
npm install express
```

## Criar o arquivo app.js

```bash
touch app.js
```

## Como executar a aplicação

```bash
node app.js
```

## Como acessar a aplicação

```bash
http://localhost:3000
```

# Testes Automatizados

## Como instalar o Jest

```bash
npm install --save-dev jest
```

## Como criar o arquivo de teste

```bash
touch app.test.js
```

## Conteúdo do arquivo app.test.js

```javascript
// index.test.js
const request = require('supertest');
const app = require('./app');

describe('Testando o aplicativo', () => {
  it('Deve retornar Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
    expect(response.status).toBe(200);
  });
});
```

## Atualizar o arquivo package.json

```json
{
  "scripts": {
    "test": "jest"
  }
}
```
## Como executar os testes

```bash
npm test
```