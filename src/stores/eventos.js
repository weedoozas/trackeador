import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useEventStore = defineStore('events', () => {
  
  // Esta es una variable normal o state
  const url = ref("https://rickandmortyapi.com/api/character")
  const events = ref([])
  // Esta es una función computada o getter

  // const parimpar = computed( ()=> {
  //   return count.value % 2 === 0 ? 'par' : 'impar';
  // })

  // Esta es una función o Action
  const getEvents = async () => {
    try {
      const res = await axios.get(url.value);
      events.value = res.data.results
      console.log(events.value);

    } catch (error) {
      console.error(error);
    }
  }

  return {getEvents, events}
})
