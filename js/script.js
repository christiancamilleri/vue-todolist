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
      newToDo: {
        text: "",
        done: false,
      }
    }
  },
  methods: {
     removeText(index) {
        this.toDo.splice(index, 1)
     },
     addNewToDo() {
        // memorizzo in una variabile
        createToDo = this.newToDo
        this.toDo.push(createToDo);

        this.newToDo = {
            text: "",
            done: false,
          }
        
     },
     changeDone(index) {
        if(this.toDo[index].done) {
            this.toDo[index].done = false;
            console.log("false")
        } else {
            this.toDo[index].done = true;
            console.log("vero")
        }
        
     }
  }

}).mount('#app')