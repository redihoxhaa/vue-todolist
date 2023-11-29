'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Andare al mare",
                    done: false
                },
                {
                    text: "Aiutare papà",
                    done: false
                },
                {
                    text: "Studiare vue.js",
                    done: false
                }
            ],
            newTask: null

        }

    },
    methods: {
        checkIfDone(index) {

            // if (this.tasks[index].done === true) {
            //     this.tasks[index].done = false
            //     return false
            // }
            // else {
            //     this.tasks[index].done = true;
            //     return true
            // }

            this.tasks[index].done = !this.tasks[index].done
        },
        deleteTask(index) {
            this.tasks.splice(index, 1)
        },
        addTask() {
            let newObject = {};
            newObject.text = this.newTask;
            newObject.done = false;
            if (this.newTask.trim() !== '') {
                this.tasks.push(newObject);
                this.newTask = null;
            }

        }
    },
    mounted() {
    }
}).mount('#app')



