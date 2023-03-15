const { createApp } = Vue

createApp({
  data() {
    return {
      toDo: [
        {
            text: "spesa",
            done: false,
        }, 
        {
            text: "palestra",
            done: false,
        },
        {
            text: "aperitivo",
            done: true,
        }
      ]
    }
  }
}).mount('#app')