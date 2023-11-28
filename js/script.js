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
            currentIndex: null,
            newTask: null

        }

    },
    methods: {
        checkIfDone(index) {
            this.currentIndex = index;
            if (this.tasks[this.currentIndex].done === true) {
                this.tasks[this.currentIndex].done = false
                return false
            }
            else {
                this.tasks[this.currentIndex].done = true;
                return true
            }
        },
        deleteTask() {
            this.tasks.splice(this.currentIndex, 1)
        },
        addTask() {
            let newObject = {};
            newObject.text = this.newTask;
            newObject.done = false;

            this.tasks.push(newObject)

        }
    },
    mounted() {
    }
}).mount('#app')



