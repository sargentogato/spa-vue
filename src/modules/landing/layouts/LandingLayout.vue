<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <div class="flex gap-4">
          <router-link :to="{ name: 'home' }"> Home </router-link>
          <router-link :to="{ name: 'featurePage' }"> Features </router-link>
          <router-link :to="{ name: 'pricingPage' }"> Pricing </router-link>
          <router-link :to="{ name: 'contactPage' }"> Contact </router-link>
        </div>
        <div class="flex gap-4">
          <router-link :to="{ name: 'pokemon', params: { id: pokemonId ?? 1 } }"> Pokémon </router-link>
          <router-link :to="{ name: 'login' }"> Login </router-link>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      
      <router-view v-slot="{ Component }">
        <KeepAlive :include="['HomePage', 'featurePage', 'pokemonPage']">
          <component :is="Component" @id="eventHandler"/>
        </KeepAlive>
      </router-view>


      <!-- <RouterView /> -->
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        {{ new Date().getFullYear() }} © 20xx Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const pokemonId = ref()

const eventHandler = (newValue: number) => {

  console.log("ROUTER:",newValue);
  
  pokemonId.value = newValue

  console.log("POKEMON ID", pokemonId.value);
  
}


</script>
