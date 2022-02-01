<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div>
    <QuantityInput @onchange="updateQuantity" />
    <button @click="addToCart">Add To Cart</button>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import QuantityInput from "../components/QuantityInput.vue";
export default {
  name: "AddToCart",
  components: QuantityInput,
  props: {
    cartItem: Object,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    addToCart() {
      if (this.quantity > 0) {
        this.$store.dispatch("addOrIncrease", {
          item: this.cartItem,
          quantity: this.quantity,
        });
        if (this.isLoggedIn) {
          this.$store.dispatch("updateDatabaseCart");
        }
      }
    },
    updateQuantity(quantity) {
      this.quantity = quantity;
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style>
/* responsive */
@media (min-width: 2000px) {
  button {
    width: 200px;
    height: 80px;
    font-size: 20px;
    align-items: center;
  }
}
</style>
