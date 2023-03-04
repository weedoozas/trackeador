<script setup>
//Store
import { useEventStore } from "@/stores/eventos.js"
const storeEvent = useEventStore()

// Traer eventos

storeEvent.getEvents()
</script>

<template>
  <h1>Events</h1>
  <div class="row">
      <div class="col-md-4 mt-4" v-for="event in storeEvent.events" :key="event.id">
        <div class="card" :style="{ backgroundImage: `url(${event.image})` , backgroundPosition: 'center', backgroundSize: 'cover' }">
          <div class="card-overlay"></div>
          <div class="card-body" style="position: relative; z-index: 1;">
            <RouterLink :to="`/${event.name.toLowerCase().replace(/\s+/g, '-')}`" class="card-title">{{ event.name }}</RouterLink>
            <p class="card-text">{{ event.status }}</p>
          </div>
        </div>
      </div>
    </div>  
</template>

<style>

.card-overlay {
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.8;
}

.card {
    border: none !important;
}
</style>