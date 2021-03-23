/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      products: [],
      currentProduct: {},
      params: {},
      update: {name: "", description: "", price: "", image_url: ""},
      productId: "",
      deleteResponse: ""
    };
  },
  methods: {
    loadData: function() {
      axios
        .get("http://localhost:3000/api/products")
        .then(response => {
          this.products = response.data;
        });
    },
    showAction: function(number) {
      axios
        .get(`http://localhost:3000/api/products/${number}`)
        .then(response => {
          this.currentProduct = response.data;
        });
    },
    createAction: function() {
      axios
        .post("http://localhost:3000/api/products", {
          name: this.params.name,
          description: this.params.description,
          price: this.params.price,
          image_url: this.params.image_url
        })
        .then(response => {
          this.currentProduct = response.data;
          this.loadData();
        });
    },
    updateAction: function(number) {
      let trueUpdate = {};
      if (this.update.name.length > 0) {
        trueUpdate.name = this.update.name;
      }      
      if (this.update.description.length > 0) {
        trueUpdate.description = this.update.description;
      }      
      if (this.update.price.length > 0) {
        trueUpdate.price = this.update.price;
      }      
      if (this.update.image_url.length > 0) {
        trueUpdate.image_url = this.update.image_url;
      }      
      axios
        .patch(`http://localhost:3000/api/products/${number}`, trueUpdate)
        .then(response => {
          this.currentProduct = response.data;
          this.loadData();
        });
    },
    deleteAction: function(number) {
      axios
        .delete(`http://localhost:3000/api/products/${number}`)
        .then(response => {
          this.deleteResponse = response.data;
          this.loadData();
        });
    }
  },
  created: function() {
    this.loadData();
  }
});