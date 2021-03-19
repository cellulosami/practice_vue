var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Please. I do not want to be a potato. I have a family.'
  },
  methods: {
    messageToPotato: function() {
      this.message = "*potato*";
    }
  }
});

// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     message: 'Hello Vue!'
//   }
// });