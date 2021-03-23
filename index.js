/* global Vue, axios */

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Please. I do not want to be a potato. I have a family.',
    secret: "A bushel of potatoes",
    secretAttribute: "false",
    potatoes: [
      "large",
      "Small",
      "smelly",
      "Happy"
    ],
    newPotato: "",
    todos: []
  },
  methods: {
    messageToPotato: function() {
      this.message = "*potato*";
    },
    toggleSecretAttribute: function() {
      this.secretAttribute = !this.secretAttribute;
    },
    addNewPotato: function() {
      this.potatoes.push(this.newPotato);
    },
    loadTodos: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.todos = response.data;
        });
    },
  },
  mounted: function () {
    this.loadTodos();
  },
});
// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     message: 'Hello Vue!'
//   }
// });