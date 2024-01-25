# Integração Contínua + Entrega Contínua + Entrega Contínua

Aplicação de exemplo para demonstrar o uso de integração contínua (Continuous Integration) e entrega contínua (Continuous Delivery) com o [GitHub Actions](https://docs.github.com/pt/actions) e [GitHub Pages](https://pages.github.com/).

## Como funciona?

A cada push na branch `main`, o GitHub Actions executa o script `.github/workflows/ci.yml` que faz o build da aplicação e publica o conteúdo da pasta `dist` na branch `gh-pages`. A branch `gh-pages` é usada pelo GitHub Pages para publicar o conteúdo da aplicação.

## Criando um projeto do zero com Vite e VueJS
    
```bash
npm create vite@latest 

# Project name: vue-ci-cd
# Select a framework: Vue
# Select a variant: JavaScript
```

## Instalando dependências

```bash
npm install
```

## Executando a aplicação

```bash
npm run dev
```

## Executando os testes

```bash
npm run test
```

## Fazendo o build da aplicação

```bash
npm run build
```

## Instalar outras dependências

```bash
npm i -D jsdom vitest
```

## Criando um teste unitário

1. Crie um arquivo `src/components/__tests__/HelloWorld.spec.js` com o seguinte conteúdo:

```js
import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

test('HelloWorld.vue', () => {
    // render the component
    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Olá, mundo!',
        },
        
    });

    expect(wrapper.text()).toContain('HelloWorld');
    expect(wrapper.find('button').text()).toContain('count is 0');
    }
);
```

2. Adicione o script `test` no arquivo `package.json`:

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest" ## Adicione esta linha
  },
```

3. Execute o teste:

```bash
npm run test
```

## Configurando os Estilos

1 Abra o arquivo `src/style.css` e adicione o seguinte conteúdo:

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: #242424;
  background-color: #fff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #747bff;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

[data-theme='dark'] {
  color: #fff;
  background-color: #1a1a1a;

  a {
    color: #646cff;
  }

  button {
    background-color: #fff;
    color: #1a1a1a;
  }

  button:hover {
    border-color: #fff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .card {
    background-color: #242424;
  }
  
}
```

2. Abra o arquivo `src/App.vue` e adicione o seguinte conteúdo:

```html
<script>
import HelloWorld from './components/HelloWorld.vue'
import {useDark, useToggle } from '@vueuse/core'

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const isDark = useDark({
      className: 'dark',
      element: document.documentElement,
      attribute: 'data-theme',
    })
    const toggleDark = useToggle(isDark)
    return {
      isDark,
      toggleDark,
    }
  }
}

</script>

<template>
  <div class="app" >
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button @click="toggleDark()">Toogle Dark/Light</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
```

## Configurar o Vite

1. Abra o arquivo `vite.config.js` e adicione o seguinte conteúdo:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    testMatch: ["**/__tests__/**/*.spec.js"],
    environment: "jsdom",
  },
  base: "/ci-cd-example/", // importante para que funcione en github pages (nome do repositorio)
})
```

## Configurando o GitHub Actions

1. Crie um arquivo `.github/workflows/ci.yml` com o seguinte conteúdo:

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm install
      
      - name: Test
        run: npm run test

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: './dist'
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: ./dist
```

## Configurando a Chave pública/privada

1. Crie um par de chaves pública/privada (sem senha):

```bash
ssh-keygen -t rsa -b 4096 -C "fabricio.bizotto@ifc.edu.br" -f ./chave -N ""
```

2. Copie a chave pública para o clipboard:

```bash
cat chave.pub | clip.exe
```

3. Cole a chave pública no campo `Deploy keys` do repositório no GitHub. Marque a opção `Allow write access`.
4. Copie a chave privada para o clipboard:

```bash
cat chave | clip.exe
```

5. Cole a chave privada no campo `ACTIONS_DEPLOY_KEY` do repositório no GitHub (Settings > Secrets and Variables > Actions > New  repository secret).
6. Apague os arquivos `chave` e `chave.pub` do seu computador.
7. Faça um push na branch `main` para testar o GitHub Actions.
8. Acesse a aba `Environments` do repositório no GitHub e verifique se o deploy foi realizado com sucesso.

## Configurando o GitHub Pages

