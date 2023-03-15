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
        }, 
        {
            text: "portare fuori il cane",
            done: true,
        },
        {
            text: "vedermi con tizio",
            done: false,
        }
      ],
    }
  },
  methods: {
     removeText(index) {
        this.toDo.splice(index, 1)
     }
  }

}).mount('#app')