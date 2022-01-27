<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="cart-wrapper">
    <div class="products">
      <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
        <div>
          <img :src="item.image" alt="" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>Quantity: {{item.quantity}}</p>
        <h4>Subtotal: {{ item.price }} €</h4>
        <button @click="removeItem(item)">
          <IconBase icon-name="remove-item" strokeColor="#000000">
            <IconTrash/>
          </IconBase>
        </button>
      </div>
    </div>
    <div v-if="$store.state.cart.length != 0" class="basket">
      <h2>MY BASKET ({{ $store.getters.getCartTotalProducts}})</h2>
      <div class="total">Total: {{ $store.getters.getTotal }} €</div>
      <button class="confirm">Confirm Purchase</button>
      <div>
        <button @click="emptyCart" class="empty-action">
          Empty Cart
        </button>
      </div>
    </div>
    <div v-else class="cart-empty">
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
    IconTrash,
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
  align-items: flex-start;
  justify-content: center;
  padding-left:50px;
  padding-right:50px;
}
img {
  height: 200px;
  width: 200px;
}
.products{
  display:flex;
  flex-wrap:wrap;
  width:70%;
}


.basket{
  display:flex;
  margin-top:50px;
  flex-direction: column;
  align-items: center;
  width:40%;
  background-color: whitesmoke;
  border-radius: 10px;
}

.product-box {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
}

.total {
  font-size: 25px;
  padding: 20px;
}
/*BUTTONS*/

button {
  padding: 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  background-color: #ffc04a;
}

.confirm:hover{
  background-color: green;
}

button:hover {
  background-color: lightgrey;
}


.cart-empty{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:200px;
  width:100%;
}

.empty-action{
  background-color: lightgray;
}

.empty-action:hover{
  background-color: red;
}

a{
  text-decoration: none;
  color:white
}
</style>
