
// var todos = [
//     {
//         text: "Learn HTML",
//         done: true
//     },
//     {
//         text: "Learn CSS",
//         done: false
//     }
// ]

const todosApp = {
    data() {
        return {
            // todos: window.todos,
            todos: [],
            newTodo: {
                done: false
            }
        }
    },

    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo)
                this.newTodo = {
                    done: false
                }
            }
            else {
                alert ("Todo field cannot be empty")
            }
        }
    }
};

Vue.createApp(todosApp).mount('#app')