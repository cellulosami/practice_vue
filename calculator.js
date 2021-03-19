var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number1: "",
    number2: "",
    number3: "",
    sum: "",
    resultText: ""
  },
  methods: {
    calculateSum: function() {
      if (isNaN(parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3))) {
        this.sum = "";
        this.resultText = "<<Invalid input>>";
      } else {
        this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
        this.resultText = "The sum is:";
      }
    }
  }
});

//on-click button
//add 3 numbers together
//display sum