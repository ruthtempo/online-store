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
        <span v-if="$store.state.cart.length > 0" class="cart-length">{{ $store.state.cart.length }}</span>
      </nuxt-link>
    </template>

    <template v-slot:content>
      <!-- full cart div -->
      <div v-if="$store.state.cart.length != 0" class="full-cart">
        <h2 class="cart-header">My Basket<span class="number-of-items">({{ $store.state.cart.length }})</span></h2>
        <ul class="cart-items-list">
          <li v-for="item in $store.state.cart" :key="item.id" class="item-box">
            <div class="img-wrap">
              <img class="product-img" :src="item.image" alt="" />
            </div>
            <div class="text-container">
              <h3 class="item-description">{{ item.title }}</h3>
              <p class="item-qty-price-line">
                <span class="item-quantity">Qty: <span class="item-quantity-number">{{item.quantity}}</span></span>
                <span class="item-price">{{ item.price }} €</span>
              </p>
            </div>
            <button class="trash-button" @click="removeItem(item)">
              <IconBase icon-name="remove-item" width="20" height="20" strokeColor="#ffc04a">
                <IconTrash/>
              </IconBase>
            </button>
          </li>
        </ul>
        <div>
          <p class="total">Total: <span class="total-number">{{ $store.getters.getTotal }} €</span></p>
          <button class="checkout-button">
            <nuxt-link to="/checkout">Buy Now</nuxt-link>
          </button>
        </div>
      </div>
      <!-- empty cart div -->
      <div v-else class="empty-cart">
        <IconBase icon-name="cart" height="90" width="90" strokeColor="#ffc04a">
          <IconCart/>
        </IconBase>
        <p class="empty-cart-text">Your Cart is Empty</p>
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
import IconTrash from '~/components/icons/IconTrash';
import Popover from "~/components/Popover";
export default {
  name: "MicroCart",
  components: {
    IconBase,
    IconCart,
    IconTrash,
    Popover,
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
  }
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
.cart-length {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  font-size: .9rem;
  text-align: center;
  line-height: 1.6;
  background-color: #ff0000ee;
  color: #070762;
  border-radius: 50%;
  transform: translate(-20px, -20px);
}
.cart-header {
  margin: 0;
  padding-bottom: .3rem;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid #ffc04a;
}
.number-of-items {
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
}
.cart-items-list {
  font-family: 'Montserrat';
  list-style: none;
  margin: 1rem auto 0;
  padding: 0;
}
.item-box {
  display: flex;
  margin-bottom: 1.1rem;
}
.img-wrap {
  display: flex;
  padding-top: .2rem;
  width: 3.6rem;
}
.product-img {
  max-width: 45px;
  max-height: 45px;
  margin: 0 auto;
}
.text-container {
    padding: 0 0 0 .5rem;
    width: 20ch;
}
.item-description {
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 500;
}
.item-qty-price-line {
  margin-top: .5rem;
  margin-bottom: 0;
  font-size: 1rem;
}
.item-quantity {
  margin-right: 3rem;
}
.item-quantity-number,
.item-price {
  font-weight: bold;
}
.trash-button {
  width:60px;
  margin-top: 0;
  background-color: transparent;
}
.empty-cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.empty-cart-text {
  font-weight: 500;
  font-size: 1.1rem;
}
.total {
  margin: .2rem 0 0;
  padding: .4rem 0 .4rem;
  border-top: 1px dashed #ffc04a;
  font-size: 1.2rem;
}
.total-number {
  font-family: 'Montserrat';
  font-weight: bold;
}
.checkout-button {
  display: flex;
  margin: 1.5rem auto 1rem;
  background-color: #ffc04a;
}
.checkout-button a {
    color: black;
    text-decoration: none;
}

</style>
