<template>
  <section>
    <h1>Pokémon <small class="text-blue-500">100</small></h1>
    
    <img :src="urlImage" alt="">
  </section>
</template>

<script setup lang="ts">
const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'

</script>

<style scoped>

</style>