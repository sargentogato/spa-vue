<template>
  <section class="flex flex-col">
    <h1
      class="text-3xl font-bold"
    >Pokémon <small class="text-blue-500">#{{ id }}</small></h1>
    
    <img :src="urlImage" alt="Pokemons"
      class="w-[200px] h-[200px] mt-5"
      width="200"
      height="200"
    >
    
    <router-link id="test" :to="{name: 'pokemon', params: { id: nextId }}" class="bg-amber-400 text-white rounded mt-5 text-center"> Next </router-link>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineOptions } from 'vue';

defineOptions({
  name:'pokemonPage'
})

interface IProps {
  id: number
}

const emit = defineEmits<{id:[id: number]}>()

const props = defineProps<IProps>()
const urlImage = ref(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`)

watch(() => props.id, ( newId ) => {
  urlImage.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${newId}.svg`;

  sendInfo()
})

const nextId = computed(() => {
  return String(Number(props.id) + 1);
})

const sendInfo = () => {
  emit('id', props.id)
}
</script>

<style scoped>

 </style>