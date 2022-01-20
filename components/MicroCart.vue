<template>
  <div class="microcart-wrapper">
    <div class="cart-popover-title">
      <nuxt-link to="/checkout"> 
        <IconBase icon-name="cart" strokeColor="#ffc04a"><IconCart/></IconBase>
        ({{$store.state.cart.length}})
      </nuxt-link>
    </div>
    <div class="cart-popover-content">
      <h2>MY BASKET ({{$store.state.cart.length}})</h2> 
      <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
          <div class="img-wrap">
              <img class="product-img" :src='item.image' alt="">
          </div>
          <div>
              <h3>{{item.title}}</h3>
              <h4> {{item.price}} €</h4>
          </div>
          <button class="trash-button" @click="$store.commit('removeItem', item)">
            <img class="trash" src="../assets/trash.svg" alt="">
          </button>
        </div>
        <div v-if="$store.state.cart.length != 0"> 
            <div class="total">
                Total: {{$store.getters.getTotal}} €
            </div>
            <button class="checkout-button">
              <nuxt-link to="/checkout.vue">Buy Now</nuxt-link>
            </button>
        </div>
        <div v-else>
            <IconBase icon-name="cart" height="90" width="90" strokeColor="#ffc04a"><IconCart/></IconBase>
            <h4>Your Cart is Empty</h4>
        </div>
    </div>
  </div>
</template>

<script>
import IconBase from '~/components/IconBase'
import IconCart from '~/components/icons/IconCart'
export default {
  name:"MicroCart",
  components: {
    IconBase,
    IconCart
  }
}
</script>

<style scoped>

div{
  display: flex;
  flex-direction: column;
}
.microcart-wrapper {
  background-color: transparent;
  max-width:300px;
  margin: 0 auto
}

.product-box{
  display:flex;
}
.microcart-wrapper:hover .cart-popover-content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -20px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
.cart-popover-content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background: rgb(0,111,126);
  background: linear-gradient(354deg, rgb(44, 48, 53) 0%, rgba(7,7,98,1) 100%);
  border: 2px dashed orange;
  right:100px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: auto;
}
path {
    fill: #ffc04a;
}
a{
  text-decoration: none;
  color:#ffc04a;
}

.product-img{
  height:40px;
  width:40px;
}

h3, h4{
  font-size: 15px;
}
.trash{
  display:flex;
  max-width: 20px;
  max-height:20px;
}

.checkout-button{
  display: flex;
  background-color: #ffc04a ;
}

.trash-button{
  display: flex;
  background-color: #ffc04a;
}

.img-wrap{
  display:flex;
}
</style>