<script setup>
//Store

import { useCounterStore } from "@/stores/counter.js"
const storeCounter = useCounterStore()

</script>

<template>
  <h1>{{ storeCounter.count }}</h1>
  <div class="btn-group">
    <button class="btn btn-danger" :disabled="storeCounter.count<=0" @click="storeCounter.decrement">-</button>
    <button class="btn btn-primary" @click="storeCounter.increment">+</button>
  </div>
  <div class="card mt-4" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ storeCounter.parimpar }}</h5>
      <p class="card-text">Nos dice si el valor superior es par o impar</p>
    </div>
</div>
</template>