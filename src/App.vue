<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/EventList.vue'
</script>

<template>
  <header>

    
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">

      <div class="justify-content-center text-center">
        <nav>
          <h1>Eventum</h1>
          <RouterLink to="/">Home</RouterLink> | 
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <RouterView />
      </div>
    </div>
    </header>
    
</template>

