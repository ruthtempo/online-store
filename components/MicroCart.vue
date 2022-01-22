<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <Popover>
    <template v-slot:face>
      <nuxt-link to="/checkout">
        <IconBase icon-name="cart" strokeColor="#ffc04a">
          <IconCart />
        </IconBase>
        ({{ $store.state.cart.length }})
      </nuxt-link>
    </template>

    <template v-slot:content>
      <h2>MY BASKET ({{ $store.state.cart.length }})</h2>
      <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
        <div class="img-wrap">
          <img class="product-img" :src="item.image" alt="" />
        </div>
        <div>
          <h3>{{ item.title }}</h3>
          <h4>{{ item.price }} €</h4>
        </div>
        <button class="trash-button" @click="$store.commit('removeItem', item)">
          <img class="trash" src="../assets/trash.svg" alt="" />
        </button>
      </div>
      <div v-if="$store.state.cart.length != 0">
        <div class="total">Total: {{ $store.getters.getTotal }} €</div>
        <button class="checkout-button">
          <nuxt-link to="/checkout">Buy Now</nuxt-link>
        </button>
      </div>
      <div v-else>
        <IconBase icon-name="cart" height="90" width="90" strokeColor="#ffc04a">
          <IconCart/>
        </IconBase>
        <h4>Your Cart is Empty</h4>
      </div>
    </template>
  </Popover>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import IconBase from "~/components/IconBase";
import IconCart from "~/components/icons/IconCart";
import Popover from "~/components/Popover";
export default {
  name: "MicroCart",
  components: {
    IconBase,
    IconCart,
    Popover,
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

.product-box {
  display: flex;
}

a {
  text-decoration: none;
  color: #ffc04a;
}

.product-img {
  height: 40px;
  width: 40px;
}

h3,
h4 {
  font-size: 15px;
}
.trash {
  display: flex;
  max-width: 20px;
  max-height: 20px;
}

.checkout-button {
  display: flex;
  background-color: #ffc04a;
}

.checkout-button a {
    color: black;
}

.trash-button {
  display: flex;
  background-color: #ffc04a;
}

.img-wrap {
  display: flex;
}
</style>
