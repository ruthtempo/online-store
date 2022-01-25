<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <button @click="addToCart">Add To Cart</button>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
export default {
  name: "AddToCart",
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
      this.$store.commit("addToCart", this.cartItem);
      if (this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style>
button {
  width: 150px;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffc04a;
  font-size: 15px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkgray;
}
</style>
