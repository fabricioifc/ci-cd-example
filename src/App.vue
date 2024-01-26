<script>
import Ambiente from './components/Ambiente.vue'
import HelloWorld from './components/HelloWorld.vue'
import {useDark, useToggle } from '@vueuse/core'

export default {
  components: {
    HelloWorld,
    Ambiente
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
    <HelloWorld msg="Vite + Vue" />
    
    <footer>
      <Ambiente />
      <button @click="toggleDark()">Toogle Dark/Light</button>
    </footer>
  </div>
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
