import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  
  // Esta es una variable normal o state
  const count = ref(0)
  // Esta es una función computada o getter
  const parimpar = computed( ()=> {
    return count.value % 2 === 0 ? 'par' : 'impar';
  })
  // Esta es una función o Action
  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, parimpar, increment, decrement }
})
