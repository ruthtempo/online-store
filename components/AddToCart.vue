<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div>
    <QuantityInput :quantity="quantity" @onchange="updateQuantity"/>
    <button @click="addToCart">Add To Cart</button>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import QuantityInput from "../components/QuantityInput.vue"
export default {
  name: "AddToCart",
  components: QuantityInput ,
  props: {
    cartItem: Object,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addOrIncrease", {item: this.cartItem, quantity: this.quantity});
      if (this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
    updateQuantity(quantity){
      this.quantity = quantity
    }
  },
  data(){
    return{
      quantity:1
    }
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style>
button {
  display:flex;
  width: 150px;
  justify-content: center;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffc04a;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkgray;
}

/* responsive */
@media(min-width: 2000px){
  button{
    width:200px;
    height:80px;
    font-size: 20px;
    align-items: center;
  }
}
</style>
