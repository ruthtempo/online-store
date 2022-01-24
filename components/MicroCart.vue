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
          <p>Qty: {{item.quantity}}</p>
          <h4>{{ item.price }} €</h4>
        </div>
        <button class="trash-button" @click="$store.commit('removeItem', item)">
          <!-- <img class="trash" src="../assets/trash.svg" alt="" /> -->
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="20px" height="20px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
          <path id="XMLID_1348_" d="M78.4,30.4l-3.1,57.8c-0.1,2.1-1.9,3.8-4,3.8H20.7c-2.1,0-3.9-1.7-4-3.8l-3.1-57.8
            c-0.1-2.2,1.6-4.1,3.8-4.2c2.2-0.1,4.1,1.6,4.2,3.8l2.9,54h43.1l2.9-54c0.1-2.2,2-3.9,4.2-3.8C76.8,26.3,78.5,28.2,78.4,30.4z
            M89,17c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4s1.8-4,4-4h22V4c0-1.9,1.3-3,3.2-3h27.6C61.7,1,63,2.1,63,4v9h22C87.2,13,89,14.8,89,17z
            M36,13h20V8H36V13z M37.7,78C37.7,78,37.7,78,37.7,78c2,0,3.5-1.9,3.5-3.8l-1-43.2c0-1.9-1.6-3.5-3.6-3.5c-1.9,0-3.5,1.6-3.4,3.6
            l1,43.3C34.2,76.3,35.8,78,37.7,78z M54.2,78c1.9,0,3.5-1.6,3.5-3.5l1-43.2c0-1.9-1.5-3.6-3.4-3.6c-2,0-3.5,1.5-3.6,3.4l-1,43.2
            C50.6,76.3,52.2,78,54.2,78C54.1,78,54.1,78,54.2,78z"/>
          </svg>
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
  align-self: flex-end;
  width:60px;
  background-color: transparent;
}

path{
  fill: #ffc04a;
}
.img-wrap {
  display: flex;
}
</style>
