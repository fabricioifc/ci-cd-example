<!-- Component to show development ou production environment status -->
<template>
  <div>
    <div class="card">
      <h1>Ambiente: {{ ambiente }}</h1>
      <p>Este componente mostra o ambiente de desenvolvimento ou produção.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ambiente',
  data() {
    return {
      ambiente: process.env.NODE_ENV
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b883;
}
.card {
  border: 1px solid #42b883;
  border-radius: 4px;
  padding: 1em 10em;
  margin: 1em;
}
</style>