<template>
  <div class="microcart-wrapper">
    <div class="cart-popover-title">
      <nuxt-link to="/checkout"> 
        <svg version="1.1" 
          id="Layer_1" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          x="0px" y="0px"
	        width="30px" height="30px" 
          viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
          <path id="XMLID_1732_" d="M91.8,27.3L81.1,61c-0.8,2.4-2.9,4-5.4,4H34.4c-2.4,0-4.7-1.5-5.5-3.7L13.1,19H4c-2.2,0-4-1.8-4-4
	        s1.8-4,4-4h11.9c1.7,0,3.2,1.1,3.8,2.7L36,57h38l8.5-27H35.4c-2.2,0-4-1.8-4-4s1.8-4,4-4H88c1.3,0,2.5,0.7,3.2,1.7
	        C92,24.7,92.2,26.1,91.8,27.3z M36.4,70.3c-1.7,0-3.4,0.7-4.6,1.9c-1.2,1.2-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6
	        c1.2,1.2,2.9,1.9,4.6,1.9s3.4-0.7,4.6-1.9c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6C39.8,71,38.1,70.3,36.4,70.3z M72.3,70.3
	        c-1.7,0-3.4,0.7-4.6,1.9s-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6c1.2,1.2,2.9,1.9,4.6,1.9c1.7,0,3.4-0.7,4.6-1.9
	        c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6S74,70.3,72.3,70.3z"/>
        </svg>
        ({{$store.state.cart.length}})
      </nuxt-link>
    </div>
    <div class="cart-popover-content">
      <h2>MY BASKET ({{$store.state.cart.length}})</h2> 
      <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
            <img class="product-img" :src='item.image' alt="">
            <h3>{{item.title}}</h3>
            <h4> {{item.price}} €</h4>
            <button @click="$store.commit('removeItem', item)">
              <img class="trash" src="../assets/trash.svg" alt="">
            </button>
        </div>
        <div v-if="$store.state.cart.length != 0"> 
            <div class="total">
                Total: {{$store.getters.getTotal}} €
            </div>
            <button>
              <nuxt-link to="/checkout.vue">Buy Now</nuxt-link>
            </button>
        </div>
        <div v-else>
            <img src="../assets/cart.svg" alt="">
            <h4>Your Cart is Empty</h4>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"MicroCart"
}
</script>
<style scoped>
.microcart-wrapper {
  background-color: transparent;
  max-width:300px;
  margin: 0 auto
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
  color:white;
}

.product-img{
  height:40px;
  width:40px;
}

h3, h4{
  font-size: 15px;
}

.trash{
  width: 20px;
  height:20px;
}

button{
  background-color: transparent;
}
</style>