<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="cart-wrapper">
    <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
      <div>
        <img :src="item.image" alt="" />
      </div>
      <h3>{{ item.title }}</h3>
      <h4>Subtotal: {{ item.price }} €</h4>
      <button @click="removeItem(item)">
        <IconBase icon-name="remove-item" strokeColor="#ffc04a">
          <IconTrash/>
        </IconBase>
      </button>
    </div>
    <div v-if="$store.state.cart.length != 0">
      <h2>MY BASKET ({{ $store.state.cart.length }})</h2>
      <div class="total">Total: {{ $store.getters.getTotal }} €</div>
      <button @click="emptyCart" class="empty-cart">
        Empty Cart
      </button>
    </div>
    <div v-else>
      <h1>Your Cart is Empty</h1>
      <button>
        <nuxt-link to="index.vue">Continue Shopping</nuxt-link>
      </button>
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from '~/components/IconBase.vue'
import IconTrash from '~/components/icons/IconTrash.vue'
export default {
  name: "Cart",
  components: {
    IconBase,
    IconTrash
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    removeItem(item) {
      this.$store.commit('removeItem', item);
      if(this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
    emptyCart() {
      this.$store.commit('emptyCart');
      if(this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    }
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.cart-wrapper {
  display: flex;
  margin: 35px;
}
img {
  height: 200px;
  width: 200px;
}

.product-box {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
}

button {
  padding: 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  background-color: gray;
}

button:hover {
  background-color: darkgray;
}

.total {
  font-size: 25px;
  padding: 20px;
}
</style>
